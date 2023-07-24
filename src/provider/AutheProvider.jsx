import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.console";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut,  updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AutheProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider
    const handleSinup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const handleSininWitheGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const handleUpdateProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };
    const handleLogout = () =>{
        setLoading(true)
        signOut(auth)
    }
    
    useEffect(() => {
        const unsbsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsbsCribe()
        }
    }, [])

    const authInfo = {
        user,
        auth,
        loading,
        handleSinup,
        handleLogin,
        handleSininWitheGoogle,
        handleUpdateProfile,
        handleLogout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutheProvider;