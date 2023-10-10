import { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(token)
    }, [token]);
    
    const getUser = (token: string) => {
        api.get('/user/get-user', { headers: { Authorization: token } }).then(({ data }) => {            
            setUser(data.user);

            if(data.user) {
                setLogin(true);
            }
        }).catch((error) => {

        });
    };

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            setLogin(true);

            localStorage.setItem('token', data.token);
            setToken(data.token);

            getUser(data.token);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    };

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    };


    const signUp = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', { name, email, password }).then(({ data }) => {
            console.log(data.message);

            handleLogin(email, password);
        }).catch((error) => {
            console.log('Erro ao criar usuário', error);
        });
    };
    
    return(
        <UserContext.Provider value={{
            token,
            login,
            user,
            handleLogin,
            logOut,
            signUp
        }}>
            { children }
        </UserContext.Provider>
    )
};
