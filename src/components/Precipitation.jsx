import React from 'react'
import './moreDetails.scss'
import * as Fi from 'react-icons/fi'
import { precipitate } from './Data'

function Precipitation() {
  return (
    <div  className='moreDetails precipitation'>
    <div className="head"><span>Precipitation</span> <div className="icons"> <Fi.FiCloudDrizzle/></div></div>
    <div className="mid"><span>1.4 cm</span></div>
    <div className="bottom precipitate">
      { precipitate.map((item)=>(
               <label htmlFor={item.id} key={item.id}>{item.num}
               <div className="container2" id={item.id}>
                 <div className="value" style={{width: item.value, borderRadius: item.value == '100%' && '1vmin'}}></div>
               </div>
             </label>
      ))
          
      }
 
    </div>
  </div>
  )
}

export default Precipitation