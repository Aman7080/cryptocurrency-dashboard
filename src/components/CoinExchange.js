import { BsFillCaretDownFill } from "react-icons/bs";

function CoinExchange() {
  return (
    <div className="border bg-white rounded-xl p-5 w-full">
      <div className="flex flex-col md:flex-row items-center m-5 justify-between">
        <div>
          <h3 className=" font-bold text-3xl ">Exchange Coins</h3>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around">
          <h4 className="text-orange-600 text-xl">Sell</h4>
          <div  className="relative">
            <select className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-base pl-5 pr-14">
              <option>Bitcoin</option>
              <option>Polygon</option>
              <option>Ethereum</option>
              <option>Tron</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Avl:0.002BTC"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-around items-center pt-4 mt-5">
          <h4 className="text-green-600 text-xl">Buy</h4>
          <div className="relative">
            <select className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none focus:border-indigo-500 text-base pl-5 pr-14">
              <option>Bitcoin</option>
              <option>Polygon</option>
              <option>Ethereum</option>
              <option>Tron</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Avl:0.002BTC"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button className="bg-blue-600 py-2 px-3 rounded-md">Exchange</button>
        </div>
      </div>
    </div>
  );
}

export default CoinExchange;
