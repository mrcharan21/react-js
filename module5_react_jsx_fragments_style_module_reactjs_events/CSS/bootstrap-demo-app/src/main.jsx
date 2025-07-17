import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import 'react-icons';
import './assets/css/style.css';
import App from './App';


createRoot(document.getElementById('root')).render(
<StrictMode>
<App />
</StrictMode>
)
