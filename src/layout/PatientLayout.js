import React from "react";
import {Outlet} from "react-router-dom";
import PatientSidebar from "../components/common/PatientSidebar";
const PatientLayout = () => {
  return (
    <div>
      {/* <BreadCrumBar name={props.name} main={props.main} /> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <PatientSidebar />
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

export default PatientLayout;
