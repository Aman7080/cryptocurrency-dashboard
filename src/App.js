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
    
    <div className="dark:bg-stone-900">
      <LogoContainer />
      <div className="flex dark:bg-stone-900 flex-col items-center md:items-start md:flex-row justify-center m-10 ">
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
        <div className=" mx-5 w-full md:w-1/4 bg-slate-50  dark:bg-stone-900">
          
          <Coins />
        </div>
      </div>
    </div>
  );
}


export default App;
