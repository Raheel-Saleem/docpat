import React from "react";

import BasicInformation from "./BasicInformation";
import AboutMe from "./AboutMe";
import ContactInfo from "./ContactInfo";
import Pricing from "./Pricing";
import Specialization from "./Specialization";
import Education from "./Education";
import Experience from "./Experience";
export default function Profile() {
  const m = {
    marginBottom: "10px",
  };
  return (
    <div>
      <BasicInformation />
      <AboutMe />
      <ContactInfo />
      <Pricing />
      <Specialization />
      <Education />
      <Experience />
      <button className="submit-section submit-btn-bottom btn btn-primary submit-btn" type="submit" style={m}>
        Save Changes
      </button>
    </div>
  );
}
