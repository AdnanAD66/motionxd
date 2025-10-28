import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      desc: "Perfect for small creators and businesses that need one high-impact video.",
      features: [
        "1 video (up to 60 sec)",
        "Basic script + editing",
        "Royalty-free music",
        "1 round of revisions",
      ],
    },
    {
      name: "Professional",
      price: "$1,299",
      desc: "Ideal for growing brands needing consistent, high-quality marketing content.",
      features: [
        "3 videos (up to 90 sec each)",
        "Custom script & editing",
        "Advanced motion design",
        "3 revisions per video",
        "Priority delivery",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For agencies or companies needing ongoing creative partnerships and strategy.",
      features: [
        "Unlimited videos / month",
        "Dedicated creative team",
        "Full branding support",
        "On-site or remote shoots",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white py-32 px-6 md:px-24 overflow-hidden rounded-3xl">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-orange-500/10 blur-[180px] z-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r text-orange-600 via-yellow-400 to-orange-600 bg-clip-text text-transparent mb-4 tracking-tight">
            PRICING
          </h2>
          <p className="text-lg text-neutral-400 font-medium">
            High quality. Fast results. Endless creativity.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.05,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-orange-600/20 to-orange-900/30 border-orange-400/40 shadow-orange-500/30"
                  : "hover:border-neutral-500/30"
              }`}
            >
              {/* Dynamic glow for highlighted plan */}
              {plan.highlight && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-transparent blur-3xl"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <h3 className="text-2xl font-semibold mb-3 z-10">
                {plan.name}
              </h3>
              <p className="text-5xl font-bold mb-4 z-10 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {plan.price}
              </p>
              <p className="text-neutral-400 mb-6 z-10">{plan.desc}</p>

              <ul className="text-left text-neutral-300 mb-8 space-y-3 z-10">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400 text-lg mt-[2px]">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: plan.highlight ? "#EA580C" : "#F97316",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`mt-auto px-8 py-3 rounded-full font-semibold tracking-wide z-10 ${
                  plan.highlight
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
