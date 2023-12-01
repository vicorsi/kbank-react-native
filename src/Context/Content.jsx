import { createContext, useState } from 'react';

export const Content = createContext({})

export const ContentProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const tokenReceived = (token) => {
        setToken(token)
    }

    return (

        <Content.Provider value={{ token, tokenReceived }}>
            {children}
        </Content.Provider>
    )
}