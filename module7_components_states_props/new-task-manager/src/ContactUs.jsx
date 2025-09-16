import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function ContactUs() {
  const url = "http://localhost:8000/contact-us";

  // Refs for form fields
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name.current.value || !email.current.value || !message.current.value) {
      alert("Please fill in all required fields!");
      return;
    }

    const data = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
    };

    try {
      // 1. Send data to backend
      const response = await axios.post(url, data);
      console.log("Backend Response:", response.data);

      // 2. Send email via EmailJS
      await emailjs.send(
        "service_0lqvg4h", // ✅ Replace with your EmailJS service ID
        "template_110ejen", // ✅ Replace with your EmailJS template ID
        data,
        "RWjkT7hVijhdOtItY" // ✅ Replace with your EmailJS public key
      );
      alert("Your message has been sent successfully!");
      } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }

      // 3. Clear form after successful submission
      name.current.value = "";
      email.current.value = "";
      phone.current.value = "";
      message.current.value = "";
    
  };

  return (
    <section className="w-[400px] mt-10 mx-auto p-5 shadow-lg rounded bg-white">
      <h1 className="text-2xl font-bold text-center mb-5">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            ref={name}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            ref={email}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            ref={phone}
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            ref={message}
            placeholder="Enter your message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
