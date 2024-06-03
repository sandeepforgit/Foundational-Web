
import Login from "./Componenets/Login";
import Profile from "./Componenets/Profile";
import ProvideUserContext from "./Context/UserContext/ProvideUserContext";



function App() {
  
  return (
    <ProvideUserContext>
      <div>
      <Login/>
      <Profile/>
      </div>
    </ProvideUserContext>
  );
}

export default App;
