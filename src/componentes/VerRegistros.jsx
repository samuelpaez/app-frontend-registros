import { useContext } from "react";
import { ContextoGlobal } from "../contexto/contexto";

function VerRegistros() {
    const{verregistro,setverregistro, setmes,setano, buscarregistros} = useContext(ContextoGlobal)
return <>
        <div className="card">
            <button
                onClick={()=> setverregistro(false)}
            >ocultar registros</button>
            <input type="number" placeholder="año.." onChange={e=> setano(e.target.value)} />
            <select
          name=""
          id=""
          onChange={(e) => setmes(e.target.value)}
          className="opciones"
        >
          <option value="enero">enero</option>
          <option value="febrero">febrero</option>
          <option value="marzo">marzo</option>
          <option value="abril">abril</option>
          <option value="mayo">mayo</option>
          <option value="junio">junio</option>
          <option value="julio">julio</option>
          <option value="agosto">agosto</option>
          <option value="septiembre">septiembre</option>
          <option value="octubre">octubre</option>
          <option value="noviembre">noviembre</option>
          <option value="diciembre">diciembre</option>
        </select>
        <button onClick={buscarregistros} >aceptar</button>
        </div>
  </>;
}

export default VerRegistros;
