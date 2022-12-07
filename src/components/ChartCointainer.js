import CartNavbar from "./ChartNavbar";
<<<<<<< HEAD
import LineChart from "./LineChart";
import { UserData } from "../DemoData"

export default function ChartCointainer() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
=======
import { Line } from "react-chartjs-2";
import { Price } from "../Data/cryptoPrice";

export default function ChartCointainer() {
  // data for chart
  const userData = {
    labels: Price[0].prices.map((time) => new Date(time[0]).toDateString()),
>>>>>>> b8af1b2b239245bef3d6784dc4a4a7e9659d8d3b
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
<<<<<<< HEAD
      <div className="  bg-white rounded-md">
        <LineChart chartData={userData} />
        {/* <BarChart chartData={userData} /> */}
=======
      <div className=" bg-white rounded-md">
        <Line data={userData} options={options} />
>>>>>>> b8af1b2b239245bef3d6784dc4a4a7e9659d8d3b
      </div>
    </>
  );
}
