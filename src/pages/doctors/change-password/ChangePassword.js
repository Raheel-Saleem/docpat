import React, {useEffect, useState, useContext} from "react";
import server from "../../../utils/server";
import swal from "sweetalert";
import LoaderContext from "../../../store/loder-context";
import {useFormik} from "formik";
import {success} from "../../../utils/alert-messages";
import AuthContext from "../../../store/auth-context";
const initialValues = {
  newPassword: "",
  cnfrmPassword: "",
};

export default function ChangePassword() {
  const {startLoading, stopLoading} = useContext(LoaderContext);
  const {user} = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, onSubmitProps) => {
      handleChange(values);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  const handleChange = async (data) => {
    console.log("data: ", data);
    try {
      startLoading();
      data.userId = user.id;
      if (data.newPassword !== data.cnfrmPassword) {
        swal({
          title: "Error!",
          text: " Feild Values are not match!",
          icon: "error",
          button: "Okay!",
        });
        stopLoading();

        return;
      }
      const response = await server.post("/changePassword", data);
      console.log("response: ", response);
      swal(success);
      stopLoading();
    } catch (error) {
      stopLoading();

      swal("Opps", `${error.response.data}`, "error");
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label>New Password</label>
          <input
            type="password"
            class="form-control"
            {...formik.getFieldProps("newPassword")}
            name="newPassword"
          />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            class="form-control"
            {...formik.getFieldProps("cnfrmPassword")}
            name="cnfrmPassword"
          />
        </div>
        <div class="submit-section">
          <button type="submit" class="btn btn-primary submit-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
