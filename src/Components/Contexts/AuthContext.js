/* --------------------------------------- */
/*               DEPENDENCIES              */
/* --------------------------------------- */
// Packages
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// FIREBASE CONTANTS
import { authentification } from '../../Shared/Utils/firebase';

/* --------------------------------------- */
/*                USE AUTH                 */
/* --------------------------------------- */
const AuthContext = React.createContext();
export const useAuth = ()  => useContext(AuthContext);

function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        authentification.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);

            if (firebaseUser) {
                Navigate('/Chats');
            }
        })
    }, [user, Navigate])

    const value = { user };
    return (
    /* ************* RENDERING *********** */
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;