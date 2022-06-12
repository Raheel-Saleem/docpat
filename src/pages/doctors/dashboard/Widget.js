import React from "react";

const doc_data = {
  total_p: 1500,
  today_p: 150,
  appointment: 80,
};
const date = new Date();
export default function Widget() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card dash-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="dash-widget dct-border-rht">
                  <div className="dash-widget-info">
                    <h6>Total Patient</h6>
                    <h3>{doc_data.total_p}</h3>
                    <p className="text-muted">Till Today</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="dash-widget dct-border-rht">
                  <div className="dash-widget-info">
                    <h6>Today Patient</h6>
                    <h3>{doc_data.today_p}</h3>
                    <p className="text-muted">{date.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="dash-widget">
                  <div className="dash-widget-info">
                    <h6>Appoinments</h6>
                    <h3>{doc_data.appointment}</h3>
                    <p className="text-muted">{date.toLocaleString()}</p>
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
