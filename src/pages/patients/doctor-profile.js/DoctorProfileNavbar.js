import React from "react";

export default function DoctorProfileNavbar() {
  return (
    <nav class="user-tabs mb-4">
      <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
        <li class="nav-item">
          <a class="nav-link active" href="#doc_overview" data-toggle="tab">
            Overview
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#doc_locations" data-toggle="tab">
            Locations
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#doc_reviews" data-toggle="tab">
            Reviews
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#doc_business_hours" data-toggle="tab">
            Business Hours
          </a>
        </li>
      </ul>
    </nav>
  );
}
