import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";


// social provider
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
    

  // create Account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed",currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};
      setUser(currentUser);
      setLoading(false);
      // if user exists then issue a token
      if(currentUser){
        
            axios.post("https://react-heaven-hearth-server.vercel.app/jwt",loggedUser,{withCredentials: true})
            .then(res => {
              console.log( res.data);
            })
      }
      else{
        axios.post('https://react-heaven-hearth-server.vercel.app/logout',loggedUser,{withCredentials: true})
        .then(res =>{
          console.log(res.data)
        })
      }
    });
    return () => {
      return unSubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);



  const authInfo ={
    createUser,
    setReload,
    loading,
    user,
    signIn,
    logOut,
    googleLogin
  };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;