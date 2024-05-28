import { useState } from "react";


function List(){  
  const [arr, setArr] = useState([]);
  const [name, setName] = useState();
  const add = () => {
    setArr([...arr, name])
  }
  return(
    <div style={{display:"flex", justifyContent:"center"}} >
      <div style={{outline:"solid", width:"20cm", height:"10cm"}}>
        <h1 style={{textAlign: "center"}}>List</h1>
        <div style={{display:"flex", justifyContent: "center", gap:4}}>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
          <button onClick={add}>Add Value</button>
        </div>
        <ul style={{display:"grid", justifyContent:"center"}}>
          {arr.map((n) => <li>{n}</li>)}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
   
   <List/>
   </>
  );
}

export default App;
