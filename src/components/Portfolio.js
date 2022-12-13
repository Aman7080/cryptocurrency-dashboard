import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";
import { Chart as chartjs } from "chart.js/auto";
function PortfolioContainer() {
  // Coins available in porfolio
  const cryptoInPortfolio = useSelector((state) => state.cryptoPortfolio);
  //const currency = useSelector((state) => state.defaultCurrency)[0];

  // calculating money available in portfolio
  let totalValue = 0;
  cryptoInPortfolio.forEach((crypto) => {
    totalValue = parseInt(totalValue) + parseInt(crypto.value);
  });

  // coins chart setup for portfolio block
  const data = {
    labels: cryptoInPortfolio.map(
      (crypto) => crypto.name.charAt(0).toUpperCase() + crypto.name.slice(1)
    ),
    datasets: [
      {
        label: "Cryptocurrency",
        data: cryptoInPortfolio.map((crypto) => crypto.value),
        backgroundColor: cryptoInPortfolio.map((crypto) => crypto.color),
      },
    ],
  };
//chart.options.plugins.legend.align
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
    <div className="container shadow-lg hover:duration-300 hover:shadow-2xl bg-white mt-4 font-['Poppins'] rounded-xl p-5 w-full ">
      <div className="flex flex-col md:flex-row items-center md:m-2 justify-between flex-1">
        <div>
          <h3 className=" font-bold text-xl ">Portfolio</h3>
        </div>
        <div className="flex flex-col text-xl items-center md:flex-row ">
          <p className=" text-slate-400 ">Total Value </p>
          <p className=" text-black font-semibold">{totalValue}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="graph">
          <Pie data={data} plugins={[ChartDataLabels]} options={options} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioContainer;
