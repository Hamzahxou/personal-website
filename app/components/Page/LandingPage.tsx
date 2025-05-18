"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CircularText from "../CircularText/CircularText";
export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <section className="w-full h-screen overflow-hidden  bg-background select-none">
      <div className="text-7xl text-foreground relative h-full font-[800]">
        <div className="z-20 absolute top-0 right-0 ">
          <CircularText
            text="WEBSITE DEVELOPER "
            onHover="speedUp"
            spinDuration={20}
            className="text-black"
          />
        </div>
        <div className="absolute bottom-56 left-5">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: { delay: 3.5, duration: 1 },
            }}
            style={{ x: right }}
            className="absolute top-0 left-0 uppercase text-nowrap z-1 italic"
          >
            MUHAMMAD HAMZAH FANSURI
          </motion.h1>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: { delay: 3.5, duration: 1 },
            }}
            style={{ x: right }}
            className="absolute top-0 left-0 uppercase text-nowrap text-transparent [-webkit-text-stroke:2px_#171717] z-3 italic "
          >
            MUHAMMAD HAMZAH FANSURI
          </motion.h1>
        </div>
        <div className="absolute bottom-40 left-0">
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: { delay: 3.5, duration: 1 },
            }}
            style={{ x: left }}
            className="absolute top-0 left-0 uppercase text-nowrap z-1 italic "
          >
            BACK END & FRONT END DEVELOPER
          </motion.h1>
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: { delay: 3.5, duration: 1 },
            }}
            style={{ x: left }}
            className="absolute top-0 left-0 uppercase text-nowrap text-transparent [-webkit-text-stroke:2px_#171717] z-3 italic "
          >
            BACK END & FRONT END DEVELOPER
          </motion.h1>
        </div>

        <div className="flex justify-center items-center  h-full">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={350}
            height={350}
            className="z-2"
          />
        </div>
      </div>
    </section>
  );
}
