import { useContext } from "react";
import { ContextoGlobal } from "../contexto/contexto";
function Registrar() {
  const {
    setverregistro,
    verregistro,
    monto,
    setmonto,
    enviarmonto,
    settasa,
    tasa,
    activarbolivardolar,
    bolivar,
    dolar,
  } = useContext(ContextoGlobal);
  return (
    <>
      <div className="card">
        <h1>Registros</h1>
        <input
          type="number"
          placeholder="tasa"
          onChange={(e) => settasa(e.target.value)}
        />
        <div>
          <button
            className={bolivar ? "activado" : ""}
            onClick={() => activarbolivardolar(1)}
          >
            bolivar
          </button>
          <button
            className={dolar ? "activado" : ""}
            onClick={() => activarbolivardolar(2)}
          >
            Dolar
          </button>
        </div>
        <input
          type="number"
          placeholder="monto ..."
          onChange={(e) => setmonto(e.target.value)}
        />
        <button onClick={enviarmonto}>aceptar</button>
        <button onClick={() => setverregistro(true)}>ver registros</button>
      </div>
    </>
  );
}

export default Registrar;
