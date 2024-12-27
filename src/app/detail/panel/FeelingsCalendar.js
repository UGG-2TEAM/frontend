import React from "react";
import Calendar from "react-calendar";
import "./FeelingsCalendar.css";
import dayjs from "dayjs";
import Emoji from "../../../components/Emoji";
// import { emojis } from "@/types/emojis";
import Typography from "@/components/Typography";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const data = [
  { diaryId: 1, emotion: "angry", date: 1 },
  { diaryId: 2, emotion: "happy", date: 2 },
  { diaryId: 3, emotion: "neutral", date: 3 },
  { diaryId: 4, emotion: "sad", date: 4 },
  { diaryId: 5, emotion: "fear", date: 5 },
  { diaryId: 6, emotion: "surprise", date: 6 },
  { diaryId: 7, emotion: "angry", date: 7 },
  { diaryId: 8, emotion: "disgust", date: 8 },
  { diaryId: 9, emotion: "happy", date: 9 },
  { diaryId: 10, emotion: "neutral", date: 10 },
  { diaryId: 11, emotion: "sad", date: 11 },
  { diaryId: 12, emotion: "fear", date: 12 },
  { diaryId: 13, emotion: "angry", date: 13 },
  { diaryId: 14, emotion: "happy", date: 14 },
  { diaryId: 15, emotion: "neutral", date: 15 },
  { diaryId: 16, emotion: "sad", date: 16 },
  { diaryId: 17, emotion: "fear", date: 17 },
  { diaryId: 18, emotion: "surprise", date: 18 },
  { diaryId: 19, emotion: "angry", date: 19 },
  { diaryId: 20, emotion: "disgust", date: 20 },
  { diaryId: 21, emotion: "happy", date: 21 },
  { diaryId: 22, emotion: "neutral", date: 22 },
  { diaryId: 23, emotion: "sad", date: 23 },
  { diaryId: 24, emotion: "fear", date: 24 },
  { diaryId: 25, emotion: "angry", date: 25 },
  { diaryId: 26, emotion: "surprise", date: 26 },
  { diaryId: 27, emotion: "happy", date: 27 },
];

export async function fetchDiaryList() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_API_URL}/api/v1/diary/list`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        year: 2024,
        month: 12,
      },
    }
  );
  return response.data.diaryList; // 응답 데이터 반환
}

const CustomTile = ({ date, emotion = "no", isToday }) => {
  const day = date.getDate();

  return (
    <div className="date">
      <Emoji emoji={emotion} />
      <div
        className="day"
        style={
          isToday
            ? {
                backgroundColor: "var(--grayscale-gray01, #F3F2F9)",
              }
            : {}
        }
      >
        <Typography
          variant="caption02"
          component="p"
          style={{
            color: isToday ? "#1C1C1E" : "#ADADB2",
          }}
        >
          {day}
        </Typography>
      </div>
    </div>
  );
};

const FeelingsCalendar = () => {
  const today = dayjs().toString();

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["diaryList"], // 쿼리 키
  //   queryFn: fetchDiaryList, // 데이터를 가져오는 함수
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) {
  //   console.error(error);
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <Calendar
      value={today}
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
            fill="#F3F2F9"
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
            fill="#F3F2F9"
          />
        </svg>
      }
      next2Label={null}
      prev2Label={null}
      tileContent={({ date, view }) => {
        let emotion = "no";
        const isToday = dayjs().isSame(date, "date");
        const target = data.find((item) => item.date === date.getDate());
        if (target) {
          emotion = target.emotion;
          console.log(emotion);
        }
        if (view === "month") {
          return <CustomTile date={date} emotion={emotion} isToday={isToday} />;
        }
        return null;
      }}
      formatDay={(locale, date) => null}
    />
  );
};

export default FeelingsCalendar;
