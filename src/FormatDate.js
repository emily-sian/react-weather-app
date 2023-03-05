import React from "react";

export default function FormatDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(props.dateTime);
  let day = days[date.getDay()];
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");

  return (
    <div className="col-3 date-time">
      <div>
        {day} {hour}:{minute}
      </div>
    </div>
  );
}
