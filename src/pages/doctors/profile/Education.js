import React from "react";

export default function Education() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Education</h4>
          <div className="education-info">
            <div className="row form-row education-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Degree</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>College/Institute</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Year of Completion</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-more">
            <a href="javascript:void(0);" className="add-education">
              <i className="fa fa-plus-circle"></i> Add More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
