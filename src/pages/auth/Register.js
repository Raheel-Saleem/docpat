import React, {useEffect, useState, useContext} from "react";
import {BrowserRouter as Router, Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import LoaderContext from "../../store/loder-context";
import AuthContext from "../../store/auth-context";
import swal from "sweetalert";
import {success, fail, internalError} from "../../utils/alert-messages";
import server from "../../utils/server";
import axios from "axios";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
};

const Register = () => {
  const {startLoading, stopLoading} = useContext(LoaderContext);
  const {onLogin} = useContext(AuthContext);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values, onSubmitProps) => {
      handleSignup(values);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  const handleSignup = async (data) => {
    try {
      startLoading();
      const response = await server.post("/signup", data);
      const {phoneNo, ...user} = response.data;
      console.log("response: ", response);
      if (response.status >= 400 && response.status < 500) {
        swal(fail);
        return;
      }
      onLogin(user);
      navigate("/", {replace: true});
      stopLoading();
      swal({
        title: "Congratulations!",
        text: "Your acccount is successfully created!",
        icon: "success",
        button: "Okay!",
      });
    } catch (error) {
      stopLoading();
      swal("Opps", `${error.response.data}`, "error");
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
                      <h3>Register </h3>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                      <div className="row form-row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              {...formik.getFieldProps("firstName")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              {...formik.getFieldProps("lastName")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              {...formik.getFieldProps("email")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Password <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              {...formik.getFieldProps("password")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Phone no <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              {...formik.getFieldProps("phone")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <a className="forgot-link" href="login.html">
                          Already have an account?
                        </a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                        Signup
                      </button>
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
};

export default Register;
