import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProjectDetail from "./pages/ProjectDetail";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
