import React,{useState} from 'react'

export default function RadioButton() {
    const[gender, setGender] = useState("")
  return (
    <>
    <input type="radio" value="Male" name='gn ' onChange={(e)=>setGender(e.target.value)} />Male
    <input type="radio" value="Female" name="g" onChange={(e)=>setGender(e.target.value)}/>Female

    <p>Selected : {gender}</p>
    </>
)
}
