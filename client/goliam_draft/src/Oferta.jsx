import "./Oferta.css";



export function Oferta(){
    
let contenall = document.getElementsByClassName("contenedoroferta");
function cerrar(){
  contenall.remove()
  console.log("HOL")
}


    return(
        <div className="contenedoroferta">
            <div className="contenido">
                <p>ENVIOS A TODA ESPAÑA  📦&#x1F1EA;&#x1F1F8;</p>
                </div>
                <div className="xc">
                <button class="xcerrar" OnClick={cerrar}>X</button>
                </div>
                
            
        </div>
        
        
    )
}