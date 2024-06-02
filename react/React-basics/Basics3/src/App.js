import { useEffect, useState } from "react";
import NavBar from "./Componenets/NavBar/NavBar";
import Card from "./Componenets/Cards/Card";
import { Outlet } from "react-router-dom";



function App() {
  
  return (
    <>
    <div class="text-center bg-slate-500 text-white font-medium text-xl">For Educational Purposes Only</div>
    <NavBar/>
    <Outlet/>
    <div class="flex pl-20">
      <Card img={<img class ="w-10" src="https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics1.png&w=96&q=75" alt="" />} n={<p class="text-xl font-bold">55%</p>} p={<p>Average Salary Hike</p>} />
      <Card img={<img class ="w-10" src="https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics2.png&w=96&q=75" alt="" />} n={<p class="text-xl font-bold">400+</p>} p={<p>Different Courses</p>} />
      <Card img={<img class ="w-10" src="https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics3.png&w=96&q=75" alt="" />} n={<p class="text-xl font-bold">10000+</p>} p={<p>Career Transitions</p>} />
      <Card img={<img class ="w-10" src="https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics4.png&w=96&q=75" alt="" />} n={<p class="text-xl font-bold">400+</p>} p={<p>Hiring Partners</p>} />
    </div>
   </>
  );
}

export default App;
