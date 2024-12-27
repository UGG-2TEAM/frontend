import { useEffect, useState } from "react";
import styles from "@/styles/frame/page.module.css";

const Diary = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [inputValue, setInputValue] = useState(""); // 입력값 상태

  useEffect(() => {
    const savedImage = localStorage.getItem("capturedImage");
    if (savedImage) {
      setCapturedImage(savedImage);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.diaryContainer}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.imgContainer}>
            <img
              src={capturedImage}
              alt="Captured or selected"
              className={styles.blurImage}
            />
            <img
              src="/frame/neutral.svg"
              alt="프레임이미지"
              className={styles.blurFrameImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.diaryTextContainer}>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          className={styles.diaryInput}
          placeholder="텍스트를 입력하세요..."
        />
      </div>
    </div>
  );
};

export default Diary;