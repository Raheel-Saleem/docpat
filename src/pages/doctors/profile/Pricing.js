import React, {useState} from "react";
const st = {display: "none"};
export default function Pricing({onSetProfile}) {
  const [isCustom, setCustom] = useState(false);
  function handleChange(v) {
    if (v === "price_free") {
      setCustom(false);
      onSetProfile("pricing", "0");
    }
    if (v === "custom_price") {
      setCustom(true);
    }
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Pricing</h4>
          <div className="form-group mb-0">
            <div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="price_free"
                  name="p"
                  className="custom-control-input"
                  value="price_free"
                  onChange={(e) => handleChange(e.target.value)}
                />
                <label className="custom-control-label" for="price_free">
                  Free
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="price_custom"
                  name="p"
                  value="custom_price"
                  className="custom-control-input"
                  onChange={(e) => handleChange(e.target.value)}
                />
                <label className="custom-control-label" for="price_custom">
                  Custom Price (per hour)
                </label>
              </div>
            </div>
          </div>
          {isCustom && (
            <div className="row custom_price_cont">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="custom_rating_input"
                  name="custom_rating_count"
                  placeholder="20"
                  onChange={(e) => onSetProfile("pricing", e.target.value)}
                />
                <small className="form-text text-muted">Custom price you can add</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
