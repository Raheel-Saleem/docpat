import React, {useState, useContext} from "react";
import server from "../../../utils/server";
import swal from "sweetalert";
import {success, fail} from "./../../../utils/alert-messages";
import AuthContext from "../../../store/auth-context";
import axios from "axios";
export default function BasicInformation({profile, onSetProfile}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const {user} = useContext(AuthContext);

  const handleUploadImage = async () => {
    try {
      const fd = new FormData();
      console.log("fd: ", fd);

      fd.append("profileImage", selectedImage);
      fd.append("userId", user.id);

      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/image",
        data: fd,
        headers: {"Content-Type": "multipart/form-data"},
      });
      console.log("response: ", response);
      swal(success);
      // setSelectedImage(null);
    } catch (error) {
      swal(fail);
      setSelectedImage(null);
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Basic Information</h4>
        <div className="row form-row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="change-avatar">
                <div className="profile-img">
                  <img
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : "assets/img/doctrs/doctor-thumb-02.jpg"
                    }
                    alt="Profile"
                  />
                </div>
                <div className="upload-img">
                  <div className="change-photo-btn">
                    <span>
                      <i className="fa fa-upload"></i> Select Photo
                    </span>
                    <input
                      type="file"
                      className="upload"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                  </div>
                  <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                </div>
                <div className="upload-img">
                  <div className="change-photo-btn">
                    <span>
                      <i className="fa fa-upload"></i> Upload Photo
                    </span>
                    <input type="submit" className="upload" onClick={() => handleUploadImage()} />
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
              <input
                type="text"
                className="form-control"
                name={"firstName"}
                onChange={(e) => onSetProfile("firstName", e.target.value)}
                value={profile.firstaName}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name={"lastName"}
                onChange={(e) => onSetProfile("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                name={"phoneNo"}
                onChange={(e) => onSetProfile("phoneNo", e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control select"
                onChange={(e) => onSetProfile("gender", e.target.value)}
              >
                <option value={""}>Select</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-0">
              <label>Date of Birth</label>
              <input
                type="text"
                className="form-control"
                name={"dob"}
                onChange={(e) => onSetProfile("dob", e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-0">
              <label>PMIC Number</label>
              <input
                type="text"
                className="form-control"
                name={"pmc"}
                onChange={(e) => onSetProfile("pmc", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
