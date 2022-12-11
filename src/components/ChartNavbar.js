import { BsFillCaretDownFill } from "react-icons/bs";
// import { cryptocoins } from "../Data/cryptocoins";
import Dropdown from "./Dropdown";
import Multiselect from "multiselect-react-dropdown";

const CartNavbar = () => {
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

        {/* <div className="relative my-2">
          <select
            defaultValue="crypto"
            className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
          >
            <option value="crypto">Cryptocurrency</option>
            {cryptocoins.map((coins) => (
              <option key={coins.id} value={coins.symbol}>
                <label>   {coins.name}</label>
              </option>
            ))}
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
            <BsFillCaretDownFill />
          </span> */}
        </div>
        <div className="relative my-2 ">
          <select
            defaultValue="chart"
            className=" bg-slate-50 max-sm:w-40 h-12 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
          >
            <option value="chart">Chart type</option>
            <option value="barHorizontal">Bar Chart Horizantal</option>
            <option value="line">Line Chart</option>
            <option value="barVertical">Bar Chart Vertical</option>
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
            <BsFillCaretDownFill />
          </span>
        </div>
      </div>
    // </div>
  );
};

export default CartNavbar;
