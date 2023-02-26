import React from "react";
import "./Body.scss";
import * as Md from "react-icons/md";
import * as Ri from "react-icons/ri";
import * as Bs from "react-icons/bs";
import LineChart from "../components/LineChart";
import { data } from "../components/Data";
import Humidity from "../components/Humidity";
import Precipitation from "../components/Precipitation";
import UVindex from "../components/UVindex";
import FeelsLike from "../components/FeelsLike";
import Chance from "../components/Chance";
import Wind from "../components/Wind";

function Body() {
  return (
    <div>
      <div className="main">
        <div className="side">
          <div className="buttons">
            <div className="add">
              <Md.MdAddBox style={{ fontSize: "5vmin", color: "white"}} />
            </div>
            <div className="shift">
              <div className="dot long"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="toggle">
                <label htmlFor="temp">
                    <div className="c">°C</div>
                    <input type="checkbox" name="temp" id="temp" />
                    <div className="circle"></div>
                    <div className="F">°F</div>
                </label>
            </div>
          </div>
          <div className="sideDetails">
            <div className="sideLeft">
                <span style={{fontSize:'3vmin', fontWeight:'400'}}><Ri.RiSendPlaneLine/> New York, USA</span>
                Today 28 Sept
            </div>
            <div className="sideRight">
                <span><Bs.BsSunrise/> 07:19</span>
                <span><Bs.BsSunset/> 19:32</span>
            </div>
          </div>
          <div className="carousel">
            <div className="left"><Md.MdChevronLeft/></div>
            <div className="center">
              <div className="temp">27°</div>
              <div className="day"><Md.MdOutlineWbSunny/>Sunny</div>
            </div>
            <div className="right"><Md.MdChevronRight/></div>
          </div>
        </div>
        <div className="mainBody">
          <div className="header">
            <div className="title">
              <span
                style={{ margin: "0", fontSize: "3vmin", fontWeight: "600" }}
              >
                Welcome back Isabella!
              </span>
              Check out today's weather information
            </div>
            <div className="more">
              <Md.MdMoreHoriz />
            </div>
            <div className="profile">
              <img
                src="https://simg.nicepng.com/png/small/128-1280036_jpg-free-stock-female-vector-user-user-female.png"
                alt="profile_pic"
              />
            </div>
          </div>
          <div className="display">
            <div className="displayHeader">
              <div className="upcomingHours">Upcoming hours</div>
              <div className="rain">
                Rain precipitation{" "}
                <Md.MdKeyboardArrowDown style={{ fontSize: "3.5vmin" }} />
              </div>
              <div className="nextDays">
                Next days{" "}
                <Md.MdKeyboardArrowRight style={{ fontSize: "3.5vmin" }} />
              </div>
            </div>
            <div className="displayBody">
              <div className="displayTop">
                {data.map((item) => (
                  <div className="timing">
                    <div className="time">{item.time}</div>
                    <div className="icon">
                      {item.temp <= 27 ? (
                        <Ri.RiCloudyLine style={{ fontSize: "3.5vmin" }} />
                      ) : (
                        <Md.MdOutlineWbSunny style={{ fontSize: "3.5vmin" }} />
                      )}
                    </div>
                    <div
                      className="tempnow"
                      style={{ fontSize: "2.5vmin", fontWeight: "500" }}
                    >
                      {item.temp}°
                    </div>
                  </div>
                ))}
              </div>
              <LineChart />
            </div>
          </div>
          <div className="moreDetailsHead">More details of today's weather</div>
          <div className="moreDetail">
            <Humidity/>
            <Wind/>
            <Precipitation/>
            <UVindex/>
            <FeelsLike/>
            <Chance/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
