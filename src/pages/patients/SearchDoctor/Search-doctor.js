import React from "react";
import SearchFilter from "./SearchFilter";
import DoctorList from "./DoctorList";

export default function SearchDoctor() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          {/* <SearchFilter /> */}
          <DoctorList />
        </div>
      </div>
    </div>
  );
}
