import React, {useState, useEffect, Fragment} from "react";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
const isSignedIn = false;
const index = () => {
  return <Fragment>{isSignedIn ? <AppRoutes /> : <AuthRoutes />}</Fragment>;
};

export default index;
