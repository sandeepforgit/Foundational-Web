import { useState } from "react";


function Counter(){
  let [count, setCount] = useState(10);
  function add(){
    setCount(count + 1);
  }
  function sub(){
    setCount(count - 1);
  }
  return(
    <div>
      <div style={{display: "flex", justifyContent:"center"}}><h1>{count}</h1></div>
      <div style={{display:"flex", justifyContent: "center", gap:20}}>
        <button onClick={add}>Increment </button>
        <button onClick={sub}>Decrement</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
   <h1>Hello React!</h1>
   <Counter/>
   </>
  );
}

export default App;
