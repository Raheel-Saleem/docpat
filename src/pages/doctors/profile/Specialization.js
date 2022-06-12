import React from "react";

export default function Specialization() {
  return (
    <div>
      <div className="card services-card">
        <div className="card-body">
          <h4 className="card-title">Services and Specialization</h4>
          <div className="form-group">
            <label>Services</label>
            <input
              type="text"
              data-role="tagsinput"
              className="input-tags form-control"
              placeholder="Enter Services"
              name="services"
              value="Tooth cleaning "
              id="services"
            />
            <small className="form-text text-muted">
              Note : Type & Press enter to add new services
            </small>
          </div>
          <div className="form-group mb-0">
            <label>Specialization </label>
            <input
              className="input-tags form-control"
              type="text"
              data-role="tagsinput"
              placeholder="Enter Specialization"
              name="specialist"
              value="Children Care,Dental Care"
              id="specialist"
            />
            <small className="form-text text-muted">
              Note : Type & Press enter to add new specialization
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
