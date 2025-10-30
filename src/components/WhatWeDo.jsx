import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Rocket,
} from "lucide-react"; // <-- using professional Lucide icons

export default function WhatWeDo() {
  const cards = [
    {
      icon: <Palette className="w-14 h-14 text-primary group-hover:text-blue-500 transition-colors duration-300" />,
      title: "Design & Branding",
      text: "We craft digital experiences that tell your story through beautiful design and branding strategies.",
    },
    {
      icon: <Code2 className="w-14 h-14 text-primary group-hover:text-blue-500 transition-colors duration-300" />,
      title: "Development",
      text: "From interactive websites to scalable apps, we build performant products with clean, modern code.",
    },
    {
      icon: <Rocket className="w-14 h-14 text-primary group-hover:text-blue-500 transition-colors duration-300" />,
      title: "Strategy & Growth",
      text: "We help brands evolve with clear strategy, creative content, and measurable digital growth.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-neutral-50 to-white text-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ backgroundPosition: "200% center" }}
            whileInView={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-sky-400 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            What We Do
          </motion.h2>
          <p className="text-neutral-600 text-lg md:text-xl font-medium">
            Your goals, our priority
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 4,
                rotateY: -2,
                boxShadow: "0 15px 40px rgba(59,130,246,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              {/* Subtle gradient glow behind icon */}
              <motion.div
                className="absolute top-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-sky-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative mb-6 flex justify-center">{card.icon}</div>

              <h3 className="text-2xl font-semibold mb-3 text-neutral-900 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-3xl opacity-20 -z-10"
      />
    </section>
  );
}
