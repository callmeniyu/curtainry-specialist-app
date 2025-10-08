import React from "react";

export default function Hero() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Quality Curtains & Specialist Services</h1>
        <p className="text-lg text-muted mb-6">
          We provide bespoke curtains, measured fitting and professional installation.
        </p>
        <div className="flex gap-3">
          <a className="inline-block bg-primary text-white px-4 py-2 rounded" href="#contact">
            Get a Quote
          </a>
          <a className="inline-block border border-primary text-primary px-4 py-2 rounded" href="#services">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
