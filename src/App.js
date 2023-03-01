import "./App.css";
// import { useEffect, useState, useSelector, useDispatch } from "react";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Coins from "./components/CoinsMktCap";
import Portfolio from "./components/Portfolio";
import CoinExchange from "./components/CoinExchange";
// import { BallTriangle } from "react-loader-spinner";
function App() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.default);
  // const [completed, setCompleted] = useState(undefined);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (data.coinList.length === 0) {
  //       dispatch(fetchCoins());
  //       setCompleted(true);
  //     }
  //   }, 2500);
  // }, [data.coinList.length, dispatch]);

  return (
    <>
      {/* {!completed ? (
        <div className="w-screen h-[90vh] flex justify-center items-center ">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : ( */}
      {/* <> */}
      <div className="dark:bg-stone-900 bg-neutral-50">
        <LogoContainer />
        <div className="flex dark:bg-stone-900 flex-col items-center md:items-start lg:flex-row justify-center m-10 max-[820px]:flex-col">
          <div className="container max-w-screen-lg">
            <div>
              <Navbar />

              <ChartCointainer />

              <div className="flex flex-col md:flex-row md:space-x-4">
                <Portfolio />
                <CoinExchange />
              </div>
            </div>
          </div>
          <div className="max-[820px]:flex-col mx-4 h-[82rem]   dark:bg-stone-900">
            <Coins />
          </div>
        </div>
      </div>
      {/* </>
      )} */}
    </>
  );
}

export default App;
