import { GiElectric } from "react-icons/gi";
import { useState, useEffect } from "react";

function LogoContainer() {
  const [theme, setTheme] = useState([null]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-stone-600 dark:outline-none dark:border-none flex justify-between shadow-md border ">
      <img
        className=" h-14 my-3 bg-white dark:bg-stone-600 px-10 rounded-2xl "
        src="/logo.png"
        alt="logo"
      ></img>

      <button
        onClick={handleThemeSwitch}
        className="bg-stone-900 dark:bg-stone-200 my-3 mr-16 font-poppins font-medium p-2 justify-around inline-flex rounded-full"
      >
        <span className="m-1 text-white dark:text-stone-900 text-4xl font-black">
            <GiElectric />
        </span>
        
      </button>
    </div>
  );
}

export default LogoContainer;
