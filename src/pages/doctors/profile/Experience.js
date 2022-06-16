import React, {useEffect, useState} from "react";

function InputExpreince({onSetProfile}) {
  const [inputList, setInputList] = useState([{hospitalName: "", start: "", end: "", designation: ""}]);
  const handleAddClick = () => {
    setInputList([...inputList, {hospitalName: "", start: "", end: "", designation: ""}]);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleInputChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  useEffect(() => {
    onSetProfile("experience", inputList);
  }, [inputList]);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Experience</h4>
          {inputList.map((x, i) => {
            return (
              <div
                className="education-info"
                key={i}
                style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}
              >
                <div className="row form-row education-cont">
                  <div className="col-12 col-md-10 col-lg-11">
                    <div className="row form-row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Hospital Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="hospitalName"
                            value={x.hospitalName}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>From</label>
                          <input
                            type="text"
                            className="form-control"
                            name="start"
                            value={x.start}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>To</label>
                          <input
                            type="text"
                            className="form-control"
                            name="end"
                            value={x.end}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Designation</label>
                          <input
                            type="text"
                            className="form-control"
                            name="designation"
                            value={x.designation}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="btn btn-danger btn-sm rounded-0"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                  onClick={handleRemoveClick}
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            );
          })}

          <div className="add-more">
            <a className="add-education">
              <i className="fa fa-plus-circle" onClick={handleAddClick}></i> Add More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Experience({onSetProfile}) {
  return <InputExpreince onSetProfile={onSetProfile} />;
}
