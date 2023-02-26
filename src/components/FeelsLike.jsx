import React from 'react'
import './moreDetails.scss'
import * as Fa from 'react-icons/fa'
import { feel } from './Data'

function FeelsLike() {
  return (
    <div  className='moreDetails feelsLike'>
    <div className="head"><span>Feels like</span> <div className="icons"> <Fa.FaThermometerFull/></div></div>
    <div className="mid"><span>30°</span></div>
    <div className="bottom feel">
      <div className="label">
        <span>0°</span>
        <span>25°</span>
        <span>50°</span>
      </div> 
      <div className="container2">
        <div className="value"></div>
      </div>
    </div>
  </div>
  )
}

export default FeelsLike