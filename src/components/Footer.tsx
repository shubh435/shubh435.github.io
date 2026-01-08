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

const MotionButton = motion.button;

type FormErrors = Partial<
  Record<"name" | "email" | "message" | "inquiryType", string>
>;

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "",
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
    if (!formValues.inquiryType) {
      validationErrors.inquiryType = "Pick the type of inquiry.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
          setFormValues({ name: "", email: "", message: "", inquiryType: "" });
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
      className="py-16 px-6 md:px-10"
      style={{ background: "var(--bg-main)", color: "var(--text-primary)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Social Links */}
        <motion.div className="surface-card rounded-3xl p-8 shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold mb-4">🌐 Connect with Me</h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all duration-300"
                style={{ color: "var(--text-primary)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-primary)"}
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
          className="surface-card rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
          <p className="mb-4" style={{ color: "var(--text-muted)" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:shubhamsarode435@gmail.com"
              className="hover:underline"
              style={{ color: "var(--accent-text)" }}
            >
              shubhamsarode435@gmail.com
            </a>
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-subtle)"}
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
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-subtle)"}
                required
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-rose-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="inquiryType" className="block mb-1 text-sm">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-subtle)"}
                value={formValues.inquiryType}
                onChange={handleChange}
                aria-invalid={Boolean(errors.inquiryType)}
              >
                <option value="">Select an option</option>
                <option value="project">Project collaboration</option>
                <option value="freelance">Freelance / Consulting</option>
                <option value="mentorship">Mentorship</option>
                <option value="speaking">Speaking / Content</option>
              </select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-rose-400">
                  {errors.inquiryType}
                </p>
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
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-subtle)"}
                required
                value={formValues.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-rose-400">{errors.message}</p>
              )}
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Subject auto-fills as:{" "}
              <span style={{ color: "var(--accent-text)" }}>{subjectValue}</span>
            </p>
            <MotionButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              className="relative overflow-hidden rounded-full px-6 py-3 font-semibold text-white transition disabled:opacity-60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
              <span className="absolute inset-0 bg-white/20 mix-blend-overlay animate-pulse" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    aria-hidden
                    className="text-sm"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </MotionButton>
            <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>Prefer a call?</span>
              <a
                href="https://cal.com/shubh435/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
                style={{ color: "var(--accent-text)" }}
              >
                Book a 20-min slot
              </a>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-sm mt-12"
        style={{ color: "var(--text-muted)" }}
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
