import React, { useState } from "react";
import { validate, processResult } from "../process";

export default function Interest() {
    const [currentMoney, setCurrentMoney] = useState();
    const [rate, setRate] = useState();
    const [term, setTerm] = useState();
    const [finalMoney, setFinalMoney] = useState(0);

    function simpleCalculate() {
        setFinalMoney(validate(currentMoney) * Math.pow(term, rate));
    }
    
    return (
        <div>
            <h1>Tính lãi đơn</h1>
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
            <button className = 'interest' onClick={simpleCalculate}>Tính lãi</button>
            <p>{processResult(Math.round(finalMoney))}</p>
        </div>
    );
}