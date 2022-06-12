import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter as Router, Link, Navigate} from "react-router-dom";
import {useFormik} from "formik";
import LoaderContext from "../../store/loder-context";
import AuthContext from "../../store/auth-context";
import swal from "sweetalert";
import {success, fail, internalError} from "../../utils/alert-messages";
import server from "../../utils/server";
const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const loaderCtx = useContext(LoaderContext);
  const authCtx = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, onSubmitProps) => {
      console.log("form submit values", values);
      handleLogin(values);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  const handleLogin = async (data) => {
    try {
      const response = await server.post("/login", data);
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="content" style={{minHeight: "170px"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right" style={{margin: " 20px 0px"}}>
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          name="email"
                          className="form-control floating"
                          {...formik.getFieldProps("email")}
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          name="password"
                          className="form-control floating"
                          {...formik.getFieldProps("password")}
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="forgot-password.html">
                          Forgot Password ?
                        </Link>
                      </div>
                      {/* <Link to="/"> */}
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                        Login
                      </button>
                      {/* </Link> */}
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>

                      <div className="text-center dont-have">
                        Don’t have an account? <Link to="register.html">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
