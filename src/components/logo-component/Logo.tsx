"use client"

import styles from "./Logo.module.css"

export default function Logo() {

    const STAR_PATH =
        "M50 28 C54 40, 60 46, 72 50 C60 54, 54 60, 50 72 C46 60, 40 54, 28 50 C40 46, 46 40, 50 28 Z"
    return (
        <div className={styles.logo}>
            {/* First Circle */}
            <svg
                className={styles.circle}
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="48" fill="#0f1115" />

                {/* Small Star */}
                <path
                    d={STAR_PATH}
                    fill="white"
                    transform="translate(50 50) scale(1.3) translate(-50 -50)"
                />

                <line
                    x1="50"
                    y1="50"
                    x2="98"
                    y2="50"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

            {/* Second Circle */}
            <svg
                className={styles.circle}
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="48" fill="#0f1115" />

                {/* Large Star */}
                <path
                    d={STAR_PATH}
                    fill="white"
                    transform="translate(50 50) scale(2.3) translate(-50 -50)"
                />
            </svg>

            {/* Text */}
            <div className={styles.text}>
                <span className={styles.word}>ncepteur</span>
                <span className={styles.tm}>™</span>
            </div>
        </div>
    )
}