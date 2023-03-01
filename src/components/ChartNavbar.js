import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateDays } from "../state/features/days";
import { selectCoin } from "../state/features/coinSelection";
import axios from "axios";
import { useState, useEffect } from "react";

const ChartNavbar = ({ chartTypeHandler }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false";
  useEffect(() => {
    console.log("useeffect of navbar");
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container border-cyan-400 dark:bg-stone-900 dark:border-none   max-sm:m-1  flex flex-col md:flex-row justify-center md:justify-around items-center bg-white space-y-4 md:space-y-0 p-5">
      <div className="flex max-sm:w-52">
        <button
          onClick={() => dispatch(updateDays(1))}
          className="w-12 h-8 font-semibold rounded-md mx-1 border-0 dark:hover:border-cyan-400 dark:hover:text-cyan-400 bg-slate-100 dark:text-white dark:bg-stone-800 text-slate-500 hover:border-2 hover:border-blue-500 hover:text-blue-500"
        >
          1D
        </button>
        <button
          onClick={() => dispatch(updateDays(7))}
          className="w-12 h-8 font-semibold rounded-md mx-1 border-0 dark:hover:border-cyan-400 dark:hover:text-cyan-400 bg-slate-100  dark:text-white dark:bg-stone-800 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500"
        >
          1W
        </button>
        <button
          onClick={() => dispatch(updateDays(30))}
          className="w-12 h-8 font-semibold rounded-md mx-1 border-0 dark:hover:border-cyan-400 dark:hover:text-cyan-400 bg-slate-100  dark:text-white dark:bg-stone-800 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500"
        >
          1M
        </button>
        <button
          onClick={() => dispatch(updateDays(180))}
          className="w-12 h-8 font-semibold rounded-md mx-1 border-0 dark:hover:border-cyan-400 dark:hover:text-cyan-400 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500  dark:text-white dark:bg-stone-800 hover:text-blue-500"
        >
          6M
        </button>
        <button
          onClick={() => dispatch(updateDays(365))}
          className="w-12 h-8 font-semibold rounded-md mx-1 border-0 dark:hover:border-cyan-400 dark:hover:text-cyan-400 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500  dark:text-white dark:bg-stone-800 mr-4 hover:text-blue-500"
        >
          1Y
        </button>
      </div>

      <div className="">
        <div className="relative my-2">
          <select
            defaultValue="crypto"
            onChange={(e) => dispatch(selectCoin(e.target.value))}
            className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 pl-5 pr-14  dark:bg-stone-700 text-base dark:border-none dark:text-white"
          >
            <option value="crypto">Cryptocurrency</option>
            {data.map((coins) => (
              <option key={coins.id} value={coins.id}>
                {coins.name}
              </option>
            ))}
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
            <BsFillCaretDownFill />
          </span>
        </div>
      </div>

      <div className="relative my-2 ">
        <select
          defaultValue="none"
          onChange={(e) => chartTypeHandler(e.target.value)}
          className=" bg-slate-50 max-sm:w-60 ml-4 h-12 rounded border font-poppins font-medium appearance-none py-2 focus:outline-none  focus:border-cyan-400 dark:bg-stone-700 text-base dark:border-none dark:text-white text-gray-600 text-bold pl-5 pr-14"
        >
          <option value="none" disabled hidden>
            Chart Type
          </option>
          <option value="line">Line Chart</option>
          <option value="barHorizontal">Bar Chart Horizantal</option>
          <option value="barVertical">Bar Chart Vertical</option>
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
          <BsFillCaretDownFill />
        </span>
      </div>
    </div>
  );
};

export default ChartNavbar;
