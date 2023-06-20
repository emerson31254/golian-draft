import { LuShoppingCart } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa';
import "./Navbar.css"


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
  <FaRegUser style={{ margin: '10px' }} />
  <LuShoppingCart style={{ margin: '10px' }} />
</div>

     </div>

  )

}