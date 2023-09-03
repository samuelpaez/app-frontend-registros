import { useContext, useState } from "react";
import { ContextoGlobal } from "../contexto/contexto";

function Lista() {
 
    const {lista, eliminaritem}= useContext(ContextoGlobal)
  return (
    <>
      <div className="card">
                  <h3>Registros: {lista.length} </h3>
      {
        lista.map((e,i)=> <div key={i} className="card item-lista"> 
          <p>Bs: {e.dinerobolivar.toFixed(2)}</p>
          <p>$:{e.dinerodolar.toFixed(2)}</p>
          <button onClick={()=> eliminaritem(e._id)}>eliminar</button>
          </div>)
      }
      </div>
    </>
  );
}
export default Lista;
