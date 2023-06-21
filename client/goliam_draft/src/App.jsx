import "./App.css";
import { Oferta } from "./Oferta.jsx";
export {Oferta} from "./Oferta.jsx";

import { Navbar } from "./Navbar";
export {Navbar} from "./Navbar.jsx";

import { Hero } from "./Hero";
export {Hero} from "./Hero.jsx";




function App() {
  return (
  
    <div className="App">
      <Oferta></Oferta>
      <Navbar></Navbar>
      <Hero></Hero>
      
      
      

    </div>
  );
}

export default App;
