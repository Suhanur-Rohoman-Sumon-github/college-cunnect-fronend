import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.console";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut,  updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AutheProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider
    const handleSinup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const handleSininWitheGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const handleUpdateProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };
    const handleLogout = () =>{
        signOut(auth)
    }
    
    useEffect(() => {
        const unsbsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsbsCribe()
        }
    }, [])

    const authInfo = {
        user,
        auth,
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