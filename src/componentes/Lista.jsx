import { useContext, useState } from "react";
import { ContextoGlobal } from "../contexto/contexto";

function Lista() {
 
    const {lista, eliminaritem, totaldolares, totalbolivares}= useContext(ContextoGlobal)
  return (
    <>
      <div className="card">
              <div className="visores">

                  <h3>Registros: {lista.length} </h3>
                  <h4>total dolares $: {totaldolares}</h4>
                  <h4>total bolivares Bs: {totalbolivares}</h4>

              </div>
      
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
