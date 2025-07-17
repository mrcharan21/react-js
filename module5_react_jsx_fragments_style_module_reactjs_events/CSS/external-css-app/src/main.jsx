import  { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'animate.css';
import './assets/CSS/style.css';


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Layout/>
    </StrictMode>
)