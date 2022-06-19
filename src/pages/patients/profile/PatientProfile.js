import LoaderContext from "../../../store/loder-context";
import server from "../../../utils/server";
import {useFormik} from "formik";
import {useContext} from "react";
import AuthContext from "../../../store/auth-context";
import swal from "sweetalert";
const initialValues = {
  userId: null,
  firstName: "",
  lastName: "",
  dob: "",
  bloodGroup: "",
  emailId: "",
  mobileNo: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
};
export default function PatientProfile() {
  const {startLoading, stopLoading} = useContext(LoaderContext);
  const {user} = useContext(AuthContext);
  const formik = useFormik({
    initialValues,
    onSubmit: (values, onSubmitProps) => {
      handlelProfile(values);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });
  const handlelProfile = async (values) => {
    try {
      startLoading();
      values.userId = user.id;
      const response = await server.post("/patientProfile", values);

      swal({
        title: "Congratulations!",
        text: "Your profile is successfully created!",
        icon: "success",
        button: "Okay!",
      });

      stopLoading();
    } catch (error) {
      console.log("error: ", error);
      stopLoading();
      swal(error);
    }
  };
  return (
    <div className="col-md-9 col-lg-10 col-xl-12">
      <div className="card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row form-row">
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <div className="change-avatar">
                    <div className="profile-img">
                      <img src="assets/img/patients/patient.jpg" alt="User Image" />
                    </div>
                    <div className="upload-img">
                      <div className="change-photo-btn">
                        <span>
                          <i className="fa fa-upload" /> Upload Photo
                        </span>
                        <input type="file" className="upload" />
                      </div>
                      <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    {...formik.getFieldProps("lastName")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="cal-icon">
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      defaultValue="24-07-1983"
                      name="dob"
                      {...formik.getFieldProps("dob")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Blood Group</label>
                  <select
                    className="form-control select"
                    name="bloodGroup"
                    {...formik.getFieldProps("bloodGroup")}
                  >
                    <option value={"A-"}>A-</option>
                    <option value={"A+"}>A+</option>
                    <option value={"B-"}>B-</option>
                    <option value={"B+"}>B+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"O-"}>O-</option>
                    <option value={"O+"}>O+</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue="richard@example.com"
                    name="emailId"
                    {...formik.getFieldProps("emailId")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    defaultValue="+1 202-555-0125"
                    className="form-control"
                    name="mobileNo"
                    {...formik.getFieldProps("mobileNo")}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="806 Twin Willow Lane"
                    name="address"
                    {...formik.getFieldProps("address")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Old Forge"
                    name="city"
                    {...formik.getFieldProps("city")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Newyork"
                    name="state"
                    {...formik.getFieldProps("state")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={13420}
                    name="zipCode"
                    {...formik.getFieldProps("zipCode")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="United States"
                    name="country"
                    {...formik.getFieldProps("country")}
                  />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
