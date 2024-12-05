import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import "./index.css";
import Revenue from "./Revenue";
import PopularDishes from "./PopularDishes";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="body-wrapper">
        <Header />
        <Revenue />
        <PopularDishes />
        <Chart />
      </div>
    </div>
  );
}
