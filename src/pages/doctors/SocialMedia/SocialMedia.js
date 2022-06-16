import React, {useEffect, useState, useContext} from "react";

import server from "../../../utils/server";
import swal from "sweetalert";
import LoaderContext from "../../../store/loder-context";
import {useFormik} from "formik";
import {success} from "../../../utils/alert-messages";
import AuthContext from "../../../store/auth-context";
import axios from "axios";
const initialValues = {
  facebook: "",
  twitter: "",
  instagram: "",
  pintrest: "",
  linkedIn: "",
  youtube: "",
};
export default function SocialMedia() {
  const {startLoading, stopLoading} = useContext(LoaderContext);
  const {user} = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, onSubmitProps) => {
      handleSocial(values);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  const handleSocial = async (data) => {
    try {
      startLoading();
      data.userId = user.id;

      const response = await server.post("/socialMedia", data);
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
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Facebook URL</label>
              <input type="text" class="form-control" {...formik.getFieldProps("facebook")} name="facebook" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Twitter URL</label>
              <input type="text" class="form-control" {...formik.getFieldProps("twitter")} name="twitter" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Instagram URL</label>
              <input
                type="text"
                class="form-control"
                {...formik.getFieldProps("instagram")}
                name="instagram"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Pinterest URL</label>
              <input type="text" class="form-control" {...formik.getFieldProps("pintrest")} name="pintrest" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Linkedin URL</label>
              <input type="text" class="form-control" {...formik.getFieldProps("linkedIn")} name="linkedIn" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="form-group">
              <label>Youtube URL</label>
              <input type="text" class="form-control" {...formik.getFieldProps("youtube")} name="youtube" />
            </div>
          </div>
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
