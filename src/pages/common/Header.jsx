import React from "react";
import arrow from "../../assets/images/arrow.png";
import notification from "../../assets/images/notification.png";
import bar from "../../assets/images/Vector-139.png";
import profie from "../../assets/images/profile.jpg";

export default function Header() {
  return (
    <header className="app-header">
      <div className="title">
        <button>
          <img src={arrow} alt="no-image" className="icon" />
        </button>
        <span>Dashboard</span>
      </div>
      <div className="profile">
        <div className="notification">
          <img src={notification} alt="no-image" />
          <label>01</label>
        </div>

        <img src={bar} alt="no-image" />

        <div className="profile-icon">
          <img src={profie} alt="no-image" />
        </div>
      </div>
    </header>
  );
}
