"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/camera/cameraCapture.module.css";
import Image from "next/image";
import axios from "axios"; // axios import

const CameraCapture = () => {
    const [image, setImage] = useState(null); // 이미지 데이터 (Base64)
    const [imageFile, setImageFile] = useState(null); // 이미지 파일
    const fileInputRef = useRef(null);
    const router = useRouter();
    const API_URL = "http://52.79.145.98:3000";

    // 카메라로 사진 찍기
    const handleCapture = () => {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const constraints = {
            video: {
                facingMode: "environment", // 후면 카메라 사용
            },
        };

        // 카메라 권한 요청 및 비디오 스트림 시작
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                video.srcObject = stream;
                video.play();

                video.addEventListener("canplay", () => {
                    // 캔버스에 이미지 그리기
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);

                    // 찍은 이미지를 data URL로 변환 후 상태 업데이트
                    const imageData = canvas.toDataURL("image/png");
                    setImage(imageData); // 이미지 Base64 데이터 저장

                    // 비디오 스트림 정지
                    stream.getTracks().forEach((track) => track.stop());
                });
            })
            .catch((err) => {
                console.error("카메라 접근 실패", err);
            });
    };

    // 파일 선택을 통해 이미지 업로드
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // 파일을 Base64로 읽어 image 상태에 저장
            };
            reader.readAsDataURL(file); // 파일을 Base64로 변환
        }
    };

    // 감정 일기 버튼 클릭 시 이미지 저장 및 이동
    const handleDiaryClick = () => {
        if (image) {
            localStorage.setItem("capturedImage", image); // Base64 이미지 저장
            uploadImage(image); // 이미지 업로드 함수 호출
        }
        router.push("/camera/frame");
    };

    // 이미지 업로드 및 user_id 처리
    const uploadImage = async (imageData) => {
        try {
            const response = await axios.post(
                `${API_URL}/emotion_predict_base64`, 
                {
                    user_id: 1,
                    image_base64: imageData, // Base64 이미지 데이터 전달
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            if (response.status === 200) {
                console.log("이미지 업로드 성공", response.data);
            }
        } catch (error) {
            console.error("이미지 업로드 실패:", error);
            alert("다른 이미지를 사용해주세요.", error);
        }
    };
    

    return (
        <div className={styles.allContainer}>
            <p className={styles.title}>오늘의 나</p>
            <p className={styles.date}>2024.12.28.</p>
            <div className={styles.textContainer}>
                <p>사진을 찍으면 오늘 나의 감정이 분석돼요!</p>
            </div>
            <div className={styles.imageBackgroundContainer}>
                {!image && <div className={styles.imageBackground} />}
                {image && (
                    <div>
                        <img
                            src={image}
                            alt="Captured or selected"
                            className={styles.image}
                        />
                    </div>
                )}

                {/* 파일 불러오기 버튼 */}
                <div className={styles.fileUploadContainer}>
                    <span
                        onClick={() => fileInputRef.current.click()}
                        className={styles.fileUploadText}
                    >
                        파일 불러오기
                    </span>
                </div>
            </div>

            {/* 카메라 버튼 */}
            <div>
                <button onClick={handleCapture} className={styles.cameraButton}>
                    <Image
                        alt="카메라 버튼"
                        src="/camera/cameraButton.svg"
                        className={styles.cameraIcon}
                        width={50}
                        height={50}
                    />
                </button>
            </div>

            {/* 숨겨진 파일 입력 */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />

            <div className={styles.diaryContainer}>
                <button
                    className={`${styles.diaryButton} ${!image ? styles.disabledButton : ""}`}
                    onClick={handleDiaryClick}
                    disabled={!image}
                >
                    나만의 감정 일기 쓰러가기
                </button>
            </div>
        </div>
    );
};

export default CameraCapture;
