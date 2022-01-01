import React, { useState } from "react";
import { validate } from "../process";

export default function Interest() {
    const [currentMoney, setCurrentMoney] = useState();
    const [rate, setRate] = useState();
    const [term, setTerm] = useState();
    const [finalMoney, setFinalMoney] = useState(0);

    function calculate() {
        let final = currentMoney * Math.pow(term, rate);
        setFinalMoney(final);
    }

    return (
        <div>
            <h1>Test</h1>
            <input 
            type = 'text'
            placeholder = 'Nhập số tiền gửi ban đầu'
            value = {currentMoney}
            onChange = {event => setCurrentMoney(event.target.value)}
            />
            <input 
            type = 'text'
            placeholder = 'Nhập lãi suất'
            value = {rate}
            onChange = {event => setRate(event.target.value)}
            />
            <input 
            type = 'text'
            placeholder = 'Nhập kì hạn'
            value = {term}
            onChange = {event => setTerm(event.target.value)}
            />
            <button onClick={calculate}>Tính lãi đơn</button>
            <p>{finalMoney}</p>
        </div>
    );
}