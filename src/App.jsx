import { useContext } from "react";
import { ContextoGlobal } from "./contexto/contexto";
import Registrar from "./componentes/Registrar";
import VerRegistros from "./componentes/VerRegistros";
import Lista from "./componentes/Lista";
function App() {
  const { verregistro } = useContext(ContextoGlobal);
  return (
    <>
      {verregistro ? (
        <>
          <VerRegistros></VerRegistros>
        </>
      ) : (
        <>
          <Registrar></Registrar>
        </>
      )}

      <Lista> </Lista>
    </>
  );
}

export default App;
