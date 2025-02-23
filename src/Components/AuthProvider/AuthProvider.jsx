import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.init";


export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider()
const [loading, setLoading] = useState(true);
const [user,setUser]= useState(null)


const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};
const googleSignIn = () => {
  setLoading(true);

  return signInWithPopup(auth, googleProvider);
};
const logout = () => {
  setLoading(true);
  return signOut(auth);
};
const profileUpdate = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};


const info = {
  createUser,
  loading,
  user,
  googleSignIn,
  logout,
  signIn,
  profileUpdate,
 

};

useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

    if(currentUser){

      setUser(currentUser);
    }else{
      setUser(null)
    }
    setLoading(false)


    return () => {
      unSubscribe();
    };
  });
}, []);

    return (
        <AuthContext.Provider value={info}> {children}</AuthContext.Provider>
    );
}

export default AuthProvider