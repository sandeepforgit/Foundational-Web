import React from "react";
import { Link } from "react-router-dom";



function NavBar(){
    
    return(
        <>
        <div className="display flex justify-around items-center">
            <img class="w-36 h-10" src="https://ineuron.ai/images/ineuron-logo.png" alt="logo" />
            <ul class="display flex gap-7 p-3">
                <Link to='/'>Home</Link>
                <Link to="/about">about</Link>
                <Link to='/Contact'>Contact</Link>
                <button class="outline p-2">Login/SignUp</button>
            </ul>
            
            
        </div>
        
        </>
    )
}

export default NavBar