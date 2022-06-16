import React from "react";

export default function PatientSidebar() {
  return (
    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <a href="#" className="booking-doc-img">
              <img src="assets/img/patients/patient.jpg" alt="User Image" />
            </a>
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
                <a href="patient-dashboard.html">
                  <i className="fas fa-columns"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="favourites.html">
                  <i className="fas fa-bookmark"></i>
                  <span>Favourites</span>
                </a>
              </li>
              <li>
                <a href="dependent.html">
                  <i className="fas fa-users"></i>
                  <span>Dependent</span>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <i className="fas fa-comments"></i>
                  <span>Message</span>
                  <small className="unread-msg">23</small>
                </a>
              </li>
              <li>
                <a href="patient-accounts.html">
                  <i className="fas fa-file-invoice-dollar"></i>
                  <span>Accounts</span>
                </a>
              </li>
              <li>
                <a href="orders-list.html">
                  <i className="fas fa-list-alt"></i>
                  <span>Orders</span>
                  <small className="unread-msg">7</small>
                </a>
              </li>
              <li>
                <a href="medical-records.html">
                  <i className="fas fa-clipboard"></i>
                  <span>Add Medical Records</span>
                </a>
              </li>
              <li>
                <a href="medical-details.html">
                  <i className="fas fa-file-medical-alt"></i>
                  <span>Medical Details</span>
                </a>
              </li>
              <li className="active">
                <a href="profile-settings.html">
                  <i className="fas fa-user-cog"></i>
                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a href="change-password.html">
                  <i className="fas fa-lock"></i>
                  <span>Change Password</span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
