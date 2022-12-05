import "./App.css";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import PortfolioExchange from "./components/PortfolioExchange";
import Coins from "./components/Coins";
function App() {
  return (
    <>
      <LogoContainer />
      <div className="flex m-10 h-full">
        <div className="container  h-screen w-9/12 ">
          <div className="">
            <Navbar />
            <ChartCointainer />
            <PortfolioExchange />
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
