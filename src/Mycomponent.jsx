import React, { useState } from 'react';

function Mycomponent(){
    
const[name, setname] = useState("");
const[age, setAge] = useState(0);
const[employed, setEmployed] = useState(false);

const updateName = () => {
setname("hassan");
   console.log(name)
  
}
const removeName = () =>{
    setname("");
    console.log(name)
}

const incrementAge = () => {
    setAge(age + 1);
}
const decrementAge = () => {
    setAge(age - 1);
}
const isEmployedStatus = () => {
    setEmployed(!employed);
   
}
const resetAge = () => {
    setAge(0);
}



return (
    <div>
      <p className='display'>This is a simple React component.</p>
      <p className='display'>Name : {name} </p>
      <button className='button'onClick={updateName}>setName</button>
      <button className='button'onClick={removeName}>removeName</button>

      <p className='display'>Age : {age} </p>
      <button className='button' onClick={incrementAge}>IncrementAge</button>
   <button className='button' onClick={resetAge}>resetAge</button>   <button className='button' onClick={decrementAge}>decrementAge</button>
      

      <p className='display'>isEmployed : {employed  ? "Yes" : "No"} </p>
      <button className='button' onClick={isEmployedStatus} >Toggle status</button>
    </div> 
);
}

export default Mycomponent;