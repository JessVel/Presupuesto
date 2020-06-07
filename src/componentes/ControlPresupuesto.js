import React from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helper';


const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 

        <>
        <div className="alert alert-primary">
            presupuesto: ${presupuesto}

        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: ${restante}

        </div>

        </>
     );
}

ControlPresupuesto.propTypes ={
    presupuesto:    PropTypes.number.isRequired,
    restante:       PropTypes.number.isRequired
}
 
export default ControlPresupuesto;