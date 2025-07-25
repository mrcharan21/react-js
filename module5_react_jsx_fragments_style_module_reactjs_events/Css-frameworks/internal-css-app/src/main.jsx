import { StrictMode } from "react";
import  {createRoot} from 'react-dom/client';
import InternalCss from "./Components/internalcssApp";

createRoot(document.getElementById('root')).render(
    <>
    <InternalCss />
    </>
)