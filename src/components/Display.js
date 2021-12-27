import React, { useEffect, useState } from 'react';

export default function Display() {
    const [currency, setCurrency] = useState(0);
    const [money, setMoney] = useState(1);
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetchData();
      }, []);

    async function fetchData() {
        const API_KEY = '7ad3c800-615e-11ec-86a5-ede06f411e3e';
        const API_LINK = 'https://freecurrencyapi.net/api/v2/latest?apikey=';
        let res = await fetch(API_LINK + API_KEY);
        let response = await res.json();
        console.log(response);
        setCurrency(response.data.VND);
    }

    function calculate(event) {
        setMoney(validate(event.target.value) / parseFloat(currency));
    }

    function validate(value) {
        if (!isNaN(value)) {
            return parseFloat(value);
        }
        if (value.includes('k')) {
            return parseFloat(value.replace('k', '000'));
            console.log(value.replace('k', '000'));
        }
        if (value.includes(' củ')) {
            return parseFloat(value.replace(' củ', '000000'));
        }
    }

    function submit() {
        setResult(money);
    }

    return (
        <div>
            <h1>Tỉ lệ của đồng VND là: {currency}</h1>
            <p>From VND to USD</p>
            <input 
            type = "text"
            className = "current"
            placeholder = ""
            onChange = {calculate}
            />
            <button onClick={submit}>Đổi tiền</button>
            <h1>Số tiền ước tính: {Math.round(result)}$</h1>
            <p>Số tiền chính xác {result}$</p>
        </div>
    );
}
