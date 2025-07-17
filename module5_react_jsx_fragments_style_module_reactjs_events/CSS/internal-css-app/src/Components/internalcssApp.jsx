import React from 'react';
const name = 'charan';
const age = 23;
const dept = 'Cse';
const address = 'Reeya Road City center Rajkot';
const edu = 'Btech';

export default function InternalCss(){
    return(
        <>
        <div className='App'>
            <h1>Hii my name is {name} <br/> and my age is {age} <br/>i have completed my graudation form dep of {dept}<br/> from {address}<br/> in a {edu} {' '}</h1>
        </div>
        </>
    )
}

