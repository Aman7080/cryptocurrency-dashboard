import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { mktCap } from "../Data/MktCap";

const Coins = () => {
  return (
    <>
      <div className="m-5 shadow-lg hover:duration-300 hover:shadow-2xl bg-white">
        <div className=" p-5 rounded-xl  ">
          <h2 className="text-xl font-black font-comfortaa">
            Cryptocurrency by market cap
          </h2>
        </div>
        <div className="coins m-6 rounded-xl ">
          {mktCap.map((coin) => (
            <div
              className="coin-info border-b-[0.05rem] flex justify-between bg-white mb-0.5 p-5"
              key={coin.id}
            >
              {" "}
              <img className=" h-8 w-8 mr-1" alt={coin.name} src={coin.image} />
              <div className="coin-name ">
                <h3 className="font-bold">{coin.name}</h3>

                <p className="text-sm text-slate-600">
                  Mkt.cap ${coin.market_cap.toLocaleString()}
                </p>
              </div>
              {coin.price_change_24h < 0 ? (
                <div className="coin-rate flex bg-white items-center">
                  <p>
                    <RiArrowDownSFill size="2rem" color="red" />
                  </p>
                  <h4 className="text-red-600 font-semibold">
                    {coin.market_cap_change_percentage_24h.toFixed(4)}%
                  </h4>
                </div>
              ) : (
                <div className="coin-rate flex bg-white items-center">
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
        </div>
      </div>
    </>
  );
};
export default Coins;
