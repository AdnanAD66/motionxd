import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-6 md:px-24 overflow-hidden relative rounded-3xl mt-20">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Brand / Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-2">MOTIONXD</h2>
          <p className="text-neutral-200">
            Designing and building visuals that move people — one frame at a time.
          </p>
        </motion.div>

        {/* Center Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:items-center space-y-3"
        >
          <a
            href="#"
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#work"
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#pricing"
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* Right / Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:text-right space-y-4"
        >
          <p className="text-neutral-200 mb-2">Follow us</p>
          <div className="flex md:justify-end gap-4">
            {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, color: "#ffff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-neutral-200 text-sm relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} MotionXD — All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
