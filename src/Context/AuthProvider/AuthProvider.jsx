import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider() ;
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const registerUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoader(true);
        return signOut(auth)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }
   useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser);
        setLoader(false)
    })
    return () =>{
        unSubscribe();
    }
   },[])
    const authInfo = {
        user,
        loader,
        registerUser,
        signInUser ,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;