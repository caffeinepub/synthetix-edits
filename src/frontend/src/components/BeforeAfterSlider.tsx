import { useCallback, useRef, useState } from "react";

interface Props {
  beforeGradient?: string;
  afterGradient?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeGradient,
  afterGradient,
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  const afterStyle = afterImage
    ? {
        backgroundImage: `url(${afterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: afterGradient };

  const beforeStyle = beforeImage
    ? {
        backgroundImage: `url(${beforeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: `inset(0 ${100 - position}% 0 0)`,
      }
    : {
        background: beforeGradient,
        clipPath: `inset(0 ${100 - position}% 0 0)`,
      };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-48 rounded-lg overflow-hidden cursor-col-resize select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      data-ocid="portfolio.canvas_target"
    >
      {/* After panel (full width background) */}
      <div className="absolute inset-0" style={afterStyle} />

      {/* Before panel (clipped to left side) */}
      <div className="absolute inset-0" style={beforeStyle} />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] -translate-x-1/2 z-10"
        style={{
          left: `${position}%`,
          background: "oklch(0.82 0.14 205)",
          boxShadow: "0 0 10px oklch(0.82 0.14 205 / 0.8)",
        }}
      >
        {/* Handle circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center border-2"
          style={{
            background: "oklch(0.15 0.025 255)",
            borderColor: "oklch(0.82 0.14 205)",
            boxShadow: "0 0 12px oklch(0.82 0.14 205 / 0.7)",
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4"
            style={{ color: "oklch(0.82 0.14 205)" }}
            aria-hidden="true"
          >
            <path
              d="M6 4l-4 6 4 6M14 4l4 6-4 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded z-10"
        style={{
          background: "oklch(0.10 0.02 255 / 0.8)",
          color: "oklch(0.72 0.03 255)",
        }}
      >
        {beforeLabel}
      </span>
      <span
        className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded z-10"
        style={{
          background: "oklch(0.82 0.14 205 / 0.2)",
          color: "oklch(0.82 0.14 205)",
        }}
      >
        {afterLabel}
      </span>
    </div>
  );
}
