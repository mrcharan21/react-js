import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import RadioButton from './RadioButton'
// import Dropdown from './Components/Dropdown'
// import CharacterCount from './Components/CharacterCount'
import DarkMode from './Components/DarkMode'
import Practice from './Components/Practice'
import TimerToggle from './Components/TimerToggle'
import FormWithMultipleFields from './Components/FormWithMultipleFields'
import ShowHidePassword from './Components/ShowHidePassword'
import ArrayState from './Components/ArrayState'
import ObjectState from './Components/ObjectState'
import MultipleStates from './Components/MultipleStates'
import Checkbox from './Components/Checkbox'
import Toggle from './Components/Toggle'
import InputField from './Components/InputField'
import App from './App.jsx'
import CountingApp from './Components/CountingApp.jsx'
import Counter from './Components/Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Checkbox /> */}
    {/* <ArrayState /> */}
    {/* <App /> */}
    {/* <Garage /> */}
    {/* <Counter /> 

     */}
     {/* <Practice /> */}
     {/* <DarkMode /> */}
     {/* <CharacterCount />  */}
     {/* <Dropdown /> */}
     {/* <RadioButton /> */}

         <CountingApp />
    <InputField />
    <Toggle /> 
    
    <MultipleStates />
    <ObjectState />
    <ArrayState /> 
     <ShowHidePassword /> 
     <FormWithMultipleFields />
     <TimerToggle />  
  </StrictMode>,
)
