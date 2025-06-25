import React from "react";

const name = 'charan';
const age = 25;
const address = 'Hyderabad';

function EmployeeApp() {
    return(
        <>
        <div className="app">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
        </div>
        </>
    );
}

export default EmployeeApp;