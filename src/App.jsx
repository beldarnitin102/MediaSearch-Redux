import React from "react";
import HomePage from "./pages/HomePage";
import Collectionpage from "./pages/Collectionpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <div className="min-h-screen  text-white  w-full bg-gray-950">
   <Navbar/>
    <Routes>

      <Route path = "/" element = {<HomePage/>} /> 
      <Route path = "/collection" element = {<Collectionpage/>} />
    </Routes>


    </div>
  );
}

export default App;
