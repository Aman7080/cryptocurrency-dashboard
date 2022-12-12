import { FiSearch } from "react-icons/fi";
const SearchBar = ({ inputValue, setInputValue }) => {

    const searchHandler = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <div className="w-full flex ml-3 hover:duration-300 hover:shadow-xl shadow-md flex-1 items-center rounded-lg bg-white h-14">
                <div className=" ml-8 mr-5 text-3xl text-slate-500 ">
                    <FiSearch />
                </div>
                <input
                    className=" h-11 w-full border-0 bg-transparent rounded-xl outline-0 pl-2 text-slate-600 focus:outline-none"
                    placeholder="Search by Coin"
                    onChange={searchHandler}
                    value={inputValue}
                />
            </div>

        </>
    )
}

export default SearchBar
