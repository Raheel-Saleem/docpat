import React, {useEffect, useState} from "react";

import DoctorsList from "./DoctorsList";
const doc_details = [
  {
    name: "Badar baig",
    description: "MDS - Periodontology and Oral Implantology, BDS",
    category: "Dentist",
    rating: 4,
    no_of_ratings: 17,
    location: "Florida, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "98%",
    chargesRange: "$300 - $1000 ",
    img: "assets/img/doctors/badar.jpg",
  },
  {
    name: "Raheel saleem",
    description: "All specialist",
    category: "Bones",
    rating: 3,
    no_of_ratings: 15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img: "assets/img/doctors/doctor-thumb-02.jpg",
  },
  {
    name: "Molecule",
    description: "All specialist",
    category: "Bones",
    rating: 1,
    no_of_ratings: 15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img: "assets/img/doctors/doctor-thumb-01.jpg",
  },
  {
    name: "Molecule",
    description: "All specialist",
    category: "Bones",
    rating: 1,
    no_of_ratings: 15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img: "assets/img/doctors/doctor-thumb-01.jpg",
  },
];
export default function DoctorList() {
  const [docDetails, setDocDetails] = useState(doc_details);

  useEffect(() => {
    // setDocDetails(doc_details);
  }, []);

  return (
    <div className="col-md-12 col-lg-8 col-xl-9">
      {docDetails.map((docData, index) => {
        return <DoctorsList docData={docData} />;
      })}
    </div>
  );
}
