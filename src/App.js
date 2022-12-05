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
      <div className="flex m-10 h-full">
        <div className="container h-screen w-9/12 ">
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
