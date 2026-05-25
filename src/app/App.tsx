import { useState, useEffect } from "react";
import { AlertTriangle, Layers, BookOpen, Scan, HeartPulse, Network } from "lucide-react";
import Lenis from "lenis";
import svgPaths from "@/imports/Desktop1-1/svg-sk9h56z0ip";

// Import slide assets for the smooth loopable fade slideshow
import slideResults from "@/imports/slide_results.png";
import slideSearch from "@/imports/slide_search.png";
import slideDashboard from "@/imports/slide_dashboard.png";
import imgHeroMockup from "@/imports/Frame_1707481479.png";
import imgRectangle from "@/imports/Desktop1-1/feb848ffe0a1a166fb3cb6024ffdda89e673a71e.png";
import imgChangeThis1 from "@/imports/Desktop1-1/24c119b63de2d114f33795a5f94bb3f333763bf0.png";
import imgChangeThis3 from "@/imports/Desktop1-1/09a969e0be39124010cc83a8467875e16a2e4c08.png";
import imgFreeGooglePixel from "@/imports/Desktop1-1/c20e5ec073ae80b1a3dd6580e94ca02ff16ed58a.png";
import imgGeminiWorld from "@/imports/Desktop1-1/d80c1c68ab9e55b1c076e7a5b0de8075d3415ab9.png";
import imgGeminiIcon from "@/imports/Desktop1-1/3601419a63971450213b353dc9dab777dabbb96f.png";
import imgFrame from "@/imports/Desktop1-1/35716ce8f6b39c91f8643cb45e2072d456bdc1df.png";
import imgPerson1 from "@/imports/Desktop1-1/585dae9e98ac83690d1947a227123e61dddd2351.png";
import imgPerson2 from "@/imports/Desktop1-1/1d38105ccaca86aacd6cfc8f3fa7e56a7e4a33cd.png";
import { imgChangeThis, imgChangeThis2 } from "@/imports/Desktop1-1/svg-zhbmx";

// ─── Logo SVG ───────────────────────────────────────────────────────────────

function DruViLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-6 h-6 shrink-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 24.0015 24.222">
          <g>
            <path d={svgPaths.pea9fb80} fill="#0F0F0F" />
            <path d={svgPaths.p22387400} fill="#0F0F0F" />
            <path d={svgPaths.p33695a00} fill="#0F0F0F" />
          </g>
        </svg>
      </div>
      <span className="font-bold text-xl tracking-wide text-black" style={{ fontFamily: "Inter, Roboto, sans-serif" }}>
        DruVI
      </span>
    </div>
  );
}

// ─── Tick / Cross icons ──────────────────────────────────────────────────────

function TickIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <path clipRule="evenodd" d={svgPaths.p1eba7900} fill="#7CE372" fillRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p21998f00} fill="#EF657A" />
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <DruViLogo />
        <nav className="hidden md:flex items-center gap-12">
          {["Problem", "Solution", "How it works"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium text-black/75 hover:text-black transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-[#1e1e1e] text-white text-base font-semibold px-6 py-3 rounded-full hover:bg-black transition-colors">
          Request Demo
        </button>
      </div>
    </header>
  );
}

// ─── App Showcase ─────────────────────────────────────────────────────────────

function AppShowcase() {
  const images = [slideSearch, slideResults, slideDashboard];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds display time per image, 9s total loop cycle

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[960px] mx-auto h-[260px] sm:h-[380px] md:h-[500px] lg:h-[580px] mt-12 flex items-center justify-center overflow-visible select-none pointer-events-none">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#2072af]/8 to-[#009bef]/4 blur-[80px] pointer-events-none -z-10 animate-pulse duration-10000" />

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`DruVI app showcase screen ${i}`}
          className={`absolute max-w-full h-full object-contain transition-opacity duration-1000 ease-in-out drop-shadow-2xl ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
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
    <section className="relative overflow-hidden rounded-b-[50px] pt-24 pb-0 min-h-[700px]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#a1d8f6]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-12 pb-0">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-[12px] font-medium text-[#2072af] bg-[#2072af]/10 px-4 py-2 rounded-full uppercase tracking-[0.15em]">
            AI - Powered
          </span>
        </div>

        {/* Headline */}
        <h1
          className="reveal-heading text-center leading-[1.1] text-[clamp(40px,5.5vw,64px)] font-bold tracking-[-0.02em] text-[#1e1e1e] flex flex-wrap items-center justify-center gap-x-[0.25em]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span>Drug safety</span>
          <span
            className="inline-block relative overflow-hidden h-[1.25em] text-center align-middle transition-all duration-300 ease-out"
            style={{ width: `${heroKeywords[index].length * 0.8}ch` }}
          >
            <span
              className={`absolute inset-0 block bg-clip-text text-transparent transition-all duration-300 transform ${fade ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[2px]"
                }`}
              style={{
                backgroundImage: "linear-gradient(90deg, #2072af 0%, #0000cc 100%)",
                lineHeight: "1.25em",
              }}
            >
              {heroKeywords[index]}
            </span>
          </span>
          <span>in real time</span>
        </h1>

        {/* CTA buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="bg-[#2072af] text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#1a5f93] transition-colors">
            Download the app
          </button>
          <button className="bg-[#009bef1a] text-[#2072af] font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#009bef26] transition-colors">
            Learn More
          </button>
        </div>

        {/* Phone mockups */}
        <AppShowcase />
      </div>
    </section>
  );
}

// ─── Solution section ─────────────────────────────────────────────────────────

function SolutionSection() {
  return (
    <section id="solution" className="py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="reveal-category text-[12px] uppercase tracking-[0.15em] text-[#2072af] font-medium mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
          The Solution
        </p>
        <h2
          className="reveal-heading text-[clamp(36px,4.5vw,68px)] text-black leading-[1.15] mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          A smarter invoice for
          <br />
          every medication decision
        </h2>
        <p className="text-xl font-medium text-[rgba(30,30,30,0.75)] max-w-3xl mx-auto leading-[1.75]" style={{ fontFamily: "Inter, sans-serif" }}>
          DruVI moves medication safety from reactive to preventive delivering instant, evidence-backed interaction intelligence at the exact moment a decision is made.
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
    color: "#e11d48", // Rose-600
    bg: "rgba(225, 29, 72, 0.08)"
  },
  {
    title: "Comprehensive interaction coverage",
    desc: "Simultaneously evaluates Drug–Drug, Drug–Food, and Drug–Herb & Supplement.",
    icon: Layers,
    color: "#2563eb", // Blue-600
    bg: "rgba(37, 99, 235, 0.08)"
  },
  {
    title: "Evidence-backed transparency",
    desc: "Every alert is traceable to regulatory documents & clinical trial data.",
    icon: BookOpen,
    color: "#16a34a", // Green-600
    bg: "rgba(22, 163, 74, 0.08)"
  },
  {
    title: "AI prescription scanning",
    desc: "Upload a prescription image and DruVI's AI agents extract all medication names automatically.",
    icon: Scan,
    color: "#7c3aed", // Violet-600
    bg: "rgba(124, 58, 237, 0.08)"
  },
  {
    title: "Actionable clinical guidance",
    desc: "Explains why an interaction is dangerous, outlines consequences, & provides safer alternatives.",
    icon: HeartPulse,
    color: "#ea580c", // Orange-600
    bg: "rgba(234, 88, 12, 0.08)"
  },
  {
    title: "EHR & HIS integration",
    desc: "Operates as a Clinical Decision Support System with an API-first architecture.",
    icon: Network,
    color: "#0d9488", // Teal-600
    bg: "rgba(13, 148, 136, 0.08)"
  },
];

function FeaturesSection() {
  return (
    <section id="solution" className="pb-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div key={i} className="bg-[#f5f5f5] rounded-2xl p-8 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-2"
                  style={{ backgroundColor: f.bg, color: f.color }}
                >
                  <IconComponent className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-black leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>
                  {f.title}
                </h3>
                <p className="text-base text-[rgba(30,30,30,0.75)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
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
    <section className="py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <p
          className="text-3xl font-medium text-black leading-[1.65] mb-16 max-w-3xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          DruVI detects, explains, & prevents harmful medication{" "}
          <span className="text-black/50">
            interactions for clinicians & patients at the exact moment a decision is made.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[520px]">
          {/* 43,000+ */}
          <div className="bg-[#f5f5f5] rounded-2xl p-12 flex flex-col justify-end">
            <p className="text-[clamp(48px,5vw,68px)] font-medium text-black leading-[1.15]" style={{ fontFamily: "Inter, sans-serif" }}>
              43,000+
            </p>
            <p className="text-xl text-[rgba(30,30,30,0.75)] mt-2 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              Fatal ADRs report
              <br />
              (WHO)
            </p>
          </div>

          {/* 5 markets + world image */}
          <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden relative flex flex-col justify-between row-span-2 min-h-[300px] md:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <img src={imgGeminiWorld} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="relative z-10 p-12 mt-auto">
              <p className="text-[clamp(48px,5vw,68px)] font-medium text-black leading-[1.15]" style={{ fontFamily: "Inter, sans-serif" }}>
                5 markets
              </p>
              <p className="text-xl text-[rgba(30,30,30,0.75)] mt-2 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
                SG . IN . AE . US . AU
              </p>
            </div>
          </div>

          {/* 3 types */}
          <div className="bg-[#f5f5f5] rounded-2xl p-12 flex flex-col justify-end">
            <p className="text-[clamp(48px,5vw,68px)] font-medium text-black leading-[1.15]" style={{ fontFamily: "Inter, sans-serif" }}>
              3 types
            </p>
            <p className="text-xl text-[rgba(30,30,30,0.75)] mt-2 leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
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
  return (
    <section id="how-it-works" className="py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="reveal-category text-[12px] uppercase tracking-[0.15em] text-[#2072af] font-medium text-center mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
          How it works
        </p>
        <h2
          className="reveal-heading text-[clamp(32px,4vw,68px)] text-black text-center leading-[1.15] mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From prescription to
          <br />
          safe decision in seconds
        </h2>
        <p className="text-xl text-[rgba(30,30,30,0.75)] text-center max-w-3xl mx-auto mb-24 leading-[1.75]" style={{ fontFamily: "Inter, sans-serif" }}>
          {"DruVI's agentic AI performs live multi-source evidence retrieval, cross-verification, and brand-to-generic normalization at the point of care."}
        </p>

        {/* Phone image + steps */}
        <div className="relative">
          {/* Large phone image */}
          <div className="w-full rounded-2xl overflow-hidden mb-16 max-h-[560px]">
            <img src={imgFrame} alt="DruVI app workflow" className="w-full object-cover" />
          </div>

          {/* Steps in a 2-col zigzag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`bg-[#f5f5f5] rounded-2xl px-6 py-8 flex flex-col gap-3 ${i === steps.length - 1 && steps.length % 2 !== 0 ? "md:col-span-2 md:max-w-[49%]" : ""
                  }`}
              >
                <span className="text-[#2072af] text-3xl font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  {step.num}
                </span>
                <h3 className="text-xl font-medium text-black" style={{ fontFamily: "Inter, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-base text-[rgba(30,30,30,0.75)] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {step.desc}
                </p>
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
    <section className="py-0 bg-[#0b568e]">
      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-40">
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-16 flex-wrap">
          <div className="max-w-2xl">
            <h2
              className="reveal-heading text-[clamp(28px,3.5vw,48px)] text-white leading-[1.15] mb-5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Beyond static rule-based
              <br />
              interaction tables
            </h2>
            <p className="text-lg text-white/75 max-w-xl leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              Existing platforms rely on fixed databases with limited regional mapping and no real-time reasoning. DruVI uses agentic AI for live evidence retrieval, cross-verification, and brand-to-generic normalization.
            </p>
          </div>
          <button className="bg-white/10 text-white font-semibold text-base px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors border border-white/20 self-start mt-2">
            Learn More
          </button>
        </div>

        {/* Table */}
        <div className="border border-white/20 rounded-2xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-5 bg-white border-b border-white/10">
            <div className="col-span-2 px-6 py-5 text-lg font-medium text-black" style={{ fontFamily: "Inter, sans-serif" }}>Feature</div>
            <div className="px-4 py-5 text-lg font-medium text-black bg-white/10" style={{ fontFamily: "Inter, sans-serif" }}>Druvi</div>
            <div className="px-4 py-5 text-lg font-medium text-black/75" style={{ fontFamily: "Inter, sans-serif" }}>Drugs.com</div>
            <div className="hidden md:block px-4 py-5 text-lg font-medium text-black/75" style={{ fontFamily: "Inter, sans-serif" }}>WebMD</div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-5 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
            >
              <div className="col-span-2 px-6 py-5 text-white text-base font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                {row.feature}
              </div>
              {/* Druvi */}
              <div className="px-4 py-5 flex items-center gap-2 bg-white/5">
                <TickIcon />
                <span className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.druvi.label}</span>
              </div>
              {/* Drugs.com */}
              <div className="px-4 py-5 flex items-center gap-2">
                {row.drugsCom.tick === true ? (
                  <TickIcon />
                ) : row.drugsCom.tick === false ? (
                  <CrossIcon />
                ) : null}
                {row.drugsCom.label && (
                  <span className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.drugsCom.label}</span>
                )}
              </div>
              {/* WebMD */}
              <div className="hidden md:flex px-4 py-5 items-center gap-2">
                {row.webmd.tick === true ? (
                  <TickIcon />
                ) : row.webmd.tick === false ? (
                  <CrossIcon />
                ) : null}
                {row.webmd.label && (
                  <span className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.webmd.label}</span>
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
          <p className="reveal-category text-[12px] uppercase tracking-[0.15em] text-[#2072af] font-medium mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
            The Team
          </p>
          <h2 className="reveal-heading text-[clamp(28px,3.5vw,48px)] text-black leading-[1.15]" style={{ fontFamily: "Inter, sans-serif" }}>
            Built by people who understand care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person 1 */}
          <div className="bg-[#f6f6f6] rounded-2xl p-10 flex flex-col gap-8">
            <div className="flex items-end gap-8">
              <div className="w-[150px] h-[150px] shrink-0 rounded-xl overflow-hidden bg-gray-200">
                <img src={imgPerson1} alt="Nigamananda Sahoo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1e1e1e] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  Nigamananda Sahoo
                </p>
                <p className="text-base text-[#747474]" style={{ fontFamily: "Inter, sans-serif" }}>
                  Founder & CEO · Squbix Digital
                </p>
              </div>
            </div>
            <p className="text-sm text-[#1e1e1e] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
              Technical director specializing in AI, SaaS and Blockchain for healthcare and finance. Led multi-million dollar projects across Singapore and India.
            </p>
          </div>

          {/* Person 2 */}
          <div className="bg-[#f6f6f6] rounded-2xl p-10 flex flex-col gap-8">
            <div className="flex items-end gap-8">
              <div className="w-[150px] h-[150px] shrink-0 rounded-xl overflow-hidden bg-gray-200">
                <img src={imgPerson2} alt="Dr. Siddhartha Goutam" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1e1e1e] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  Dr. Siddhartha Goutam
                </p>
                <p className="text-base text-[#747474]" style={{ fontFamily: "Inter, sans-serif" }}>
                  MD Pharmacology · Bhubaneswar
                </p>
              </div>
            </div>
            <p className="text-sm text-[#1e1e1e] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
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
    <section className="py-36 bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="reveal-category text-[12px] uppercase tracking-[0.15em] text-[#2072af] font-medium mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
          Get involved
        </p>
        <h2
          className="reveal-heading text-[clamp(36px,5vw,68px)] text-black leading-[1.15] mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Request a demo
        </h2>
        <p className="text-xl text-[rgba(30,30,30,0.75)] max-w-2xl mx-auto mb-16 leading-[1.75]" style={{ fontFamily: "Inter, sans-serif" }}>
          DruVI is in MVP/POC stage and seeking clinical partners, pilot hospitals, and early integrators across Singapore, India, UAE, US, and Australia.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-black text-white font-medium text-lg px-8 py-4 rounded-full hover:bg-[#1e1e1e] transition-colors">
            Request a demo
          </button>
          <button className="bg-white border border-black/30 text-black font-medium text-lg px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
            Partner with us
          </button>
          <button className="bg-white border border-black/30 text-black font-medium text-lg px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
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
    <footer className="bg-white border-t border-black/10 pt-10 pb-8 relative overflow-hidden">
      {/* Large watermark */}
      <p
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[clamp(100px,15vw,217px)] font-bold leading-none pointer-events-none select-none z-0"
        style={{
          fontFamily: "Roboto, Inter, sans-serif",
          backgroundImage: "linear-gradient(180deg, #2072af 0%, #fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          opacity: 0.05,
        }}
      >
        DruVI
      </p>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Logo center */}
        <div className="flex justify-center mb-6">
          <DruViLogo />
        </div>
        <p className="text-base text-[rgba(30,30,30,0.75)] text-center max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          The Drug Vigilance Intelligent System. A SquMed AI product by Squbix Digital. Making healthcare smarter.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[rgba(30,30,30,0.75)]" style={{ fontFamily: "Inter, sans-serif" }}>
          <p className="text-center md:text-left">© 2025 Squbix Digital. DruVI is a SquMed AI product.</p>
          <p className="text-center md:text-right">For informational purposes. Not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
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
        smoothTouch: false, // Keep native touch scroll mechanics on mobile devices
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
        <SolutionSection />
        <FeaturesSection />
        <StatsSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
