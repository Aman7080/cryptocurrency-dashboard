import "./App.css";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Coins from "./components/CoinsMktCap";
import Portfolio from "./components/Portfolio";
import CoinExchange from "./components/CoinExchange";

function App() {
  return (
    <>
      <LogoContainer />
      <div className="flex flex-col items-center md:items-start md:flex-row justify-center m-10 ">
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
        <div className=" mx-5 bg-slate-50 ">
          <Coins />
        </div>
      </div>
    </>
  );
}

export default App;
