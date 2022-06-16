import React, {useState} from "react";
import {AppointmentCard} from "./AppointmentCard";
const data = [
  {
    name: "badar baig",
    time: "10/12/2022",
    location: "Samanabad",
    mail: "bcsf18a005@pucit.edu.pk",
    image: "patient.jpg",
  },
  {
    name: "Adil Nisar",
    time: "10/12/2022",
    location: "Mansoora",
    mail: "bcsf18a005@pucit.edu.pk",
    image: "patient1.jpg",
  },
  {
    name: "Hammad Tariq",
    time: "10/12/2022",
    location: "outside lahore",
    mail: "bcsf18a005@pucit.edu.pk",
    image: "patient2.jpg",
  },
  {
    name: "Roheel Saleem",
    time: "10/12/2022",
    location: "Buba qasai lahore",
    mail: "bcsf18a005@pucit.edu.pk",
    image: "patient2.jpg",
  },
  {
    name: "badar baig",
    time: "10/12/2022",
    location: "aoaoaoaoaoaooaoa",
    mail: "badarbaig21@gmail.com",
    image: "patient4.jpg",
  },
];
const Appointments = () => {
  const [appointments, setAppointments] = useState(data);
  return (
    <div className="col-md-7 col-lg-8 col-xl-9">
      {appointments.map((data) => (
        <AppointmentCard data={data} />
      ))}
    </div>
  );
};

export default Appointments;
