import React, { useState, useEffect } from "react";
import { Reveal } from "./useInView";

const capabilities = [
  {
    icon: "🔧",
    title: "All Brands & Equipment",
    description:
      "We service every major commercial and prosumer brand—regardless of where you purchased your machine. No restrictions, no exceptions.",
  },
  {
    icon: "🎯",
    title: "Precision Calibration & Verification",
    description:
      "Factory‑trained technicians conclude every repair with exacting calibration: brew pressure, temperature stability, and flow rates restored to OEM spec. Guaranteed.",
  },
  {
    icon: "🏗️",
    title: "Full‑Scope Repairs",
    description:
      "From a single gasket to a complete machine replacement, we handle the entire spectrum. Complex electronics, board‑level diagnostics, and full rebuilds are all in‑house.",
  },
  {
    icon: "🗓️",
    title: "Preventative Maintenance Programs",
    description:
      "Tailored PM plans protect mission‑critical equipment. Scheduled descaling, component swaps, and full health audits—before a failure ever occurs.",
  },
];

const process = [
  {
    step: "01",
    title: "Book a Diagnostic",
    desc: "Contact us for a drop‑off or on‑site visit. We'll assess your machine and pinpoint the issue within hours.",
  },
  {
    step: "02",
    title: "Quote & Approval",
    desc: "You receive a transparent, itemised quote. We proceed only after your approval—zero hidden fees.",
  },
  {
    step: "03",
    title: "Expert Repair & Calibration",
    desc: "Our factory‑trained technicians repair using OEM‑spec parts, then run a full calibration and performance audit before returning the machine.",
  },
  {
    step: "04",
    title: "Return & Warranty",
    desc: "Your machine comes back in peak condition, backed by a comprehensive 90‑day parts and labour warranty.",
  },
];

const brandClients = [
  { name: "McDonald's" },
  { name: "7‑Eleven" },
  { name: "Panera Bread" },
  { name: "Scooter's Coffee" },
];

const stats = [
  { value: "20,000+", label: "Successful Service Calls" },
  { value: "10,000+", label: "Installations Completed" },
  { value: "98.9%", label: "Client Satisfaction" },
  { value: "11+ Years", label: "Industry Experience" },
];

const brands = [
  "La Marzocco", "Franke", "Jura", "De'Longhi", "Breville",
  "Nuova Simonelli", "Rancilio", "Gaggia", "WMF", "Melitta",
];

const pmIntervals = [
  { freq: "3‑Month", task: "Basic inspection, gasket check, water quality test" },
  { freq: "6‑Month", task: "Group head rebuild, solenoid inspection, descaling" },
  { freq: "9‑Month", task: "Advanced diagnostics, pressure calibration, pump test" },
  { freq: "1‑Year", task: "Full system calibration, control board health, component replacement" },
  { freq: "2‑4 Years", task: "Full rebuild – pumps, valves, heating elements, flow meters" },
  { freq: "5‑7 Years", task: "Complete machine overhaul or replacement consultation" },
];

const Repair = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: "", email: "", machine: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.resetScroll?.();
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.machine) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf4eb]">
      {/* Navbar */}
      <div className="w-full bg-[#faf4eb] fixed top-0 left-0 shadow-md z-50">
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1c0f0a]">
          <h1 className="text-3xl font-bold text-[#1c0f0a]">Espresso Beverage Solutions</h1>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#1c0f0a] hover:opacity-70 transition-opacity font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-24 bg-[#1c0f0a] text-white relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        <div className="absolute -right-16 -top-16 w-[350px] h-[350px] rounded-full border border-white/5"></div>
        <div className="absolute right-0 top-0 w-[200px] h-[200px] rounded-full border border-white/5"></div>

        <div className="max-w-[1240px] mx-auto px-4 py-24 relative z-10">
          <Reveal anim="anim-fade-up" delay="d-0">
            <p className="text-[#b5621e] font-semibold tracking-widest uppercase text-sm mb-4">
              Commercial Repair & Maintenance
            </p>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-2">
            <h2
              className="leading-tight mb-6 max-w-2xl"
              style={{
                fontFamily: "Cormorant Garamond,serif",
                fontSize: "clamp(3rem,6vw,5rem)",
                fontWeight: 300,
                color: "#faf4eb",
              }}
            >
              Full‑Scope Beverage
              <br />
              <em style={{ color: "#b5621e" }}>Equipment Repair</em>
            </h2>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-3">
            <p className="text-[#d4b49a] text-xl max-w-xl leading-relaxed mb-10 font-light">
              Primary service partner for McDonald’s, 7‑Eleven, Panera Bread, and Scooter’s Coffee. Factory‑trained
              technicians delivering precision calibration and rapid response for mission‑critical high‑volume
              operations.
            </p>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-4">
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-3xl font-extrabold text-[#b5621e]">90‑Day</div>
                <div className="text-[#d4b49a] text-sm mt-1">Parts & Labour Warranty</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-3xl font-extrabold text-[#b5621e]">24hr</div>
                <div className="text-[#d4b49a] text-sm mt-1">Diagnostic Turnaround</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-3xl font-extrabold text-[#b5621e]">All</div>
                <div className="text-[#d4b49a] text-sm mt-1">Brands & Models</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust Bar – National Clients & Stats */}
      <div className="bg-white border-b border-[#e8d5c0]">
        <div className="max-w-[1240px] mx-auto px-4 py-10">
          {/* Client Logos (text) */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
            {brandClients.map((client) => (
              <div
                key={client.name}
                className="text-2xl md:text-3xl font-extrabold text-[#1c0f0a]/70 tracking-tight uppercase"
              >
                {client.name}
              </div>
            ))}
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl font-extrabold text-[#b5621e]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="max-w-[1240px] mx-auto px-4 py-20">
        <Reveal anim="anim-fade-up" delay="d-0">
          <div className="text-center mb-14">
            <h3
              className="text-4xl font-bold text-[#1c0f0a] mb-3"
              style={{ fontFamily: "Cormorant Garamond,serif", fontWeight: 300 }}
            >
              Technical Authority You Can Trust
            </h3>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
              From emergency component swaps to full‑scale preventative care, we keep high‑volume operations running without compromise.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              anim="anim-fade-up"
              delay={["d-1", "d-2", "d-3", "d-4"][i]}
            >
              <div className="bg-white rounded-2xl border border-[#e8d5c0] p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h4 className="text-lg font-bold text-[#1c0f0a] mb-2">{cap.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-[#1c0f0a] py-20">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-white mb-3">How We Work</h3>
            <p className="text-[#d4b49a] text-lg">
              A structured, transparent process that restores your equipment to factory precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-5xl font-extrabold text-[#b5621e]/30 mb-3">{p.step}</div>
                <h4 className="text-white font-bold text-lg mb-2">{p.title}</h4>
                <p className="text-[#d4b49a] text-sm leading-relaxed flex-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preventative Maintenance – Expanded Intervals */}
      <div className="max-w-[1240px] mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal anim="anim-fade-right" delay="d-0">
            <div>
              <p className="text-[#b5621e] font-semibold tracking-widest uppercase text-sm mb-3">
                Preventative Maintenance Programs
              </p>
              <h3
                className="text-4xl font-bold text-[#1c0f0a] mb-4 leading-tight"
                style={{ fontFamily: "Cormorant Garamond,serif", fontWeight: 300 }}
              >
                Uptime is non‑negotiable.
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                As a single point of accountability for your complete beverage program, we design customised
                maintenance schedules that keep your equipment running flawlessly—minimising downtime and
                extending asset life across every location.
              </p>
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#b5621e] mt-2 inline-block"></span>
                  <span>Scheduled health checks and proactive component replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#b5621e] mt-2 inline-block"></span>
                  <span>Priority rapid response for PM clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#b5621e] mt-2 inline-block"></span>
                  <span>Comprehensive performance audits with detailed reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#b5621e] mt-2 inline-block"></span>
                  <span>Fixed, predictable costs — no surprises</span>
                </li>
              </ul>
              <button className="bg-[#1c0f0a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                Inquire About a PM Plan
              </button>
            </div>
          </Reveal>
          <Reveal anim="anim-fade-left" delay="d-2">
            <div className="bg-white border border-[#e8d5c0] rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#1c0f0a] mb-4">Comprehensive Service Intervals</h4>
              <div className="space-y-4">
                {pmIntervals.map((plan) => (
                  <div
                    key={plan.freq}
                    className="flex gap-4 items-start border-b border-[#e8d5c0] pb-3 last:border-0"
                  >
                    <span className="font-bold text-[#b5621e] min-w-[5rem] text-sm">{plan.freq}</span>
                    <span className="text-gray-600 text-sm">{plan.task}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                From basic quarterly check‑ins to complete multi‑year overhauls, our structured approach adapts
                to your operational intensity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Brands */}
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-5xl font-extrabold text-[#1c0f0a] leading-tight">
              We Service All Brands
            </h3>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mt-3">
              Regardless of where your equipment was purchased, our factory‑trained technicians service every
              major commercial and prosumer brand. This is just a sample of the names we support daily.
            </p>
          </div>
        </div>

        <div className="border border-[#e8d5c0] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {brands.map((brand, i) => (
              <div
                key={brand}
                className={`flex items-center justify-center px-8 py-10 text-center font-bold text-[#1c0f0a] text-lg tracking-tight hover:bg-[#faf4eb] transition-colors duration-200
                  ${i % 4 !== 3 ? "border-r border-[#e8d5c0]" : ""}
                  ${
                    i < brands.length - 4 || i < brands.length - (brands.length % 4 || 4)
                      ? "border-b border-[#e8d5c0]"
                      : ""
                  }
                `}
              >
                {brand}
              </div>
            ))}
          </div>
          <div className="bg-[#faf4eb] text-center py-4 text-sm text-gray-500 border-t border-[#e8d5c0]">
            …and many more. If it makes coffee, espresso, or tea, we service it.
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-[#faf4eb] border-t border-[#e8d5c0] py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-[#1c0f0a] mb-3">Book a Repair</h3>
            <p className="text-gray-500">
              Tell us about your machine and we’ll respond within 24 hours with a diagnostic plan.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-[#e8d5c0] p-12 text-center shadow-sm">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-2xl font-bold text-[#1c0f0a] mb-2">Request Received</h4>
              <p className="text-gray-500">
                We'll reach out to {formData.email} within 24 hours to confirm your booking.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#e8d5c0] p-8 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@yourcafe.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Machine Brand & Model</label>
                <input
                  type="text"
                  value={formData.machine}
                  onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                  placeholder="e.g. La Marzocco Linea PB"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Describe the Issue</label>
                <textarea
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  placeholder="e.g. Machine not reaching brew temperature, steam wand blocked..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-[#1c0f0a] text-white font-bold rounded-xl hover:bg-opacity-90 transition-all duration-200 text-lg"
              >
                Submit Repair Request
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1c0f0a] text-white py-10 text-center">
        <p className="text-[#d4b49a] text-sm">
          © {new Date().getFullYear()} Espresso Beverage Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Repair;