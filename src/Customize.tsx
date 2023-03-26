import { useState, useEffect } from 'react'
import './App.css'
import './Customize.css'
import PreviewBar from './PreviewBar'
import Clipboard from './assets/clipboard.svg'

const Customize = () => {
    useEffect(() => { document.title = "DynamicPB ~ Cutomize" }, [])

    const [data, setData] = useState({
        start: "",
        end: "",
        barHex: "#404040",
        borderHex: "#ffffff",
        background: "",
        bkgPosition: "",
        icon: "",
    });
    const [pressed, setPressed] = useState(false);

    const options = [
        'bottom',
        'center',
        'left',
        'left bottom',
        'left top',
        'right',
        'right bottom',
        'right top',
        'top'
    ]

    const inputs = [
        {
            label: "Start: (required)",
            name: "start",
            value: data.start,
            type: "date",
        },
        {
            label: "End: (required)",
            name: "end",
            value: data.end,
            type: "date",
        },
        {
            label: "Bar Color:",
            name: "barHex",
            value: data.barHex,
            type: "color",
        },
        {
            label: "Border Color:",
            name: "borderHex",
            value: data.borderHex,
            type: "color",
        },
        {
            label: "Icon: (Link to image, no & symbols in link)",
            name: "icon",
            value: data.icon,
            type: "text",
        },
        {
            label: "Background: (Link to image, no & symbols in link)",
            name: "background",
            value: data.background,
            type: "text",
        }
    ]

    const checkStart = data.start == "" ? false : true;
    const checkEnd = data.end == "" ? false : true;
    const checkBackground = data.background == "" ? false : true;
    const checkIcon = data.icon == "" ? false : true;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const copyToClipboard = async () => {
        navigator.clipboard.writeText(link);
        setPressed(true);
        await delay(2000);
        setPressed(false);
    }

    const link = `${window.location.href}custom?${checkStart ? `&start=${data.start}` : ''}${checkEnd ? `&end=${data.end}` : ''}&barHex=${data.barHex.replace('#', '')}&borderHex=${data.borderHex.replace('#', '')}${checkBackground ? `&background=${data.background}&bkgPosition=${data.bkgPosition}` : ''}${checkIcon ? `&icon=${data.icon}` : ''}`

    return (
        <div className='container'>
            <h1>Dynamic Progress Bar Customizer</h1>
            <div className='inputsContainer'>
                {inputs.map((input) =>
                    <div className={input.type == "color" ? "colorInput" : "mapContainer"} key={input.name}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input type={input.type} name={input.name} value={input.value} onChange={(e) => handleChange(e)} />
                    </div>
                )}
                <label htmlFor="bkgPosition">Background Position:</label>
                <select name="bkgPosition" id="bkgPosition" disabled={!checkBackground} value={data.bkgPosition} onChange={(e) => handleSelect(e)} >
                    {options.map((option) =>
                        <option key={option} value={option}>{option}</option>
                    )}
                </select>
                <div className='preview'>
                    <h2>Progress Bar Preview</h2>
                    <PreviewBar {...data} />
                    <h2>Get your embed link!</h2>
                    <input type="text" disabled value={link} />
                    <img src={Clipboard} alt="Clipboard Icon" id="clipboard" onClick={copyToClipboard} style={{ bottom: pressed ? '4.15rem' : '0.50rem' }} />
                    {pressed ? (<h4>Link copied!</h4>) : null}
                </div>
            </div>
        </div>
    )
}

export default Customize;