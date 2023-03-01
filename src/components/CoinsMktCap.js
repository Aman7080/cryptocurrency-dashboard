import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
// import { mktCap } from "../Data/MktCap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Coins = () => {
  const [data, setData] = useState([]);
  const currency = useSelector((state) => state.defaultCurrency)[0];
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      });
  }, [currency]);
  return (
    <>
      <div className=" dark:bg-stone-800 w-full mt-4 dark:border-0 border-2 dark:shadow-black border-cyan-400 h-full shadow-lg hover:duration-300 hover:shadow-2xl rounded-lg bg-white">
        <div className=" p-5 rounded-xl dark:bg-stone-800  bg-white">
          <h2 className="text-xl dark:text-cyan-400 dark:bg-stone-800 font-black font-comfortaa">
            Cryptocurrency by market cap
          </h2>
        </div>

        <div className="coins  m-6 rounded-xl  overflow-y-auto h-[75.1rem] scroll-smooth scrollbar-hide">
          {data ? (
            <table className="w-full  table-auto  ">
              <tbody>
                {data.map((coin) => (
                  <div
                    className="coin-info dark:bg-stone-800 border-b-[0.05rem] flex justify-between  bg-white mb-0.5 p-5"
                    key={coin.id}
                  >
                    {" "}
                    <img
                      className=" h-8 w-8 mr-1"
                      alt={coin.name}
                      src={coin.image}
                    />
                    <div className="coin-name ">
                      <h3 className="font-bold dark:text-white">{coin.name}</h3>
                      <p className="text-sm dark:text-cyan-400 text-slate-600">
                        Mkt.cap {currency === "usd" ? <>&#36;</> : <>&#8377;</>}
                        {coin.market_cap.toLocaleString()}
                      </p>
                    </div>
                    {coin.price_change_24h < 0 ? (
                      <div className="coin-rate flex bg-white dark:bg-stone-800 items-center">
                        <p>
                          <RiArrowDownSFill size="2rem" color="red" />
                        </p>
                        <h4 className="text-red-600 font-semibold">
                          {coin.market_cap_change_percentage_24h.toFixed(4)}%
                        </h4>
                      </div>
                    ) : (
                      <div className="coin-rate flex dark:bg-stone-800 bg-white items-center">
                        <p>
                          <RiArrowUpSFill size="2rem" color="green" />
                        </p>
                        <h4 className="text-green-600 font-semibold">
                          {coin.price_change_24h.toFixed(4)}%
                        </h4>
                      </div>
                    )}
                  </div>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Coins;
