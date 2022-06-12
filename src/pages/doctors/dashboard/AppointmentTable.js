import React, {useState} from "react";
import Table from "./Table";

export default function AppointmentTable() {
  const [todayOrComing, setTodayOrComing] = useState("Today");
  const rec = {
    upcoming: [
      {
        name: "abc",
        appt_date: "12/12/30",
        purpose: "General",
        type: "Old",
        paid_ammount: "150$",
      },
      {
        name: "xyz",
        appt_date: "12/12/30",
        purpose: "General",
        type: "Old",
        paid_ammount: "150$",
      },
      {
        name: "bbb",
        appt_date: "12/12/30",
        purpose: "General",
        type: "Old",
        paid_ammount: "150$",
      },
      {
        name: "ccc",
        appt_date: "12/12/30",
        purpose: "General",
        type: "Old",
        paid_ammount: "150$",
      },
    ],
    today: [
      {
        name: "raheel",
        appt_date: "12/12/30",
        purpose: "Fever",
        type: "New",
        paid_ammount: "150$",
      },
      {
        name: "raheel",
        appt_date: "12/12/30",
        purpose: "Fever",
        type: "New",
        paid_ammount: "150$",
      },
      {
        name: "raheel",
        appt_date: "12/12/30",
        purpose: "Fever",
        type: "New",
        paid_ammount: "150$",
      },
      {
        name: "raheel",
        appt_date: "12/12/30",
        purpose: "Fever",
        type: "New",
        paid_ammount: "150$",
      },
    ],
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <h4 className="mb-4">Patient Appoinment</h4>
        <div className="appointment-tab">
          <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                onClick={() => {
                  setTodayOrComing("coming");
                }}
              >
                Upcoming
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" onClick={() => setTodayOrComing("Today")}>
                Today
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {todayOrComing === "coming" ? <Table patients={rec.upcoming} /> : <Table patients={rec.today} />}
          </div>
        </div>
      </div>
    </div>
  );
}
