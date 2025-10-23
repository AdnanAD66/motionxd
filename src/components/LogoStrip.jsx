import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import googleLogo from "../assets/img/google.png";
import adobeLogo from "../assets/img/premiere-pro.png";
import airbnbLogo from "../assets/img/airbnb.png";
import spotifyLogo from "../assets/img/spotify.png";

export default function LogoScrollSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Top row (works fine)
  const xTop = useTransform(smoothScroll, [0, 1], ["0%", "-50%"]);

  // Bottom row — move a bit more to ensure left side stays filled
  const xBottom = useTransform(smoothScroll, [0, 1], ["-50%", "0%"]);

  const logos = [googleLogo, adobeLogo, spotifyLogo, airbnbLogo];

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-16 overflow-hidden pl-16 md:pl-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW */}
        <motion.div
          style={{ x: xTop }}
          className="flex gap-16 md:gap-24 mb-8 opacity-80"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`top-${i}`}
              src={logo}
              alt="client"
              className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300"
            />
          ))}
        </motion.div>

        {/* BOTTOM ROW — fixed looping on scroll */}
        <motion.div
          style={{ x: xBottom }}
          className="flex gap-16 md:gap-24"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`bottom-${i}`}
              src={logo}
              alt="client"
              className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
