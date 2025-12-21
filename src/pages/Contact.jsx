import { COLORS } from "../constants/colors";
import { useState } from "react";
import { motion } from 'framer-motion';

const FUNCTION_URL = import.meta.env.VITE_CONTACT_FUNCTION_URL || "";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully! We'll get back to you soon.");
      setSubmitted(true);

      // Clear form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again or email us directly.");
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-start contact-page px-4"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 31, 63, 1), rgba(0, 31, 63, 0.8), rgba(0, 31, 63, 0.6)), url("/images/Unsplash_background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 relative">
        <h1
          className="text-center text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4"
          style={{
            color: COLORS.textLight,
            textShadow: `0 1px 0 rgba(156, 121, 69, 0.3),
                         0 -1px 0 rgba(156, 121, 69, 0.3),
                         1px 0 0 rgba(156, 121, 69, 0.3),
                        -1px 0 0 rgba(156, 121, 69, 0.3)`
          }}
        >
          Contact Us
        </h1>
        <p
          className="text-base sm:text-lg max-w-3xl text-center px-4 mt-2"
          style={{ color: COLORS.textLight, opacity: 0.95 }}
        >
          We'd love to hear from you! If you have any queries or would like
          to get in touch, please fill out the form below and we'll get
          back to you as soon as possible.
        </p>
      </section>

      {/* Contact Card */}
      <section className="w-full flex justify-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-5xl p-2 sm:p-3 md:p-6 rounded-3xl bg-white/20 backdrop-blur-sm">
          <div
            className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/10"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.05),0 0 0 1px rgba(255,255,255,0.05)",
              transform: "translateY(-2px)",
              transition: "all 0.3s ease-in-out"
            }}
          >
            {/* Image Section */}
            <div className="relative md:w-1/2 h-40 sm:h-48 md:h-auto">
              <img
                src="/images/contact_nepal.jpg"
                alt="Nepal Landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <a
                  href="mailto:info@downepal.org"
                  className="text-sm font-medium hover:underline"
                  style={{ color: COLORS.textLight }}
                >
                  info@downepal.org
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-4 p-6 md:p-10 lg:p-12 md:w-1/2 bg-white/50 backdrop-blur-sm justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="flex-1 border-0 border-b-2 border-gray-200 focus:border-primary bg-transparent py-3 px-1 outline-none"
                  style={{ color: COLORS.textDark }}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="flex-1 border-0 border-b-2 border-gray-200 focus:border-primary bg-transparent py-3 px-1 outline-none"
                  style={{ color: COLORS.textDark }}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-200 focus:border-primary bg-transparent py-3 px-1 outline-none"
                style={{ color: COLORS.textDark }}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-0 border-b-2 border-gray-200 focus:border-primary bg-transparent py-3 px-1 outline-none resize-none"
                style={{ color: COLORS.textDark }}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg font-bold text-lg bg-primary text-white hover:bg-opacity-95 shadow-md mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: COLORS.primary }}
              >
                {isLoading ? "SENDING..." : "SUBMIT"}
              </button>

              {submitted && (
                <div
                  className="text-center text-lg font-semibold py-6 animate-fade-in"
                  style={{ color: COLORS.highlight }}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
