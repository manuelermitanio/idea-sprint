import chapterseven from "../assets/chapterseven.png";
import yumi from "../assets/yumi.png";
import instaride from "../assets/instaride.png";
import taskeroo from "../assets/taskeroo.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChapterSeven",
    description: "ChapterSeven is an online platform where anyone can read or write stories, collaborate and inspire.",
    image: chapterseven,
    link: "/project/chapterseven",
  },
  {
    title: "Yumi",
    description: "Yumi is a Virtual-Life Coach designed to support emotional and mental health to make the better version of yourself",
    image: yumi,
    link: "/project/yumi",
  },
  {
    title: "InstaRide",
    description: "InstaRide is a RideSharing app that connects commuters and vehicle owners to provide efficient and convenient ride to destination.",
    image: instaride,
    link: "/project/instaride",
  },
  {
    title: "Taskeroo",
    description: "Taskeroo is a Project Management Tool that organizes project, track completion progress and built-in chatroom for collaboration.",
    image: taskeroo,
    link: "/project/taskeroo",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[var(--color-secondary)] text-[var(--color-spark)] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-dark)] rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-70 object-cover object-top rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[var(--color-tech)] mb-4">
                  {project.description}
                </p>

                {/* 🔐 Show credentials if available */}
                {project.username && project.password && (
                  <div className="bg-[var(--color-secondary)] border border-[var(--color-tech)] text-[var(--color-spark)] p-3 rounded-md text-sm mb-4">
                    <p className="font-semibold mb-1">Test Login</p>
                    <p>
                      <span className="text-gray-300">Username:</span>{" "}
                      {project.username}
                    </p>
                    <p>
                      <span className="text-gray-300">Password:</span>{" "}
                      {project.password}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <Link
                  to={project.link}
                  className="inline-block bg-[var(--color-tech)] text-white px-4 py-2 rounded hover:bg-[var(--color-blue)] transition"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
