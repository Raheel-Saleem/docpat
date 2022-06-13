import React from "react";
import {Link} from "react-router-dom";
export default function DoctorSidebar() {
  return (
    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
      <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
          <div class="profile-info-widget">
            <Link to="#" class="booking-doc-img">
              <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
            </Link>
            <div class="profile-det-info">
              <h3>Dr. Darren Elder</h3>
              <div class="patient-details">
                <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard-widget">
          <nav class="dashboard-menu">
            <ul>
              <li class="active">
                <Link to="dashboard">
                  <i class="fas fa-columns"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="appointments.html">
                  <i class="fas fa-calendar-check"></i>
                  <span>Appointments</span>
                </Link>
              </li>

              <li>
                <Link to="schedule">
                  <i class="fas fa-hourglass-start"></i>
                  <span>Schedule Timings</span>
                </Link>
              </li>

              <li>
                <Link to="invoices.html">
                  <i class="fas fa-file-invoice"></i>
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link to="accounts.html">
                  <i class="fas fa-file-invoice-dollar"></i>
                  <span>Accounts</span>
                </Link>
              </li>
              <li>
                <Link to="reviews.html">
                  <i class="fas fa-star"></i>
                  <span>Reviews</span>
                </Link>
              </li>

              <li>
                <Link to="profile">
                  <i class="fas fa-user-cog"></i>
                  <span>Profile Settings</span>
                </Link>
              </li>
              <li>
                <Link to="social-media.html">
                  <i class="fas fa-share-alt"></i>
                  <span>Social Media</span>
                </Link>
              </li>
              <li>
                <Link to="doctor-change-password.html">
                  <i class="fas fa-lock"></i>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link to="index.html">
                  <i class="fas fa-sign-out-alt"></i>
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
