import items from './data.js'
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
    }, [])
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }