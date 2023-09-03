import { createContext, useContext, useEffect, useState } from "react";
export const ContextoGlobal = createContext();

function ProveedorDatos(props) {
  const [monto, setmonto] = useState(0);
  const [tasa, settasa] = useState(0);
  const [bolivar, setbolivar] = useState(false);
  const [dolar, setdolar] = useState(false);
  const [verregistro, setverregistro] = useState(false);
  const enviarmonto = async () => {
    console.log(monto, tasa);
  };
  const activarbolivardolar = async (numero) => {
    if (numero === 1) {
      setbolivar(true);
      setdolar(false);
    } else {
      setdolar(true);
      setbolivar(false);
    }
  };
  return (
    <ContextoGlobal.Provider
      value={{
        setverregistro,
        verregistro,
        bolivar,
        dolar,
        activarbolivardolar,
        tasa,
        settasa,
        monto,
        setmonto,
        enviarmonto,
      }}
    >
      {props.children}
    </ContextoGlobal.Provider>
  );
}

export default ProveedorDatos;
