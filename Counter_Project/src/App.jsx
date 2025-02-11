

import { useState } from 'react';
import './App.css'

function App() {
let  [Counter, setCounter] = useState(0)
// let Counter = 1

// const addValue = ()=>{
//   console.log("clicked",Counter); 
//   // Counter = Counter +1
//   setCounter(Counter + 1)
// }
const addValue = () => {
  if (Counter < 10) {
    setCounter(Counter + 1);
    console.log("clicked", Counter + 1);
  } else {                                      //upto 10
    console.log("Maximum limit reached!");
  }
};
const removeValue = () => {
  if (Counter > 0) {
    setCounter(Counter - 1);
    console.log("clicked" ,Counter -1); //upto 0
  } else {
    console.log("Maximum limit reached!");
  }
};

// const removeValue = ()=>{
//   setCounter(Counter - 1)
// }
  return (
    <>
    <h1>Hello React</h1>
    <h2> Counter value: {Counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
