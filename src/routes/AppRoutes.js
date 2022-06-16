import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "./../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Patient from "../pages/patients/Patient";
import Dashboard from "../pages/doctors/dashboard";
import DoctorLayout from "../layout/DoctorLayout";
import Profile from "../pages/doctors/profile";
import Schedule from "../pages/doctors/schedule/ScheduleTiming";
import SocialMedia from "../pages/doctors/SocialMedia/SocialMedia";
import ChangePassword from "../pages/doctors/change-password/ChangePassword";
const isDoctor = true;
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {isDoctor ? (
          <Route element={<DoctorLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="social" element={<SocialMedia />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        ) : (
          <Route path="patient" element={<Patient />}></Route>
        )}
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
