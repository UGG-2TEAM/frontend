"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/frame/page.module.css";
import Card from "./panel/card/Card.js";
import Image from "next/image";

const Frame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const router = useRouter();

  const handleModalOpen = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
    router.push("/");
  };

  return (
    <div className={styles.allContainer}>
      <p className={styles.title}>오늘의 나</p>
      <p className={styles.date}>2024.12.28.</p>
      <div className={styles.textContainer}>
        <p>카드를 뒤집어 일기를 작성하세요!</p>
      </div>
      <Card />
      <div className={styles.buttonContainer}>
        <button
          className={styles.storageButton}
          onClick={handleModalOpen} // 모달 열기 버튼 클릭 시
        >
          감정일기 저장하기
        </button>
      </div>

      {/* 모달창 */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <Image
              alt="편지지"
              src="/frame/letter.svg"
              width={80}
              height={80}
            />
            <h2 className={styles.h2}>내일의 응원편지</h2>
            <p>오늘 작성한 감정 분석 결과와 일기 내용을 참고하여</p>
            <p>새로운 하루를 응원하는 메세지를 전달합니다.</p>
            <p><span className={styles.highlightText}>"오늘의 나"</span>가 기록한 감정이</p>
            <p><span className={styles.highlightText}>"내일의 나"</span>를 위한 특별한 선물이 됩니다.</p>
            <p>매일 아침, 당신을 위한 편지로 하루를 시작해보세요.</p>
            <div className={styles.modalButtons}>
              <button className={styles.saveButton} onClick={handleModalClose}>
                홈으로 이동
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Frame;
