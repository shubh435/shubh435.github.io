import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub className="text-xl" />,
    url: "https://github.com/shubh435",
  },
  {
    id: 2,
    name: "LeetCode",
    icon: <SiLeetcode className="text-xl" />,
    url: "https://leetcode.com/u/shubh435/",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin className="text-xl" />,
    url: "https://www.linkedin.com/in/shubh435/",
  },
  {
    id: 4,
    name: "Twitter",
    icon: <FaTwitter className="text-xl" />,
    url: "https://twitter.com/shubh435",
  },
  {
    id: 5,
    name: "Medium",
    icon: <FaMedium className="text-xl" />,
    url: "https://medium.com/@shubh435",
  },
  {
    id: 6,
    name: "Instagram",
    icon: <FaInstagram className="text-xl" />,
    url: "https://www.instagram.com/thesoftwaretack/",
  },
];

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3600);
  };

  const validateForm = () => {
    const validationErrors: FormErrors = {};
    if (formValues.name.trim().length < 2) {
      validationErrors.name = "Please enter at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (formValues.message.trim().length < 10) {
      validationErrors.message = "Share a few more details (10+ characters).";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const subjectValue = `Portfolio Inquiry – ${formValues.name || "Visitor"}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm() || !formRef.current) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          showToast("Message sent successfully!", "success");
          formRef.current?.reset();
          setFormValues({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          showToast("Failed to send message.", "error");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <motion.footer
      id="footer"
      className="text-white py-12 px-4"
      style={{ background: "var(--bg-main)" }}
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
            <a
              href="mailto:shubhamsarode435@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              shubhamsarode435@gmail.com
            </a>
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                value={formValues.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-rose-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-rose-400">{errors.email}</p>
              )}
            </div>
            <input type="hidden" name="subject" value={subjectValue} readOnly />
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                value={formValues.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-rose-400">{errors.message}</p>
              )}
            </div>
            <p className="text-xs text-gray-400">
              Subject auto-fills as:{" "}
              <span className="text-cyan-400">{subjectValue}</span>
            </p>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Message Me"}
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
      {toast && (
        <div
          role="status"
          aria-live="assertive"
          className={`toast-notification ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          {toast.message}
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
