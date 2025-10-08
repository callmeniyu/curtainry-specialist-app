import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-muted">
        © {new Date().getFullYear()} Curtainry — All rights reserved.
      </div>
    </footer>
  );
}
