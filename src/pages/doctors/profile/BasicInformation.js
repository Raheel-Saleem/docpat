import React from "react";

export default function BasicInformation() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Basic Information</h4>
        <div className="row form-row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="change-avatar">
                <div className="profile-img">
                  <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                </div>
                <div className="upload-img">
                  <div className="change-photo-btn">
                    <span>
                      <i className="fa fa-upload"></i> Upload Photo
                    </span>
                    <input type="file" className="upload" />
                  </div>
                  <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>
                First Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Last Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control select">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-0">
              <label>Date of Birth</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
