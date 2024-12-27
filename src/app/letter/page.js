import React from "react";
import styles from "@/styles/letter/page.module.css";
import Image from "next/image";

const Latter = () => {
    return (
        <div className={styles.allContainer}>
            <div className={styles.title}>
                <p>내일의 나</p>
            </div>
            <div className={styles.buttonContainer}>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos (1).svg"
                        width={320}
                        height={84}
                    />
                </button>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos.svg"
                        width={320}
                        height={84}
                    />
                </button>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos (3).svg"
                        width={320}
                        height={84}
                    />
                </button>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos (4).svg"
                        width={320}
                        height={84}
                    />
                </button>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos (1).svg"
                        width={320}
                        height={84}
                    />
                </button>
                <button>
                    <Image
                        alt="응원 편지지"
                        src="/letter/toast_aos (4).svg"
                        width={320}
                        height={84}
                    />
                </button>
            </div>

        </div>
    );
}

export default Latter;