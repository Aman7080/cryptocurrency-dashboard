import "./App.css";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Portfolio_Exchange_Coins from "./components/Portfolio_Exchange_Coins";
function App() {
  return (
    <div>
      <LogoContainer />
      <Navbar />
      <ChartCointainer />
      <Portfolio_Exchange_Coins/>
    </div>
  );
}

export default App;
