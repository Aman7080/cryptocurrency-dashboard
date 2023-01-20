import "./App.css";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import ChartCointainer from "./components/ChartCointainer";
import Coins from "./components/CoinsMktCap";
import Portfolio from "./components/Portfolio";
import CoinExchange from "./components/CoinExchange";
function App() {
  const [theme, setTheme] = useState([null]);
  

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }, [])
  
 
  useEffect(()=>{
    if (theme==="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
    },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
 
  // class Question extends React.Component {
  return (
    
    < >
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
        <div className=" mx-5 bg-slate-50  dark:bg-slate-900">
          <button  onClick={handleThemeSwitch} className="bg-green-200 font-poppins font-medium p-4 justify-around inline-flex rounded-3xl">
            <span className="mt-1 mr-2 font-bold"><FaMoon/></span>Dark Mod
          </button>
          <Coins />
        </div>
      </div>
    </>
  );
}


export default App;
