import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import DefaultIcon from '../src/assets/checkmark.png'

const ProgressBar = () => {
  const [searchParams] = useSearchParams();

  const start = new Date(`${searchParams.get('start')} 00:00:00`).getTime();
  const end = new Date(`${searchParams.get('end')} 00:00:00`).getTime();
  const today = new Date().getTime();
  const p = Math.round(((today - start) / (end - start)) * 100);

  const bkgColor = searchParams.get('barColor') || `#${searchParams.get('barHex')}` || "#404040";
  const borderColor = searchParams.get('borderColor') || `#${searchParams.get('borderHex')}` || "#ffffff";

  return (
    <>
      <div className="outside-container" style={{ background: `url('${searchParams.get('background')}')`, borderColor: borderColor, backgroundPosition: `${searchParams.get('bkgPosition')}` }}>
        <div className='inside-container' style={{ width: `${p}%`, backgroundColor: bkgColor }}>
          <img src={searchParams.get('icon') || DefaultIcon} alt="Icon" />
        </div>
      </div>
    </>
  )
}

export default ProgressBar;