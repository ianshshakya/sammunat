import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between rounded-2xl
                       bg-white/10 backdrop-blur-xl border border-white/20
                       shadow-lg shadow-black/10 px-6 py-3"
          >
            {/* Logo */}
            <div className="leading-tight select-none">
              <p className="text-xs tracking-[0.3em] text-cyan-400 uppercase">
                We Build
              </p>
              <h1 className="text-2xl font-semibold tracking-wide text-white">
                Sam<span className="text-cyan-400">mun</span>at
              </h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

              <button
                className="ml-2 px-5 py-2 rounded-xl
                           bg-gradient-to-r from-cyan-500 to-cyan-400
                           text-black font-semibold
                           hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50
                    bg-[#0b0f19]/90 backdrop-blur-xl
                    border-l border-white/20
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full text-white">
          {/* Close Button */}
          <button
            className="self-end text-2xl mb-6"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>

          {/* CTA */}
          <button
            className="mt-auto px-6 py-3 rounded-xl
                       bg-gradient-to-r from-blue-500 to-cyan-400
                       text-black font-semibold
                       hover:scale-105 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
