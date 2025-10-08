import React from "react";

export default function Services() {
  const services = [
    { title: "Made-to-measure Curtains", desc: "Custom sizes, fabrics, and hems." },
    { title: "Installation & Fitting", desc: "Professional on-site fitting and adjustments." },
    { title: "Repairs & Alterations", desc: "Extend the life of your curtains with careful repairs." },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-4 border rounded-lg bg-white">
              <h3 className="font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
