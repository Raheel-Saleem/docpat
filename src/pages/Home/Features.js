import React from "react";

export default function Features() {
  return (
    <section className="section section-features">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 features-img">
            <img src="assets/img/features/feature.png" className="img-fluid" alt="Feature" />
          </div>
          <div className="col-md-7">
            <div className="section-header">
              <h2 className="mt-2">Availabe Features in Our Clinic</h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout.{" "}
              </p>
            </div>
            <div className="features-slider slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable" style={{padding: "0px 50px"}}>
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: "30000px",
                    transform: "translate3d(-1350px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-4}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-03.jpg" className="img-fluid" alt="Feature" />
                        <p>ICU</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-3}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-04.jpg" className="img-fluid" alt="Feature" />
                        <p>Laboratory</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-2}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-05.jpg" className="img-fluid" alt="Feature" />
                        <p>Operation</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned slick-center"
                    data-slick-index={-1}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-06.jpg" className="img-fluid" alt="Feature" />
                        <p>Medical</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide20"
                    tabIndex={-1}
                    aria-describedby="slick-slide-control20"
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-01.jpg" className="img-fluid" alt="Feature" />
                        <p>Patient Ward</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide21"
                    aria-describedby="slick-slide-control21"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-02.jpg" className="img-fluid" alt="Feature" />
                        <p>Test Room</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide22"
                    aria-describedby="slick-slide-control22"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-03.jpg" className="img-fluid" alt="Feature" />
                        <p>ICU</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={3}
                    aria-hidden="true"
                    role="tabpanel"
                    id="slick-slide23"
                    aria-describedby="slick-slide-control23"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-04.jpg" className="img-fluid" alt="Feature" />
                        <p>Laboratory</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={4}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide24"
                    aria-describedby="slick-slide-control24"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-05.jpg" className="img-fluid" alt="Feature" />
                        <p>Operation</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-current slick-active slick-center"
                    data-slick-index={5}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide25"
                    aria-describedby="slick-slide-control25"
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-06.jpg" className="img-fluid" alt="Feature" />
                        <p>Medical</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned slick-active"
                    data-slick-index={6}
                    aria-hidden="false"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-01.jpg" className="img-fluid" alt="Feature" />
                        <p>Patient Ward</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={7}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-02.jpg" className="img-fluid" alt="Feature" />
                        <p>Test Room</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={8}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-03.jpg" className="img-fluid" alt="Feature" />
                        <p>ICU</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={9}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-04.jpg" className="img-fluid" alt="Feature" />
                        <p>Laboratory</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={10}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-05.jpg" className="img-fluid" alt="Feature" />
                        <p>Operation</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={11}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="feature-item text-center"
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <img src="assets/img/features/feature-06.jpg" className="img-fluid" alt="Feature" />
                        <p>Medical</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="slick-dots" style={{}} role="tablist">
                <li className role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control20"
                    aria-controls="slick-slide20"
                    aria-label="1 of 2"
                    tabIndex={-1}
                  >
                    1
                  </button>
                </li>
                <li role="presentation" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control21"
                    aria-controls="slick-slide21"
                    aria-label="2 of 2"
                    tabIndex={-1}
                  >
                    2
                  </button>
                </li>
                <li role="presentation" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control22"
                    aria-controls="slick-slide22"
                    aria-label="3 of 2"
                    tabIndex={-1}
                  >
                    3
                  </button>
                </li>
                <li role="presentation" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control23"
                    aria-controls="slick-slide23"
                    aria-label="4 of 2"
                    tabIndex={-1}
                  >
                    4
                  </button>
                </li>
                <li role="presentation" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control24"
                    aria-controls="slick-slide24"
                    aria-label="5 of 2"
                    tabIndex={-1}
                  >
                    5
                  </button>
                </li>
                <li role="presentation" className="slick-active">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control25"
                    aria-controls="slick-slide25"
                    aria-label="6 of 2"
                    tabIndex={0}
                    aria-selected="true"
                  >
                    6
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
