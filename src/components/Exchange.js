import React, { useEffect, useState } from 'react';

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
            setResult(Math.round(validate(event.target.value) * parseFloat(rate)));
        }
    }

    function reversedSubmit(event) {
        if (event.key === 'Enter') {
            setMoney(Math.round(validate(event.target.value) / parseFloat(rate)));
        }
    }

    function validate(value) {
        if (!isNaN(value)) {
            return parseFloat(value);
        }
        if (value.includes('k')) {
            return parseFloat(value.replace('k', '000'));
        }
        if (value.includes(' lít')) {
            return parseFloat(value.replace(' lít', '000'));
        }
        if (value.includes(' củ')) {
            return parseFloat(value.replace(' củ', '000000'));
        }
        if (value.includes('m')) {
            return parseFloat(value.replace('m', '000000'));
        }
        /*
        if(value.includes(',')) {
            return parseFloat(value.slice(',').join(''));
        }
        */
        alert("Nhập sai!");
        return 0;
    }

    return (
        <div>
            <p>From VND to USD</p>
            <input 
            type = "text"
            placeholder = "Nhập số tiền"
            value = {money}
            onChange = {event => setMoney(event.target.value)}
            onKeyPress={submit}
            />
            <button onClick = {submit} >VND</button>
            <h2> = </h2>
            <input 
            type = "text"
            value={result}
            onChange = {event => setResult(event.target.value)}
            onKeyPress={reversedSubmit}
            />
            <button oneClick = {reversedSubmit} >USD</button>
            <p>Tỉ lệ {rate}</p>
            <p>1 VND đổi được {rate} USD</p>
            <p>1 USD đổi được {1 / rate} VND</p>
        </div>
    );
}
