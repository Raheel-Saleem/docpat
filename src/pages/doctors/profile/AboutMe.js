import React from "react";

export default function AboutMe({onSetProfile}) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <div className="form-group mb-0">
            <label>Biography</label>
            <textarea
              className="form-control"
              rows="5"
              name={"dob"}
              onChange={(e) => onSetProfile("biography", e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
