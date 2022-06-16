import React from 'react'

export default function DoctorReviews() {
  return (
    <li>
      <div className="comment">
        <img
          className="avatar rounded-circle"
          alt="User Image"
          src="assets/img/patients/patient2.jpg"
        />
        <div className="comment-body">
          <div className="meta-data">
            <span className="comment-author">Travis Trimble</span>
            <span className="comment-date">Reviewed 4 Days ago</span>
            <div className="review-count rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
            </div>
          </div>
          <p className="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit
            amet nisl tempus
          </p>
          <div className="comment-reply">
            <a className="comment-btn" href="#">
              <i className="fas fa-reply" /> Reply
            </a>
            <p className="recommend-btn">
              <span>Recommend?</span>
              <a href="#" className="like-btn">
                <i className="far fa-thumbs-up" /> Yes
              </a>
              <a href="#" className="dislike-btn">
                <i className="far fa-thumbs-down" /> No
              </a>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
