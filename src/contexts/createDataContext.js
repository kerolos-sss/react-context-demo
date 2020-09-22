import React, {  createContext, useReducer } from 'react'

export const createDataContext = (reducer, actions, initialValue) => {
    const Context = createContext(initialValue);
    
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer);

        const boundActions = {};
        for(const key in actions){
            boundActions[key] = actions[key](dispatch);
        }
        
        // this value is received by the useContext react hook
        return <Context.Provider value={{state, ...boundActions}}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider}   
}