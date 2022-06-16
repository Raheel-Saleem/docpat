import React from "react";

export default function Schedule() {
  return (
    <div>
      <div className="col-md-7 col-lg-8 col-xl-9">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Schedule Timings</h4>
                <div className="profile-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label>Timing Slot Duration</label>
                        <select className="select form-control">
                          <option>-</option>
                          <option>15 mins</option>
                          <option selected="selected">30 mins</option>
                          <option>45 mins</option>
                          <option>1 Hour</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card schedule-widget mb-0">
                        <div className="schedule-header">
                          <div className="schedule-nav">
                            <ul className="nav nav-tabs nav-justified">
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_sunday">
                                  Sunday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#slot_monday">
                                  Monday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_tuesday">
                                  Tuesday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_wednesday">
                                  Wednesday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_thursday">
                                  Thursday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_friday">
                                  Friday
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#slot_saturday">
                                  Saturday
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
