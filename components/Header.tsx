import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Curtainry</div>
        <nav className="space-x-4 text-sm text-muted">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
