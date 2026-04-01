export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="border-t border-border mt-0"
      style={{ background: "oklch(0.11 0.02 255)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.14 205), oklch(0.65 0.14 210))",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <polygon points="5,3 19,12 5,21" fill="white" />
                </svg>
              </span>
              <span className="font-bold text-white">
                Synthetix<span className="neon-text"> Edits</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.60 0.04 255)" }}
            >
              Precision-Crafted Post-Production
              <br />
              for the Global Stage
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.60 0.04 255)" }}
            >
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/#services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/#about" },
                { label: "Process", href: "/#process" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-neon"
                  style={{ color: "oklch(0.72 0.03 255)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Trust signals */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.60 0.04 255)" }}
            >
              Trust & Compliance
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { icon: "🔒", text: "Secure Data Handling" },
                { icon: "🌍", text: "International Compliance" },
                { icon: "💳", text: "Flexible Invoicing" },
                { icon: "📋", text: "GDPR-Aligned Workflows" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "oklch(0.72 0.03 255)" }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.55 0.04 255)" }}>
            © {year} Synthetix Edits. Mumbai, India. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:text-neon"
            style={{ color: "oklch(0.55 0.04 255)" }}
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
