import "./App.css";
import Navbar from "./components/Navbar";

import AllRoutes from "./router/AllRoutes";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
