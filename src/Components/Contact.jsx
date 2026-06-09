import React, { useState, useEffect } from "react";
import { Reveal } from "./useInView";

const Contact = ({ onBack }) => {
  // This resets the scroll engine when the page loads
  useEffect(() => { window.resetScroll?.(); }, []);

  const [formData, setFormData] = useState({ name: "", email: "", machine: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.machine) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#faf4eb' }}>

      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-sm"
        style={{ background: 'rgba(250,244,235,0.97)', backdropFilter: 'blur(8px)' }}>
        <div className="flex justify-between items-center h-20 max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: '#b5621e' }}>Express</span>
            <span className="text-xl font-light" style={{ fontFamily: 'Cormorant Garamond,serif', color: '#1c0f0a' }}>Beverage Solutions</span>
          </div>
          <button onClick={onBack} className="text-sm font-light flex items-center gap-2 hover:opacity-60 transition-opacity" style={{ color: '#1c0f0a' }}>
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-[#faf4eb] border-t border-[#e8d5c0] py-40">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-[#1c0f0a] mb-3">Contact Us</h3>
            <p className="text-gray-500">
              Send us a message to get in contact and our team will respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-[#e8d5c0] p-12 text-center shadow-sm">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-2xl font-bold text-[#1c0f0a] mb-2">Request Received</h4>
              <p className="text-gray-500">
                We'll reach out to {formData.email} within 24 hours to answer your inquiry.
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
              {/* <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Machine Brand & Model</label>
                <input
                  type="text"
                  value={formData.machine}
                  onChange={(e) => setFormData({ ...formData, machine: e.target.value })}
                  placeholder="e.g. La Marzocco Linea PB"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors"
                />
              </div> */}
              <div>
                <label className="block text-sm font-semibold text-[#1c0f0a] mb-1.5">Explain your reason for inquiry</label>
                <textarea
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  placeholder="e.g. Example inquiry..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#1c0f0a] placeholder-gray-300 focus:outline-none focus:border-[#1c0f0a] transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-[#1c0f0a] text-white font-bold rounded-xl hover:bg-opacity-90 transition-all duration-200 text-lg"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Contact;