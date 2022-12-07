import CartNavbar from "./ChartNavbar";
import { Line } from "react-chartjs-2";
import { Price } from "../Data/cryptoPrice";

export default function ChartCointainer() {
  // data for chart
  const userData = {
    labels: Price[0].prices.map((time) => new Date(time[0]).toDateString()),
    datasets: [
      {
        label: "Ethereum",
        data: Price[0].prices.map((price) => price[1]),
        borderColor: "red",
        pointRadius: "0",
      },
    ],
  };
  // option for removing x axis grid line
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <CartNavbar />

      <div className=" bg-white shadow-lg hover:duration-300 hover:shadow-2xl rounded-md">
        <Line data={userData} options={options} />
      </div>
    </>
  );
}
