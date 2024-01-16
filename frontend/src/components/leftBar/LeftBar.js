import React, { useContext } from "react";
import "./LeftBar.scss";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TheatersIcon from "@mui/icons-material/Theaters";
import TimerIcon from "@mui/icons-material/Timer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <div className="info">
              <span>{currentUser.name}</span>
              <div className="department">Software Engineer</div>
            </div>
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
        <hr />
      </div>
    </div>
  );
}

export default LeftBar;
