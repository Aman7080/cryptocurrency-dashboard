import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { buycoin, sellcoin } from "../state/features/exchangeCoin";

// Components Coin Exchange Div and it's features
function CoinExchange() {
  const [exchangeType, setExchangeType] = useState("buy");
  const [buyValue, setBuyValue] = useState(0);
  const [sellValue, setSellValue] = useState(0);
  const [coin, setCoin] = useState("bitcoin");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // function for buying cryptocoin
  const handleBuy = () => {
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
    dispatch(buycoin({ name: coin, value: buyValue, color: randColor() }));
    setBuyValue(0);
    setCoin("bitcoin");
  };

  const cryptoInPortfolio = useSelector((state) => state.cryptoPortfolio);

  // function for selling cryptocoin
  const handleSell = () => {
    const checkCoinInState = cryptoInPortfolio.find(
      (crypto) => crypto.name === coin
    );
    if (checkCoinInState && checkCoinInState.value - sellValue > 0) {
      dispatch(sellcoin({ name: coin, value: sellValue }));
    } else {
      setError("Not That Much Coin!!! Buy More to Sell More");
    }
    setSellValue(0);
    setCoin("bitcoin");
  };

  return (
    <div className="mt-4  mb-14 dark:bg-stone-800 border-cyan-400 border-2 dark:border-0 dark:shadow-black hover:duration-300 hover:shadow-2xl bg-white shadow-lg font-[Poppins] rounded-xl p-5 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className=" font-bold dark:text-cyan-400 mt-2 text-xl ">
            Exchange Coins
          </h3>
        </div>
      </div>
      <div className="flex flex-col ">
        {/* Selling Coins */}
        <div className="flex items-center justify-around space-x-5 pt-4 mt-5 ">
          <h4 className="text-orange-600 text-xl">Sell</h4>
          <div className="relative">
            <select
              value={coin}
              onChange={(e) => {
                setCoin(e.target.value);
                setExchangeType("sell");
              }}
              className=" bg-slate-50 rounded border appearance-none py-2 dark:bg-stone-700 dark:text-white dark:border-none text-gray-600 focus:outline-none focus:border-cyan-400 font-medium text-base pl-3 md:pl-6  pr-8 md:pr-14"
            >
              {cryptoInPortfolio.map((crypto, index) => (
                <option value={crypto.name} key={index}>
                  {crypto.name.charAt(0).toUpperCase() + crypto.name.slice(1)}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center dark:bg-stone-700 dark:text-white text-black pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="number"
              defaultValue="0"
              onChange={(e) => setSellValue(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border-2 dark:bg-stone-700 text-medium dark:text-orange-500 dark:border-none border-gray-300 focus:border-orange-500 text-base outline-none text-black pl-1 md:py-1 mr-3 md:px-3 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-around items-center pt-4 mt-5 space-x-5">
          {/* Buying Coins */}
          <h4 className="text-green-600 text-xl">Buy</h4>
          <div className="relative">
            <select
              value={coin}
              onChange={(e) => {
                setCoin(e.target.value);
                setExchangeType("buy");
              }}
              className=" bg-slate-50 rounded border appearance-none py-2 dark:bg-stone-700 dark:text-white dark:border-none focus:outline-none font-medium focus:border-indigo-500 text-gray-600 text-base pl-3 md:pl-5 pr-8 md:pr-14"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="tron">Tron</option>
              <option value="luna">Luna</option>
              <option value="tether">Tether</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 dark:bg-stone-700 dark:text-white text-center text-black font-black pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="number"
              className="w-full bg-gray-100 bg-opacity-50 rounded border-2 text-base dark:bg-stone-700 dark:text-green-700 decoration-none outline-none text-green-600 dark:border-none py-1 px-3 leading-8"
              value={buyValue}
              onChange={(e) => setBuyValue(e.target.value)}
            />
          </div>
        </div>
        {error && (
          <p className="flex justify-center text-red-600 my-8">{error}</p>
        )}
        <div className="flex justify-center pt-2">
          <button
            disabled={
              exchangeType === "buy" ? !(buyValue > 0) : !(sellValue > 0)
            }
            onClick={exchangeType === "buy" ? handleBuy : handleSell}
            className="bg-cyan-400 text-stone-900 py-3 dark:bg-cyan-400 font-semibold dark:text-black dark:hover:border-cyan-400 dark:hover:text-white dark:border-stone-900 dark:hover:bg-stone-900 px-10 rounded-md hover:bg-stone-900 hover:border-2 hover:border-cyan-4.0 hover:duration-300 hover:text-white border-2 border-transparent disabled:opacity-100 mt-8"
          >
            {exchangeType.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoinExchange;
