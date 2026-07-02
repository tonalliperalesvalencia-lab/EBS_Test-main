import { Reveal } from "./useInView";
import React, { useState, useEffect, useRef } from "react";
import ECEM2 from "../assets/ECEM2.jpg";
import AvantcoC10 from "../assets/AvantcoC10.jpg";
import AvantcoBCG3 from "../assets/AvantcoBCG3.jpg";
import ColombianSupremo from "../assets/ColombianSupremo.jpg";
import LavazzaDecaf from "../assets/LavazzaDecaf.jpg";
import LavazzaWholeBean from "../assets/LavazzaWholeBean.jpg";
import Pitcher from "../assets/Pitcher.jpg";
import Portafilter from "../assets/Portafilter.jpg";
import Tamper from "../assets/Tamper.jpg";

// To add more products to this page, just add a new entry to the category. The carousel code will display it automatically.

const products = [
  {
    category: "Espresso Machines",
    items: [
      {
        name: "Estella Caffe ECEM2 Two Group Automatic Espresso Machine",
        image: ECEM2,
        description: "The industry-standard two-group setup, balancing output capacity with footprint. A popular choice for busy coffee shops needing consistent volume.",
        badge: "Good",
        specs: ["Two group heads", "220-240 Volts", "Automatic dosing"],

      },
      {
        name: "Avantco C10 12 Cup Pourover Commercial Coffee Maker",
        image: AvantcoC10,
        description: "Reliable batch-brew coffee maker with dual warmers, built for high-turnover environments like offices, diners, and breakrooms. Runs on standard 120V power.",
        badge: "Good",
        specs: ["12 cup capacity", "120 Volts", "Dual warmers"],
      },
      {
        name: "Avantco BCG3 3 lb. Bulk Coffee Grinder",
        image: AvantcoBCG3,
        description: "Essential companion to any espresso setup, delivering fresh, consistent grinds on demand. A natural add-on for customers purchasing one of the espresso machines above.",
        badge: "Better",
        specs: ["3 lb. hopper capacity", "110 Volts", "Bulk grinding"],
      },
    ],
  },
  {
    category: "Coffee Beans",
    items: [
      {
        name: "Hometown Provisions Colombian Supremo Whole Bean Coffee",
        image: ColombianSupremo,
        description: "A smooth, well-rounded single-origin coffee ideal for standard drip brewing. A reliable staple that appeals to traditional coffee drinkers.",
        badge: "Good",
        specs: ["2 lb. bag", "5/Case", "Single-origin Colombian"],
      },
      {
       name: "Lavazza Super Crema Whole Bean Espresso",
       image: LavazzaWholeBean,
       description: "A rich, balanced espresso blend with a naturally sweet crema, trusted by cafes for consistent shots. Pairs perfectly with any of our espresso machines.",
       badge: "Better",
       specs: ["2.2 lb. bag", "6/Case", "Espresso blend"],
      },
      {
       name: "Lavazza Dek Decaf Whole Bean Espresso",
       image: LavazzaDecaf,
       description: "A full-flavored decaffeinated espresso option, ensuring your menu accommodates customers who want the taste without the caffeine.",
       badge: "Good",
       specs: ["1.1 lb. bag", "12/Case", "Decaffeinated"],
      },
    ],
  },
  {
    category: "Accessories & Parts",
    items: [
      {
        name: "Nuova Simonelli Bottomless Portafilter",
        image: Portafilter,
        description: "A professional-grade bottomless portafilter that lets baristas visually monitor extraction quality. A versatile upgrade compatible with select commercial espresso machines.",
        badge: "Better",
        specs: ["Stainless steel", "Bottomless design", "Professional grade"],
      },
      {
        name: "Nuova Simonelli Stainless Steel Tamper",
        image: Tamper,
        description: "A durable, precision-milled tamper for consistent grounds packing, ensuring even extraction shot after shot. An essential tool for any barista station.",
        badge: "Good",
        specs: ["2 1/4\" diameter", "Stainless steel", "Ergonomic handle"],
      },
      {
        name: "Rhino Coffee Gear Pro Stainless Steel Milk Pitcher",
        image: Pitcher,
        description: "A precision-spouted frothing pitcher built for consistent milk texturing and latte art. A must-have accessory for any shop serving steamed-milk drinks.",
        badge: "Good",
        specs: ["Stainless steel", "Multiple size options", "Precision spout"],
      },
    ],
  },
];

const badgeColors = {
  "Best Seller": "bg-[#f5e6d3] text-[#6b3f2a]",
  "Professional": "bg-[#1c0f0a] text-white",
  "Office Pick": "bg-emerald-100 text-emerald-800",
  "Single Origin": "bg-orange-100 text-orange-800",
  "House Blend": "bg-[#1c0f0a] text-white",
  "Bold": "bg-gray-800 text-white",
  "Essential": "bg-blue-100 text-blue-800",
  "Durable": "bg-stone-200 text-stone-800",
  "Precision": "bg-indigo-100 text-indigo-800",
};

const Catalogue = ({ onBack, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRefs = useRef({}); 

  useEffect(() => {
    window.resetScroll?.();
  }, []);

  const scroll = (category, direction) => {
    const container = scrollRefs.current[category];
  
    if (container) {
      const scrollAmount = 380;
  
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const categories = ["All", ...products.map((p) => p.category)];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  return (
    
    <div className="min-h-screen bg-[#faf4eb]">
      {/* Header */}
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
      <div className="pt-24 bg-[#1c0f0a] text-white">
        <div className="max-w-[1240px] mx-auto px-4 py-20">
          <Reveal anim="anim-fade-up" delay="d-0">
            <p className="text-[#b5621e] font-semibold tracking-widest uppercase text-sm mb-3">Our Coffee</p>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-2">
            <h2 className="text-5xl font-extrabold leading-tight mb-4" style={{fontFamily:'Cormorant Garamond,serif', fontWeight:300}}>
              Premium Coffee <br /> Equipment & Supplies
            </h2>
          </Reveal>
          <Reveal anim="anim-fade-up" delay="d-3">
            <p className="text-[#d4b49a] text-lg max-w-xl font-light">
              Everything your café needs — from commercial espresso machines to specialty beans and professional accessories.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-24 bg-[#faf4eb] border-b border-[#e8d5c0] z-40">
        <div className="max-w-[1240px] mx-auto px-4 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1c0f0a] text-white shadow-md"
                  : "bg-[#f5ede2] text-[#1c0f0a] hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        {filtered.map((section) => (
          <div key={section.category} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-[#1c0f0a]">{section.category}</h3>
              <div className="flex-1 h-px bg-stone-200"></div>
            </div>
            <div className="relative">
  {/* Left Button */}
  <button
    onClick={() => scroll(section.category, "left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-stone-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-100 transition"
  >
    ←
  </button>

  {/* Right Button */}
  <button
    onClick={() => scroll(section.category, "right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-stone-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-100 transition"
  >
    →
  </button>

  {/* Scroll Container */}
  <div
    ref={(el) => (scrollRefs.current[section.category] = el)}
    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12 py-2"
  >
    {section.items.map((item, idx) => (
      <Reveal
        key={item.name}
        anim="anim-fade-up"
        delay={["d-1", "d-2", "d-3"][idx % 3]}
      >
        <div className="min-w-[340px] max-w-[340px] bg-white rounded-2xl border border-[#e8d5c0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
          {/* Card image */}
          <div className="h-48 overflow-hidden bg-white">
          {item.image ? (
            <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl opacity-20">☕</span>
            </div>
          )}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  badgeColors[item.badge]
                }`}
              >
                {item.badge}
              </span>
            </div>

            <h4 className="text-lg font-bold text-[#1c0f0a] mb-2">
              {item.name}
            </h4>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            <ul className="space-y-1 mb-5">
              {item.specs.map((spec) => (
                <li
                  key={spec}
                  className="text-xs text-gray-500 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b5621e] inline-block"></span>
                  {spec}
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 bg-[#1c0f0a] text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-all duration-200 group-hover:shadow-md">
              Request a Quote
            </button>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
</div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-[#1c0f0a] text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-3">Can't find what you're looking for?</h3>
        <p className="text-[#d4b49a] mb-6">Our team is ready to help you find the perfect solution.</p>
        <button onClick={() => { onNavigate("contact"); window.resetScroll?.(); }} className="px-8 py-3 bg-[#b5621e] text-[#1c0f0a] font-bold rounded-full hover:bg-amber-300 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Catalogue;
