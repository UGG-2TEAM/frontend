import Image from "next/image";
import React from "react";

const Emoji = ({ emoji = "no" }) => {
  let src = "/emoji/no.svg";

  if (emoji === "angry") {
    src = "/emoji/angry.svg";
  } else if (emoji === "disgust") {
    src = "/emoji/disgust.svg";
  } else if (emoji === "fear") {
    src = "/emoji/fear.svg";
  } else if (emoji === "happy") {
    src = "/emoji/happy.svg";
  } else if (emoji === "neutral") {
    src = "/emoji/neutral.svg";
  } else if (emoji === "sad") {
    src = "/emoji/sad.svg";
  } else if (emoji === "surprise") {
    src = "/emoji/surprise.svg";
  }

  return (
    <img
      src={src}
      alt={emoji}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "2.875rem",
        maxHeight: "2rem",
      }}
    />
  );
};

export default Emoji;
