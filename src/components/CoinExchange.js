import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { buycoin } from "../state/features/exchangeCoin";

function CoinExchange() {
  // const [exchangeType, setExchangeType] = useState("buy");
  const [value, setValue] = useState(0);
  const [coin, setCoin] = useState("bitcoin");
  // const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleBuy = () => {
    console.log("handlebuy");
    // color for pie chart
    const randColor = () => {
      return (
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
          .toUpperCase()
      );
    };

    dispatch(buycoin({ name: coin, value: value, color: randColor() }));

    setValue(0);
    setCoin("bitcoin");
  };

  // const cryptoInPortfolio = useSelector((state) => state.cryptoPortfolio);

  // const handleSell = () => {
  //   if (cryptoInPortfolio.find((crypto) => crypto.name === coin)) {
  //     dispatch(sellcoin({ name: coin, value: value }));
  //   } else {
  //     setError("coin not available");
  //     console.log(error);
  //   }
  //   setValue(0);
  //   setCoin("bitcoin");
  // };

  return (
    <div className="mt-4 bg-white font-[Poppins] rounded-xl p-5 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className=" font-bold mt-2 text-xl ">Exchange Coins</h3>
        </div>
      </div>
       <div className="flex flex-col ">
        <div className="flex items-center justify-around space-x-5 pt-4 mt-5 ">
          <h4 className="text-orange-600 text-xl">Sell</h4>
          <div className="relative">
            <select
              defaultValue="ethereum"
              className=" bg-slate-50 rounded border appearance-none py-2 text-gray-600 focus:outline-none focus:border-indigo-500 font-medium text-base pl-5 pr-14"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="tron">Tron</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-black pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Avl:0.002BTC"
              className="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-orange-500 text-base outline-none text-black py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-around items-center pt-4 mt-5 space-x-5">
          <h4 className="text-green-600 text-xl">Buy</h4>
          <div className="relative">
            <select
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none font-medium focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="tron">Tron</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="number"
              //placeholder="Avl:0.002BTC"
              className="w-full rounded text-base outline-none text-green-600 py-1 px-3 leading-8"
              // disabled
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            disabled={!(value > 0)}
            onClick={handleBuy}
            className="bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-white hover:border-2 hover:border-sky-600/100 hover:duration-300 hover:text-sky-600 border-2 border-white disabled:opacity-70"
          >
            Exchange
          </button>
        </div>
      </div> 

      {/* <ul className="flex text-lg font-medium text-center text-gray-500 justify-center mt-4 ">
        <li>
          <button
            onClick={() => setExchangeType("buy")}
            style={{ backgroundColor: exchangeType === "buy" && "#e2e8f0 " }}
            className="inline-block px-6 py-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 active:text-blue-500"
          >
            Buy
          </button>
        </li>
        <li>
          <button
            onClick={() => setExchangeType("sell")}
            style={{ backgroundColor: exchangeType === "sell" && "#e2e8f0" }}
            className="inline-block px-6 py-2 rounded-t-lg  hover:text-gray-600 hover:bg-gray-50 active:text-blue-500"
          >
            Sell
          </button>
        </li>
      </ul>
      <div className="border bg-slate-200 rounded-lg">
        <div className="flex flex-col justify-center items-center mt-6 ">
          <div className="relative">
            <select
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              className=" bg-slate-50 rounded border appearance-none py-3 text-gray-600 focus:outline-none focus:border-indigo-500 font-medium  text-lg pl-6 pr-20"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="tron">Tron</option>
            </select>
            <span className="absolute h-full w-10 text-center text-black right-0 top-4 ">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-52 mt-6  bg-opacity-50 rounded border-2 border-gray-300 focus:border-indigo-500 text-lg outline-none text-black py-3 px-4 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button
            disabled={!(value > 0)}
            onClick={exchangeType === "buy" ? handleBuy : handleSell}
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-white hover:border-2 hover:border-sky-600/100 hover:duration-300 hover:text-sky-600 border-2 border-white disabled:opacity-70"
          >
            {exchangeType.toUpperCase()}
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default CoinExchange;
