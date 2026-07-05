"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    color: "rgba(230, 220, 250, 0.5)",
    size: 400,
    x: [0, 80, -40, 0],
    y: [0, -60, 50, 0],
    borderRadius: [
      "30% 70% 70% 30% / 30% 30% 70% 70%",
      "58% 42% 75% 25% / 76% 46% 54% 24%",
      "50% 50% 33% 67% / 55% 27% 73% 45%",
      "30% 70% 70% 30% / 30% 30% 70% 70%",
    ],
    duration: 14,
    left: "30%",
    top: "35%",
  },
  {
    color: "rgba(220, 230, 250, 0.45)",
    size: 350,
    x: [0, -60, 50, 0],
    y: [0, 50, -40, 0],
    borderRadius: [
      "63% 37% 61% 39% / 55% 64% 36% 45%",
      "43% 57% 34% 66% / 68% 42% 58% 32%",
      "68% 32% 43% 57% / 50% 64% 36% 50%",
      "63% 37% 61% 39% / 55% 64% 36% 45%",
    ],
    duration: 17,
    left: "65%",
    top: "55%",
  },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.left,
            top: blob.top,
            marginLeft: -blob.size / 2,
            marginTop: -blob.size / 2,
            background: blob.color,
          }}
          animate={{
            x: blob.x,
            y: blob.y,
            borderRadius: blob.borderRadius,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
