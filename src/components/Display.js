import React, { useEffect, useState } from 'react';

export default function Display() {
    const [rate, setRate] = useState(0);
    const [money, setMoney] = useState(1);
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

    function calculate(event) {
        setMoney(validate(event.target.value) * parseFloat(rate));
    }
    function reversedCalculate(event) {
        setMoney(validate(event.target.value) / parseFloat(rate));
    }

    function validate(value) {
        if (!isNaN(value)) {
            return parseFloat(value);
        }
        if (value.includes('k')) {
            return parseFloat(value.replace('k', '000'));
        }
        if (value.includes(' củ')) {
            return parseFloat(value.replace(' củ', '000000'));
        }
        if (value.includes('m')) {
            return parseFloat(value.replace('m', '000000'));
        }
        if(value.includes(',')) {
            return parseFloat(value.slice(',').join(''));
        }
    }

    function submit(event) {
        if (event.key === "Enter") {
            setResult(money);
        }
    }

    return (
        <div>
            <h1>App đổi tiền</h1>
            <p>From VND to USD</p>
            <input 
            type = "text"
            className = "current"
            placeholder = "Nhập số tiền"
            onChange = {calculate}
            onKeyPress={submit}
            />
            <button>VND</button>
            <h4> = </h4>
            <input 
            type = "text"
            className = "current"
            value={Math.round(result)}
            onChange = {reversedCalculate}
            onKeyPress={submit}
            />
            <button>USD</button>
            <p>Số tiền chính xác {result}$</p>
        </div>
    );
}
