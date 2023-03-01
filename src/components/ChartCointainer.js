import ChartNavbar from "./ChartNavbar";
import { Bar, Line } from "react-chartjs-2";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ChartCointainer() {
  const [timeData, setTimeData] = useState([]);
  const [interval, setInterval] = useState("hourly");
  const [chartType, setChartype] = useState("line");
  const currency = useSelector((state) => state.defaultCurrency)[0];
  const crypto = useSelector((state) => state.selectCoin);
  const days = useSelector((state) => state.defaultDays)[0];
  const [graphDataset, setGraphDataset] = useState([]);

  useEffect(() => {
    if (days < 5) {
      setInterval("hourly");
    } else if (days < 90) {
      setInterval("daily");
    } else {
      setInterval("weekly");
    }
  }, [days]);

  useEffect(() => {
    console.log(crypto);
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setTimeData(res.data.prices);
        let priceData = {
          label: crypto,
          data: res.data.prices.map((price) => price[1]),
          borderColor: randColor(),
          backgroundColor: randColor(),
          pointRadius: "0",
        };
        setGraphDataset([priceData]);
      })
      .catch((err) => console.log(err));
  }, [interval, currency, days, crypto]);

  // creating random color for chart lines
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
  // console.log(graphDataset);
  const chartTypeHandler = useCallback((chartName) => {
    setChartype(chartName);
  }, []);

  // data for chart
  const userData = {
    labels: timeData.map((time) =>
      interval === "weekly"
        ? new Date(time[0]).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : interval === "hourly"
        ? new Date(time[0]).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        : new Date(time[0]).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
          })
    ),
    datasets: graphDataset,
  };
  // option for removing x axis grid line
  const options = {
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
  // for horizontal bar axis options
  const options1 = {
    indexAxis: "y",
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
      <ChartNavbar chartTypeHandler={chartTypeHandler} />
      <div className=" bg-white dark:bg-stone-800 border-2 border-cyan-400 shadow-lg hover:duration-300 hover:shadow-2xl rounded-xl dark:border-transparent sm:px-10 p-0 sm:pb-10 h-full sm:min-h-fit">
        {chartType === "barHorizontal" && (
          <Bar data={userData} height={225} options={options1} />
        )}
        {chartType === "barVertical" && (
          <Bar data={userData} height={225} options={options} />
        )}
        {chartType === "line" && (
          <Line data={userData} height={225} options={options} />
        )}
      </div>
    </>
  );
}
