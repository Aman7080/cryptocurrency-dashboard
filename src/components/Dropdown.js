import Select from "multiselect-react-dropdown";
import { cryptocoins } from "../Data/cryptocoins";
// import { BsFillCaretDownFill } from "react-icons/bs";

function Dropdown() {
  return (
      <div>
        <Select
          options={cryptocoins.map((crypto) => crypto.name)}
          isObject={false}
          onRemove={(event) => { console.log(event) }}
          onSelect={(event) => { console.log(event) }}
          showCheckbox
          closeOnSelect
          // hidePlaceholder 
          placeholder="Cryptocurrency"
          showArrow
          selectionLimit={2}
          className="bg-slate-50 text-lg "
          
          // myFontSize="100px"
        />
      </div>
  );
}
export default Dropdown;
