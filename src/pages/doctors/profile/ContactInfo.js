import React from "react";

export default function ContactInfo({onSetProfile}) {
  return (
    <div>
      <div className="card contact-card">
        <div className="card-body">
          <h4 className="card-title">Contact Details</h4>
          <div className="row form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="control-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name={"address"}
                  onChange={(e) => onSetProfile("address", e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name={"city"}
                  onChange={(e) => onSetProfile("city", e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">State / Province</label>
                <input
                  type="text"
                  className="form-control"
                  name={"state"}
                  onChange={(e) => onSetProfile("state", e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name={"country"}
                  onChange={(e) => onSetProfile("country", e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  name={"postalCode"}
                  onChange={(e) => onSetProfile("postalCode", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
