import { motion } from "framer-motion";
import hero_video from "../assets/img/hero_vid.mp4";
import '../index.css';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-start overflow-hidden relative px-10 py-20">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-semibold leading-tight max-w-3xl text-orange-600"
      >
        World-class <span className="text-black">3D</span> and Motion Videos
      </motion.h1>

      {/* Rolling text / marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap mt-6 mb-6 p-8 box-border bg-gray-100 rounded-[2rem]">

              <video
          src={hero_video} // replace with your video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          ></video>
      </div>

    </section>
  );
}
