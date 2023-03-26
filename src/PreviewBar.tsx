import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import DefaultIcon from '../src/assets/checkmark.png'

interface PreviewProps {
    start: string;
    end: string;
    barHex: string,
    borderHex: string,
    background: string,
    bkgPosition: string,
    icon: string,
}

const PreviewBar = ({ start, end, barHex, borderHex, background, bkgPosition, icon }: PreviewProps) => {
    const startProp = new Date(`${start} 00:00:00`).getTime();
    const endProp = new Date(`${end} 00:00:00`).getTime();
    const today = new Date().getTime();
    const p = Math.round(((today - startProp) / (endProp - startProp)) * 100);

    const bkgColor = `${barHex}` || "white";
    const borderColor = `${borderHex}` || "white";

    return (
        <>
            <div className="outside-container" style={{ background: `url('${background}')`, borderColor: borderColor, backgroundPosition: `${bkgPosition}` }}>
                <div className='inside-container' style={{ width: `${p}%`, backgroundColor: bkgColor }}>
                    <img src={icon || DefaultIcon} alt="Icon" />
                </div>
            </div>
        </>
    )
}

export default PreviewBar;