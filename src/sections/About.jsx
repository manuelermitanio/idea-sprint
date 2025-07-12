import aboutImage from "../assets/eman.png";
const About = () => {
    return (
        <section
            id="about"
            className="bg-[var(--color-dark)] text-[var(--color-spark)] py-20 px-6"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                <div className="md:w-1/2 flex flex-col items-center text-center space-y-4">
                    <img
                        src={aboutImage}
                        alt="About Idea Sprint"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-[var(--color-spark)]">Eman Ermitanio</h3>
                        <p className="text-[var(--color-tech)] text-sm uppercase tracking-wider">Founder & Full Stack Developer</p>
                    </div>
                    <div className="text-left w-full">
                        <h4 className="text-[var(--color-spark)] font-semibold flex items-center gap-2 justify-center mt-4">
                            <span aria-label="reporting">Tech Stacks</span>
                        </h4>

                        <div className="flex flex-wrap justify-center gap-3 text-[var(--color-tech)] text-sm mt-2">
                            <span>MS Access</span>
                            <span>Excel</span>
                            <span>Snowflake</span>
                            <span>Alteryx</span>
                            <span>Tableau</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 text-[var(--color-tech)] text-sm mt-2">
                            <span>Web Development</span>
                            <span>Python</span>
                            <span>Flask</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                            <span>React</span>
                            <span>Node</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Idea Sprint</h2>
                    <p className="text-[var(--color-tech)] mb-6 leading-relaxed">
                        Idea Sprint is a startup built for creators, developers, and dreamers. We help you turn
                        sparks of inspiration into real-world products—fast. Whether you're prototyping or scaling,
                        we sprint with you.
                    </p>
                    <ul className="space-y-2 text-[var(--color-spark)]">
                        <li>⚡ Rapid development workflows</li>
                        <li>🎯 Focused on design + code synergy</li>
                        <li>🌱 Built with scalability in mind</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
