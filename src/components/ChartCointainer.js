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
  const [currentCoinLength, setCurrentCoinLength] = useState(1);
  const [shouldCallApi, setShouldCallApi] = useState(false);

  // const [selecteValues, setSelectedValue] = useState(selectedData)

  const selectedData = useSelector((state) => state?.selectCoin);
  console.log("coininstate", coinInState);

  const checkExistence = (name) => {
    for (let i = 0; i < graphDataset?.length; i++) {
      if (graphDataset[i]?.label === name) {
        return true;
      }
      return false;
    }
  };

  const getDataforCurrentCoin = (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
    axios.get(url).then((res) => {
      let temp = {
        label: crypto,
        data: res.data.prices.map((price) => price[1]),
        borderColor: randColor(),
        backgroundColor: randColor(),
        pointRadius: "0",
      };
      setGraphDataset([...graphDataset, temp]);
    });
  };

  const getFromCheckInCoinState = (coinName) => {
    console.log("checking for", coinName);
    for (let i = 0; i < coinInState?.length; i++) {
      console.log("line80", coinName, coinInState[i]);
      if (coinName == coinInState[i]) {
        console.log("returning false for", coinName);
        return false;
      }
    }
    console.log("returning true for", coinName);
    return true;
  };

  const getRemovedIndex = () => {
    console.log("first second", graphDataset, coinInState);
    for (let z = 0; z < graphDataset?.length; z++) {
      // console.log('passing',graphDataset[z]?.label);
      let flag = getFromCheckInCoinState(graphDataset[z]?.label);
      if (flag) {
        console.log("returning", flag, z);
        return z;
      }
    }
  };

  useEffect(() => {
    if (coinInState?.length < currentCoinLength) {
      let idx = getRemovedIndex();

      let filteredGraphdata = graphDataset?.filter(
        (obj) => obj?.label !== graphDataset[idx]?.label
      );
      setGraphDataset(filteredGraphdata);
      setCurrentCoinLength(coinInState?.length);

      // updateGraphdataSet(removedCoin)
    } else {
      setCurrentCoinLength(coinInState?.length);
      if (shouldCallApi)
        getDataforCurrentCoin(coinInState[coinInState?.length - 1]);
    }
  }, [coinInState]);

  const graphdataSetHandler = (val) => {
    if (graphDataset?.length === 0) {
      return [val];
    }
    let isExist = checkExistence(val?.label);
    if (isExist) {
      return graphDataset;
    } else {
      return [...graphDataset, val];
    }
  };

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

          let ans = graphdataSetHandler(temp);
          setGraphDataset(ans);
          setShouldCallApi(true);
        })
        .catch((err) => console.log(err));
    });
  }, [interval, currency, days]);

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

  // console.log("userdata is", userData);

  return (
    <>
      <ChartNavbar chartTypeHandler={chartTypeHandler} />
      <div className=" dark:border-0 dark:border-cyan-400 dark:shadow-black bg-white dark:bg-stone-800  shadow-lg hover:duration-300 hover:shadow-2xl rounded-md px-10 pb-10">
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
