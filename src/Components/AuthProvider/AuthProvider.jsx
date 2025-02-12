import PropTypes from "prop-types";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";

import app from "../../Firebase/firebase.config";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

// creating context
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // loading state
  const [loading, setLoading] = useState(true);

  // user information storing
  const [user, setUser] = useState(null);

  // creating user with email and password
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out function
  const handleLogOut = () => {
    return signOut(auth);
    // .then(() => {
    //   // console.log(data);
    //   toast.info("Successfully log out");
    // })
    // .catch((error) => console.log(error.message));
  };

  // update profile
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("capture state", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post(`${import.meta.env.VITE_url}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_url}/logout`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log("logout", res.data);
            setLoading(false);
          });
      }

      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogOut,
    manageProfile,
    user,
    setUser,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
