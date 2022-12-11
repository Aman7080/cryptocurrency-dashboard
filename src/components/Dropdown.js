import Select from "multiselect-react-dropdown";
import { cryptocoins } from "../Data/cryptocoins";
function Dropdown() {
  return (
      <div>
        <Select
          options={cryptocoins.map((crypto) => crypto.name)}
          isObject={false}
          onRemove={(event) => { console.log(event) }}
          onSelect={(event) => { console.log(event) }}
          showCheckbox
          
        />
      </div>
  );
}
export default Dropdown;
