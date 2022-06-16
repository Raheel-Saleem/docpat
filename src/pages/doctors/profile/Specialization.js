import React, {useState, useEffect} from "react";
import {InputTags} from "react-bootstrap-tagsinput";
// import "react-bootstrap-tagsinput/dist/index.css";

export default function Specialization({onSetProfile}) {
  const [services, setServices] = useState([]);
  const [special, setSpecial] = useState([]);

  useEffect(() => {
    onSetProfile("services", services);
  }, [services]);

  useEffect(() => {
    onSetProfile("specialization", special);
  }, [special]);

  return (
    <div>
      <div className="card services-card">
        <div className="card-body">
          <h4 className="card-title">Services and Specialization</h4>
          <label>Services</label>
          <InputTags
            style={{backgroundColor: "#20c0f3"}}
            values={services}
            onTags={(value) => setServices(value.values)}
            placeholder={"Enter Services"}
            name={"services"}
            id={"services"}
          />
          <div className="form-group">
            <small className="form-text text-muted">Note : Type & Press enter to add new services</small>
          </div>
          <label>Specialization </label>
          <InputTags
            style={{backgroundColor: "#20c0f3"}}
            values={special}
            onTags={(value) => setSpecial(value.values)}
            placeholder={"Enter Specialization"}
            name={"special"}
            id={"special"}
          />
          <div className="form-group mb-0">
            <small className="form-text text-muted">
              Note : Type & Press enter to add new specialization
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
