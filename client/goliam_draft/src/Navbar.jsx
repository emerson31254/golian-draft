import { FaRegUser, LuShoppingCart } from "react-icons/fa";



export function Navbar(){
  return(
     <div className="navcontainer">
      <div className="logonav">
        <p>GOLIAM</p>
      </div>
      <div className="linksnav">
        <a href="#" className="Catalogo">Catalogo</a>
      </div>
     <div className="iconav">
      <FaRegUser></FaRegUser>
      <LuShoppingCart></LuShoppingCart>
      
      
     
     </div>
     </div>

  )

}