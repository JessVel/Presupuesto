import React, {useState, useEffect} from 'react';
import Pregunta from './componentes/Pregunta';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import ControlPresupuesto from './componentes/ControlPresupuesto';
import Footer from './componentes/Footer';


function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarpregunta, setMostrarPregunta ] = useState(true);
  const [ gastos, setGastos] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [ creargasto, setCrearGasto ] = useState(false);

  useEffect( () => {
    if(creargasto){

        setGastos([
          ...gastos,
          gasto
        ]);

        const presupuestoRestante = restante - gasto.cantidad;
        setRestante(presupuestoRestante);


        setCrearGasto(false);

    }
  }, [gasto, creargasto, gastos, restante]);



  return (

    <>

    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta ? 
          ( 
              <Pregunta setPresupuesto={setPresupuesto}
                        setRestante={setRestante}
                        setMostrarPregunta={setMostrarPregunta}

              />
          ) : 
          (
            <div className="row">
              <div className="one-half column">
                <Formulario  setGasto={setGasto}
                             setCrearGasto={setCrearGasto}
                
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos}
                />

                <ControlPresupuesto presupuesto={presupuesto}
                                    restante={restante}
                />
              </div>
            </div>
          ) }
        </div>
      </header>
    </div>
    <Footer />
    </>
  )
}

export default App;
