import "./App.css";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Coins from "./components/CoinsMktCap";
import Portfolio from "./components/Portfolio";
import CoinExchange from "./components/CoinExchange";
function App() {
  // class Question extends React.Component {
  return (
    <div className="dark:bg-stone-900 bg-neutral-50">
      <LogoContainer />
      <div className="flex dark:bg-stone-900 flex-col items-center md:items-start lg:flex-row justify-center m-10 max-[820px]:flex-col">
        <div className="container max-w-screen-lg">
          <div>
            <Navbar />
            
            <ChartCointainer/>
            
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Portfolio />
              <CoinExchange />
            </div>
          </div>
        </div>
        <div className="max-[820px]:flex-col mx-5 w-full h-full lg:w-1/4  dark:bg-stone-900">
          <Coins />
        </div>
      </div>
    </div>
  );
}

export default App;
