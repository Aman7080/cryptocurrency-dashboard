import "./App.css";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Coins from "./components/Coins";
import PortfolioContainer from "./components/PortfolioContainer";
import CoinExchange from "./components/CoinExchange";
function App() {
  return (
    <>
      <LogoContainer />
      <div className="flex flex-col md:flex-row m-10 h-full justify-center items-center">
        <div className=" w-2/3">
          <div>
            <Navbar />
            <ChartCointainer />
            <div className="flex space-x-4">
              <PortfolioContainer />
              <CoinExchange />
            </div>
          </div>
        </div>
        <div className=" mx-5 bg-slate-50">
          <Coins />
        </div>
      </div>
    </>
  );
}

export default App;
