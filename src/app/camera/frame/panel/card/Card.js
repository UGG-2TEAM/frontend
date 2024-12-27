import { useEffect, useState } from "react";
import styles from "@/styles/frame/page.module.css";
import Diary from "./Diary";

const Card = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("capturedImage");
    if (savedImage) {
      setCapturedImage(savedImage);
    }
  }, []);

  // 터치 시작 핸들러
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // 터치 시작 위치 저장
  };

  // 터치 종료 핸들러
  const handleTouchEnd = (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX; // 터치 종료 위치
    const deltaX = endX - startX; // 이동 거리 계산

    // 오른쪽으로 스와이프하면 카드 회전
    if (deltaX > 50) {
      setFlipped(false); // 카드 앞면
    }
    // 왼쪽으로 스와이프하면 카드 회전
    else if (deltaX < -50) {
      setFlipped(true); // 카드 뒷면
    }

    setStartX(null); // 초기화
  };

  return (
    <div
      className={`${styles.cardContainer} perspective-1000`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.card}
        style={{
          transform: `rotateY(${flipped ? "180deg" : "0deg"})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
        }}
      >
        {/* 카드 앞면 */}
        <div
          className={`${styles.cardFront} absolute w-full h-full backface-hidden`}
        >
          {capturedImage ? (
            <div className={styles.imgContainer}>
              <img
                src={capturedImage}
                alt="Captured or selected"
                className={styles.image}
              />
              <img
                src="/frame/neutral.svg"
                alt="프레임이미지"
                className={styles.frameImg}
              />
            </div>
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>


        {/* 카드 뒷면 */}
        <div
          className={`${styles.cardBack} absolute w-full h-full backface-hidden`}
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          <Diary />

        </div>
      </div>
    </div>
  );
};

export default Card;