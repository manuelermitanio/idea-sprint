import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = "manuel.ermitanio@gmail.com";
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[var(--color-dark)] text-[var(--color-spark)] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-[var(--color-tech)] mb-6">
          Have a question, idea, or just want to say hi? Drop me a message below.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[var(--color-dark)] border border-[var(--color-tech)] text-[var(--color-spark)] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[var(--color-dark)] border border-[var(--color-tech)] text-[var(--color-spark)] focus:outline-none"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[var(--color-dark)] border border-[var(--color-tech)] text-[var(--color-spark)] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[var(--color-tech)] text-white px-6 py-2 rounded hover:bg-[var(--color-blue)] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
