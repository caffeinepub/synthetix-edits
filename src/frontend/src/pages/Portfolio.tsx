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
    beforeVideo:
      "/assets/aqoby_liw1b3qwhj3tqjkifre8tauz1idvdxzxktfg5lghq01no0usjwejvh33uedlsmtckbznckpqvla2r2oe7awyhl0xxrpgyc-019d4930-14f4-7148-891b-2eea0ec68289.mov",
    afterVideo: "/assets/example-019d4930-1688-7329-8929-e7c9cf317bd6.mp4",
    desc: "30-second broadcast ad — motion graphics, sound design, BBFC-ready export",
  },
  {
    title: "Urban Drift",
    category: "Music Video",
    beforeImage: "/assets/img_5423-019d4d35-2f6b-774d-9205-9b7a615d5f7b.png",
    afterVideo:
      "/assets/pixverse_v6_image_text_360p_urban_drift_music-019d4d35-2e3e-7643-bdb3-9b1ad316ccbb.mp4",
    desc: "Music video — 4K stabilization, rhythmic cuts, teal/orange contrast grade",
  },
  {
    title: "Launchpad 2024",
    category: "Corporate / Event",
    beforeImage: "/assets/img_5425-019d4d40-3c9e-77dd-b317-21219c91dafd.jpeg",
    afterVideo:
      "/assets/pixverse_v6_image_text_360p_add_people_in_even-019d4d40-3dab-71ff-8c43-29ce1b3adb09.mp4",
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
                beforeVideo={(item as { beforeVideo?: string }).beforeVideo}
                afterVideo={(item as { afterVideo?: string }).afterVideo}
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
