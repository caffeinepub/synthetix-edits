import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import HeroCanvas from "../components/HeroCanvas";
import { useSubmitContact } from "../hooks/useQueries";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    title: "Premium Ad Suites",
    desc: "ROI-driven storytelling with world-class color grading and sound design. Built for social media and broadcast — optimized for international client workflows.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Advanced Post-Production",
    desc: "4K stabilization, motion graphics, narrative pacing, and cinematic transitions. High-end boutique quality for premium content.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M6 8h4M6 11h3" />
        <rect x="14" y="7" width="4" height="4" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Motion Graphics",
    desc: "Dynamic animated assets for brand storytelling and digital campaigns. Custom-crafted motion design that elevates every frame.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
      </svg>
    ),
  },
  {
    title: "Ad Strategy & Consultation",
    desc: "Data-backed creative direction for high-converting campaigns. We align your visual story with measurable performance metrics.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Secure Cloud Upload",
    desc: "Encrypted upload portal with GDPR-compliant file handling. Your footage is safe from day one.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <polyline points="16 16 12 12 8 16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Collaborative Revision Phase",
    desc: "Real-time feedback loops with multiple revision rounds. We iterate until every frame is perfect.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Master File Delivery",
    desc: "Final deliverables in broadcast-ready formats. ISO-grade workflows, multi-currency invoicing for global B2B partners.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
  },
];

export default function Home() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectBrief: "",
    email: "",
  });
  const { mutate: submitContact, isPending, isSuccess } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(formData, {
      onSuccess: () => {
        toast.success("Project brief sent! We'll be in touch within 24 hours.");
        setFormData({ name: "", company: "", projectBrief: "", email: "" });
      },
      onError: () => {
        toast.error("Failed to send. Please try again.");
      },
    });
  };

  return (
    <main>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.10 0.02 255) 0%, oklch(0.14 0.025 255) 60%, oklch(0.17 0.03 255) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-editing-suite.dim_1920x1080.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <HeroCanvas />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.12 0.02 255))",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border"
            style={{
              background: "oklch(0.82 0.14 205 / 0.08)",
              borderColor: "oklch(0.82 0.14 205 / 0.3)",
              color: "oklch(0.82 0.14 205)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-neon glow-pulse"
              aria-hidden="true"
            />
            Mumbai-Based · Global Clients · ISO-Grade Workflows
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "oklch(0.97 0.01 255)" }}
          >
            Synthetix Edits:
            <br />
            <span className="neon-text">Where High-Octane Creativity</span>
            <br />
            Meets Surgical Precision.
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "oklch(0.72 0.03 255)" }}
          >
            We transform raw footage into high-converting digital assets.
            Serving international B2B clients across the UK, EU, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.primary_button"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 glow-pulse"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.14 205), oklch(0.72 0.12 210))",
                color: "oklch(0.10 0.02 255)",
              }}
            >
              Start Your Project
            </button>
            <Link
              to="/portfolio"
              data-ocid="hero.secondary_button"
              className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:bg-neon/10"
              style={{
                borderColor: "oklch(0.82 0.14 205)",
                color: "oklch(0.82 0.14 205)",
              }}
            >
              Explore Portfolio
            </Link>
          </div>

          <div
            className="mt-16 flex flex-col items-center gap-2"
            style={{ color: "oklch(0.55 0.04 255)" }}
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest uppercase">
              Scroll to explore
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5 animate-bounce"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 neon-text">
              What We Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "oklch(0.97 0.01 255)" }}
            >
              Our Specialized Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                data-ocid={`services.card.${i + 1}`}
                className={`reveal reveal-delay-${i + 1} p-6 rounded-xl border transition-all duration-300 hover:border-neon/40 group`}
                style={{
                  background: "oklch(0.16 0.025 255)",
                  borderColor: "oklch(0.24 0.04 255)",
                  boxShadow: "0 4px 24px oklch(0.08 0.02 255 / 0.8)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "oklch(0.82 0.14 205 / 0.1)",
                    color: "oklch(0.82 0.14 205)",
                  }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "oklch(0.97 0.01 255)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.65 0.04 255)" }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6"
        style={{ background: "oklch(0.13 0.022 255)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 neon-text">
                Our Story
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "oklch(0.97 0.01 255)" }}
              >
                About Synthetix Edits
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.72 0.03 255)" }}
              >
                Born in Mumbai, built for the world. Synthetix Edits is a
                creative powerhouse serving B2B clients across the UK, EU, and
                beyond — bridging the gap between pharmaceutical-grade precision
                and artistic media expression.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.72 0.03 255)" }}
              >
                The Synthetix philosophy? Blending raw human emotion with
                cutting-edge digital tools. Every project is handled with
                obsessive attention to detail, guaranteed deadlines, and
                enterprise-grade secure data workflows.
              </p>

              {/* Owner */}
              <div
                className="flex items-center gap-4 mb-6 p-4 rounded-xl border"
                style={{
                  background: "oklch(0.82 0.14 205 / 0.06)",
                  borderColor: "oklch(0.82 0.14 205 / 0.25)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-base"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.82 0.14 205), oklch(0.65 0.14 210))",
                    color: "oklch(0.10 0.02 255)",
                  }}
                >
                  AS
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: "oklch(0.65 0.04 255)" }}
                  >
                    Founder & Owner
                  </div>
                  <div
                    className="font-bold text-base"
                    style={{ color: "oklch(0.97 0.01 255)" }}
                  >
                    Asjad Sayyed
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "ISO-Grade Precision",
                  "GDPR-Aligned",
                  "Deadline Committed",
                  "Global B2B Ready",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full border"
                    style={{
                      background: "oklch(0.82 0.14 205 / 0.08)",
                      borderColor: "oklch(0.82 0.14 205 / 0.3)",
                      color: "oklch(0.82 0.14 205)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
              {[
                { num: "150+", label: "Projects Delivered" },
                { num: "12", label: "Countries Served" },
                { num: "99%", label: "On-Time Delivery" },
                { num: "4K", label: "Max Resolution" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl border text-center"
                  style={{
                    background: "oklch(0.16 0.025 255)",
                    borderColor: "oklch(0.24 0.04 255)",
                  }}
                >
                  <div className="text-3xl font-bold mb-1 neon-text">
                    {stat.num}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.65 0.04 255)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 neon-text">
              How It Works
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "oklch(0.97 0.01 255)" }}
            >
              Client Onboarding Process
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "oklch(0.65 0.04 255)" }}
            >
              ISO-grade workflows · GDPR-aligned handling · Multi-currency
              invoicing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div
              className="hidden md:block absolute top-10 left-1/6 right-1/6 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.82 0.14 205 / 0.4), transparent)",
              }}
              aria-hidden="true"
            />

            {processSteps.map((step, i) => (
              <div
                key={step.title}
                data-ocid={`process.card.${i + 1}`}
                className={`reveal reveal-delay-${i + 1} relative p-7 rounded-xl border text-center`}
                style={{
                  background: "oklch(0.16 0.025 255)",
                  borderColor: "oklch(0.24 0.04 255)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                  style={{
                    background: "oklch(0.82 0.14 205 / 0.1)",
                    borderColor: "oklch(0.82 0.14 205 / 0.4)",
                    color: "oklch(0.82 0.14 205)",
                    boxShadow: "0 0 20px oklch(0.82 0.14 205 / 0.2)",
                  }}
                >
                  {step.icon}
                </div>
                <div className="text-xs font-bold mb-2 neon-text">
                  {step.num}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "oklch(0.97 0.01 255)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.65 0.04 255)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6"
        style={{ background: "oklch(0.13 0.022 255)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 neon-text">
                Get In Touch
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "oklch(0.97 0.01 255)" }}
              >
                Start Your Project
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.72 0.03 255)" }}
              >
                Ready to transform your footage into high-converting digital
                assets? Our global-ready workflow means we can onboard clients
                anywhere in the world — UK, EU, or beyond — with seamless
                communication and enterprise-grade delivery.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: "⚡",
                    title: "24h Response Time",
                    desc: "We acknowledge every brief within one business day.",
                  },
                  {
                    icon: "🌐",
                    title: "Global Timezone Coverage",
                    desc: "Async-friendly collaboration across UK, EU, IN time zones.",
                  },
                  {
                    icon: "🔐",
                    title: "NDAs Available",
                    desc: "Confidentiality agreements available for all client projects.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <div
                        className="font-semibold text-sm mb-0.5"
                        style={{ color: "oklch(0.97 0.01 255)" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "oklch(0.65 0.04 255)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/919967485827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xl">💬</span>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      WhatsApp
                    </div>
                    <div
                      className="font-semibold text-sm group-hover:text-white transition-colors"
                      style={{ color: "oklch(0.82 0.12 160)" }}
                    >
                      +91 99674 85827
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+918879846599"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xl">📞</span>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Call
                    </div>
                    <div
                      className="font-semibold text-sm group-hover:text-white transition-colors"
                      style={{ color: "oklch(0.97 0.01 255)" }}
                    >
                      +91 88798 46599
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:sayyeddasjad@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xl">✉️</span>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Email
                    </div>
                    <div
                      className="font-semibold text-sm group-hover:text-white transition-colors"
                      style={{ color: "oklch(0.97 0.01 255)" }}
                    >
                      sayyeddasjad@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="reveal reveal-delay-2 p-8 rounded-2xl border"
              style={{
                background: "oklch(0.16 0.025 255)",
                borderColor: "oklch(0.24 0.04 255)",
              }}
              data-ocid="contact.panel"
            >
              {isSuccess ? (
                <div
                  className="text-center py-8"
                  data-ocid="contact.success_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "oklch(0.82 0.14 205 / 0.15)",
                      boxShadow: "0 0 30px oklch(0.82 0.14 205 / 0.3)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-8 h-8"
                      style={{ color: "oklch(0.82 0.14 205)" }}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "oklch(0.97 0.01 255)" }}
                  >
                    Brief Received!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.65 0.04 255)" }}
                  >
                    We'll review your project and get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Alex Thompson"
                      data-ocid="contact.input"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent text-sm outline-none transition-all focus:ring-1 placeholder:text-[oklch(0.45_0.04_255)]"
                      style={{
                        borderColor: "oklch(0.24 0.04 255)",
                        color: "oklch(0.97 0.01 255)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Company *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, company: e.target.value }))
                      }
                      placeholder="Acme Media Ltd."
                      data-ocid="contact.input"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent text-sm outline-none transition-all placeholder:text-[oklch(0.45_0.04_255)]"
                      style={{
                        borderColor: "oklch(0.24 0.04 255)",
                        color: "oklch(0.97 0.01 255)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="alex@company.com"
                      data-ocid="contact.input"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent text-sm outline-none transition-all placeholder:text-[oklch(0.45_0.04_255)]"
                      style={{
                        borderColor: "oklch(0.24 0.04 255)",
                        color: "oklch(0.97 0.01 255)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-brief"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "oklch(0.65 0.04 255)" }}
                    >
                      Project Brief *
                    </label>
                    <textarea
                      id="contact-brief"
                      required
                      rows={4}
                      value={formData.projectBrief}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          projectBrief: e.target.value,
                        }))
                      }
                      placeholder="Tell us about your project — type, duration, deadline, and goals..."
                      data-ocid="contact.textarea"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent text-sm outline-none transition-all resize-none placeholder:text-[oklch(0.45_0.04_255)]"
                      style={{
                        borderColor: "oklch(0.24 0.04 255)",
                        color: "oklch(0.97 0.01 255)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    data-ocid="contact.submit_button"
                    className="w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-60"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.82 0.14 205), oklch(0.72 0.12 210))",
                      color: "oklch(0.10 0.02 255)",
                      boxShadow: isPending
                        ? "none"
                        : "0 0 20px oklch(0.82 0.14 205 / 0.4)",
                    }}
                  >
                    {isPending ? "Sending..." : "Send Project Brief"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
