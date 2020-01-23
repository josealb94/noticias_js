import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={ e => actualizarState(e.target.value) }
        >
            {opciones.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
    
    return [state, SelectNoticias];
}
 
export default useSelect;