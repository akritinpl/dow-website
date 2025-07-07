import { useState } from "react";
//info for email 
function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace this with AWS Lambda for form submission
    console.log(formData);
    alert("Message submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-semibold text-[--color-primary] mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border border-gray-300 p-3 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 p-3 rounded"
          onChange={handleChange}
          required
        />
        
        <button
          type="submit"
          className="mt-4 bg-[--color-secondary] text-black px-6 py-3 rounded hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUsPage;
