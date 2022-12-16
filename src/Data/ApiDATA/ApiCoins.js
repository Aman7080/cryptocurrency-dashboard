import axios from 'axios'
import { useState, useEffect } from 'react'

const ApiCoins = () => {
    const [cryptos, setCryptos] = useState()
    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        axios.get(url).then((Response) => {
            setCryptos(Response.data)
            // console.log(Response.data);
        })
    }, [])
    return (
        <div>
            {/* data example */}
            {/* { cryptos
                ? cryptos.map((crypto) => {
                    return <p>{crypto.name + "$" + crypto.current_price}</p>
                    console.log(cryptos.current_price);
                    // console.log(cryptos.name);
                })
                : null
            } */}
        </div>
    )
}

export default ApiCoins
