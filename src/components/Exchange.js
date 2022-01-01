import React, { useEffect, useState } from 'react';
import { validate }from '../process';

export default function Exchange() {
    const [rate, setRate] = useState(0);
    const [money, setMoney] = useState();
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetchData();
      }, []);

    async function fetchData() {
        const CURRENCY = ['VND', 'USD', 'EUR', 'BTC', 'ETC'];
        const API_KEY = '7ad3c800-615e-11ec-86a5-ede06f411e3e';
        const API_BASE = 'https://freecurrencyapi.net/api/v2/latest?apikey=';
        let res = await fetch(API_BASE + API_KEY + '&base_currency=' + CURRENCY[0]);
        let response = await res.json();
        console.log(response);
        setRate(response.data.USD);
    }

    function submit(event) {
        if (event.key === 'Enter') {
            setResult(Math.round(validate(event.target.value) * rate));
        }
    }

    function reversedSubmit(event) {
        if (event.key === 'Enter') {
            setMoney(Math.round(validate(event.target.value) / rate));
        }
    }

    return (
        <div>
            <p>From VND to USD</p>
            <input 
            className = 'exchange'
            type = "text"
            placeholder = "Nhập số tiền"
            value = {money}
            onChange = {event => setMoney(event.target.value)}
            onKeyPress = {submit}
            />
            <button className = 'exchange' onClick = {submit} >VND</button>
            <h2> = </h2>
            <input 
            className = 'exchange'
            type = "text"
            value = {result}
            onChange = {event => setResult(event.target.value)}
            onKeyPress = {reversedSubmit}
            />
            <button className = 'exchange' oneClick = {reversedSubmit} >USD</button>
            <p>Tỉ lệ {rate}</p>
            <p>1 VND đổi được {rate} USD</p>
            <p>1 USD đổi được {1 / rate} VND</p>
        </div>
    );
}
