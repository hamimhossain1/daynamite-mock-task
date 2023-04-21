// import './App.css';

import AirlinesCard from "./components/AirlinesCard/AirlinesCard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AirlinesCard></AirlinesCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
