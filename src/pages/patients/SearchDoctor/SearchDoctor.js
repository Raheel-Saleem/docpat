import React, {useEffect, useCallback, useState} from "react";
import SearchFilter from "./SearchFilter";
import DoctorList from "./DoctorList";
import server from "../../../utils/server";
import LoaderContext from "../../../store/loder-context";

export default function SearchDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const response = await server.get("all_doctors");
      setDoctors(response.data.message);
    };
    getDoctors();
  }, []);
  // useEffect(() => {
  //   console.log("doctors: ", doctors);
  // }, [doctors]);

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <SearchFilter />
          <DoctorList doctors={doctors} />
        </div>
      </div>
    </div>
  );
}
