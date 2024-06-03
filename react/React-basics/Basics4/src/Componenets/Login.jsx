import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext/CreateContext';

function Login() {
    const [UserName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const submitHandle = (e) => {
        e.preventDefault();
        setUser({UserName,password});
    }
  return (
    <div class="mb-10 mt-20 mr-48 ml-48  bg-slate-500 rounded-sm shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <h1 class="text-center p-5 font-bold text-gray-950">Login</h1>
        <div class="flex gap-5 pb-16 pl-56">
            <input type='text' value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder='UserName'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <button class="bg-gray-400 rounded-md w-16 p-1" onClick={submitHandle}>Submit</button>
        </div>
    </div>
  )
}

export default Login