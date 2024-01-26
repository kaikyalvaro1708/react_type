import { useContext } from 'react';

import { UserLoggedContext } from '../contexts/UserLogged';

export const useUserLogged = () => {
    const context = useContext(UserLoggedContext)
    return context
}