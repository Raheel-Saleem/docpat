import React from "react";

export default function DoctorsList(props) {
  console.log("props: ", props);
  return (
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <a href="doctor-profile.html">
                <img
                  src={`http://127.0.0.1:5000/getImage/${props.docData.userId}`}
                  className="img-fluid"
                  alt="User"
                />
              </a>
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name">
                <a href="doctor-profile.html">{props.docData.name}</a>
              </h4>
              <p className="doc-speciality">{props.docData.biography}</p>
              <h5 className="doc-department">
                <img
                  src="assets/img/specialities/specialities-05.png"
                  className="img-fluid"
                  alt="Speciality"
                />
                {props.docData.specialization}
              </h5>
              <div className="rating">
                {[...Array(props.rating)].map(() => {
                  return <i className="fas fa-star filled"></i>;
                })}
                <span className="d-inline-block average-rating">({props.rating})</span>
              </div>
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {props.docData.country + "," + props.docData.city + "," + props.docData.address}
                </p>
              </div>
              {/* <div className="clinic-services">
                {props.docData.subCategory.map((subCategory) => {
                  <span>{subCategory}</span>;
                })}
              </div> */}
            </div>
          </div>
          <div className="doc-info-right">
            <div className="clini-infos">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i> {props.docData.address}
                </li>
                <li>
                  <i className="far fa-money-bill-alt"></i> {props.docData.pricing}
                  <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>{" "}
                </li>
              </ul>
            </div>
            <div className="clinic-booking">
              <a className="view-pro-btn" href="doctor-profile.html">
                View Profile
              </a>
              <a className="apt-btn">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
