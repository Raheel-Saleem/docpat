import React, {useEffect, useState, useContext} from "react";

import BasicInformation from "./BasicInformation";
import AboutMe from "./AboutMe";
import ContactInfo from "./ContactInfo";
import Pricing from "./Pricing";
import Specialization from "./Specialization";
import Education from "./Education";
import Experience from "./Experience";
import swal from "sweetalert";
import {success} from "./../../../utils/alert-messages";
import server from "../../../utils/server";
import LoaderContext from "../../../store/loder-context";
import AuthContext from "../../../store/auth-context";
const initialProfileState = {
  firstName: "",
  lastName: "",
  phoneNo: "",
  gender: "",
  dob: "",
  biography: "",
  address: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  pricing: "0",
  services: [],
  specialization: [],
  education: [],
  experience: [],
  pmc: "",
  userId: "",
};
export default function Profile() {
  const {startLoading, stopLoading} = useContext(LoaderContext);
  const {user} = useContext(AuthContext);

  const [profile, setProfile] = useState(initialProfileState);
  function handleChangeSetProfile(key, value) {
    setProfile((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }
  useEffect(() => {
    console.log("profile: ", profile);
  }, [profile]);
  const handleSubmit = async () => {
    try {
      startLoading();
      profile.userId = user.id;
      const response = await server.post("/docProfile", profile);
      swal({
        title: "Congratulations!",
        text: "Your profile is successfully created!",
        icon: "success",
        button: "Okay!",
      });

      stopLoading();
      setProfile(initialProfileState);
    } catch (error) {
      stopLoading();
      swal(error);
    }
  };
  return (
    <div>
      <BasicInformation profile={profile} onSetProfile={handleChangeSetProfile} />
      <AboutMe profile={profile} onSetProfile={handleChangeSetProfile} />
      <ContactInfo onSetProfile={handleChangeSetProfile} />
      <Pricing onSetProfile={handleChangeSetProfile} />
      <Specialization onSetProfile={handleChangeSetProfile} />
      <Education onSetProfile={handleChangeSetProfile} />
      <Experience onSetProfile={handleChangeSetProfile} />
      <button
        className="submit-section submit-btn-bottom btn btn-primary submit-btn"
        type="submit"
        style={{marginBottom: "10px"}}
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </div>
  );
}
