import { useState } from "react";
import { useParams, Link } from "react-router";
import chapterseven1 from "../assets/chapterseven1.png";
import chapterseven2 from "../assets/chapterseven2.png";
import chapterseven3 from "../assets/chapterseven3.png";
import chapterseven4 from "../assets/chapterseven4.png";
import chapterseven5 from "../assets/chapterseven5.png";
import chapterseven6 from "../assets/chapterseven6.png";
import yumi1 from "../assets/yumi1.png";
import yumi2 from "../assets/yumi2.png";
import yumi3 from "../assets/yumi3.png";
import yumi4 from "../assets/yumi4.png";
import instaride from "../assets/instaride.png";
import instaride1 from "../assets/instaride1.png";
import instaride2 from "../assets/instaride2.png";
import instaride3 from "../assets/instaride3.png";
import taskeroo from "../assets/taskeroo.png";
import taskeroo1 from "../assets/taskeroo1.png";
import taskeroo2 from "../assets/taskeroo2.png";
import taskeroo3 from "../assets/taskeroo3.png";

const projectData = {
  chapterseven: {
    title: "ChapterSeven",
    description: "ChapterSeven is an online platform where anyone can read or write stories...",
    screenshots: [chapterseven1, chapterseven2, chapterseven3, chapterseven4, chapterseven5, chapterseven6],
    link: "https://chaptersevenbeta.onrender.com/",
    username: "angelwinks@test.com",
    password: "angel",
  },
  yumi: {
    title: "Yumi",
    description: "Yumi is a Virtual-Life Coach designed to support emotional and mental health...",
    screenshots: [yumi1, yumi2, yumi3, yumi4],
    link: "https://heyitsme.onrender.com/",
  },
  instaride: {
    title: "InstaRide",
    description: "InstaRide is a RideSharing app that provides efficient access for commuters...",
    screenshots: [instaride1, instaride, instaride2, instaride3],
    link: "https://instaride-beta.onrender.com/",
    username: "johndoe@test.com",
    password: "123",
  },
  taskeroo: {
    title: "Taskeroo",
    description: "Taskeroo is a Project Management Tool that organizes project completion...",
    screenshots: [taskeroo1, taskeroo, taskeroo2, taskeroo3],
    link: "https://beta-taskeroo.onrender.com/",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData[slug];

  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return (
      <div className="bg-[var(--color-dark)] text-[var(--color-spark)] min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-spark)] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6 text-left">
          <Link to="/" className="text-[var(--color-tech)] hover:underline text-sm font-medium">
            ← Back to Projects
          </Link>
        </div>

        {/* Project Info */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-[var(--color-tech)] mb-6">{project.description}</p>

          {/* Live Project Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-tech)] text-white px-6 py-2 rounded hover:bg-[var(--color-blue)] transition"
          >
            Open Live Project
          </a>

          {/* Optional Login Credentials */}
          {project.username && project.password && (
            <div className="text-[var(--color-spark)] p-4 rounded-lg text-sm mt-4">
              <p className="font-semibold mb-1">Test Login</p>
              <p><span className="text-gray-300">Username:</span> {project.username}</p>
              <p><span className="text-gray-300">Password:</span> {project.password}</p>
            </div>
          )}
        </div>

        {/* Screenshots Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {project.screenshots.map((src, idx) => (
            <button key={idx} onClick={() => setActiveImage(src)} className="hover:scale-[1.03] transition">
              <img
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="w-full h-auto object-cover object-top rounded-md shadow-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-[var(--color-dark)] px-3 py-1 rounded hover:bg-[var(--color-tech)] transition z-50"
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt="Full screenshot"
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
