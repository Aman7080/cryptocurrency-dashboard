import CartNavbar from "./ChartNavbar";
import { Bar, Line, } from "react-chartjs-2";
import { ethereumPrice, stakedEtherPrice } from "../Data/cryptoPrice";
import React, { useCallback } from "react";
import { useState } from "react";

export default function ChartCointainer() {
  const [chartType, setChartype] = useState ("line")

  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  const chartTypeHandler = useCallback((chartName) => {
    setChartype(chartName)
  },[])
  // console.log("color is", randColor())
  // data for chart
  const userData = {
    labels: ethereumPrice[0].prices.map((time) =>
      new Date(time[0]).toDateString()
    ),
    datasets: [
      {
        label: "Ethereum",
        data: ethereumPrice[0].prices.map((price) => price[1]),
        borderColor: randColor(),
        // pointRadius: "0",
      },
      {
        label: "Staked Ether",
        data: stakedEtherPrice[0].prices.map((price) => price[1]),
        borderColor: randColor(),
        // pointRadius: "0",
      },
    ],
  };
  // option for removing x axis grid line
  const options = {
    // indexAxis: 'y', ====> for Horizontal bar 
    plugins: {
      legend: {
        align: "end",
      },
    },
    
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <CartNavbar chartType={chartType} chartTypeHandler={chartTypeHandler}/>
      <div className=" bg-white shadow-lg hover:duration-300 hover:shadow-2xl rounded-md px-10 pb-10">
        {chartType === "barVertical" && <Bar data={userData} options={options} />}
        {chartType === "line" && <Line data={userData} options={options} />}
      </div>
    </>
  );
}
