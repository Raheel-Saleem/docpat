import React, {useState, useEffect} from "react";

const dummyData = ["badar", "hannan", "mannan", "Roheel", "Adil", "saad", "awais"];

export default function Specialities() {
  const [data, setData] = useState(dummyData);

  return (
    <section className="section section-specialities">
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2>Clinic and Specialities</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="specialities-slider slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <div className="slick-track">
                  {data.map((data) => {
                    return (
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="8"
                        aria-hidden="true"
                        tabindex="-1"
                      >
                        <div>
                          <div className="speicality-item text-center">
                            <div className="speicality-img">
                              <img
                                src="assets/img/specialities/specialities-04.png"
                                className="img-fluid"
                                alt="Speciality"
                              />
                              <span>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                              </span>
                            </div>
                            <p>{data}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
