import React from 'react'
import DoctorProfile from './DoctorProfile'
import DoctorProfileNavbar from './DoctorProfileNavbar'
import DoctorProfileOverview from './DoctorProfileOverview'
import DoctorProfileReviews from './DoctorProfileReviews'
import DoctorProfileBusiness from './DoctorProfileBusiness'
export default function DoctorProfileMain() {
  return (
    <div class="content">
    <div class="container">
        <DoctorProfile/>
    <div class="card">
    <div class="card-body pt-0">
        <DoctorProfileNavbar/>
        <div class="tab-content pt-0">
            <DoctorProfileOverview/>
            <DoctorProfileReviews/>
            <DoctorProfileBusiness/>
        </div>

    </div>
    </div>


    </div>
    </div>
  )
}
