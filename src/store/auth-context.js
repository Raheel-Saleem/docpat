import {useEffect, useContext, useState, createContext} from "react";

const AuthContext = createContext({
  isSignIn: false,
  user: {
    id: null,
    role: null,
    username: null,
    email: null,
    isProfileCompleted: null,
  },
  onLogin: (user) => {},
  onLogout: () => {},
});

const initialUser = {
  id: null,
  role: null,
  username: null,
  email: null,
  isProfileCompleted: null,
};
export const AuthContextProvider = ({children}) => {
  const [isSignIn, setSignIn] = useState(false);
  const [user, setUser] = useState(initialUser);

  function handleLogin(user) {
    setSignIn(true);
    setUser(user);
  }
  function handleLogout() {
    setSignIn(false);
    setUser(initialUser);
  }
  useEffect(() => {
    console.log("isSignIn: ", isSignIn);
    console.log("user: ", user);
  }, [isSignIn, user]);

  return (
    <>
      <AuthContext.Provider
        value={{
          isSignIn,
          user,
          onLogin: handleLogin,
          onLogout: handleLogout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthContext;
