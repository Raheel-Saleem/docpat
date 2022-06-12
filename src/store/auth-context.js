import {useEffect, useContext, useState, createContext} from "react";

const AuthContext = createContext({
  isSignIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({children}) => {
  const [isSignIn, setSignIn] = useState(false);

  function handleLogin() {
    setSignIn(true);
  }
  function handleLogout() {
    setSignIn(false);
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isSignIn,
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
