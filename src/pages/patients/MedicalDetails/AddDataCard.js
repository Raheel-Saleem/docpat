import React from 'react'

export default function AddDataCard() {
  return (
    <div>
      <div
        id="modal_medical_form"
        className="modal fade custom-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form
              action="#"
              encType="multipart/form-data"
              autoComplete="off"
              id="medical_form"
              method="post"
            >
              <div className="modal-header">
                <h5 className="modal-title">Add new data</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="hidden" defaultValue="" name="id" />
                <input type="hidden" defaultValue="insert" name="method" />
                <div className="form-group">
                  <label
                    htmlFor="category_name"
                    className="control-label mb-10"
                  >
                    {" "}
                    BMI <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    parsley-trigger="change"
                    id="bmi"
                    name="bmi"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug" className="control-label mb-10">
                    Heart rate{" "}
                  </label>
                  <input
                    type="text"
                    parsley-trigger="change"
                    id="hr"
                    name="hr"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug" className="control-label mb-10">
                    Weight
                  </label>
                  <input
                    type="text"
                    parsley-trigger="change"
                    id="Weight"
                    name="Weight"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug" className="control-label mb-10">
                    Fbc
                  </label>
                  <input
                    type="text"
                    parsley-trigger="change"
                    id="Fbc"
                    name="Fbc"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="keywords" className="control-label mb-10">
                    Created Date{" "}
                  </label>
                  <input
                    type="text"
                    name="dob"
                    id="dob"
                    defaultValue=""
                    readOnly=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer text-center">
                <button
                  type="submit"
                  id="btnMedicalsave"
                  className="btn btn-outline btn-success "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
