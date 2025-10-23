// ...existing code...
import '../index.css';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  // target the section for scroll progress; offsets tune when transforms run
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // three layers moving at different speeds + scale to emulate the reference
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const scaleMid = useTransform(scrollYProgress, [0, 0.35, 1], [1.06, 1.02, 1]);
  const scaleFront = useTransform(scrollYProgress, [0, 0.35, 1], [1.03, 1, 0.98]);
  const frontOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 1, 1]);

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center px-10 py-20 overflow-visible">
      <div className="w-full max-w-7xl relative h-[48vh] sm:h-[56vh]">
        {/* Background oversized ghost text
        <motion.h1
          style={{ y: yBg }}
          className="pointer-events-none select-none absolute inset-0 text-[10rem] sm:text-[14rem] font-black text-gray-200 leading-none tracking-tight z-0"
        >
          WORLD-CLASS 3D AND MOTION VIDEOS
        </motion.h1> */}

        {/* Middle layer */}
        {/* <motion.h1
          style={{ y: yMid, scale: scaleMid }}
          className="absolute inset-0 text-[5.5rem] sm:text-[7.5rem] font-extrabold text-gray-800 leading-none tracking-tight z-10"
        >
          WORLD-CLASS <span className="text-black">3D</span> AND MOTION VIDEOS
        </motion.h1> */}

        {/* Foreground/front-most */}
        <motion.h1
          style={{ y: yFront, opacity: frontOpacity, scale: scaleFront }}
          className="absolute inset-0 text-5xl sm:text-6xl font-bold text-black leading-none tracking-tight z-20"
        >
          WORLD-CLASS <span className="text-black">3D</span> AND MOTION VIDEOS
        </motion.h1>
      </div>
    </section>
  );
}