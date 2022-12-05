import React from "react";
import BarChart from "./BarChart";
import CartNavbar from "./CartNavbar";
export default function ChartCointainer() {
  return (
    <>
      <CartNavbar/>   
    <div className=" h-80 w-full  bg-white rounded-md">
      <BarChart/>
    </div>
    </>
  );
}
