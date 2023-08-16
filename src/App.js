import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hotels from "./components/Hotels";
import Flights from "./components/Flights";
import Holidays from "./components/Holidays";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Places from "./components/Places";
import FlightCard from "./components/FlightCard";
import HotelCard from "./components/HotelCard";
import { useState } from "react";

function App() {
  const [showPlaces, setShowPlaces] = useState(false);

  return (
    <div className='App'>
      <Navbar setShowPlaces={setShowPlaces}/>
      {/* <HotelCard /> */}
      <Home />
      <About />
      <Hotels />
      <Flights />
      {/* <FlightCard /> */}
      {showPlaces ? <Places /> : <Holidays setShowPlaces={setShowPlaces} />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
