import { BsFillCircleFill } from "react-icons/bs";

import { useState } from "react";
import PieChart from "./PieChart";
import { UserData } from "../DemoData"
// coins chart for portfolio block
function PortfolioContainer() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Etherium",
      data: UserData.map((data) => data.UserGain),
      backgroundColor: ["red", "blue"]
    }]
  })

  
  // Coins available in porfolio
  const coinsInPortfolio = [
    {
      name: "Tether",
      color: "blue",
    },
    {
      name: "Luna",
      color: "red",
    },
    {
      name: "Ethereum",
      color: "green",
    },
  ];

  return (
    <div className="bg-white mt-4 rounded-xl p-5 w-full">
      <div className="flex flex-col md:flex-row items-center m-5 justify-between">
        <div>
          <h3 className=" font-bold text-3xl ">Portfolio</h3>
        </div>
        <div className="flex text-3xl">
          <p className=" text-slate-400 ">Total Value </p>
          <p className=" text-black font-semibold"> : $1000</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="graph  h-56 w-56">
          <PieChart chartData={userData} />
        </div>
        <div>
          {coinsInPortfolio.map((item, index) => (
            <div className="flex items-center my-2" key={index}>
              <BsFillCircleFill style={{ color: `${item.color}` }} />
              <p className="text-2xl ml-3">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioContainer;
