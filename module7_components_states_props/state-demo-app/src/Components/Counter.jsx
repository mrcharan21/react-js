import React, { useState } from 'react'

export default function Counter() {
    const [count , setCount] = useState(0);

  return (
    <>
    <div style={{margin : '200px ', textAlign: 'center'}}>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </>   
  )
}
/*steps  
 1st rfc import cheskovali 
 2nd manam useState import cheskovali 
 3rd manam function lopala oka variable teskovali adhi "const" ee const lo manam 
    1st em ithe app chesthamo example : count, text , ala emina undani 
    adhi teskovali endulo 

  count lo manam initial value petukovali example : 0 , "" , false , true , [] ila emina undochu
    4th manam dani kotha dynamic value update cheskovadaniki "setCount" use cheyali
    and array close [] cheysaka = useState( endulo manam chesthunna task update cheyali example  
      0 , "" , array ledha object ledha
    id kavachu , name kavachu , images kavachu , boolean value and number ledha string ani evi endulo petukovali  ) 
    example : const [count ,setCount] = useState( )

    5th manam function lo 
    deni taravatha return lopala 
    Em ithe html or jsx code endulo fragments lo raskovali

    and 
    endulo manam inline css echukovachu like style = {{ endulo css eg margin: '300px ', }}
    and 
    next button lo manam events update cheskovali like 
        <button onClick={() => setCount(count + 1)}>Increase</button>




*/