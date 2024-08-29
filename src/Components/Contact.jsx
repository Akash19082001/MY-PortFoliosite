import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-10 bg-black/90 text-white">
      <motion.div
        className="section-head text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 pb-4 pt-10">Contact</h1>
        <h3 className="text-l mb-4">Get In Touch!</h3>
        <p className="text-lg">
          Feel free to reach out for any inquiries or collaborations.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          {/* Form Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg"
            >
              <fieldset>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mt-8 pb-10 text-black/100">
                    Any Enquiries? Message Me!
                  </h2>
                  <label
                    htmlFor="contactName"
                    className="block text-lg text-black/100 font-bold"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    className="w-full p-2 mt-1 bg-black/90 text-white border border-black rounded focus:ring-2 focus:ring-black"
                    value={form.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactEmail"
                    className="block text-lg text-black/100 font-bold"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    className="w-full p-2 mt-1 bg-black/90 text-white border border-black rounded focus:ring-2 focus:ring-black"
                    value={form.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactSubject"
                    className="block text-lg text-black/100 font-bold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="contactSubject"
                    className="w-full p-2 mt-1 bg-black/90 text-white border border-black rounded focus:ring-2 focus:ring-black"
                    value={form.contactSubject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactMessage"
                    className="block text-lg text-black/100 font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    name="contactMessage"
                    className="w-full p-2 mt-1 bg-black/90 text-white border border-black rounded focus:ring-2 focus:ring-black"
                    value={form.contactMessage}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black/90 text-white p-2 rounded hover:bg-black/80 transition duration-300"
                >
                  Send Message
                </button>
              </fieldset>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-100 shadow-gray-400 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-black/100">
                Contact Information
              </h2>
              <p className="text-lg text-black/100">
                You can also reach us at:
              </p>
              <p className="text-lg text-black/100 mt-2">
                <strong>Email:</strong> akash19m08y2001@gmail.com
              </p>
              <p className="text-lg text-black/100 mt-2">
                <strong>Phone:</strong> +91 7339432259
              </p>
              <p className="text-lg text-black/100 mt-2">
                <strong>Address:</strong> 17-211, THIRUMALAI NAGER, CHUNKANKADAI, KANNIYAKUMARI, TAMIL NADU, INDIA
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
