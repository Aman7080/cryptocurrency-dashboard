import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className=" w-full font-['Poppins'] flex my-4">
      <div>
        <select
          defaultValue="usd"
          className="items-center h-12 w-20 pl-4 mr-5 rounded-md drop-shadow-lg"
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>
      </div>
      <div className="flex mx-3 flex-1 items-center rounded-md bg-white h-14">
        <div className=" ml-8 mr-5 text-4xl text-slate-500 ">
          <AiOutlineSearch />
        </div>
        <input
          className=" h-11 w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-slate-600"
          placeholder="Search by Coin"
        />
      </div>
    </div>
  );
}
