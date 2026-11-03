import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burhan | CS Student @ FAST Multan | Portfolio",
  description:
    "Portfolio of Burhan - 3rd Semester Computer Science Student at FAST-NUCES Multan. Robotics, Software Engineering, and Line Following Robot Developer.",
  keywords: [
    "Burhan",
    "FAST Multan",
    "FAST NUCES",
    "Line Following Robot",
    "Computer Science Portfolio",
    "Robotics",
    "Web Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
