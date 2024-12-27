import React from "react";
import Calendar from "react-calendar";
import "./FeelingsCalendar.css";
import dayjs from "dayjs";
import Emoji from "./Emoji";
import { emojis } from "@/types/emojis";

const data = [
  { date: 1, emotion: 1 },
  { date: 2, emotion: 2 },
];

const CustomTile = ({ date, emotion = "no" }) => {
  const day = date.getDate(); // 날짜 가져오기
  return <Emoji emoji={emotion} />;
};

const FeelingsCalendar = () => {
  const date = dayjs().toString();

  return (
    <Calendar
      value={date}
      locale={"ko-KR"}
      calendarType={"gregory"}
      defaultView="month"
      minDetail="month"
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.5 11.134C15.1667 11.5189 15.1667 12.4811 14.5 12.866L10 15.4641C9.33333 15.849 8.5 15.3679 8.5 14.5981L8.5 9.40192C8.5 8.63212 9.33333 8.151 10 8.5359L14.5 11.134Z"
            fill="#2C2C2E"
          />
        </svg>
      }
      prevLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.5 11.134C8.83333 11.5189 8.83333 12.4811 9.5 12.866L14 15.4641C14.6667 15.849 15.5 15.3679 15.5 14.5981L15.5 9.40192C15.5 8.63212 14.6667 8.151 14 8.5359L9.5 11.134Z"
            fill="#2C2C2E"
          />
        </svg>
      }
      next2Label={null}
      prev2Label={null}
      tileContent={({ date, view }) => {
        let emotion = "no";
        const target = data.find((item) => item.date === date.getDate());
        if (target) {
          emotion = emojis[target.emotion - 1];
          console.log(emotion);
        }
        if (view === "month") {
          return <CustomTile date={date} emotion={emotion} />;
        }
        return null;
      }}
      formatDay={(locale, date) => null}
    />
  );
};

export default FeelingsCalendar;
