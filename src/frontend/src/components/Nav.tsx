import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", isAnchor: false },
  { label: "Services", href: "#services", isAnchor: true },
  { label: "Portfolio", href: "/portfolio", isAnchor: false },
  { label: "About", href: "#about", isAnchor: true },
  { label: "Process", href: "#process", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (currentPath === "/") {
        document
          .getElementById(href.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            document
              .getElementById(href.slice(1))
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        });
      }
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    if (currentPath === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
    setMenuOpen(false);
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.href === "/portfolio") return currentPath === "/portfolio";
    if (link.href === "/") return currentPath === "/";
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.14_0.02_255/0.95)] backdrop-blur-md shadow-[0_1px_0_oklch(0.24_0.04_255)]"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
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
              stroke="white"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polygon points="5,3 19,12 5,21" fill="white" />
            </svg>
          </span>
          <span className="font-bold text-base text-white tracking-tight">
            Synthetix<span className="neon-text"> Edits</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                data-ocid="nav.link"
                className="px-3 py-2 text-sm font-medium rounded transition-colors relative group text-[oklch(0.72_0.03_255)] hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 bg-neon opacity-0 group-hover:opacity-60" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href as "/" | "/portfolio"}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors relative group ${
                  isActive(link)
                    ? "text-neon"
                    : "text-[oklch(0.72_0.03_255)] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ${
                    isActive(link)
                      ? "bg-neon opacity-100"
                      : "bg-neon opacity-0 group-hover:opacity-60"
                  }`}
                />
              </Link>
            ),
          )}
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="nav.primary_button"
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-full text-[oklch(0.10_0.02_255)] transition-all duration-200 glow-pulse"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.82 0.14 205), oklch(0.72 0.12 210))",
            }}
          >
            Start Project
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border"
          style={{ background: "oklch(0.14 0.02 255 / 0.98)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  data-ocid="nav.link"
                  className="py-2 text-sm font-medium text-[oklch(0.72_0.03_255)] hover:text-neon transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href as "/" | "/portfolio"}
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                  className="py-2 text-sm font-medium text-[oklch(0.72_0.03_255)] hover:text-neon transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
