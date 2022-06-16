import {useState, useEffect} from "react";
function InputEducation({onSetProfile}) {
  const [inputList, setInputList] = useState([{degree: "", institute: "", yearOfCompletion: ""}]);
  const handleAddClick = () => {
    setInputList([...inputList, {degree: "", institute: "", yearOfCompletion: ""}]);
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
    onSetProfile("education", inputList);
  }, [inputList]);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Education</h4>
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
                          <label>Degree</label>
                          <input
                            type="text"
                            className="form-control"
                            name="degree"
                            value={x.degree}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>College/Institute</label>
                          <input
                            type="text"
                            className="form-control"
                            name="institute"
                            value={x.institute}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Year of Completion</label>
                          <input
                            type="text"
                            className="form-control"
                            name="yearOfCompletion"
                            value={x.yearOfCompletion}
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

export default function Education({onSetProfile}) {
  return <InputEducation onSetProfile={onSetProfile} />;
}
