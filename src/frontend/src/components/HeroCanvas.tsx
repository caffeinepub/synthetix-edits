import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2 + 1,
      speed: Math.random() * 0.0003 + 0.0001,
      phase: Math.random() * Math.PI * 2,
    }));

    const lines = Array.from({ length: 8 }, (_, i) => ({
      yFrac: 0.3 + i * 0.06,
      speed: 0.0002 + i * 0.00003,
      alpha: 0.06 + Math.random() * 0.08,
    }));

    const draw = () => {
      t += 1;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      for (const line of lines) {
        const y = line.yFrac * H;
        const offset = (t * line.speed * W) % W;
        for (let x = -W + offset; x < W * 2; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 24, y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${line.alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let band = 0; band < 3; band++) {
        const baseY = H * (0.45 + band * 0.04);
        const amplitude = 6 + band * 3;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(11, 191, 232, ${0.12 - band * 0.03})`;
        ctx.lineWidth = 1;
        for (let x = 0; x <= W; x += 2) {
          const y =
            baseY +
            Math.sin((x / W) * Math.PI * 8 + t * 0.02 + band) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (const dot of dots) {
        const x = (((dot.x * W + t * dot.speed * W) % W) + W) % W;
        const y = dot.y * H + Math.sin(t * dot.speed * 10 + dot.phase) * 4;
        const alpha = 0.4 + 0.4 * Math.sin(t * 0.03 + dot.phase);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, dot.r * 4);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`);
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, dot.r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 240, 255, ${alpha * 0.9})`;
        ctx.arc(x, y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const panels = [
        { x: 0.05, y: 0.2, w: 0.12, h: 0.08, phase: 0 },
        { x: 0.82, y: 0.25, w: 0.1, h: 0.06, phase: 1.5 },
        { x: 0.75, y: 0.65, w: 0.13, h: 0.1, phase: 3 },
        { x: 0.03, y: 0.7, w: 0.09, h: 0.07, phase: 2 },
      ];
      for (const p of panels) {
        const px = p.x * W;
        const py = p.y * H + Math.sin(t * 0.005 + p.phase) * 5;
        const pw = p.w * W;
        const ph = p.h * H;
        const alpha = 0.12 + 0.06 * Math.sin(t * 0.01 + p.phase);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(px, py, pw, ph);
        ctx.beginPath();
        ctx.moveTo(px + 4, py + ph * 0.35);
        ctx.lineTo(px + pw - 4, py + ph * 0.35);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.6})`;
        ctx.stroke();
      }

      const vignette = ctx.createRadialGradient(
        W / 2,
        H / 2,
        H * 0.3,
        W / 2,
        H / 2,
        H * 0.9,
      );
      vignette.addColorStop(0, "rgba(5, 7, 13, 0)");
      vignette.addColorStop(1, "rgba(5, 7, 13, 0.7)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      tabIndex={-1}
      style={{ pointerEvents: "none" }}
    />
  );
}
