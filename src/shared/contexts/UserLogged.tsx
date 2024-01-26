import { createContext, useCallback, useState, useEffect } from "react";

interface IUserLoggedData {
    name: string,
    logout: () => void,
}

interface IUserLoggedProps {
    children: React.ReactNode
}


export const UserLoggedContext = createContext<IUserLoggedData>({} as IUserLoggedData);

export const UserLoggedContextProvider: React.FC<IUserLoggedProps> = ({ children }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setName('Kaiky')
        }, 1000)
    })
    const handleLogout = useCallback(() => {
        console.log('Logout executou')
    }, [])

    return(
        <UserLoggedContext.Provider value={{ name: name, logout: handleLogout}}>
            {children}
        </UserLoggedContext.Provider>
    )
}