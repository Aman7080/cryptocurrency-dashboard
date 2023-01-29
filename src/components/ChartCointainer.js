import ChartNavbar from "./ChartNavbar";
import { Bar, Line } from "react-chartjs-2";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ChartCointainer() {
  const [timing, setTiming] = useState([]);
  const [interval, setInterval] = useState("hourly");
  const [chartType, setChartype] = useState("line");
  const currency = useSelector((state) => state.defaultCurrency)[0];
  const days = useSelector((state) => state.defaultDays)[0];
  const coinInState = useSelector((state) => state.selectCoin);
  const [graphDataset, setGraphDataset] = useState([]);

  // const [selecteValues, setSelectedValue] = useState(selectedData)

  const selectedData = useSelector((state) => state?.selectCoin);

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
    coinInState.map((crypto) => {
      const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
      axios
        .get(url)
        .then((res) => {
          setTiming(res.data.prices);
          let temp = {
            label: crypto,
            data: res.data.prices.map((price) => price[1]),
            borderColor: randColor(),
            backgroundColor: randColor(),
            pointRadius: "0",
          };

          if (graphDataset.length === 0) {
            setGraphDataset([temp]);
          } else if (
            graphDataset.filter((temp) => temp.label === crypto).length < 1
          ) {
            console.log("push");
            setGraphDataset((prevState) => [...prevState, temp]);
          }
        })
        .catch((err) => console.log(err));
    });
  }, [interval, coinInState, currency, days]);

  useEffect(() => {
    setGraphDataset(selectedData);
  }, [selectedData]);

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
  console.log("graph data sets", graphDataset);
  const chartTypeHandler = useCallback((chartName) => {
    setChartype(chartName);
  }, []);

  // data for chart
  const userData = {
    labels: timing.map((time) => new Date(time[0]).toDateString()),
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

  console.log("userdata is", userData);

  return (
    <>
      <ChartNavbar chartTypeHandler={chartTypeHandler}/>
      <div className=" dark:border-0 border-cyan-400  border-2 dark:shadow-black bg-white dark:bg-stone-800  shadow-lg hover:duration-300 hover:shadow-2xl rounded-md md:p-10">
        {chartType === "barHorizontal" && (
          <Bar data={userData} options={options1} />
        )}
        {chartType === "barVertical" && (
          <Bar data={userData} options={options} />
        )}
        {chartType === "line" && <Line data={userData} options={options} />}
      </div>
    </>
  );
}
