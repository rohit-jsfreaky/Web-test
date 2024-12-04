import React from "react";
import { NavHeader } from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Services from "./Components/Services";
import About from "./Components/About";
import Tasks from "./Components/Tasks";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <NavHeader />

      <Carousel />
      <div className="relative h-full w-full p-4">
        <Services />
      </div>
      <div className="relative h-full w-full bg-[#f8f9fa] p-4">

        <About/>
      </div>

      <div className="relative h-full w-full p-4">
        <Tasks/>
      </div>

      <div className="relative h-full w-full p-4">
        <Clients/>
      </div>

      <div className="relative h-full w-full bg-black">

        <Footer/>
      </div>
    </div>
  );
};

export default App;
