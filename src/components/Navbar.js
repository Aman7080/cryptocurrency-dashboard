import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className=" w-full h-8  flex ">
      <div>
        <select name="USD" className="items-center h-8 w-20 pl-4 mr-5  rounded-md drop-shadow-lg">
          <option value="">INR</option>
          <option value="">USD</option>
        </select>
      </div>
      <div className='w-full'>
        <form>
          <div className="flex relative ">
            <CiSearch size='1.5rem'/>
            {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
            <input className="h-8 w-full  rounded-md pl-5 drop-shadow-lg" type="search" placeholder="Search by coin." />
            </div>
        </form>
      </div>
    </div>
  );
}
