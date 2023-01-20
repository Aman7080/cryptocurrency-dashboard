import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { buycoin, sellcoin } from "../state/features/exchangeCoin";

function CoinExchange() {
 
  const [exchangeType, setExchangeType] = useState("buy");
  const [buyValue, setBuyValue] = useState(0);
  const [sellValue, setSellValue] = useState(0);
  const [coin, setCoin] = useState("bitcoin");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleBuy = () => {
    // color for pie chart
    console.log('handlebuy')
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
  //console.log(cryptoInPortfolio[0])
  const handleSell = () => {
    console.log("handlesell")
    if (cryptoInPortfolio.find((crypto) => crypto.name === coin)) {
      dispatch(sellcoin({ name: coin, value: sellValue }));
    } else {
      setError("coin not available");
      console.log(error);
    }
    setSellValue(0);
    setCoin("bitcoin");
  };

  return (
    <div className="mt-4 dark:bg-slate-900 hover:duration-300 hover:shadow-2xl bg-white shadow-lg font-[Poppins] rounded-xl p-5 w-full">
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
              value={coin}
              onChange={(e) => {
                setCoin(e.target.value);
                setExchangeType("sell");
              }}
              className=" bg-slate-50 rounded border appearance-none py-2 text-gray-600 focus:outline-none focus:border-indigo-500 font-medium text-base pl-5 pr-14"
            >
              {cryptoInPortfolio.map((crypto,index)=>(
                <option value={crypto.name} key={index}>{crypto.name.charAt(0).toUpperCase()+crypto.name.slice(1)}</option>
              ))}
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-black pointer-events-none flex items-center justify-center">
              <BsFillCaretDownFill />
            </span>
          </div>
          <div>
            <input
              type="text"
              defaultValue={'Avl ' + cryptoInPortfolio[0].value}
              onChange={(e) => setSellValue(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border-2 border-gray-300 focus:border-orange-500 text-base outline-none text-black py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div className="flex justify-around items-center pt-4 mt-5 space-x-5">
          <h4 className="text-green-600 text-xl">Buy</h4>
          <div className="relative">
            <select
              value={coin}
              onChange={(e) => {
                setCoin(e.target.value);
                setExchangeType("buy");
              }}
              className=" bg-slate-50 rounded border appearance-none py-2 focus:outline-none font-medium focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="polygon">Polygon</option>
              <option value="ethereum">Ethereum</option>
              <option value="tron">Tron</option>
              <option value="luna">Luna</option>
              <option value="tether">Tether</option>
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
              value={buyValue}
              onChange={(e) => setBuyValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            disabled={
              exchangeType === "buy" ? !(buyValue > 0) : !(sellValue > 0)
            }
            onClick={exchangeType === "buy" ? handleBuy : handleSell}
            className="bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-white hover:border-2 hover:border-sky-600/100 hover:duration-300 hover:text-sky-600 border-2 border-white disabled:opacity-70"
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoinExchange;
