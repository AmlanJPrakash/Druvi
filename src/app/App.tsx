import { useState, useEffect, useRef } from "react";
import { AlertTriangle, Layers, BookOpen, Scan, HeartPulse, Network, Check, Shield, Database, FileText } from "lucide-react";
import Lenis from "lenis";
import svgPaths from "@/imports/Desktop1-1/svg-sk9h56z0ip";

// Import phone assets for the phone rise effect
import slideDashboard from "@/imports/slide_dashboard.png";
import imgGeminiWorld from "@/imports/Desktop1-1/d80c1c68ab9e55b1c076e7a5b0de8075d3415ab9.png";
import imgFrame from "@/imports/Desktop1-1/35716ce8f6b39c91f8643cb45e2072d456bdc1df.png";
import imgPerson1 from "@/imports/Desktop1-1/585dae9e98ac83690d1947a227123e61dddd2351.png";
import imgPerson2 from "@/imports/Desktop1-1/1d38105ccaca86aacd6cfc8f3fa7e56a7e4a33cd.png";

// ─── Logo SVG ───────────────────────────────────────────────────────────────

function DruViLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-5.5 h-5.5 shrink-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 24.0015 24.222">
          <g>
            <path d={svgPaths.pea9fb80} fill="#000000" />
            <path d={svgPaths.p22387400} fill="#000000" />
            <path d={svgPaths.p33695a00} fill="#000000" />
          </g>
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-black" style={{ fontFamily: "Inter, sans-serif" }}>
        DruVI
      </span>
    </div>
  );
}

// ─── Tick / Cross icons ──────────────────────────────────────────────────────

function TickIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <path clipRule="evenodd" d={svgPaths.p1eba7900} fill="#276ef1" fillRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 opacity-40" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p21998f00} fill="#000000" />
    </svg>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white border-b border-black/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <DruViLogo />
        <nav className="hidden md:flex items-center gap-10">
          {["Problem", "Solution", "How it works"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-semibold text-black/70 hover:text-black transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-none hover:bg-neutral-800 transition-colors border border-black">
          Request Demo
        </button>
      </div>
    </header>
  );
}

// ─── Phone Rise Showcase ──────────────────────────────────────────────────────

function PhoneRise() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full max-w-[960px] mx-auto select-none pointer-events-none overflow-visible flex justify-center"
      style={{ marginTop: "4.5rem" }}
    >
      {/* Ambient radial glow beneath mockup */}
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "120px",
          background:
            "radial-gradient(ellipse at center, rgba(39,110,241,0.18) 0%, rgba(39,110,241,0.06) 50%, transparent 78%)",
          filter: "blur(22px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Outer: entry slide-up transition */}
      <div
        style={{
          transform: mounted ? "translateY(0px)" : "translateY(80px)",
          opacity: mounted ? 1 : 0,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease",
          zIndex: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Inner: continuous floating animation */}
        <div
          style={{
            animation: mounted ? "phoneFloat 6s ease-in-out infinite alternate" : "none",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={slideDashboard}
            alt="DruVI App Mockups"
            style={{
              maxHeight: "clamp(340px, 46vw, 580px)",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

const heroKeywords = ["intelligence", "vigilance", "compliance", "monitoring", "screening"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroKeywords.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-0 min-h-[700px] bg-white">
      {/* Subtle bottom line separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-0">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-[11px] font-mono font-bold tracking-wider text-black bg-[#f6f6f6] border border-black/10 px-3 py-1 rounded-none uppercase">
            AI-Powered Clinical Systems
          </span>
        </div>

        {/* Headline */}
        <h1
          className="reveal-heading text-center leading-[1.1] text-[clamp(40px,5vw,60px)] font-bold tracking-[-0.03em] text-black flex flex-wrap items-center justify-center gap-x-[0.25em]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span>Drug safety</span>
          <span
            className="inline-block relative overflow-hidden h-[1.25em] text-center align-middle transition-all duration-300 ease-out"
            style={{ width: `${heroKeywords[index].length * 0.8}ch` }}
          >
            <span
              className={`absolute inset-0 block text-[#276ef1] transition-all duration-300 transform ${fade ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[2px]"
                }`}
              style={{
                lineHeight: "1.25em",
              }}
            >
              {heroKeywords[index]}
            </span>
          </span>
          <span>in real time</span>
        </h1>

        {/* CTA buttons */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="bg-black text-white font-semibold text-base px-8 py-3.5 rounded-none hover:bg-neutral-800 transition-colors border border-black">
            Download the app
          </button>
          <button className="bg-transparent border border-black text-black font-semibold text-base px-8 py-3.5 rounded-none hover:bg-neutral-50 transition-colors">
            Learn More
          </button>
        </div>

        {/* Phone mockups rise effect */}
        <PhoneRise />
      </div>
    </section>
  );
}

// ─── Solution section ─────────────────────────────────────────────────────────

function SolutionSection() {
  return (
    <section id="solution" className="py-36 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          The Solution
        </p> */}
        <h2
          className="reveal-heading text-[clamp(32px,4vw,56px)] text-black font-bold tracking-tight leading-[1.2] mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          A smarter framework for
          <br />
          every medication decision
        </h2>
        <p className="text-lg text-black/70 max-w-2xl mx-auto leading-[1.75]" style={{ fontFamily: "Inter, sans-serif" }}>
          DruVI moves medication safety from reactive to preventive, delivering instant, evidence-backed interaction intelligence at the exact moment a decision is made.
        </p>
      </div>
    </section>
  );
}

// ─── Feature cards ────────────────────────────────────────────────────────────

const features = [
  {
    title: "Severity-based risk prioritization",
    desc: "Classifies interactions as None, Minor, Moderate, or Major.",
    icon: AlertTriangle,
  },
  {
    title: "Comprehensive interaction coverage",
    desc: "Simultaneously evaluates Drug–Drug, Drug–Food, and Drug–Herb & Supplement.",
    icon: Layers,
  },
  {
    title: "Evidence-backed transparency",
    desc: "Every alert is traceable to regulatory documents & clinical trial data.",
    icon: BookOpen,
  },
  {
    title: "AI prescription scanning",
    desc: "Upload a prescription image and DruVI's AI agents extract all medication names automatically.",
    icon: Scan,
  },
  {
    title: "Actionable clinical guidance",
    desc: "Explains why an interaction is dangerous, outlines consequences, & provides safer alternatives.",
    icon: HeartPulse,
  },
  {
    title: "EHR & HIS integration",
    desc: "Operates as a Clinical Decision Support System with an API-first architecture.",
    icon: Network,
  },
];

function FeaturesSection() {
  return (
    <section id="solution" className="py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div key={i} className="bg-white border border-black/10 rounded-none p-8 flex flex-col gap-4 hover:border-black transition-colors duration-200">
                <div className="w-12 h-12 rounded-none bg-[#f6f6f6] text-black flex items-center justify-center mb-1">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold text-black leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-black/60 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Stats + world map section ────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="py-36 bg-[#f6f6f6] border-t border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          className="text-2xl font-semibold text-black leading-[1.6] mb-16 max-w-3xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          DruVI detects, explains, & prevents harmful medication{" "}
          <span className="text-black/40 font-normal">
            interactions for clinicians & patients at the exact moment a decision is made.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {/* 43,000+ */}
          <div className="bg-white border border-black/10 rounded-none p-10 flex flex-col justify-end min-h-[220px] hover:border-black transition-colors duration-200">
            <p className="text-[clamp(44px,4.5vw,60px)] font-bold text-black tracking-tighter leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
              43,000+
            </p>
            <p className="text-base text-black/60 mt-3 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
              Fatal ADRs report
              <br />
              (WHO)
            </p>
          </div>

          {/* 5 markets + world image */}
          <div className="bg-white border border-black/10 rounded-none overflow-hidden relative flex flex-col justify-between row-span-2 min-h-[300px] md:min-h-0 p-10 hover:border-black transition-colors duration-200">
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <img src={imgGeminiWorld} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-[clamp(44px,4.5vw,60px)] font-bold text-black tracking-tighter leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
                5 markets
              </p>
              <p className="text-base text-black/60 mt-3 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                SG . IN . AE . US . AU
              </p>
            </div>
          </div>

          {/* 3 types */}
          <div className="bg-white border border-black/10 rounded-none p-10 flex flex-col justify-end min-h-[220px] hover:border-black transition-colors duration-200">
            <p className="text-[clamp(44px,4.5vw,60px)] font-bold text-black tracking-tighter leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
              3 types
            </p>
            <p className="text-base text-black/60 mt-3 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
              Drug . Food . Herb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Input medication details",
    desc: "Search by name, scan a prescription image with AI, or add foods and herbs.",
  },
  {
    num: "02",
    title: "Analyze interactions in real time",
    desc: "Agentic AI retrieves live evidence across multiple trusted medical sources including WHO.",
  },
  {
    num: "03",
    title: "Generate severity-rated alerts",
    desc: "Interactions are classified from Mild to Critical with AI confidence scores.",
  },
  {
    num: "04",
    title: "Receive clinical recommendations",
    desc: "Specific dosage adjustments, safer therapeutic alternatives and warnings against unsafe concurrent use.",
  },
  {
    num: "05",
    title: "Evidence-backed suggestions",
    desc: "Every output is traceable to peer-reviewed sources and regulatory data ensuring scientific credibility.",
  },
];

function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(steps.length).fill(false));

  // Grow the vertical line on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start growing when section enters viewport, finish when section exits
      const sectionH = section.offsetHeight;
      const scrolled = Math.max(0, windowH - rect.top);
      const progress = Math.min(1, scrolled / (sectionH + windowH * 0.4));
      line.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal each card as it enters viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
      );
      obs.observe(card);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-36 bg-white overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold text-center mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          How it works
        </p>
        <h2
          className="text-[clamp(32px,4vw,56px)] text-black text-center font-bold tracking-tight leading-[1.2] mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From prescription to
          <br />
          safe decision in seconds
        </h2>
        <p className="text-lg text-black/60 text-center max-w-2xl mx-auto mb-24 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
          {"DruVI's agentic AI performs live multi-source evidence retrieval, cross-verification, and brand-to-generic normalization at the point of care."}
        </p>

        {/* Vertical timeline */}
        <div className="relative">
          {/* The growing vertical line */}
          <div
            className="absolute left-[27px] top-0 bottom-0 w-px bg-black/8"
            style={{ zIndex: 0 }}
          />
          <div
            ref={lineRef}
            className="absolute left-[27px] top-0 w-px bg-black transition-none"
            style={{ height: "0%", zIndex: 1, willChange: "height" }}
          />

          {/* Step cards */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="relative flex items-start gap-8 pb-14"
                style={{
                  opacity: visibleCards[i] ? 1 : 0,
                  transform: visibleCards[i] ? "translateX(0)" : "translateX(48px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                }}
              >
                {/* Circle node on the line */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 bg-white border-2 flex items-center justify-center"
                  style={{
                    borderColor: visibleCards[i] ? "#276ef1" : "#e5e7eb",
                    transition: `border-color 0.4s ease ${i * 0.12 + 0.3}s`,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span className="text-[#276ef1] text-sm font-bold font-mono">{step.num}</span>
                </div>

                {/* Card content */}
                <div
                  className="flex-1 bg-white border border-black/10 p-8 hover:border-black transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-black/60 leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison table ─────────────────────────────────────────────────────────

const comparisonRows = [
  { feature: "Real-time AI reasoning", druvi: { tick: true, label: "Agentic AI" }, drugsCom: { tick: false, label: "Static" }, webmd: { tick: false, label: "Static" }, drugbank: { tick: false, label: "Static" } },
  { feature: "Drug–Food interactions", druvi: { tick: true, label: "Full coverage" }, drugsCom: { tick: null, label: "Partial" }, webmd: { tick: null, label: "Partial" }, drugbank: { tick: false, label: null } },
  { feature: "Drug–Herb interactions", druvi: { tick: true, label: "In Progress" }, drugsCom: { tick: false, label: null }, webmd: { tick: false, label: null }, drugbank: { tick: false, label: null } },
  { feature: "Prescription image scan", druvi: { tick: true, label: "AI - powered" }, drugsCom: { tick: false, label: null }, webmd: { tick: false, label: null }, drugbank: { tick: false, label: null } },
  { feature: "Evidence citations", druvi: { tick: true, label: "Multi - source" }, drugsCom: { tick: null, label: "Partial" }, webmd: { tick: null, label: "Partial" }, drugbank: { tick: true, label: null } },
  { feature: "Regional drug mapping", druvi: { tick: true, label: "Brand - Generic" }, drugsCom: { tick: null, label: "Limited" }, webmd: { tick: null, label: "Limited" }, drugbank: { tick: null, label: "Limited" } },
  { feature: "EHR/HIS API integration", druvi: { tick: true, label: "API first" }, drugsCom: { tick: false, label: null }, webmd: { tick: false, label: null }, drugbank: { tick: null, label: "Partial" } },
];

function ComparisonSection() {
  return (
    <section className="py-36 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-16 flex-wrap">
          <div className="max-w-2xl">
            <h2
              className="reveal-heading text-[clamp(28px,3.5vw,44px)] text-white font-bold tracking-tight leading-[1.2] mb-5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Beyond static rule-based
              <br />
              interaction tables
            </h2>
            <p className="text-base text-white/60 max-w-xl leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              Existing platforms rely on fixed databases with limited regional mapping and no real-time reasoning. DruVI uses agentic AI for live evidence retrieval, cross-verification, and brand-to-generic normalization.
            </p>
          </div>
          <button className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-none hover:bg-neutral-200 transition-colors border border-white self-start mt-2">
            Learn More
          </button>
        </div>

        {/* Table */}
        <div className="border border-neutral-800 rounded-none overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-5 bg-neutral-950 border-b border-neutral-800">
            <div className="col-span-2 px-6 py-5 text-sm font-bold text-white uppercase tracking-wider font-mono" style={{ fontFamily: "Inter, sans-serif" }}>Feature</div>
            <div className="px-4 py-5 text-sm font-bold text-[#276ef1] uppercase tracking-wider font-mono bg-neutral-900/30" style={{ fontFamily: "Inter, sans-serif" }}>Druvi</div>
            <div className="px-4 py-5 text-sm font-bold text-white/60 uppercase tracking-wider font-mono" style={{ fontFamily: "Inter, sans-serif" }}>Drugs.com</div>
            <div className="hidden md:block px-4 py-5 text-sm font-bold text-white/60 uppercase tracking-wider font-mono" style={{ fontFamily: "Inter, sans-serif" }}>WebMD</div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-5 border-b border-neutral-800 last:border-0 hover:bg-neutral-900/50 transition-colors"
            >
              <div className="col-span-2 px-6 py-4.5 text-white text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                {row.feature}
              </div>
              {/* Druvi */}
              <div className="px-4 py-4.5 flex items-center gap-2 bg-neutral-900/10">
                <TickIcon />
                <span className="text-white text-xs font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{row.druvi.label}</span>
              </div>
              {/* Drugs.com */}
              <div className="px-4 py-4.5 flex items-center gap-2">
                {row.drugsCom.tick === true ? (
                  <TickIcon />
                ) : row.drugsCom.tick === false ? (
                  <CrossIcon />
                ) : null}
                {row.drugsCom.label && (
                  <span className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{row.drugsCom.label}</span>
                )}
              </div>
              {/* WebMD */}
              <div className="hidden md:flex px-4 py-4.5 items-center gap-2">
                {row.webmd.tick === true ? (
                  <TickIcon />
                ) : row.webmd.tick === false ? (
                  <CrossIcon />
                ) : null}
                {row.webmd.label && (
                  <span className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{row.webmd.label}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team section ─────────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section className="py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            The Team
          </p>
          <h2 className="reveal-heading text-[clamp(28px,3.5vw,44px)] text-black font-bold tracking-tight leading-[1.15]" style={{ fontFamily: "Inter, sans-serif" }}>
            Built by people who understand care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person 1 */}
          <div className="bg-white border border-black/10 rounded-none p-8 flex flex-col gap-6 hover:border-black transition-colors duration-200">
            <div className="flex items-center gap-6">
              <div className="w-[110px] h-[110px] shrink-0 rounded-none overflow-hidden bg-neutral-100 border border-black/5">
                <img src={imgPerson1} alt="Nigamananda Sahoo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-black mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  Nigamananda Sahoo
                </p>
                <p className="text-sm text-black/50 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  Founder & CEO · Squbix Digital
                </p>
              </div>
            </div>
            <p className="text-sm text-black/60 leading-[1.65]" style={{ fontFamily: "Inter, sans-serif" }}>
              Technical director specializing in AI, SaaS and Blockchain for healthcare and finance. Led multi-million dollar projects across Singapore and India.
            </p>
          </div>

          {/* Person 2 */}
          <div className="bg-white border border-black/10 rounded-none p-8 flex flex-col gap-6 hover:border-black transition-colors duration-200">
            <div className="flex items-center gap-6">
              <div className="w-[110px] h-[110px] shrink-0 rounded-none overflow-hidden bg-neutral-100 border border-black/5">
                <img src={imgPerson2} alt="Dr. Siddhartha Goutam" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-black mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  Dr. Siddhartha Goutam
                </p>
                <p className="text-sm text-black/50 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  MD Pharmacology · Bhubaneswar
                </p>
              </div>
            </div>
            <p className="text-sm text-black/60 leading-[1.65]" style={{ fontFamily: "Inter, sans-serif" }}>
              Clinical pharmacologist with deep experience in medical teaching, clinical research, and pharmacovigilance systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-36 bg-black text-white text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          Get involved
        </p>
        <h2
          className="reveal-heading text-[clamp(36px,5vw,60px)] text-white font-bold tracking-tight leading-[1.15] mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Request a demo
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-16 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
          DruVI is in MVP/POC stage and seeking clinical partners, pilot hospitals, and early integrators across Singapore, India, UAE, US, and Australia.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-[#276ef1] text-white font-semibold text-base px-8 py-3.5 rounded-none hover:bg-[#1a57c3] transition-colors border border-[#276ef1]">
            Request a demo
          </button>
          <button className="bg-transparent border border-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-none hover:bg-white/10 transition-colors">
            Partner with us
          </button>
          <button className="bg-transparent border border-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-none hover:bg-white/10 transition-colors">
            contact@squbix.com
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-16 pb-12 relative overflow-hidden">
      {/* Large watermark */}
      <p
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[clamp(100px,15vw,220px)] font-bold leading-none pointer-events-none select-none z-0"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundImage: "linear-gradient(180deg, #f6f6f6 0%, #fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          opacity: 0.8,
        }}
      >
        DruVI
      </p>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Logo center */}
        <div className="flex justify-center mb-8">
          <DruViLogo />
        </div>
        <p className="text-sm text-black/60 text-center max-w-lg mx-auto mb-12 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          The Drug Vigilance Intelligent System. A SquMed AI product by Squbix Digital. Making healthcare smarter.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/50 border-t border-black/5 pt-8" style={{ fontFamily: "Inter, sans-serif" }}>
          <p className="text-center md:text-left">© 2025 Squbix Digital. DruVI is a SquMed AI product.</p>
          <p className="text-center md:text-right">For informational purposes. Not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Problem Section ─────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section id="problem" className="py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              The Problem
            </p> */}
            <h2
              className="reveal-heading text-[clamp(32px,4vw,48px)] text-black font-bold tracking-tight leading-[1.2] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Medication interactions
              <br />
              are silently killing people.
            </h2>
            <p className="text-base text-black/60 leading-[1.7] mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Static, rule-based interaction checkers haven't kept up with polypharmacy, chronic disease complexity, or the rise of herbal and nutritional supplements.
            </p>

            <blockquote className="pl-6 border-l-2 border-black/30 italic text-black/75 text-sm my-6 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
              "The modern prescribing environment has become extremely complex — and most available tools are not keeping up."
              <cite className="block not-italic text-xs font-semibold text-black/55 mt-2">— WHO Global Pharmacovigilance Report</cite>
            </blockquote>

            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-black/5">
              <div>
                <p className="text-3xl font-bold text-black tracking-tight font-sans">23M+</p>
                <p className="text-xs text-black/50 mt-1 leading-[1.4]">Adverse drug safety reports in WHO VigiBase</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black tracking-tight font-sans">1 in 4</p>
                <p className="text-xs text-black/50 mt-1 leading-[1.4]">Hospital admissions linked to preventable ADRs</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="border border-black/10 rounded-none bg-white divide-y divide-black/10 overflow-hidden">
              {[
                {
                  num: "01",
                  title: "Drug–Drug interactions",
                  desc: "Polypharmacy raises the risk of dangerous combinations — negating effectiveness, intensifying toxicity, and causing organ damage or emergency hospitalization."
                },
                {
                  num: "02",
                  title: "Drug–Food interactions",
                  desc: "Daily foods — from grapefruit to alcohol to caffeine — interact with common medications in ways most patients and clinicians overlook at the point of care."
                },
                {
                  num: "03",
                  title: "Drug–Herb interactions",
                  desc: "Herbal supplements are rarely disclosed to clinicians, creating hidden interaction risks that static databases simply don't capture or update for."
                },
                {
                  num: "04",
                  title: "Clinician cognitive overload",
                  desc: "Limited consultation time, thousands of drug molecules, and fragmented tools leave clinicians exposed to prescribing errors and growing medico-legal liability."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white hover:bg-[#f6f6f6] transition-colors duration-200">
                  <span className="block text-[11px] font-mono font-semibold text-black/40 mb-1">{item.num}</span>
                  <h3 className="text-base font-bold text-black mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/60 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Who It's For Section ───────────────────────────────────────────────────

function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-36 bg-[#f6f6f6] border-t border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold text-center mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          Who It's For
        </p>
        <h2
          className="reveal-heading text-[clamp(32px,4vw,56px)] text-black text-center font-bold tracking-tight leading-[1.2] mb-16"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Built for everyone
          <br />
          in the care chain.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🧑‍⚕️",
              title: "Doctors & pharmacists",
              desc: "Fast, explainable interaction checks during live consultations. Reduce cognitive overload and medico-legal risk at the exact point of prescribing."
            },
            {
              emoji: "🏥",
              title: "Hospitals & clinics",
              desc: "Integrates as a CDSS directly into HIS/EMR workflows. SaMD-compliant. API-based deployment with no disruption to existing systems."
            },
            {
              emoji: "💻",
              title: "Telemedicine platforms",
              desc: "Automate prescription and supplement safety validation for every patient consultation at scale — without adding clinical headcount."
            },
            {
              emoji: "💊",
              title: "Pharmacies",
              desc: "Reduce dispensing errors and improve patient counselling accuracy, particularly where prescription medicines and herbal products are used together."
            },
            {
              emoji: "🙋",
              title: "Patients",
              desc: "Understand whether your medicines interact. Check food and supplement safety. Get real transparency over your long-term treatment risks."
            },
            {
              emoji: "🔬",
              title: "Health-tech & researchers",
              desc: "Live pharmacovigilance insights and a robust interaction intelligence API for embedding safety checks into any clinical or consumer health platform."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-black/10 rounded-none p-8 flex flex-col gap-5 hover:border-black transition-colors duration-200">
              <div className="w-10 h-10 rounded-none bg-[#f6f6f6] border border-black/5 flex items-center justify-center text-lg shrink-0 select-none">
                {item.emoji}
              </div>
              <div>
                <h3 className="text-base font-bold text-black mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-black/60 leading-[1.65]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust & Compliance Section ──────────────────────────────────────────────

function TrustSection() {
  return (
    <section id="trust" className="py-36 bg-white border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Trust & Compliance
            </p>
            <h2
              className="reveal-heading text-[clamp(32px,4vw,48px)] text-black font-bold tracking-tight leading-[1.2] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Clinical-grade safety,
              <br />
              by design.
            </h2>
            <p className="text-base text-black/60 leading-[1.7] mb-12 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
              DruVI is built to the standards healthcare requires — not retrofitted to meet them later.
            </p>

            <div className="flex flex-col gap-8">
              {[
                {
                  icon: FileText,
                  title: "SaMD / CDSS classification",
                  desc: "Designed to operate as a Software as a Medical Device under international regulatory frameworks including FDA, CE, and TGA guidelines."
                },
                {
                  icon: Database,
                  title: "Multi-source evidence retrieval",
                  desc: "Every alert backed by WHO VigiBase, peer-reviewed pharmacology references, clinical trial data, and regulatory drug safety documents."
                },
                {
                  icon: Shield,
                  title: "Privacy by architecture",
                  desc: "No patient data is retained. Queries are ephemeral. Designed for HIPAA, PDPA, and GDPR-aligned deployments from day one."
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-none bg-[#f6f6f6] border border-black/5 flex items-center justify-center text-black shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-black mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-black/60 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="border border-black/10 rounded-none bg-white divide-y divide-black/10 overflow-hidden">
              {[
                { label: "WHO VigiBase evidence", status: "CONNECTED", type: "connected" },
                { label: "FDA drug safety database", status: "CONNECTED", type: "connected" },
                { label: "Peer-reviewed literature", status: "CONNECTED", type: "connected" },
                { label: "Post-market surveillance", status: "CONNECTED", type: "connected" },
                { label: "SaMD classification", status: "IN PROGRESS", type: "inprogress" },
                { label: "Clinical validation (Phase 1)", status: "IN PROGRESS", type: "inprogress" },
                { label: "HIPAA / PDPA alignment", status: "BY DESIGN", type: "bydesign" }
              ].map((item, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between text-sm text-black font-semibold bg-white hover:bg-[#f6f6f6]/30 transition-colors duration-200">
                  <span style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider border rounded-none shrink-0 ${item.type === "connected"
                      ? "text-[#09825d] bg-[#e6f7f0] border-[#09825d]/20"
                      : item.type === "inprogress"
                        ? "text-[#545454] bg-[#f6f6f6] border-[#545454]/20"
                        : "text-[#276ef1] bg-[#e8f1ff] border-[#276ef1]/20"
                      }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Business Model / Pricing Section ───────────────────────────────────────

function BusinessModelSection() {
  return (
    <section id="pricing" className="py-36 bg-[#f6f6f6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="reveal-category text-[11px] font-mono uppercase tracking-widest text-[#276ef1] font-bold text-center mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          Business Model
        </p>
        <h2
          className="reveal-heading text-[clamp(32px,4vw,56px)] text-black text-center font-bold tracking-tight leading-[1.2] mb-16"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Flexible plans for every
          <br />
          part of the care chain.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="bg-white border border-black/10 rounded-none p-8 flex flex-col justify-between hover:border-black transition-colors duration-200 relative">
            <div>
              <span className="text-[10px] font-mono font-bold text-black/45 tracking-widest uppercase">FOR PATIENTS</span>
              <h3 className="text-xl font-bold text-black mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Consumer App</h3>
              <p className="mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-2xl font-bold text-black">Free</span>{" "}
                <span className="text-sm italic font-normal text-black/50">to start</span>
              </p>
              <p className="text-sm text-black/60 mt-4 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                Personal medication safety checker. Know if your medicines, foods, or supplements interact before it's too late.
              </p>
              <div className="border-t border-black/10 my-6" />
              <ul className="flex flex-col gap-3">
                {[
                  "Drug–Drug interaction checks",
                  "Drug–Food checks",
                  "Medication reminders",
                  "Prescription scan (basic)"
                ].map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-black/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Check className="w-4 h-4 text-[#276ef1] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="bg-white border-2 border-black rounded-none p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-200 relative">
            {/* Highlighted tag badge */}
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-black text-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase">
              RECOMMENDED
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#276ef1] tracking-widest uppercase">FOR CLINICIANS</span>
              <h3 className="text-xl font-bold text-black mt-1" style={{ fontFamily: "Inter, sans-serif" }}>SaaS Platform</h3>
              <p className="mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-2xl font-bold text-black">Contact</span>{" "}
                <span className="text-sm italic font-normal text-black/50">for pricing</span>
              </p>
              <p className="text-sm text-black/60 mt-4 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                Full clinical-grade interaction intelligence for doctors, pharmacists, and clinics. EHR-ready with evidence traceability.
              </p>
              <div className="border-t border-black/10 my-6" />
              <ul className="flex flex-col gap-3">
                {[
                  "Everything in Consumer",
                  "Drug–Herb interactions",
                  "AI prescription scanning",
                  "Full evidence citations",
                  "Clinical recommendations",
                  "Priority support"
                ].map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-black/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Check className="w-4 h-4 text-[#276ef1] shrink-0 mt-0.5" />
                    <span className="font-semibold text-black">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-black/10 rounded-none p-8 flex flex-col justify-between hover:border-black transition-colors duration-200 relative">
            <div>
              <span className="text-[10px] font-mono font-bold text-black/45 tracking-widest uppercase">FOR PLATFORMS</span>
              <h3 className="text-xl font-bold text-black mt-1" style={{ fontFamily: "Inter, sans-serif" }}>API-as-a-Service</h3>
              <p className="mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-2xl font-bold text-black">Pay-per-use</span>
              </p>
              <p className="text-sm text-black/60 mt-4 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif" }}>
                Embed DruVI's interaction intelligence into your telemedicine, HIS, or health-tech product via a clean, documented API.
              </p>
              <div className="border-t border-black/10 my-6" />
              <ul className="flex flex-col gap-3">
                {[
                  "Full API access",
                  "HIS / EMR integration",
                  "White-label options",
                  "Dedicated onboarding",
                  "SLA guarantees"
                ].map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-black/70" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Check className="w-4 h-4 text-[#276ef1] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    // 1. Setup IntersectionObserver for headings and tags
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-heading, .reveal-category");
    elements.forEach((el) => observer.observe(el));

    // 2. Setup Lenis Smooth Scroll
    let lenis: Lenis | null = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false, // Keep native touch scroll mechanics on mobile devices
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <ComparisonSection />
        <TrustSection />
        <BusinessModelSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
