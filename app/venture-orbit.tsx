"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import styles from "./venture-orbit-v2.module.css";

type VentureKey = "waterline" | "expenseintel" | "gagegrid" | "ownership";

type Venture = {
  key: VentureKey;
  short: string;
  name: string;
  status: string;
  note: string;
  href: string;
  action: string;
  x: number;
  y: number;
  size: number;
  depth: number;
  phase: number;
};

const ventures: Venture[] = [
  {
    key: "waterline",
    short: "WI",
    name: "Waterline Intel",
    status: "Operating project",
    note: "Great Lakes freight intelligence for planning and operating real movements.",
    href: "https://waterlineintel.com",
    action: "Open Waterline",
    x: 20,
    y: 32,
    size: 192,
    depth: 1,
    phase: 0.15,
  },
  {
    key: "expenseintel",
    short: "EI",
    name: "ExpenseIntel",
    status: "Operating project",
    note: "Pre-commitment decision intelligence for meaningful spending decisions.",
    href: "https://expenseintel.com",
    action: "Open ExpenseIntel",
    x: 80,
    y: 30,
    size: 174,
    depth: 0.86,
    phase: 1.55,
  },
  {
    key: "gagegrid",
    short: "GG",
    name: "Gage Grid",
    status: "Operating pilot",
    note: "Infrastructure intelligence for screening whether sites can support real projects.",
    href: "https://gage-grid.vercel.app",
    action: "Open Gage Grid",
     x: 28,
    y: 73,
    size: 162,
    depth: 0.74,
    phase: 3.05,
  },
  {
    key: "ownership",
    short: "OWN",
    name: "Long-term ownership",
    status: "Open mandate",
    note: "Selective ownership of understandable businesses worth holding for years.",
    href: "mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry",
    action: "Start a conversation",
     x: 76,
    y: 72,
    size: 150,
    depth: 0.62,
    phase: 4.5,
  },
];

const core = {
  key: "core",
  x: 50,
  y: 51,
  size: 238,
  depth: 0.48,
  phase: 2.2,
};

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState<VentureKey | null>(null);
  const [hoverKey, setHoverKey] = useState<VentureKey | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const sphereRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const targetPointer = useRef({ x: 0, y: 0 });
  const smoothPointer = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(true);

  useEffect(() => {
    if (pathname !== "/") return;
    const masthead = document.querySelector(".masthead");
    if (!masthead) return;

    const existing = document.querySelector<HTMLElement>("[data-venture-orbit-mount]");
    const node = existing || document.createElement("div");
    node.dataset.ventureOrbitMount = "1";
    if (!existing) masthead.insertAdjacentElement("afterend", node);
    setMount(node);

    return () => {
      if (!existing) node.remove();
      setMount(null);
    };
  }, [pathname]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { rootMargin: "20% 0px 20% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [mount]);

  useEffect(() => {
    if (!mount) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const updatePath = (venture: Venture, px: number, py: number) => {
      const path = pathRefs.current[venture.key];
      const glow = pathRefs.current[venture.key + "-glow"];
      if (!path) return;

      const sx = 500;
      const sy = 357;
      const ex = venture.x * 10;
      const ey = venture.y * 7;
      const dx = ex - sx;
      const dy = ey - sy;
      const bend = venture.key === "waterline" || venture.key === "ownership" ? -1 : 1;
      const c1x = sx + dx * 0.34 + py * 22 * bend;
      const c1y = sy + dy * 0.28 - px * 18 * bend;
      const c2x = sx + dx * 0.72 - py * 30 * bend;
      const c2y = sy + dy * 0.78 + px * 24 * bend;
      const d = "M " + sx.toFixed(1) + " " + sy.toFixed(1)
        + " C " + c1x.toFixed(1) + " " + c1y.toFixed(1)
        + " " + c2x.toFixed(1) + " " + c2y.toFixed(1)
        + " " + ex.toFixed(1) + " " + ey.toFixed(1);
      path.setAttribute("d", d);
      glow?.setAttribute("d", d);
    };

    const tick = (time: number) => {
      if (visibleRef.current) {
        const stage = stageRef.current;
        const section = sectionRef.current;
        const p = smoothPointer.current;
        const target = targetPointer.current;
        const easing = reducedMotion ? 0.18 : 0.058;

        p.x += (target.x - p.x) * easing;
        p.y += (target.y - p.y) * easing;

        let scrollDrift = 0;
        if (section) {
          const rect = section.getBoundingClientRect();
          const viewport = Math.max(1, window.innerHeight);
          const center = rect.top + rect.height / 2;
          scrollDrift = Math.max(-1, Math.min(1, (viewport / 2 - center) / viewport));
        }

        [core, ...ventures].forEach((item, index) => {
          const el = sphereRefs.current[item.key];
          if (!el) return;
          const idle = reducedMotion ? 0 : 1;
          const idleX = Math.sin(time * 0.00034 + item.phase) * (4 + item.depth * 5) * idle;
          const idleY = Math.cos(time * 0.00027 + item.phase * 1.35) * (3 + item.depth * 4) * idle;
          const px = p.x * 22 * item.depth;
          const py = p.y * 16 * item.depth + scrollDrift * 10 * item.depth;
          const rotX = (-p.y * 6 + Math.sin(time * 0.00021 + index) * 1.2 * idle) * item.depth;
          const rotY = (p.x * 8 + Math.cos(time * 0.00019 + index) * 1.5 * idle) * item.depth;

          el.style.setProperty("--tx", (px + idleX).toFixed(2) + "px");
          el.style.setProperty("--ty", (py + idleY).toFixed(2) + "px");
          el.style.setProperty("--rx", rotX.toFixed(2) + "deg");
          el.style.setProperty("--ry", rotY.toFixed(2) + "deg");
          el.style.setProperty("--light-x", (50 + p.x * 25).toFixed(1) + "%");
          el.style.setProperty("--light-y", (31 + p.y * 20).toFixed(1) + "%");
        });

        ventures.forEach((venture) => updatePath(venture, p.x, p.y));

        if (stage) {
          stage.style.setProperty("--cursor-x", (50 + p.x * 34).toFixed(1) + "%");
          stage.style.setProperty("--cursor-y", (50 + p.y * 28).toFixed(1) + "%");
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [mount]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    targetPointer.current.x = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
    targetPointer.current.y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
  };

  const resetPointer = () => {
    targetPointer.current = { x: 0, y: 0 };
  };

  if (pathname !== "/" || !mount) return null;

  const active = activeKey
    ? ventures.find((venture) => venture.key === activeKey) || null
    : null;

  return createPortal(
    <section ref={sectionRef} id="operating-field" className={styles.section} aria-label="Queenan Capital operating field">
      <div
        ref={stageRef}
        className={styles.stage}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.softField} aria-hidden="true" />
        <div className={styles.scan} aria-hidden="true" />
        <div className={styles.cornerTicks} aria-hidden="true"><i /><i /><i /><i /></div>

        <svg className={styles.links} viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="qc-live-line" x1="0" x2="1">
              <stop offset="0" stopColor="#7c6240" stopOpacity=".10" />
              <stop offset=".52" stopColor="#d6b77c" stopOpacity=".72" />
              <stop offset="1" stopColor="#7c6240" stopOpacity=".10" />
            </linearGradient>
            <filter id="qc-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>
          {ventures.map((venture) => (
            <g key={venture.key}>
              <path
                ref={(node) => { pathRefs.current[venture.key + "-glow"] = node; }}
                className={styles.linkGlow}
                d="M500 357 C500 357 500 357 500 357"
              />
              <path
                ref={(node) => { pathRefs.current[venture.key] = node; }}
                className={
                  hoverKey === venture.key || activeKey === venture.key
                    ? styles.linkActive
                    : styles.link
                }
                d="M500 357 C500 357 500 357 500 357"
              />
            </g>
          ))}
          <path className={styles.balanceLine} d="M110 352 C325 281 667 281 892 350" />
          <path className={styles.balanceLineAlt} d="M145 470 C360 535 666 535 855 472" />
        </svg>

        <div className={styles.axis} aria-hidden="true">
          <span className={styles.axisH} />
          <span className={styles.axisV} />
        </div>

        <button
          ref={(node) => { sphereRefs.current.core = node; }}
          type="button"
          className={styles.sphere + " " + styles.coreSphere}
          style={{
            left: String(core.x) + "%",
            top: String(core.y) + "%",
            width: String(core.size) + "px",
            height: String(core.size) + "px",
          }}
          onClick={() => setActiveKey(null)}
          aria-label="Queenan Capital"
        >
          <span className={styles.sphereSurface} />
          <span className={styles.sphereEtch} />
          <span className={styles.sphereRim} />
          <span className={styles.coreMark}>QC</span>
        </button>

        {ventures.map((venture) => (
          <button
            key={venture.key}
            ref={(node) => { sphereRefs.current[venture.key] = node; }}
            type="button"
            className={[
              styles.sphere,
              styles[venture.key],
              activeKey === venture.key ? styles.active : "",
              hoverKey === venture.key ? styles.hovered : "",
            ].filter(Boolean).join(" ")}
            style={{
              left: String(venture.x) + "%",
              top: String(venture.y) + "%",
              width: String(venture.size) + "px",
              height: String(venture.size) + "px",
            }}
            onMouseEnter={() => setHoverKey(venture.key)}
            onMouseLeave={() => setHoverKey(null)}
            onFocus={() => setHoverKey(venture.key)}
            onBlur={() => setHoverKey(null)}
            onClick={() => setActiveKey((current) => current === venture.key ? null : venture.key)}
            aria-pressed={activeKey === venture.key}
            aria-label={venture.name}
          >
            <span className={styles.sphereSurface} />
            <span className={styles.sphereEtch} />
            <span className={styles.sphereRim} />
            <span className={styles.sphereCode}>{venture.short}</span>
            <span className={styles.sphereName}>{venture.name}</span>
          </button>
        ))}

        <div className={styles.fieldMark} aria-hidden="true">
          <span>QC / 01</span><i /><span>2026</span>
        </div>

        <div className={styles.gestureHint} aria-hidden="true">move · hover · click</div>

        <article className={styles.tray + " " + (active ? styles.trayOpen : "")} aria-live="polite">
          {active ? (\n            <>
              <div className={styles.trayCode}>{active.short}</div>
              <div className={styles.trayCopy}>
                <span>{active.status}</span>
                <strong>{active.name}</strong>
                <p>{active.note}</p>
              </div>
              <a
                href={active.href}
                target={active.href.startsWith("http") ? "_blank" : undefined}
                rel={active.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {active.action} <b>↗</b>
              </a>
            </>
          ) : (
            <div className={styles.trayIdle}><i /><span>select a sphere</span></div>
          )}
        </article>
      </div>
    </section>,
    mount,
  );
}
