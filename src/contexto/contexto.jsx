import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const ContextoGlobal = createContext();

function ProveedorDatos(props) {
  let url = "https://app-registros-backend.onrender.com/";
  let url2 = "http://localhost:3000/";
  const [lista, setlista] = useState([]);
  const [monto, setmonto] = useState(0);
  const [tasa, settasa] = useState(0);
  const [bolivar, setbolivar] = useState(false);
  const [dolar, setdolar] = useState(false);
  const [verregistro, setverregistro] = useState(false);
  const [ano, setano] = useState(0);
  const [mes, setmes] = useState("");
  const [totaldolares, settotaldolares] = useState(0);
  const [totalbolivares,settotalbolivares] = useState(0)
  const eliminaritem = async (id) => {
    const eliminar = await axios.post(url + "eliminar", {
      id,
    });
    console.log(eliminar);
    setlista(eliminar.data);
  };
  const buscarregistros = async () => {
    const buscar = await axios.post(url + "buscar", {
      ano,
      mes,
    });
    if (buscar.data.length === 0) {
      alert("no hay registros");
      return;
    }
    console.log(buscar.data);
    setlista(buscar.data);
  };

  const enviarmonto = async () => {
    if (tasa === "" || tasa === 0) {
      alert("debes ingresar una tasa");
      return;
    }
    if (monto === "" || monto === 0) {
      alert("debes ingresar monto");
      return;
    }

    console.log(monto, tasa);
    const enviar = await axios.post(url + "enviarmonto", {
      dinerobolivar: bolivar ? monto : tasa * monto,
      dinerodolar: dolar ? monto : monto / tasa,
    });
    console.log(enviar);
    if (enviar.status === 200) {
      alert("registros exitoso");
    } else {
      alert("error de registro");
    }
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

  const sumartotales = async () => {
    let sumadolar = 0;
    let sumabolivar = 0;
    lista.map((e) => {
      sumabolivar = sumabolivar + e.dinerobolivar;
      sumadolar = sumadolar + e.dinerodolar;
    });
    settotaldolares(sumadolar);
    settotalbolivares(sumabolivar)
  };
  useEffect(() => {
    sumartotales();
  }, [lista]);
  return (
    <ContextoGlobal.Provider
      value={{
        totalbolivares,
        totaldolares,
        eliminaritem,
        lista,
        setlista,
        buscarregistros,
        ano,
        setano,
        mes,
        setmes,
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
