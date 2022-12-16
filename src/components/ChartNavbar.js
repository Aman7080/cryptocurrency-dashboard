import { BsFillCaretDownFill } from "react-icons/bs";
// import { cryptocoins } from "../Data/cryptocoins";
import Dropdown from "./Dropdown";
import ChartCointainer from "./ChartCointainer";

const CartNavbar = ({chartType, chartTypeHandler}) => {
  const changeGraphHandler = (e) => {
    console.log('e is',e.target.value);
    chartTypeHandler(e.target.value)
  }
  return (
    <div className="container max-sm:m-1 shadow-lg hover:shadow-2xl flex flex-col md:flex-row justify-center md:justify-around items-center bg-white space-y-4 md:space-y-0 p-5">
      <div className="flex max-sm:w-52">
        <button className="w-12 h-8 font-semibold rounded-md mx-1 bg-slate-100 text-slate-500 hover:border-2 hover:border-blue-500 hover:text-blue-500">
          1D
        </button>
        <button className="w-12 h-8 font-semibold rounded-md mx-1 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500">
          1W
        </button>
        <button className="w-12 h-8 font-semibold rounded-md mx-1 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500">
          1M
        </button>
        <button className="w-12 h-8 font-semibold rounded-md mx-1 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500">
          6M
        </button>
        <button className="w-12 h-8 font-semibold rounded-md mx-1 bg-slate-100 text-slate-500 hover:border-2  hover:border-blue-500 hover:text-blue-500">
          1Y
        </button>
      </div>
      <div className="">
      <Dropdown/>
        </div>
        <div className="relative my-2 ">
          <select
            onChange={changeGraphHandler}
            className=" bg-slate-50 max-sm:w-40 h-12 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
          >
            <option value="none" selected disabled hidden>Chart Type</option>
            <option value="line" selected={chartType === 'line'}>Line Chart</option>
            <option value="barHorizontal" selected={chartType ==='barHorizontal'}>Bar Chart Horizantal</option>
            <option value="barVertical" selected={chartType === 'barVertical'}>Bar Chart Vertical</option>
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
            <BsFillCaretDownFill />
          </span>
        </div>
      </div>
  );
};

export default CartNavbar;
