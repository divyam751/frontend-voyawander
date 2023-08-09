import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hotels from "./components/Hotels";
import Flights from "./components/Flights";
import Holidays from "./components/Holidays";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Hotels />
      <Flights />
      <Holidays />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
