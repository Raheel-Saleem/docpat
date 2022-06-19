import React from "react";

export default function DoctorsList(
  {address, biography, city, country, dob, gender, name, pricing, profile_id},
  props
) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <a href="doctor-profile.html">
                <img src={props.docData.img} className="img-fluid" alt="User Image" />
              </a>
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name">
                <a href="doctor-profile.html">{name}</a>
              </h4>
              <p className="doc-speciality">{biography}</p>
              <h5 className="doc-department">
                <img
                  src="assets/img/specialities/specialities-05.png"
                  className="img-fluid"
                  alt="Speciality"
                />
                {}
              </h5>
              <div className="rating">
                {[...Array(props.docData.rating)].map(() => {
                  return <i className="fas fa-star filled"></i>;
                })}
                <span className="d-inline-block average-rating">({props.docData.no_of_ratings})</span>
              </div>
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt"></i> {props.docData.location}
                </p>
                <ul className="clinic-gallery">
                  <li>
                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                      <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                    </a>
                  </li>
                  <li>
                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                      <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                    </a>
                  </li>
                  <li>
                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                      <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                    </a>
                  </li>
                  <li>
                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                      <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clinic-services">
                {props.docData.subCategory.map((subCategory) => {
                  <span>{subCategory}</span>;
                })}
              </div>
            </div>
          </div>
          <div className="doc-info-right">
            <div className="clini-infos">
              <ul>
                <li>
                  <i className="far fa-thumbs-up"></i> {props.docData.Likes}
                </li>

                <li>
                  <i className="fas fa-map-marker-alt"></i> {props.docData.location}
                </li>
                <li>
                  <i className="far fa-money-bill-alt"></i> {props.docData.chargesRange}
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
