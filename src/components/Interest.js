import React, { useState } from "react";
import { validate } from "../process";

export default function Interest() {
    const [currentMoney, setCurrentMoney] = useState();
    const [rate, setRate] = useState();
    const [term, setTerm] = useState();
    const [finalMoney, setFinalMoney] = useState(0);

    function calculate() {
        let final = validate(currentMoney) * Math.pow(term, rate);
        setFinalMoney(final);
    }

    return (
        <div>
            <h1>Test</h1>
            <input
            className = 'interest'
            type = 'text'
            placeholder = 'Nhập số tiền gửi ban đầu'
            value = {currentMoney}
            onChange = {event => setCurrentMoney(event.target.value)}
            />
            <input 
            className = 'interest'
            type = 'text'
            placeholder = 'Nhập lãi suất'
            value = {rate}
            onChange = {event => setRate(event.target.value)}
            />
            <input 
            className = 'interest'
            type = 'text'
            placeholder = 'Nhập kì hạn'
            value = {term}
            onChange = {event => setTerm(event.target.value)}
            />
            <button className = 'interest' onClick={calculate}>Tính lãi đơn</button>
            <button className = 'interest' onClick={calculate}>Tính lãi kép</button>
            <h1>{finalMoney}</h1>
        </div>
    );
}