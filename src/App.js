import React from'react';
import './App.css';
import Mycomponent from './Mycomponent';

function App() {
  return (
<div>
  <h3 style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    background:"linear-gradient(to  right, #33ccff, #ff99cc)"
  }}>
     <Mycomponent/>
  </h3>
</div>
  );
}

export default App;


