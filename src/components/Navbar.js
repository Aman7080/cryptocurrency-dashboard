import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className=" w-full font-['Poppins'] flex my-4">
      <div className="relative">
        <select
          defaultValue="usd"
          className="h-14 bg-white rounded-xl appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
          <BsFillCaretDownFill />
        </span>
      </div>
      <div className="flex ml-3 flex-1 items-center rounded-lg bg-white h-14">
        <div className=" ml-8 mr-5 text-4xl text-slate-500 ">
          <BsSearch />
        </div>
        <input
          className=" h-11 w-full border-0 bg-transparent rounded-xl outline-0 pl-2 text-slate-600 focus:outline-none"
          placeholder="Search by Coin"
        />
      </div>
    </div>
  );
}
