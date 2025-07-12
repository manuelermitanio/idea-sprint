import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/idealogo.svg"
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-dark)] fixed top-0 w-full z-50 shadow-lg transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Idea Sprint Logo" className="w-6 h-6 object-contain" />
          <h1 className="text-xl font-bold text-[var(--color-spark)] tracking-wide">
            Idea Sprint
          </h1>
        </div>

        <div className="flex items-center space-x-4">

          <ul className="hidden md:flex space-x-6 text-[var(--color-spark)]">
            <li><Link to="/" className="hover:text-[var(--color-tech)]">Home</Link></li>
            <li><a href="#about" className="hover:text-[var(--color-tech)]">About</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-tech)]">Projects</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-tech)]">Contact</a></li>
          </ul>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="md:hidden text-[var(--color-spark)] text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-dark)] px-4 py-6 space-y-4 text-[var(--color-spark)]">
          <a href="#about" className="block hover:text-[var(--color-tech)]">About</a>
          <a href="#projects" className="block hover:text-[var(--color-tech)]">Projects</a>
          <a href="#contact" className="block hover:text-[var(--color-tech)]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
