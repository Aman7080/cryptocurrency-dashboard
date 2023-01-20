import { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../state/features/currency";
import SearchBar from "./SearchBar";
import { cryptocoins } from "../Data/cryptocoins";

export default function Navbar() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.defaultCurrency)[0];
  const [searchData, setSearchData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fillCompleteName = (name) => {
    console.log("got name is", name);
    setInputValue(name);
    setSearchData([]);
    setTimeout(() => {
      setSearchData([]);
    }, 0);
  };

  useEffect(() => {
    if (inputValue) {
      let searchText = inputValue.toLowerCase();

      let filterData = cryptocoins.filter((crypto) => {
        let cName = crypto?.name.toLowerCase();
        if (cName.includes(searchText)) {
          return true;
        }
        return false;
      });
      setSearchData(filterData);
    }
  }, [inputValue]);
  return (
    <>
      <div className="w-full dark:bg-stone-900 max-sm:w-full  font-['Poppins'] flex justify-between my-4">
        <div className="relative">
          <select
            value={currency}
            onChange={(e) => dispatch(changeCurrency(e.target.value))}
            className="h-14 dark:border-x-cyan-400 dark:border-1 dark:bg-stone-800 dark:text-white max-sm:w-26 shadow-md hover:duration-300 hover:shadow-xl bg-white rounded-xl appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
          >
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          </select>
          <span className="absolute right-0 top-0 h-full dark:text-white w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
            <BsFillCaretDownFill />
          </span>
        </div>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      {searchData.length > 0 && inputValue && (
        <div
          className=" bg-white border absolute"
          style={{
            width: "55%",
            marginLeft: "126px",
            zIndex: 1,
            marginTop: "-1rem",
          }}
        >
          {searchData.map((crypto, index) => {
            return (
              <div className=" each-search-data px-20" key={index}>
                <h1
                  className="my-2"
                  onClick={() => {
                    fillCompleteName(crypto?.name);
                  }}
                >
                  {crypto?.name}
                </h1>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
