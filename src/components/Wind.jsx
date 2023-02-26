import React from 'react'

import { RiWindyLine } from 'react-icons/ri'

import './moreDetails.scss'
import {Doughnut} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const data = {
 labels: ['0', '5'], 
  datasets: [
    {
      label: [5, 10, 15, 20, 30, 40],
      data: [8, 8, 8, 8, 8],
      backgroundColor: ['#5C9CE5', '#5C9CE5', '#DCDCDC', '#DCDCDC', '#DCDCDC'],
      borderColor: ['#5C9CE5', '#5C9CE5', 'transparent', 'transparent', 'transparent'],
      borderRadius: 15,
      borderWidth: 2,
      spacing: 20,
    }
  ]
}

const options = {
  rotation: -90,
  circumference: 180,
  cutout: 52,
  plugins: {
    legend: {
      display: false,
    },
  },
}

function Wind() {
  return (
    <div  className='moreDetails wind'>
            <div className="head"><span>Wind</span> <div className="icons"> <RiWindyLine/></div>
            </div>
            <div className="data">
              <div className="first">
              <span>10</span><span>20</span>
                </div>
              <div className="second"><span>5</span><span>30</span></div>
              <div className="third">
              <span>0</span><span>40</span>
                
                </div>
            </div>
            <div className="middle">
                <Doughnut
                data={data}
                options={options}
                />
                <div className="pointer">
                  <div className="cursor"></div>
                  <div className="center"></div>
                </div>
                <div className="value">8 km/h</div>
            </div>

    </div>
  )
}

export default Wind