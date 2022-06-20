import React from "react";
import {Link} from "react-router-dom";

export default function PatientSidebar() {
  return (
    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img src="assets/img/patients/patient.jpg" alt="User Image" />
            </Link>
            <div className="profile-det-info">
              <h3>Richard Wilson</h3>
              <div className="patient-details">
                <h5>
                  <i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
                </h5>
                <h5 className="mb-0">
                  <i className="fas fa-map-marker-alt"></i> Newyork, USA
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li>
                <Link to="/dashboard">
                  <i className="fas fa-columns"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/all-doc">
                  <i className="fas fa-bookmark"></i>
                  <span>See Doctors</span>
                </Link>
              </li>

              <li>
                <Link to="account">
                  <i className="fas fa-file-invoice-dollar"></i>
                  <span>Accounts</span>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="fas fa-file-medical-alt"></i>
                  <span>Medical Details</span>
                </Link>
              </li>
              <li className="active">
                <Link to="pat-profile">
                  <i className="fas fa-user-cog"></i>
                  <span>Profile Settings</span>
                </Link>
              </li>
              <li>
                <Link to="change-password">
                  <i className="fas fa-lock"></i>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
