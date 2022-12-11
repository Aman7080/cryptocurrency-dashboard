import React, {  useState, useEffect } from "react";
import { cryptocoins } from "../Data/cryptocoins";
import { BsFillCaretDownFill } from "react-icons/bs";
import {RxCheckbox} from "react-icons/rx"
import Multiselect from "multiselect-react-dropdown";



const SelectOption = ({ value = "", active = false, updateValue, icon }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateValue(value);
  };

  if (!icon) {
    icon = (
        <RxCheckbox size="30"/>
    );
  }
  return (
    <li
      className="text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9"
      onClick={handleChange}
    >
      <div className="flex items-center">
        <span className="ml-3 block font-normal truncate">{value}</span>
      </div>
      {active && (
        // check-icon
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {icon}
        </span>
      )}
    </li>
  );
};

const Select = ({
  name = "customSelect",
  value = "Cryptocurrency",
  options = [],
  icon
}) => {
  const [state, setState] = useState({
    value,
    showOptions: false
  });

  const handleClick = (e) => {
    e.preventDefault();
    setState((p) => ({ ...p, showOptions: !state.showOptions }));
  };

  const updateValue = (value) => {
    setState((p) => ({ ...p, showOptions: false, value }));
  };

  if (!icon) {
    icon = (
        <BsFillCaretDownFill color="black"/>
    );
  }

  return (
    <div className="mt-1 relative">
      <input type="hidden" name={name} value={state.value} />
      <button
        type="button"
        className={
          state.showOptions
            ? "  relative w-full bg-slate-50  rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default outline-none "
            : "  relative w-full text-gray-600  focus:border-indigo-500 bg-slate-50 rounded-md border pl-3 pr-10 py-3 text-left cursor-default sm:text-lg"
        }
        onClick={handleClick}
      >
        <span className="flex items-center">
          <span className="ml-3 block truncate">{state.value}</span>
        </span>
        {/* down-arrow */}
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {icon}
        </span>
      </button>
      {state.showOptions && (
        <div className="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg">
          <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-lg">
            {options.map((option, idx) => (
              <SelectOption
                key={idx}
                value={option}
                active={state.value === option}
                updateValue={updateValue}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function Dropdown() {
  // const [options, setOption] = useState(['op1','op2','te1']);
  // const [coins, setCoins]=useState([]);

  return (
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="w-48">
          {/* <Multiselect
            isObject={false}
            options={ cryptocoins.map((crypto)=> crypto.name)  }
            onRemove={(event)=>{console.log(event)}}
            onSelect={(event)=>{console.log(event)}}

            showCheckbox

          /> */}
          <Select options={cryptocoins.map((crypto)=> crypto.name) } />
        </div>
      </div>
  );
}

export default Dropdown;
