import React, { useState } from "react";

export default function Interest() {
    const [currentMoney, setCurrentMoney] = useState();
    const [finalMoney, setFinalMoney] = useState(0);

    function calculate() {

    }

    return (
        <div>
            <h1>Test</h1>
            <input 
            type = 'text'
            placeholder = 'Nhập số tiền gửi ban đầu'
            />
            <input 
            type = 'text'
            placeholder = 'Nhập lãi suất'
            />
            <input 
            type = 'text'
            placeholder = 'Nhập kì hạn'
            />
            <button>Tính lãi đơn</button>
        </div>
    );
}