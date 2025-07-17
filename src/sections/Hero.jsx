const Hero = () => {
  return (
    <section
      className="relative w-full mt-13 h-110 text-[var(--color-spark)] flex items-center justify-center px-6 overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      />

      {/* ✅ Overlay for softening */}
      <div className="absolute inset-0 bg-[var(--color-dark)] opacity-80" />

      {/* ✅ Foreground content */}
      <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Sprint Your Ideas Into Reality
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-tech)] mb-6">
          Build, launch, and iterate faster with the power of design and code.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-[var(--color-tech)] text-white px-6 py-2 rounded hover:bg-[var(--color-blue)] transition"
          >
            Get Started
          </a>
          <a
            href="/emanermitanio.pdf"
            download
            className="border border-[var(--color-tech)] text-[var(--color-tech)] px-6 py-2 rounded hover:bg-[var(--color-tech)] hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
