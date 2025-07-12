const Hero = () => {
  return (
    <section className="w-full mt-13 h-110 bg-[var(--color-secondary)] text-[var(--color-spark)] flex items-center justify-center px-6">
      <div className="text-center">
      
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Sprint Your Ideas Into Reality
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-tech)] mb-6">
          Build, launch, and iterate faster with the power of design and code.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[var(--color-tech)] text-white px-6 py-2 rounded hover:bg-[var(--color-blue)] transition">
            Get Started
          </button>
          <button className="border border-[var(--color-tech)] text-[var(--color-tech)] px-6 py-2 rounded hover:bg-[var(--color-tech)] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
