
const CartNavbar = () => {
    return (
        <div className="container h-12 my-5 flex justify-around items-center bg-white">
            <div className="">
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1D</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1W</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1M</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">6M</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1Y</button>
            </div>
            <div className="">
                <select className=" h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
                    <option selected value='Cryptocurrency'>Cryptocurrency</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Tether">Tether</option>
                    <option value="Solana">Solana</option>
                </select>
                <select className=" h-8 w-24 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
                    <option selected>Chart type</option>
                    <option value="Bar Chart Horizantal">Bar Chart Horizantal</option>
                    <option value="Line Chart">Line Chart</option>
                    <option value="Bar Chart Vertical">Bar Chart Vertical</option>
                </select>
            </div>
        </div>
    )
}

export default CartNavbar
