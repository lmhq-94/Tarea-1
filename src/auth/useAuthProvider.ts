import { useState } from "react";
import fakeAuth from "./fakeAuth";

export interface IUseAuthProvider {
    signIn: (cb: () => void) => void;
    signOut: (cb: () => void) => void;
    username: null | string
    password: null | string
}

const useAuthProvider = () => {
    const [username, setUserName] = useState<null | string>(null);
    const [password, setPassword] = useState<null | string>(null);

    const signIn = (cb : () => void) => {
        fakeAuth.signIn(() => {
            setUserName('lmhq94@hotmail.com');
            setPassword('Lmhq_1994');
        });
    };

    const signOut = (cb : () => void) => {
        fakeAuth.signOut(() => {
            setUserName(null);
            setPassword(null);
        });
    };

    return{
        username,
        password,
        signIn,
        signOut
    }

};

export default useAuthProvider;