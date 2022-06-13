import React, {useState, useEffect, Fragment, useContext} from "react";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import AuthContext from "../store/auth-context";

const Index = () => {
  const {isSignIn} = useContext(AuthContext);
  console.log("isSignIn: ", isSignIn);

  return <Fragment>{isSignIn ? <AppRoutes /> : <AuthRoutes />}</Fragment>;
};

export default Index;
