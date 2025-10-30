import "../index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  // Track scroll relative to this Hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth zoom-out + slight upward motion while scrolling
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.60]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Keep opacity full until Hero nearly leaves, then fade slightly
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.5]);

  return (
    <section
      ref={ref}
      className="min-h-[45vh] relative flex items-start overflow-hidden bg-white"
    >
      <div className="w-full max-w-7xl relative py-18 sm:px-12">
        <motion.h1
          style={{ scale, y, opacity }}
          className="text-5xl sm:text-8xl font-bold text-primary leading-none tracking-tight text-center"
        >
          NEXT-GEN <span className="text-black">VR</span> WEB & APP DEVELOPMENT
        </motion.h1>
      </div>

      {/* Optional: subtle gradient fade into the video section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}