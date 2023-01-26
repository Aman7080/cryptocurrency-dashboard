import { FiSearch } from "react-icons/fi";
const SearchBar = ({ inputValue, setInputValue }) => {

    const searchHandler = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <div className="w-full dark:bg-stone-800 flex border-2  border-cyan-400 dark:border-0 ml-3 hover:duration-300 hover:shadow-xl shadow-md flex-1 items-center rounded-lg bg-white h-14">
                <div className=" md:ml-8 ml-2 md:mr-5 mr-2 text-3xl dark:text-white text-slate-500 ">
                    <FiSearch />
                </div>
                <input
                    className=" h-11 w-full border-0 bg-transparent rounded-xl outline-0 pl-2 dark:text-cyan-400 dark:bg-stone-800 text-slate-600 focus:outline-none"
                    placeholder="Search by Coin"
                    onChange={searchHandler}
                    value={inputValue}
                />
            </div>

        </>
    )
}

export default SearchBar
