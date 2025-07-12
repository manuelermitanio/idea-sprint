import chapterseven from "../assets/chapterseven.png";
import yumi from "../assets/yumi.png";
import instaride from "../assets/instaride.png";
import taskeroo from "../assets/taskeroo.png";
import { Link } from "react-router";

const projects = [
  {
    title: "ChapterSeven",
    description: "ChapterSeven is an online platfrom where anyone can read or write stories, one chapter at a time. Writers can publish their books and open for collaboration with other authors. Readers can enjoy stories, leave comments, give ratings and save books they love. It's a space where creativity and collaboration come together.",
    image: chapterseven,
    link: "/project/chapterseven",
  },
  {
    title: "Yumi",
    description: "Yumi is a Virtual-Life Coach designed to support Emotional and Mental health of users. Yumi is focused in understanding your challenges and provide insights and recommendations to be a better version of yourself.",
    image: yumi,
    link: "/project/yumi",
  },
   {
    title: "InstaRide",
    description: "InstaRide is a RideSharing app that provides efficient access for commuters with open carpool and assist car owners with daily expenses of gas and parking fees.",
    image: instaride,
    link: "/project/instaride",
  },
  {
    title: "Taskeroo",
    description: "Taskeroo is a Project Management Tool that organizes project completion and serves as one stop shop for file attachments and project chatroom",
    image: taskeroo,
    link: "/project/taskeroo",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[var(--color-secondary)] text-[var(--color-spark)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
           <div
  key={index}
  className="bg-[var(--color-dark)] border border-[var(--color-tech)] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition flex flex-col justify-between"
>
  <div>
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-70 object-cover object-top rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-[var(--color-tech)] mb-4">{project.description}</p>
  </div>

  <div className="mt-auto">
    
   <Link
  to={project.link}
  className="inline-block bg-[var(--color-tech)] text-white px-4 py-2 rounded hover:bg-[var(--color-blue)] transition"
>
  View Project
</Link>

  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
