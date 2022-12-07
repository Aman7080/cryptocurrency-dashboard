import React, { useState } from "react";
import BarChart from "./BarChart";
import CartNavbar from "./CartNavbar";
import LineChart from "./LineChart";
import { UserData } from "../DemoData"
// import PieChart from "./PieChart";

export default function ChartCointainer() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label:"Etherium",
      data: UserData.map((data)=>data.UserGain),
      backgroundColor:["red","blue"]
    }]
  })

  return (
    <>
      <CartNavbar />
      <div className="  bg-white rounded-md">
        <LineChart chartData={userData} />
        <BarChart chartData={userData} />
        {/* <PieChart chartData={userData}/> */}
      </div>
    </>
  );
}
