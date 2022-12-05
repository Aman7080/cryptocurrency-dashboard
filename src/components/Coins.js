import React from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

const Coins = () => {
    return (
        <>
        <div className='mx-5'>
            <div className="w-80 h-20 py-4 px-4 rounded-xl bg-white ">
                <h2 className="text-xl font-semibold font-Roboto ">Cryptocurrency by market cap</h2>
            </div>
            <div className='coins bg-white rounded-xl  w-80 h-full overflow-y-auto  no-scrollbar'>
                <div className='coin-info flex justify-between bg-white mb-0.5 p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Tether</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex bg-white items-center'>
                        <p><RiArrowUpSFill size='2rem' color='green' /></p>
                        <h4 className='text-green-600 font-semibold'>2112%</h4>
                    </div>
                </div>
                
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Bitcoin</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex bg-white items-center'>
                        <p><RiArrowDownSFill size='2rem' color='red' /></p>
                        <h4 className='text-red-600 font-semibold'>212%</h4>
                    </div>
                </div>
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Bitcoin</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex bg-white items-center'>
                        <p><RiArrowDownSFill size='2rem' color='red' /></p>
                        <h4 className='text-red-600 font-semibold'>212%</h4>
                    </div>
                </div>
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Tether</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex items-center'>
                        <p><RiArrowUpSFill size='2rem' color='green' /></p>
                        <h4 className='text-green-600 font-semibold'>212%</h4>
                    </div>
                </div>
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Tether</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex items-center'>
                        <p><RiArrowUpSFill size='2rem' color='green' /></p>
                        <h4 className='text-green-600 font-semibold'>212%</h4>
                    </div>
                </div>
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Bitcoin</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex items-center'>
                        <p><RiArrowDownSFill size='2rem' color='red' /></p>
                        <h4 className='text-red-600 font-semibold'>212%</h4>
                    </div>
                </div>
                <div className='coin-info flex bg-white mb-0.5 justify-between p-5' >
                    <div className='coin-name '>
                        <h3 className='font-bold'>Bitcoin</h3>
                        <p className='text-sm text-slate-600'>Mkt.cap $198.432</p>
                    </div>
                    <div className='coin-rate flex items-center'>
                        <p><RiArrowDownSFill size='2rem' color='red' /></p>
                        <h4 className='text-red-600 font-semibold'>212%</h4>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Coins