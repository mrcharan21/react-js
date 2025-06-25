import React from "react";

const a = 10;
const b = 20;
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;

export default function CalcApp() {
    return (
        <>
            <div className="app">
                <h2>Calculator App</h2>
                <p>Addition: {c}</p>
                <p>Subtraction: {d}</p>
                <p>Multiplication: {e}</p>
                <p>Division: {f}</p>
            </div>
        </>
    );
}