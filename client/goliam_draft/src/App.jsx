import "./App.css";
import { Oferta } from "./Oferta.jsx";
export {Oferta} from "./Oferta.jsx";

import { Navbar } from "./Navbar";
export {Navbar} from "./Navbar.jsx";
import { FaRegUser  , LuShoppingCart } from "react-icons/fa";
function App() {
  return (
  
    <div className="App">
      <Oferta></Oferta>;
      <FaRegUser></FaRegUser>
      <uShoppingCart></uShoppingCart>

    </div>
  );
}

export default App;
