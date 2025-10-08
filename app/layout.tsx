import React from "react";
import "./globals.css";

export const metadata = {
  title: "Curtainry Specialist App",
  description: "A Next.js + Tailwind starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-text" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
