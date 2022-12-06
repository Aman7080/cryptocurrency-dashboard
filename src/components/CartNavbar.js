const CartNavbar = () => {
  return (
    <div className="container h-12 my-5 flex justify-around items-center bg-white">
      <div>
        <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
          1D
        </button>
        <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
          1W
        </button>
        <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
          1M
        </button>
        <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
          6M
        </button>
        <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
          1Y
        </button>
      </div>
      <div className="">
        <select
          defaultValue="crypto"
          className=" h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400"
        >
          <option value="crypto">Cryptocurrency</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="tether">Tether</option>
          <option value="solana">Solana</option>
        </select>
        <select
          defaultValue="chart"
          className=" h-8 w-24 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400"
        >
          <option value="chart">Chart type</option>
          <option value="barHorizontal">Bar Chart Horizantal</option>
          <option value="line">Line Chart</option>
          <option value="barVertical">Bar Chart Vertical</option>
        </select>
      </div>
    </div>
  );
};

export default CartNavbar;
