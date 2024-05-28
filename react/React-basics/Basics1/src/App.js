import { useState } from "react";


function Count(){  
  const [count, setCount] = useState(1);
  
  const add = () => {
    setCount(count+1)
  }
  return(
    <div>
      <button onClick={add}>Count: {count}</button>
    </div>
  );
}

function App() {
  return (
    <>
   <Count/>
   <Count/>
   <Count/>
   </>
  );
}

export default App;
