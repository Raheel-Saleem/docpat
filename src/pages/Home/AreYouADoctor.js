import React from "react";

export default function AreYouADoctor() {
  return (
    <section class="patient-select">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="select-box">
              <div class="d-flex align-items-center">
                <div class="image-holder">
                  <span>
                    <img src="assets/img/icons/doct-01.png" alt="" />
                  </span>
                </div>
                <div>
                  <h2>ARE YOU A DOCTOR?</h2>
                  <p>
                    The service allows you to get maximum visibility online and
                    to manage appointments and contacts coming from the site, in
                    a simple and fast way.
                  </p>
                  <a href="booking.html" class="book-now">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="select-box theme">
              <div class="d-flex align-items-center">
                <div class="image-holder">
                  <span>
                    <img src="assets/img/icons/doct-02.png" alt="" />
                  </span>
                </div>
                <div>
                  <h2>ARE YOU A DOCTOR?</h2>
                  <p>
                    Choosing a specialist has never been so fast! You can filter
                    search results by location and medical specialization, and
                    book medical examination online.
                  </p>
                  <a href="booking.html" class="book-now">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
