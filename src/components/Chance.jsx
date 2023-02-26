import React from 'react'
import './moreDetails.scss'
import * as Fi from 'react-icons/fi'

function Chance() {
  return (
    <div  className='moreDetails chances'>
    <div className="head"><span>Chance of rain</span> <div className="icons"> <Fi.FiUmbrella/></div></div>
    <div className="mid"><span>42%</span></div>
    <div className="bottom chance">
      <div className="label">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div> 
      <div className="container2">
        <div className="value"></div>
      </div>
    </div>
  </div>
  )
}

export default Chance