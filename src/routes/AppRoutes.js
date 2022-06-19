import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "./../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/doctors/dashboard";
import DoctorLayout from "../layout/DoctorLayout";
import Profile from "../pages/doctors/profile";
import Schedule from "../pages/doctors/schedule/ScheduleTiming";
import SocialMedia from "../pages/doctors/SocialMedia/SocialMedia";
import ChangePassword from "../pages/doctors/change-password/ChangePassword";
import Accounts from "../pages/doctors/Accounts/Accounts";
import SearchDoctor from "../pages/patients/SearchDoctor/Search-doctor";
import Appointments from "../pages/doctors/appointments/Appointments";
import PatientLayout from "../layout/PatientLayout";
import PatientProfile from "../pages/patients/profile/PatientProfile";
import AuthContext from "../store/auth-context";
function AppRoutes() {
  const {user} = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route element={user.role === "Doctor" ? <DoctorLayout /> : <PatientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="social" element={<SocialMedia />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="account" element={<Accounts />} />
          <Route path="appoint" element={<Appointments />} />
          <Route path="all-doc" element={<SearchDoctor />}></Route>
          <Route path="pat-profile" element={<PatientProfile />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
