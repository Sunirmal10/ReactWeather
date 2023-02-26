import React from 'react'
import './moreDetails.scss'
import * as Md from 'react-icons/md'
import { uv } from './Data'
function UVindex() {
  return (
    <div  className='moreDetails uvi'>
    <div className="head"><span>UV index</span> <div className="icons"> <Md.MdOutlineWbSunny/></div></div>
    <div className="mid"><span>4</span> medium</div>
    <div className="bottom uv">
      { uv.map((item)=>(
               <label htmlFor={item.id} key={item.id}>{item.num}
               <div className="container2" id={item.id}>
                 <div className="value" style={{width: item.value, borderRadius: item.value == '100%' && '1vmin'}  }></div>
               </div>
             </label>
      ))
          
      }
 
    </div>
  </div>
  )
}

export default UVindex