import { useState } from "react";
import axios from "axios";
import Card from "./card";




function App() {
  const [details, setdetails] = useState([]); 
  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api");
    const details = data.results[0]; 
    setdetails(details);
  }
  return (
    <>
    <Card data = {details}/>
    <div style={{display:"grid", justifyContent:"center"}}>
   
   <button onClick={fetchDetails}>details</button>
   </div>
   </>
  );
}

export default App;
