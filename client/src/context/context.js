import React, { useContext, useReducer, useState, useEffect } from 'react'
import reducer from './reducer'
import fetchBlogs from '../action/fetchBlogs'

const initialState = {
    user: null,
    isFetching: false,
    error: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        setBlogs(fetchBlogs())
    }, [])

    return (
        <AppContext.Provider 
            value={{
                //user,
                //isFetching,
                //error,
                blogs,
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };