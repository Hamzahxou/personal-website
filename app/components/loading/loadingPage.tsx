"use client";
import { motion } from "framer-motion";
export default function LoadingPage() {
  return (
    <motion.div
      className="fixed bg-secondary top-0 left-0 w-screen h-screen flex justify-center items-center z-50 select-none"
      initial={{ y: 0 }}
      animate={{
        y: -2000,
        transition: { delay: 3, duration: 2 },
        transitionEnd: { display: "none" },
      }}
    >
      <div className="flex flex-col items-center text-4xl font-semibold leading-[0] text-foreground">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: { display: "none" },
          }}
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: { display: "none" },
          }}
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: { display: "none" },
          }}
        >
          こんにちは
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: { display: "none" },
          }}
        >
          مرحبًا
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7 },
            transitionEnd: { display: "none" },
          }}
        >
          안녕하세요
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.0 },
            transitionEnd: { display: "none" },
          }}
        >
          你好
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.3 },
          }}
        >
          Привет
        </motion.span>
      </div>
    </motion.div>
  );
}
