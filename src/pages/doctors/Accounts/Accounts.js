import React from "react";
export default function Accounts() {
  return (
    <div className="col-md-10 col-lg-11 col-xl-12">
      <div className="row">
        <div className="col-lg-5 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="card-title">Account</h3>
                </div>
                <div className="col-sm-6">
                  <div className="text-right">
                    <a
                      title="Edit Profile"
                      className="btn btn-primary btn-sm"
                      href="#account_modal"
                      data-toggle="modal"
                    >
                      <i className="fas fa-pencil" /> Edit Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="profile-view-bottom">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Bank Name</div>
                      <div className="text" id="bank_name">
                        Wells Fargo &amp; Co
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Branch Name</div>
                      <div className="text" id="branch_name">
                        Lenexa
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Account Number</div>
                      <div className="text" id="account_no">
                        5396 5250 1908 3838
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-list">
                      <div className="title">Account Name</div>
                      <div className="text" id="account_name">
                        Dr. Darren Elder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="account-card bg-success-light">
                    <span>$90.48</span> Earned
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="account-card bg-warning-light">
                    <span>$0.00</span> Requested
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="account-card bg-purple-light">
                    <span>$90.48</span> Balance
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <a
                    href="#payment_request_modal"
                    className="btn btn-primary request_btn"
                    data-toggle="modal"
                  >
                    Payment Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body pt-0">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <a className="nav-link active" href="#pat_accounts" data-toggle="tab">
                      Accounts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pat_refundrequest" data-toggle="tab">
                      Patients Refund Request
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="tab-content pt-0">
                <div id="pat_accounts" className="tab-pane fade show active">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Patient Name</th>
                              <th className="text-center">Amount</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                11 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Richard Wilson <span>#PT0016</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$150</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3 Nov 2019 <span className="d-block text-info">11.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient1.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Charlene Reed <span>#PT0001</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$200</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1 Nov 2019 <span className="d-block text-info">1.00 PM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient2.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Travis Trimble <span>#PT0002</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$75</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                30 Oct 2019 <span className="d-block text-info">9.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient3.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Carl Kelly <span>#PT0003</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$100</td>
                              <td>
                                <span className="badge badge-pill bg-warning-light">Pending</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                28 Oct 2019 <span className="d-block text-info">6.00 PM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient4.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Michelle Fairfax <span>#PT0004</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$350</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                27 Oct 2019 <span className="d-block text-info">8.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient5.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Gina Moore <span>#PT0005</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$250</td>
                              <td>
                                <span className="badge badge-pill bg-danger-light">Refunded</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pat_refundrequest">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Patient Name</th>
                              <th className="text-center">Amount</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                11 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Richard Wilson <span>#PT0016</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$150</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3 Nov 2019 <span className="d-block text-info">11.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient1.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Charlene Reed <span>#PT0001</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$200</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1 Nov 2019 <span className="d-block text-info">1.00 PM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient2.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Travis Trimble <span>#PT0002</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$75</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                30 Oct 2019 <span className="d-block text-info">9.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient3.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Carl Kelly <span>#PT0003</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$100</td>
                              <td>
                                <span className="badge badge-pill bg-warning-light">Pending</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                28 Oct 2019 <span className="d-block text-info">6.00 PM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient4.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Michelle Fairfax <span>#PT0004</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$350</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">Paid</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                27 Oct 2019 <span className="d-block text-info">8.00 AM</span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/patients/patient5.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="patient-profile.html">
                                    Gina Moore <span>#PT0005</span>
                                  </a>
                                </h2>
                              </td>
                              <td className="text-center">$250</td>
                              <td>
                                <span className="badge badge-pill bg-danger-light">Refunded</span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                    <i className="fas fa-check" /> Accept
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                    <i className="fas fa-times" /> Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
