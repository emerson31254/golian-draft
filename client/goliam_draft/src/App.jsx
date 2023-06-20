import "./App.css";
import { Oferta } from "./Oferta.jsx";
export {Oferta} from "./Oferta.jsx";

import { Navbar } from "./Navbar";
export {Navbar} from "./Navbar.jsx";
import { FaRegUser} from "react-icons/fa";

function App() {
  return (
  
    <div className="App">
      <Oferta></Oferta>
      <Navbar></Navbar>
      
      

    </div>
  );
}

export default App;
