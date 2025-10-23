// ...existing code...
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero_video from "../assets/img/hero_vid.mp4";

export default function VideoSection() {
  const ref = useRef(null);
  // Use the section as target so we can pin the video while the section is on screen
  // Adjust offsets so the video starts pinning when the section's top hits the
  // center of the viewport (making the video half-visible within the first
  // viewport after the hero).
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  // scale the video slightly, then shrink; translate it upward as you scroll
  // tweak ranges so the video is visible earlier and occupies half the viewport
  // when pinning starts.
  const scale = useTransform(scrollYProgress, [1, 0.35, 0], [1.08, 1, 0.85]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.08, 0.6, 1], [0, 1, 1, 1]);

  return (
    // Reduce the overall section height—use enough space for the pinning
    // animation but avoid large white gaps before/after the video.
    <section ref={ref} className="relative" style={{ height: '120vh' }}>
      {/* Sticky container pins the video in the viewport while section scrolls */}
      <div className="sticky top-1/4 h-[75vh] flex items-center justify-center">
        <motion.div
          style={{ scale, y: translateY, opacity }}
          className="w-full h-full max-h-[88vh] overflow-hidden rounded-2xl shadow-xl"
        >
          <video
            src={hero_video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
// ...existing code...