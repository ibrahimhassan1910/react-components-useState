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



return (
    <div>
      <p>This is a simple React component.</p>
      <p>Name : {name} </p>
      <button onClick={updateName}onPointerOver={updateName}>setName</button>
      <button onClick={removeName}onPointerOver={removeName}>removeName</button>

      <p>Age : {age} </p>
      <button onClick={incrementAge}onPointerOver={incrementAge}>IncrementAge</button>
      <button onClick={decrementAge}onPointerOver={decrementAge}>decrementAge</button>

      <p>isEmployed : {employed  ? "Yes" : "No"} </p>
      <button onClick={isEmployedStatus} onPointerOver={isEmployedStatus}>Toggle status</button>
    </div> 
);
}

export default Mycomponent;