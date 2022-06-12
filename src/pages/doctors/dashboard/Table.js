import React from "react";

const style = {
  justifyContent: "space-evenly",
  display: "flex",
  flexWrap: "nowrap",
};
const Table = (props) => {
  return (
    <div>
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Appt Date</th>
                  <th>Purpose</th>
                  <th>Type</th>
                  <th className="text-center">Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                {props.patients.map((patient) => {
                  return (
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient6.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="patient-profile.html">
                            {patient.name} <span>#PT0006</span>
                          </a>
                        </h2>
                      </td>
                      <td>
                        {patient.appt_date} <span className="d-block text-info">6.00 PM</span>
                      </td>
                      <td>{patient.purpose}</td>
                      <td>{patient.type}</td>
                      <td className="text-center">{patient.paid_ammount}</td>
                      <td className="text-right">
                        <div className="table-action" style={style}>
                          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                            <i className="far fa-eye"></i> View
                          </a>
                          <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                            <i className="fas fa-check"></i> Accept
                          </a>
                          <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times"></i> Cancel
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
