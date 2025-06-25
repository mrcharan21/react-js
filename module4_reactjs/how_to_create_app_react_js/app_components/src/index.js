import React from "react";
import ReactDOM from "react-dom/client";
import EmployeeApp from "./components/EmployeeApp";
import CalcApp from "./components/CalcApp";
import ContactUs from "./components/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
       <EmployeeApp />
       <CalcApp />
       <ContactUs />
    </React.StrictMode>

)