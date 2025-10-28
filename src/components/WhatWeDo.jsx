import { motion } from "framer-motion";

export default function WhatWeDo() {
  const cards = [
    {
      icon: "🎨",
      title: "Design & Branding",
      text: "We craft digital experiences that tell your story through beautiful design and branding strategies.",
    },
    {
      icon: "⚙️",
      title: "Development",
      text: "From interactive websites to scalable apps, we build performant products with clean, modern code.",
    },
    {
      icon: "🚀",
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
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            What We Do
          </motion.h2>
          <p className="text-neutral-600 text-lg md:text-xl font-medium">
            Your goals, our priority
          </p>
        </motion.div>

        {/* Cards Grid */}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle floating glow animation behind cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20 -z-10"
      />
    </section>
  );
}
