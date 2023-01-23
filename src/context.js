import items from './data.json'
import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

const initialState = {
    cart: items,
    total: 0,
    amount: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: 'Get_totals' })
    }, [state.cart])

    const remove = (id)=>{
        dispatch({type: 'Remove', payload: id})
    }

    const clearCart = (id)=>{
        dispatch({type: 'Clear_Cart', payload: id})
    }
    const toggleAmount = (id, type) =>{
        dispatch({type: 'Toggle_Amount', payload: {id, type}})
    }
    return (
        <AppContext.Provider value={{ ...state, remove, clearCart, toggleAmount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }