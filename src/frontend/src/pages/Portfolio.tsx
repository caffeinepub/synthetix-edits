import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { useScrollReveal } from "../hooks/useScrollReveal";

const portfolioItems = [
  {
    title: "The Night Chase",
    category: "Film / Narrative",
    beforeImage: "/assets/generated/night-chase-before.jpeg",
    afterImage: "/assets/generated/night-chase-after.jpeg",
    desc: "Feature short — dramatic color grade, cinematic LUT, noise reduction",
  },
  {
    title: "Brand Pulse",
    category: "Commercial / Ad",
    beforeGradient:
      "linear-gradient(135deg, #111118 0%, #1c1c28 50%, #141420 100%)",
    afterGradient:
      "linear-gradient(135deg, #00141f 0%, #005577 30%, #00a8c8 70%, #40e8ff 100%)",
    desc: "30-second broadcast ad — motion graphics, sound design, BBFC-ready export",
  },
  {
    title: "Urban Drift",
    category: "Music Video",
    beforeGradient:
      "linear-gradient(135deg, #0a0a10 0%, #161624 50%, #0e0e1c 100%)",
    afterGradient:
      "linear-gradient(135deg, #0a1a30 0%, #1a4060 40%, #00b8e0 75%, #80f0ff 100%)",
    desc: "Music video — 4K stabilization, rhythmic cuts, teal/orange contrast grade",
  },
  {
    title: "Launchpad 2024",
    category: "Corporate / Event",
    beforeGradient:
      "linear-gradient(135deg, #0c0c14 0%, #181828 50%, #0f0f1e 100%)",
    afterGradient:
      "linear-gradient(135deg, #001828 0%, #003a58 35%, #0090b8 70%, #00e8ff 100%)",
    desc: "Corporate event highlight reel — lower thirds, branded transitions, 4K delivery",
  },
];

export default function Portfolio() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Portfolio — Synthetix Edits";
    return () => {
      document.title = "Synthetix Edits";
    };
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 neon-text">
            Our Work
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.97 0.01 255)" }}
          >
            Portfolio Showcase
          </h1>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.72 0.03 255)" }}
          >
            Drag the slider to see our transformations — raw footage elevated
            into cinematic excellence.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`portfolio.item.${i + 1}`}
              className={`reveal reveal-delay-${(i % 2) + 1} rounded-2xl border overflow-hidden`}
              style={{
                background: "oklch(0.16 0.025 255)",
                borderColor: "oklch(0.24 0.04 255)",
              }}
            >
              <BeforeAfterSlider
                beforeImage={(item as { beforeImage?: string }).beforeImage}
                afterImage={(item as { afterImage?: string }).afterImage}
                beforeGradient={
                  (item as { beforeGradient?: string }).beforeGradient
                }
                afterGradient={
                  (item as { afterGradient?: string }).afterGradient
                }
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "oklch(0.97 0.01 255)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full border"
                    style={{
                      background: "oklch(0.82 0.14 205 / 0.1)",
                      borderColor: "oklch(0.82 0.14 205 / 0.35)",
                      color: "oklch(0.82 0.14 205)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.04 255)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p
            className="text-base mb-6"
            style={{ color: "oklch(0.72 0.03 255)" }}
          >
            Ready to add your project to our portfolio?
          </p>
          <Link
            to="/"
            data-ocid="portfolio.primary_button"
            className="inline-flex px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 glow-pulse"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.82 0.14 205), oklch(0.72 0.12 210))",
              color: "oklch(0.10 0.02 255)",
            }}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
