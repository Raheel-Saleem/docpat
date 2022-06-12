import React from "react";

const Register = () => {
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

                    <form action="https://doccure-laravel.dreamguystech.com/template/public/doctor-dashboard">
                      <div className="row form-row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Email <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Password <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Phone no <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
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
