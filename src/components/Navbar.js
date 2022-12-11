import { BsFillCaretDownFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../state/features/currency";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.defaultCurrency)[0];

  //const [currency, setCurrency] = useState("usd");
  // useEffect(() => dispatch(changeCurrency(currency)), [currency]);
  return (
    <div className="w-full max-sm:w-full  font-['Poppins'] flex justify-between my-4">
      <div className="relative">
        <select
          value={currency}
          onChange={(e) => dispatch(changeCurrency(e.target.value))}
          className="h-14 max-sm:w-26 shadow-md hover:duration-300 hover:shadow-xl bg-white rounded-xl appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-600 text-base pl-5 pr-14"
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-black font-black pointer-events-none flex items-center justify-center">
          <BsFillCaretDownFill />
        </span>
      </div>
      <SearchBar />
    </div>
  );
}
