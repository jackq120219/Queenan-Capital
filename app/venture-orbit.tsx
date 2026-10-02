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
    x: 22,
    y: 34,
    size: 154,
    depth: 1,
    phase: 0.2,
  },
  {
    key: "expenseintel",
    short: "EI",
    name: "ExpenseIntel",
    status: "Operating project",
    note: "Pre-commitment decision intelligence for meaningful spending decisions.",
    href: "https://expenseintel.com",
    action: "Open ExpenseIntel",
    x: 76,
    y: 29,
    size: 136,
    depth: 0.82,
    phase: 1.7,
  },
  {
    key: "gagegrid",
    short: "GG",
    name: "Gage Grid",
    status: "Operating pilot",
    note: "Infrastructure intelligence for screening whether sites can support real projects.",
    href: "https://gage-grid.vercel.app",
    action: "Open Gage Grid",
    x: 31,
    y: 72,
    size: 128,
    depth: 0.7,
    phase: 3.1,
  },
  {
    key: "ownership",
    short: "OWN",
    name: "Long-term ownership",
    status: "Open mandate",
    note: "Selective ownership of understandable businesses worth holding for years.",
    href: "mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry",
    action: "Start a conversation",
    x: 78,
    y: 70,
    size: 114,
    depth: 0.58,
    phase: 4.6,
  },
];

const core = {
  key: "core",
  short: "QC",
  x: 50,
  y: 50,
  size: 182,
  depth: 0.42,
  phase: 2.4,
};

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState<VentureKey | null>(null);
  const [hoverKey, setHoverKey] = useState<VentureKey | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const sphereRefs = useRef<Record<string, HTMLButtonElement | null>>({});
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
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "20% 0px 20% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [mount]);

  useEffect(() => {
    if (!mount) return;

    let frame = 0;
    const tick = (time: number) => {
      if (visibleRef.current) {
        const stage = stageRef.current;
        const section = sectionRef.current;
        const p = smoothPointer.current;
        const t = targetPointer.current;

        p.x += (t.x - p.x) * 0.055;
        p.y += (t.y - p.y) * 0.055;

        let scrollDrift = 0;
        if (section) {
          const rect = section.getBoundingClientRect();
          const viewport = Math.max(1, window.innerHeight);
          const center = rect.top + rect.height / 2;
          scrollDrift = Math.max(-1, Math.min(1, (viewport / 2 - center) / viewport));
        }

        const all = [core, ...ventures];
        all.forEach((item, index) => {
          const el = sphereRefs.current[item.key];
          if (!el) return;

          const idleX = Math.sin(time * 0.00036 + item.phase) * (4 + item.depth * 4);
          const idleY = Math.cos(time * 0.00029 + item.phase * 1.4) * (3 + item.depth * 3);
          const px = p.x * 19 * item.depth;
          const py = p.y * 14 * item.depth + scrollDrift * 9 * item.depth;
          const rotX = (-p.y * 7 + Math.sin(time * 0.00025 + index) * 1.8) * item.depth;
          const rotY = (p.x * 9 + Math.cos(time * 0.00022 + index) * 2.2) * item.depth;

          el.style.setProperty("--tx", `${(px + idleX).toFixed(2)}px`);
          el.style.setProperty("--ty", `${(py + idleY).toFixed(2)}px`);
          el.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
          el.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
          el.style.setProperty("--light-x", `${(50 + p.x * 23).toFixed(1)}%`);
          el.style.setProperty("--light-y", `${(34 + p.y * 18).toFixed(1)}%`);
        });

        if (stage) {
          stage.style.setProperty("--cursor-x", `${(50 + p.x * 34).toFixed(1)}%`);
          stage.style.setProperty("--cursor-y", `${(50 + p.y * 28).toFixed(1)}%`);
          stage.style.setProperty("--field-rot", `${(p.x * 0.7).toFixed(2)}deg`);
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

  const active = activeKey ? ventures.find((venture) => venture.key === activeKey) || null : null;

  return createPortal(
    <section ref={sectionRef} id="operating-field" className={styles.section} aria-label="Queenan Capital operating field">
      <div
        ref={stageRef}
        className={styles.stage}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.halo} aria-hidden="true" />
        <div className={styles.vignette} aria-hidden="true" />

        <svg className={styles.links} viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="qc-line" x1="0" x2="1">
              <stop offset="0" stopColor="#8b6a3e" stopOpacity=".05" />
              <stop offset=".5" stopColor="#d1ad72" stopOpacity=".62" />
              <stop offset="1" stopColor="#8b6a3e" stopOpacity=".05" />
            </linearGradient>
          </defs>
          <path d="M500 325 C390 254 312 215 220 221" />
          <path d="M500 325 C610 248 680 204 760 190" />
          <path d="M500 325 C420 430 350 480 307 468" />
          <path d="M500 325 C608 416 687 454 783 455" />
          <path className={styles.secondaryLink} d="M220 221 C342 119 640 106 760 190" />
          <path className={styles.secondaryLink} d="M307 468 C454 548 650 544 783 455" />
          <path className={styles.secondaryLink} d="M220 221 C146 362 197 456 307 468" />
          <path className={styles.secondaryLink} d="M760 190 C856 310 853 390 783 455" />
        </svg>

        <button
          ref={(node) => { sphereRefs.current.core = node; }}
          type="button"
          className={`${styles.sphere} ${styles.coreSphere}`}
          style={{
            left: `${core.x}%`,
            top: `${core.y}%`,
            width: `${core.size}px`,
            height: `${core.size}px`,
          }}
          onClick={() => setActiveKey(null)}
          aria-label="Queenan Capital"
        >
          <span className={styles.sphereSurface} />
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
              left: `${venture.x}%`,
              top: `${venture.y}%`,
              width: `${venture.size}px`,
              height: `${venture.size}px`,
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
            <span className={styles.sphereRim} />
            <span className={styles.sphereCode}>{venture.short}</span>
          </button>
        ))}

        <div className={styles.crosshair} aria-hidden="true">
          <i /><i />
        </div>

        <div className={styles.fieldIndex} aria-hidden="true">
          <span>QC / FIELD 01</span>
          <span>CHICAGO · 2026</span>
        </div>

        <div className={styles.gestureHint} aria-hidden="true">
          move · hover · click
        </div>

        <article className={`${styles.tray} ${active ? styles.trayOpen : ""}`} aria-live="polite">
          {active ? (
            <>
              <div className={styles.trayMeta}>
                <span>{active.short}</span>
                <span>{active.status}</span>
              </div>
              <div className={styles.trayMain}>
                <div>
                  <h3>{active.name}</h3>
                  <p>{active.note}</p>
                </div>
                <a
                  href={active.href}
                  target={active.href.startsWith("http") ? "_blank" : undefined}
                  rel={active.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {active.action} <span>↗</span>
                </a>
              </div>
            </>
          ) : (
            <div className={styles.trayIdle}>
              <span>Queenan Capital</span>
              <strong>Build · operate · compound</strong>
            </div>
          )}
        </article>
      </div>
    </section>,
    mount,
  );
}
