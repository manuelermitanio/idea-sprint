import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-spark)] py-10 px-6 border-t border-t-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">Idea Sprint</h3>
          <p className="text-[var(--color-tech)] text-sm">
            ©2025 All rights reserved.
          </p>
        </div>

        <ul className="flex space-x-6 text-sm">
          <li><a href="#about" className="hover:text-[var(--color-tech)]">About</a></li>
          <li><a href="#projects" className="hover:text-[var(--color-tech)]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[var(--color-tech)]">Contact</a></li>
        </ul>

        <div className="flex space-x-4 text-xl text-[var(--color-spark)]">
          <a href="https://www.facebook.com/eman.ermitanio/" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-[var(--color-tech)]" /></a>
          <a href="https://github.com/manuelermitanio" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-[var(--color-tech)]" /></a>
          <a href="https://gitlab.com/emanermitanio0826" target="_blank" rel="noopener noreferrer"><FaGitlab className="hover:text-[var(--color-tech)]" /></a>
          <a href="https://www.linkedin.com/in/manuel-ermitanio-29677a219/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-[var(--color-tech)]" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
