import React, {useState, useEffect} from 'react';
import {User} from "firebase";
import {AuthFirebase} from "services";
import {Spinner} from "components";

// We define our type for the context properties right here
type ContextProps = {
    authenticated: boolean,
    user : any
};

export const AuthContext = React.createContext<ContextProps>({
    authenticated : false,
    user : {}
});

interface ProviderProps {
    children : React.ReactChild
}

export const AuthProvider : React.FC<ProviderProps> = ({children}) => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser]                   = useState<object>({});
    const [loading, setLoading]             = useState<boolean>(false);

    useEffect(() => {
            setLoading(true);
            const fbAuth : any = new AuthFirebase();
            fbAuth.auth().onAuthStateChanged( async (user : User | null)  => {
                if (user){
                    let idTokenResult : any = await fbAuth.getIdTokenResult();
                    let status : string = idTokenResult.claims.status;
                    setAuthenticated(true);
                    setUser({...user, status });
                    setLoading(false);
                }else {
                    setAuthenticated(false);
                    setUser({});
                    setLoading(false);
                }
            })
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, user}}>
            {loading ? <Spinner spinning={true} tip={'connecting to the server ...'} /> : children}
        </AuthContext.Provider>
    )
};
