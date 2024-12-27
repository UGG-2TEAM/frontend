"use client";
import Typography from "@/components/Typography";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.back();
  };
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
        <button onClick={handleReturn}>
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
        </button>

        <Typography
          variant="subtitle01"
          style={{
            color: "var(--grayscale-white, #FFF)",
            textAlign: "center",
          }}
        >
          월간 감정 분포도
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "15px 1.25rem",
          boxSizing: "border-box",
          gap: "0.75rem",
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
            d="M9.5 11.134C8.83333 11.5189 8.83333 12.4811 9.5 12.866L14 15.4641C14.6667 15.849 15.5 15.3679 15.5 14.5981L15.5 9.40192C15.5 8.63212 14.6667 8.151 14 8.5359L9.5 11.134Z"
            fill="#F3F2F9"
          />
        </svg>

        <Typography
          variant="subtitle01"
          style={{
            color: "var(--grayscale-white, #FFF)",
            textAlign: "center",
          }}
        >
          2024년 12월
        </Typography>
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
      </div>
      <div
        style={{
          padding: "0 1.25rem",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
          marginBottom: "2.25rem",
        }}
      >
        <img
          src={"/chart/angry.png"}
          alt="angry"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/happy.png"}
          alt="happy"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/neutral.png"}
          alt="neutral"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/sad.png"}
          alt="sad"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/fear.png"}
          alt="fear"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/surprise.png"}
          alt="surprise"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
        <img
          src={"/chart/disgust.png"}
          alt="disgust"
          style={{
            width: "15.375rem",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
