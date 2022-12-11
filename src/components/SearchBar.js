import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { cryptocoins } from "../Data/cryptocoins";
const SearchBar = ({inputValue, setInputValue}) => {
    
    // console.log('cry');
    const searchHandler = (e) => {
        // let searchText = e.target.value.toLowerCase();
        // console.log('st is', searchText);

        // let filterData = cryptocoins.filter((crypto) => {
        //     let cName = crypto?.name.toLowerCase();
        //     if (cName.includes(searchText)) {
        //         return true
        //     }
        //     return false
        // })
        // console.log('filter data is', filterData);
        setInputValue(e.target.value)
    }
    return (
        <>
            {/* <div> */}

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
            {/* </div> */}

            {/* <div className="w-full my-24" style={{height: '65px', backgroundColor: 'red' }}>
                {
                    searchData.map((item) => {
                        <h5>{item?.name}</h5>
                    })
                }
            </div> */}
        </>
    )
}

export default SearchBar
