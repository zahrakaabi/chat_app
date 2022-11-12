/* --------------------------------------- */
/*               DEPENDENCIES              */
/* --------------------------------------- */
// Packages
import { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// FIREBASE CONTANTS
import { authentification } from '../../Shared/Utils/firebase';

/* --------------------------------------- */
/*                USE AUTH                 */
/* --------------------------------------- */
const AuthContext = React.createContext();
export const useAuth = ()  => useContext(AuthContext);

// react children will render all the css pass into this provider
function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        authentification.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
            history.push('/Chats')
        })
    }, [user, history])

    const value = { user };
    return (
    /* ************* RENDERING ********** */
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;