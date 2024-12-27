"use client";
import Typography from "@/components/Typography";
import React from "react";
import FeelingsCalendar from "./panel/FeelingsCalendar";
import { color } from "storybook/internal/theming";

const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100svh",
        width: "100%",
        baxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1.125rem 1.25rem",
          boxSizing: "border-box",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 6.75L9 12.75L15 18.75"
            stroke="white"
            strokeWidth="1.323"
            strokeLinecap="square"
          />
        </svg>
        <Typography
          variant="subtitle01"
          style={{
            color: "var(--grayscale-white, #FFF)",
            textAlign: "center",
          }}
        >
          오늘의 나
        </Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        />
      </div>
      <div
        style={{
          padding: "0 1.25rem",
        }}
      >
        <FeelingsCalendar />
        <button
          style={{
            marginTop: "1.5rem",
            display: "flex",
            width: "100%",
            height: "40px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            borderRadius: "0.5rem",
            padding: "10px 0",
          }}
        >
          <Typography
            variant="button05"
            style={{
              color: "var(--grayscale-gray12, #1C1C1E)",
              textAlign: "center",
            }}
          >
            원하는 날짜를 클릭해 그날의 감정 카드를 확인해 보세요!
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default Page;
