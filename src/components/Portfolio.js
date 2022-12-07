import { Pie } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

function PortfolioContainer() {
  // Coins available in porfolio
  const coinsInPortfolio = [
    {
      name: "Tether",
      value: "375",
      color: "red",
    },
    {
      name: "Luna",
      value: "375",
      color: "blue",
    },
    {
      name: "Ethereum",
      value: "250",
      color: "green",
    },
  ];
  // coins chart setup for portfolio block
  const data = {
    labels: coinsInPortfolio.map((coins) => coins.name),
    datasets: [
      {
        label: "Cryptocurrency",
        data: coinsInPortfolio.map((coins) => coins.value),
        backgroundColor: coinsInPortfolio.map((coins) => coins.color),
      },
    ],
  };

  // option for removing x axis grid line
  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: "true",
          pointStyle: "circle",
          font: {
            size: 15,
          },
          padding: 18,
        },
      },
      datalabels: {
        display: true,
        color: "white",
        align: "center",
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 20,
            },
          },
        },
      },
    },
  };

  return (
    <div className="container bg-white mt-4 font-['Poppins'] rounded-xl p-5 w-full ">
      <div className="flex flex-col md:flex-row items-center md:m-2 justify-between flex-1">
        <div>
          <h3 className=" font-bold text-xl ">Portfolio</h3>
        </div>
        <div className="flex flex-col text-xl items-center md:flex-row ">
          <p className=" text-slate-400 ">Total Value </p>
          <p className=" text-black font-semibold">$1000</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="graph">
          <Pie data={data} plugins={[ChartDataLabels]} options={options} />
        </div>
        {/* <div>
          {coinsInPortfolio.map((item, index) => (
            <div className="flex items-center my-2" key={index}>
              <BsFillCircleFill style={{ color: `${item.color}` }} />
              <p className="text-2xl ml-3">{item.name}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default PortfolioContainer;
