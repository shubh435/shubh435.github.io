import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { id: 1, name: "GitHub", icon: <FaGithub className="text-xl" />, url: "https://github.com/shubh435" },
  { id: 2, name: "LeetCode", icon: <SiLeetcode className="text-xl" />, url: "https://leetcode.com/u/shubh435/" },
  { id: 3, name: "LinkedIn", icon: <FaLinkedin className="text-xl" />, url: "https://www.linkedin.com/in/shubh435/" },
  { id: 4, name: "Twitter", icon: <FaTwitter className="text-xl" />, url: "https://twitter.com/shubh435" },
  { id: 5, name: "Medium", icon: <FaMedium className="text-xl" />, url: "https://medium.com/@shubh435" },
  { id: 6, name: "Instagram", icon: <FaInstagram className="text-xl" />, url: "https://www.instagram.com/thesoftwaretack/" },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="footer"
      className="bg-black text-white py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Social Links */}
        <motion.div>
          <h2 className="text-2xl font-semibold mb-4">🌐 Connect with Me</h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {link.icon}
                <span className="text-lg">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
          <p className="mb-4 text-gray-400">
            <strong>Email:</strong>{" "}
            <a href="mailto:shubhamsarode435@gmail.com" className="text-cyan-400 hover:underline">
              shubhamsarode435@gmail.com
            </a>
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="fullname" className="block mb-1 text-sm">Full Name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Message Me
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-gray-500 text-sm mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Shubham Sarode. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
