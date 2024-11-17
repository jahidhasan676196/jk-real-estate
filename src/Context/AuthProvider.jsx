import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState()
    console.log(user);
    // create account userRegister
    const userRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // userLogin
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const userSignOut=()=>{
      return  signOut(auth)
    }

    // signIn with Google

    const userGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }
    // onAuthStateChanged
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          })
          return ()=>{
            unsubscribe()
          }
    },[])
    const authInfo={
        user,
        setUser,
        userRegister,
        userLogin,
        userSignOut,
        userGoogle

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;