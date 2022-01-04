import React, { useEffect, useState } from 'react';

export default function Home() {
    const [btc, setBtc] = useState(0);
    const [eth, setEth] = useState(0);

    useEffect(() => {
        getData();
      }, []);

    async function getData() {
        const API_KEY = '7ad3c800-615e-11ec-86a5-ede06f411e3e';
        const API_BASE = 'https://freecurrencyapi.net/api/v2/latest?apikey=';
        let res = await fetch(API_BASE + API_KEY);
        let response = await res.json();
        console.log(response);
        setBtc(response.data.BTC);
        setEth(response.data.ETH);
    }

    return (
        <div className="home">
            <h1>Tỉ giá crypto</h1>
            <p>(Có vẻ khá sai)</p>
            <table align = 'center' >
                <tr>
                    <th>Crypto</th>
                    <th>Giá</th>
                </tr>
                <tr>
                    <td>BTC</td>
                    <td>{Math.round(1 / btc * 1000)} USD</td>
                </tr>
                <tr>
                    <td>ETH</td>
                    <td>{Math.round(1 / eth)} USD</td>
                </tr>
            </table>
        </div>
    );
}