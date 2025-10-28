import { motion } from "framer-motion";
import project1 from "../assets/img/project1.mp4";
import project2 from "../assets/img/project2.mp4";
import project3 from "../assets/img/project3.mp4";

export default function ProjectsShowcase() {
  const projects = [
    {
      id: "01",
      title: "LIN SIJU",
      subtitle: "Advertising Film Director.",
      tags: ["Product Launch", "Advertising"],
      year: 2025,
      video: project1,
    },
    {
      id: "02",
      title: "NURO",
      subtitle: "Sustainable Living Project.",
      tags: ["E-commerce", "Social"],
      year: 2025,
      video: project2,
    },
    {
      id: "03",
      title: "FIFTH & FINE",
      subtitle: "A top-tier marketing agency.",
      tags: ["Product Launch", "Advertising"],
      year: 2025,
      video: project3,
    },
  ];

  return (
    <section className="bg-white text-black py-32">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24 px-6 md:px-24 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          KILLER VIDEOS BUILT TO MOVE PEOPLE
        </h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Our videos are crafted to grab attention, stir emotion, and drive
          action — made for screens that never stop scrolling.
        </p>
      </motion.div>

      {/* Full-width projects with rounded container */}
      <div className="flex flex-col space-y-28">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="px-6 md:px-16"
          >
            {/* Rounded container */}
            <div
              className={`flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-xl ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Video Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 overflow-hidden"
              >
                <video
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full aspect-video object-cover"
                />
              </motion.div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 bg-neutral-50 p-10 md:p-16 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-neutral-600 mb-6">{p.subtitle}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-medium">{p.year}</span>
                  <span className="text-orange-500 font-bold text-xl">
                    {p.id}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer link */}
      <div className="text-center mt-24 px-6 md:px-24">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-orange-500 font-medium hover:underline"
        >
          All projects <span className="text-xl">➜</span>
        </a>
      </div>
    </section>
  );
}
