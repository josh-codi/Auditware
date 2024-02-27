import React, { useReducer } from 'react'
import Reducer from './Reducer'
import Data from './Data'
import Context from './Context'

function StoreProvider({children}) {
    const [store, setStore] = useReducer(Reducer, Data)

    return <Context.Provider value={{store, setStore}}>{children}</Context.Provider>
}


export default StoreProvider