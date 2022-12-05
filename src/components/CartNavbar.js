
const CartNavbar = () => {
    return (
        <div className="container h-12 my-5 flex content-around items-center bg-white">
            <div className="">
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1D</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1W</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1M</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">6M</button>
                <button className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1Y</button>
            </div>
            <div className="">
                <select name="" className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
                    <option value="">Bitcoin</option>
                    <option value="">Tether</option>
                    <option value="">Solana</option>
                </select>
                <select name="" className="w-12 h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
                    <option value="">Bar Chart</option>
                    <option value="">Line Chart</option>

                </select>
            </div>
        </div>
    )
}

export default CartNavbar
