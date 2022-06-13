import React, {useContext} from "react";
import {BrowserRouter as Router, Link, useNavigate} from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Navbar = () => {
  const {isSignIn, onLogout, onLogin} = useContext(AuthContext);
  let navigate = useNavigate();

  function handleLogin() {
    navigate("login", {replace: true});
  }
  function handleLogout() {
    navigate("login", {replace: true});
    onLogout();
  }
  return (
    <div>
      <>
        <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand logo">
                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                </Link>
                <Link id="menu_close" className="menu-close" to="javascript:void(0);">
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Doctors</Link>
                  <ul className="submenu">
                    <li className="">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Patients</Link>
                </li>

                <li>
                  <Link to="#">Admin</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital"></i>
                </div>

                <li className="nav-item" onClick={isSignIn ? handleLogout : handleLogin}>
                  <Link className="nav-link header-login" to="#">
                    {isSignIn ? "Logout" : "Login"}
                  </Link>
                </li>
              </li>
            </ul>
          </nav>
        </header>
      </>
    </div>
  );
};

export default Navbar;
