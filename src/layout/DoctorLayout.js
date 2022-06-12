import React from "react";
import {Outlet} from "react-router-dom";
import DoctorSidebar from "../components/common/DoctorSidebar";
const DoctorLayout = () => {
  return (
    <div>
      {/* <BreadCrumBar name={props.name} main={props.main} /> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <DoctorSidebar />
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;
