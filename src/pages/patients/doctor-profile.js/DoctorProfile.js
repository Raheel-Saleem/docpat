import React from "react";

export default function DoctorProfile() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <img
                src="assets/img/doctors/doctor-thumb-02.jpg"
                className="img-fluid"
                alt="User Image"
              />
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name">Dr. Darren Elder</h4>
              <p className="doc-speciality">
                BDS, MDS - Oral & Maxillofacial Surgery
              </p>
              <p className="doc-department">
                <img
                  src="assets/img/specialities/specialities-05.png"
                  className="img-fluid"
                  alt="Speciality"
                />
                Dentist
              </p>
              <div className="rating">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star"></i>
                <span className="d-inline-block average-rating">(35)</span>
              </div>
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt"></i> Newyork, USA -{" "}
                  <a href="javascript:void(0);">Get Directions</a>
                </p>
                <ul className="clinic-gallery">
                  <li>
                    <a
                      href="assets/img/features/feature-02.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-02.jpg"
                        alt="Feature Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/img/features/feature-03.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-03.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/img/features/feature-04.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="assets/img/features/feature-04.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clinic-services">
                <span>Dental Fillings</span>
                <span>Teeth Whitneing</span>
              </div>
            </div>
          </div>
          <div className="doc-info-right">
            <div className="clini-infos">
              <ul>
                <li>
                  <i className="far fa-thumbs-up"></i> 99%
                </li>
                <li>
                  <i className="far fa-comment"></i> 35 Feedback
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Newyork, USA
                </li>
                <li>
                  <i className="far fa-money-bill-alt"></i> $100 per hour{" "}
                </li>
              </ul>
            </div>

            <div className="clinic-booking">
              <a className="apt-btn" href="booking.html">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
