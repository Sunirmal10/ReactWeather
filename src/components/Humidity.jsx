import React from 'react'
import * as Md from "react-icons/md";
import './moreDetails.scss'

function Humidity() {
  return (
    <div  className='moreDetails humidity'>
      <div className="head"><span>Humidity</span> <div className="icons"> <Md.MdOutlineWaterDrop/></div></div>
      <div className="mid"><span>82%</span> bad</div>
      <div className="bottom humid">
        <label htmlFor="good">good
          <div className="container" id='good'>
            <div className="good"></div>
          </div>
        </label>
        <label htmlFor="normal">normal
          <div className="container" id='normal'>
            <div className="normal"></div>
          </div>
        </label>
        <label htmlFor="bad">bad
          <div className="container" id='bad'>
            <div className="bad"></div>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Humidity