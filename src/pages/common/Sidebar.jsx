import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSignOut } from "@fortawesome/free-solid-svg-icons"; // Import the eye icon

export default function Sidebar() {
  return (
    <div className="sidebar">
      <p>Cafe</p>

      <ul className="">
        <li className="active">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Dashboard</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Menu</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Staff</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Inventory</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Reports</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Orders/Table</span>
        </li>
        <hr />
        <li className="">
          <label className="icon">
            <FontAwesomeIcon icon={faBars} className="image" />
          </label>
          <span>Reservetation</span>
        </li>
      </ul>

      <div className="logout">
        <label className="logout-icon">
          <FontAwesomeIcon icon={faSignOut} className="image" />
        </label>
        <span>Logout</span>
      </div>
    </div>
  );
}
