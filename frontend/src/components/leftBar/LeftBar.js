import React from "react";
import "./LeftBar.scss";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TheatersIcon from "@mui/icons-material/Theaters";
import TimerIcon from "@mui/icons-material/Timer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";

function LeftBar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/19776870/pexels-photo-19776870/free-photo-of-woman-wearing-hat-and-blazer-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <span>Username</span>
          </div>

          <div className="item">
            <Diversity1Icon />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <TheatersIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
        </div>
        <div className="item">
          <CalendarMonthIcon />
          <span>Calendar</span>
        </div>
        <div className="item">
          <MessageIcon />
          <span>Messages</span>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default LeftBar;
