import React from 'react'

const PortfolioExchange = () => {
  return (
    <div className="container  h-80 w-full  my-5 rounded-xl flex justify-between">
    <div className="portfolio h-80 w-6/12 border-2 border-gray-300 bg-white rounded-xl mr-5 flex justify-between">
      <div className="left block pl-16 w-1/2">
        <h3 className="po font-bold text-3xl mt-5">Portfolio</h3>
        <div className="graph border-2 mt-12 rounded-full h-56 w-56">
        </div>
      </div>
      <div className="right w-1/2 pl-12 pt-5">
          <div className="total flex">
            <div className="l">
              <h3 className="text-3xl text-slate-300">Total Value</h3></div>
            <div className="r text-3xl font-bold ml-3">$1000</div>
          </div>
          <div className="tether mt-16 flex">
            <div className="l bg-blue-600 rounded-full w-6 mt-1 h-6"></div>
            <div className="r ml-3 text-xl">Tehter</div>
          </div>
          <div className="luna mt-12 flex">
            <div className="l bg-pink-400 rounded-full w-6 mt-1 h-6"></div>
            <div className="r ml-3 text-xl">Luna</div>
          </div>
          <div className="ethereum mt-12 flex">
            <div className="l bg-green-300 rounded-full w-6 mt-1 h-6"></div>
            <div className="r ml-3 text-xl">Ethereum</div>
          </div>
      </div>
    </div>
    <div className="curency_exchange h-80 w-1/2 border-2 border-gray-300 bg-white rounded-xl">

    </div>
  </div>
  )
}

export default PortfolioExchange
