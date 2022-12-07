import { useState } from "react"

const CartNavbar = () => {
    const [currentChart, setCurrentChart] = useState('line');
    console.log('curr chart',currentChart);
    const changeHandler = (e) => {
        console.log('e is',e);
    }
    return (
        <div className="container h-12 my-5 flex justify-around items-center bg-white">
            <div className="">
                <button className="w-12 h-10 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1D</button>
                <button className="w-12 h-10 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1W</button>
                <button className="w-12 h-10 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1M</button>
                <button className="w-12 h-10 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">6M</button>
                <button className="w-12 h-10 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">1Y</button>
            </div>
            <div className="">
                <select className=" h-8 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400">
                    <option selected value='Cryptocurrency'>Cryptocurrency</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Tether">Tether</option>
                    <option value="Solana">Solana</option>
                </select>
                <select className=" h-8 w-24 rounded-md mx-1 bg-slate-50 text-slate-500 hover:border-2 border-cyan-400  hover:text-cyan-400" onChange={changeHandler}>
                    <option selected>Chart type</option>
                    <option value="bar">Bar xxxxx Chart Horizantal</option>
                    <option value="line">Line Chart</option>
                    <option value="Barv">Bar Chart Vertical</option>
                </select>
            </div>
        </div>
    )
}

export default CartNavbar
