import Image from "next/image";
import "./detail/panel/FeelingsCalendar.css";
import Emoji from "@/components/Emoji";
import Typography from "@/components/Typography";
import { emojis } from "@/types/emojis";

const data = [
  { day: "일", date: 22, emotion: 1 },
  { day: "월", date: 23, emotion: 2 },
  { day: "화", date: 24, emotion: 3 },
  { day: "수", date: 25, emotion: 4 },
  { day: "목", date: 26, emotion: 5 },
  { day: "금", date: 27, emotion: 6 },
  { day: "토", date: 28, emotion: 7 },
];

const CustomTile = ({ day, date, emotion = "no", isToday }) => {
  return (
    <div
      className="date"
      style={{
        flexGrow: 1,
        gap: "0.5rem",
      }}
    >
      <Typography
        variant="body04"
        component="p"
        style={{
          color: "var(--grayscale-gray08, #636267)",
          textAlign: "center",
        }}
      >
        {day}
      </Typography>
      <Emoji
        emoji={emotion}
        style={{
          width: "100%",
        }}
      />
      <div
        className="day"
        style={
          isToday
            ? {
                backgroundColor: "var(--grayscale-gray11, #2c2c2e)",
                width: "1.125rem",
                height: "1.125rem",
              }
            : {}
        }
      >
        <Typography
          variant="caption02"
          component="p"
          style={{
            color: isToday ? "#fff" : "var(--grayscale-gray08, #636267)",
          }}
        >
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default function Home() {
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "3.75rem",
          width: "100%",
        }}
      >
        <Image src={"/logo_small.svg"} alt="logo" width={56} height={20} />
      </div>
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "1rem 0",
          }}
        >
          <Emoji emoji="happy" />
        </div>
        <Typography
          variant="title02"
          style={{
            color: "var(--grayscale-white, #ffffff)",
            marginBottom: "2rem",
          }}
        >
          당신의 감정,
          <br />
          지금 이 순간을 기록하고 추억하세요
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body04"
              component="p"
              style={{
                color: "var(--grayscale-white, #FFF)",
              }}
            >
              2024년 12월 4주차
            </Typography>
            <Typography
              variant="caption02"
              component="button"
              style={{
                color: "var(--grayscale-white, #FFF)",
                textAlign: "right",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.125rem",
                }}
              >
                <span>전체 보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M6.30078 5.49512L9.70215 8.89648L6.30078 12.2979"
                    stroke="white"
                    strokeWidth="0.75"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </Typography>
          </div>
          <button
            style={{
              width: "100%",
              height: "fit-content",
              boxSizing: "border-box",
              backgroundColor: "var(--grayscale-white, #FFF)",
              borderRadius: "0.75rem",
              color: "var(--grayscale-white, #FFF)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.25rem",
            }}
          >
            {data.map((item) => (
              <CustomTile
                key={item.date}
                day={item.day}
                date={item.date}
                emotion={emojis[item.emotion - 1] || "no"}
                isToday={item.date === 28}
              />
            ))}
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            <button
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                padding: "1.125rem 1rem",
                boxSizing: "border-box",
                backgroundColor: "var(--grayscale-white, #FFF)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img src={"/todaybutton.png"} aria-hidden />
              </div>
              <div>
                <Typography
                  variant="subtitle01"
                  component="h4"
                  style={{
                    color: "#1C1C1E",
                    textAlign: "left",
                  }}
                >
                  오늘의 나
                </Typography>
                <Typography
                  variant="body06"
                  component="p"
                  style={{
                    color: "var(--grayscale-gray08, #636267)",
                    textAlign: "left",
                  }}
                >
                  감정일기 쓰러가기
                </Typography>
              </div>
            </button>
            <button
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                padding: "1.125rem 1rem",
                boxSizing: "border-box",
                backgroundColor: "var(--grayscale-white, #FFF)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img src={"/tomorrowbutton.png"} aria-hidden />
              </div>
              <div>
                <Typography
                  variant="subtitle01"
                  component="h4"
                  style={{
                    color: "#1C1C1E",
                    textAlign: "left",
                  }}
                >
                  내일의 나
                </Typography>
                <Typography
                  variant="body06"
                  component="p"
                  style={{
                    color: "var(--grayscale-gray08, #636267)",
                    textAlign: "left",
                  }}
                >
                  응원편지 보러가기
                </Typography>
              </div>
            </button>
          </div>
          <button
            style={{
              width: "100%",
              borderRadius: "0.75rem",
              padding: "0.75rem 1.125rem",
              boxSizing: "border-box",
              backgroundColor: "var(--grayscale-white, #FFF)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography
                  variant="body06"
                  component="p"
                  style={{
                    color: "var(--grayscale-gray08, #636267)",
                    textAlign: "left",
                  }}
                >
                  오늘의 감정을 기록해보세요
                </Typography>
                <Typography
                  variant="title03"
                  component="h4"
                  style={{
                    color: "#1C1C1E",
                    textAlign: "left",
                  }}
                >
                  감정 기록하기
                </Typography>
              </div>
              <img src={"/chart.png"} aria-hidden />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
