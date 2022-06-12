import React from "react";
const st = { display: "none" };
export default function Pricing() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Pricing</h4>
          <div className="form-group mb-0">
            <div id="pricing_select">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="price_free"
                  name="rating_option"
                  className="custom-control-input"
                  value="price_free"
                  checked
                />
                <label className="custom-control-label" for="price_free">
                  Free
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="price_custom"
                  name="rating_option"
                  value="custom_price"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="price_custom">
                  Custom Price (per hour)
                </label>
              </div>
            </div>
          </div>
          <div
            className="row custom_price_cont"
            id="custom_price_cont"
            style={st}
          >
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                id="custom_rating_input"
                name="custom_rating_count"
                value=""
                placeholder="20"
              />
              <small className="form-text text-muted">
                Custom price you can add
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
