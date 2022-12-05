// import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className=" w-full h-15  flex ">
      <div>
        <select name="USD" className="items-center h-10 w-20 pl-4 mr-5  rounded-md drop-shadow-lg">
          <option value="">INR</option>
          <option value="">USD</option>
        </select>
      </div>
      <div className='w-full'>
        <form>
          <input className="h-10 w-full  rounded-md pl-5 drop-shadow-lg" type="search" placeholder="Search by coin." />
        </form>
      </div>
    </div>
  );
}
