import React from "react";
import Calendar from "react-calendar";
import "./FeelingsCalendar.css";

const FeelingsCalendar = () => {
  const date = new Date();
  return (
    <Calendar
      value={date.toDateString()}
      locale={"ko-KR"}
      calendarType={"gregory"}
      defaultView="month"
      minDetail="month"
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default FeelingsCalendar;
