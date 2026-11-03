"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Bot,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Mail,
  ChevronRight,
  Terminal,
  Zap,
  Layers,
  Award,
  CheckCircle2,
  Copy,
  Check,
  Send,
  MapPin,
  Calendar,
  Compass,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "robotics" | "software">("all");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("burhan.fastmultan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 4000);
  };

  const projects = [
    {
      id: "lfr",
      category: "robotics",
      title: "Autonomous Line Following Robot (LFR)",
      badge: "Flagship Robotics Project",
      badgeColor: "from-amber-400 to-orange-500",
      description:
        "Engineered an autonomous differential-drive robot designed to track complex high-contrast lines with sharp 90-degree corners, acute bends, and dynamic intersections.",
      techStack: ["Arduino Uno", "TCRT5000 IR Sensor Array", "L298N Motor Driver", "C++ Embedded", "PID Control"],
      stats: [
        { label: "Track Accuracy", value: "99.2%" },
        { label: "Sensor Array", value: "5-Channel" },
        { label: "Turn Latency", value: "<15ms" },
      ],
      featured: true,
      github: "https://github.com/bburhanali/burhanali",
    },
    {
      id: "dsa-engine",
      category: "software",
      title: "Data Structures & Graph Algorithmic Suite",
      badge: "Semester 3 Project",
      badgeColor: "from-cyan-400 to-blue-500",
      description:
        "High-performance C++ implementation of fundamental and advanced data structures (BST, AVL Trees, Heaps, Graph Adjacency Lists) featuring pathfinding algorithms like Dijkstra and A*.",
      techStack: ["C++20", "Graph Algorithms", "Memory Management", "OOP"],
      stats: [
        { label: "Structures", value: "8+ Implemented" },
        { label: "Complexity", value: "Optimal O(log N)" },
      ],
      featured: false,
      github: "https://github.com/bburhanali/burhanali",
    },
    {
      id: "fast-portal",
      category: "software",
      title: "FAST Multan Academic & Attendance System",
      badge: "OOP & Systems",
      badgeColor: "from-emerald-400 to-teal-500",
      description:
        "Object-Oriented academic management platform handling student records, GPA/CGPA computation, semester course enrollment, and secure file-based persistent storage.",
      techStack: ["C++", "File Handling", "Design Patterns", "CLI UX"],
      stats: [
        { label: "Architecture", value: "Layered OOP" },
        { label: "Data Records", value: "100% Persistent" },
      ],
      featured: false,
      github: "https://github.com/bburhanali/burhanali",
    },
    {
      id: "radar-bot",
      category: "robotics",
      title: "Ultrasonic Autonomous Obstacle Avoidance Bot",
      badge: "Robotics & Hardware",
      badgeColor: "from-purple-400 to-pink-500",
      description:
        "Autonomous mobile rover equipped with a servo-actuated ultrasonic sensor mapping real-time environmental distances and recalculating obstacle-free trajectories on the fly.",
      techStack: ["Arduino", "HC-SR04 Ultrasonic", "Micro-Servo SG90", "Embedded C"],
      stats: [
        { label: "Detection Range", value: "2cm - 400cm" },
        { label: "Sweep Angle", value: "180° Radar" },
      ],
      featured: false,
      github: "https://github.com/bburhanali/burhanali",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["C++", "Python", "JavaScript", "TypeScript", "C", "SQL"],
    },
    {
      category: "Robotics & Embedded Systems",
      icon: Cpu,
      skills: ["Arduino", "Sensor Integration", "L298N Motor Drivers", "PID Algorithms", "Circuit Prototyping"],
    },
    {
      category: "Computer Science Core",
      icon: Terminal,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "COAL (Assembly)", "Discrete Structures"],
    },
    {
      category: "Web & Development Tools",
      icon: Layers,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Next.js & React", "Git & GitHub", "VS Code"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background glowing ambient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[550px] w-[550px] rounded-full bg-purple-600/15 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Burhan<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">FAST Multan • 3rd Sem</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#lfr" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              Line Following Robot
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#academics" className="hover:text-cyan-400 transition-colors">Academics</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-cyan-500 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
              {copiedEmail ? "Copied!" : "Copy Email"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-semibold text-white shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#lfr"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-amber-400 font-medium"
            >
              🤖 Line Following Robot
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400"
            >
              Academics
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full text-center py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs text-slate-300"
              >
                {copiedEmail ? "✓ Copied to clipboard" : "Copy Email"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 md:pt-28 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide">
                  <GraduationCap className="h-3.5 w-3.5" />
                  FAST-NUCES Multan
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
                  <Calendar className="h-3.5 w-3.5" />
                  3rd Semester CS • Age 20
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Active Builder
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                    Burhan
                  </span>
                  .
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed">
                  Computer Science Student, Robotics Enthusiast &amp; Problem Solver.
                </p>
              </div>

              {/* Bio Paragraph */}
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Currently pursuing my Bachelor&apos;s in Computer Science at <span className="text-cyan-400 font-medium">FAST Multan</span> (3rd Semester). Driven by a passion for algorithmic rigor, autonomous robotics like my custom <span className="text-amber-400 font-medium">Line Following Robot</span>, and sleek modern software design.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#lfr"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 cursor-pointer"
                >
                  <Bot className="h-4 w-4" />
                  View Line Following Robot
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-all"
                >
                  All Projects
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-transparent hover:border-slate-800 text-slate-400 hover:text-white text-sm transition-all"
                >
                  Contact Me
                </a>
              </div>

              {/* Mini Highlights Counters */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">3rd</div>
                  <div className="text-xs text-slate-400">Current Semester</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono">20</div>
                  <div className="text-xs text-slate-400">Years of Age</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400 font-mono">FAST</div>
                  <div className="text-xs text-slate-400">Multan Campus</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card / Profile Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-30 blur-xl transition-all" />
                
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-2xl">
                  {/* Top card header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-md shadow-cyan-500/20">
                        B
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">Burhan</h3>
                        <p className="text-xs text-cyan-400 font-mono">CS Undergrad @ FAST</p>
                      </div>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" title="Available for projects" />
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <Bot className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Robotics Architect</span>
                        Created precision PID-driven Line Following Robot.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <Terminal className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Core Computing</span>
                        Mastering Data Structures, OOP in C++, and Algorithms.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <Sparkles className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Creative &amp; Confident</span>
                        Combining sharp technical intellect with aesthetic vision.
                      </div>
                    </div>
                  </div>

                  {/* Terminal snippet */}
                  <div className="rounded-xl bg-slate-950 p-4 font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80 text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                      <span className="h-2 w-2 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[10px]">burhan@fast-multan:~$</span>
                    </div>
                    <div className="text-cyan-400 pt-1">$ whoami</div>
                    <div className="text-slate-400">&gt; Burhan, 20-yr-old CS Student</div>
                    <div className="text-cyan-400">$ current_focus --details</div>
                    <div className="text-slate-400">&gt; FAST Semester 3 (DSA + COAL) + Robotics</div>
                    <div className="text-emerald-400">&gt; Status: Ready to deploy &amp; conquer!</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-16 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Driven by Curiosity, Defined by Precision
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              A glimpse into who I am, my academic background at FAST Multan, and what fuels my passion for engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-slate-700 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">FAST-NUCES Multan</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently in my 3rd semester of BS Computer Science at one of Pakistan&apos;s premier computing institutes. Honing practical, industrial-grade problem-solving skills in high-stakes environments.
              </p>
              <div className="pt-2 text-xs text-cyan-400 font-mono flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Multan, Pakistan
              </div>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-slate-700 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Bot className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Robotics &amp; Hardware</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fascinated by bridging software with the physical world. From microcontrollers and sensor matrices to motor drivers and autonomous vehicles like the Line Following Robot.
              </p>
              <div className="pt-2 text-xs text-amber-400 font-mono flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" /> Microcontrollers &amp; Sensors
              </div>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-slate-700 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Aesthetic &amp; Creative Mindset</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                At age 20, I believe technology should not just function efficiently — it should look and feel beautiful. I enjoy crafting intuitive interfaces, clean code architectures, and visually appealing systems.
              </p>
              <div className="pt-2 text-xs text-purple-400 font-mono flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" /> High Standards &amp; Ambition
              </div>
            </div>
          </div>
        </section>

        {/* SPOTLIGHT: THE LINE FOLLOWING ROBOT */}
        <section id="lfr" className="py-16 border-t border-slate-900">
          <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
            {/* Glowing corner accent */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-mono uppercase tracking-wider">
                  <Bot className="h-3.5 w-3.5" /> Flagship Hardware Project
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Autonomous Line Following Robot (LFR)
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    A fully autonomous, sensor-integrated ground rover developed from the circuit board up to navigate complex race tracks with high speed and zero human intervention.
                  </p>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Controller</span>
                    <span className="text-sm font-semibold text-white font-mono">Arduino Uno R3</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Sensors</span>
                    <span className="text-sm font-semibold text-white font-mono">5x TCRT5000 IR</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Motor Driver</span>
                    <span className="text-sm font-semibold text-white font-mono">L298N Dual H-Bridge</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Drive System</span>
                    <span className="text-sm font-semibold text-white font-mono">Differential DC</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Algorithm</span>
                    <span className="text-sm font-semibold text-white font-mono">PID Trajectory Loop</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Power Source</span>
                    <span className="text-sm font-semibold text-white font-mono">Li-Ion 7.4V Grid</span>
                  </div>
                </div>

                {/* Technical highlights */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Real-time proportional differential control to prevent track oscillation.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Calculates sharp 90° right and left acute turns using junction memory flags.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Tested on high-contrast black line on white surface with zero derailment.</span>
                  </div>
                </div>
              </div>

              {/* Schematic / Visual Blueprint */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span className="font-mono text-amber-400">LFR_ARCH_V2.0</span>
                    <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px]">Embedded C++</span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        <span>5-Channel IR Sensor Matrix</span>
                      </div>
                      <span className="text-[10px] text-cyan-400">INPUT</span>
                    </div>

                    <div className="flex justify-center text-slate-500">
                      ↓ <span className="text-[10px] ml-1">Analog/Digital Polling (&lt;5ms)</span>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/40 text-amber-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-amber-400" />
                        <span>Arduino Uno PID Processor</span>
                      </div>
                      <span className="text-[10px] text-amber-400">DECISION</span>
                    </div>

                    <div className="flex justify-center text-slate-500">
                      ↓ <span className="text-[10px] ml-1">PWM Duty Cycle Signals</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span>L298N &amp; High-RPM Geared Motors</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">ACTUATION</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 text-center font-mono">
                    Constructed by Burhan • FAST Multan Robotics
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 border-t border-slate-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Portfolio Work</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h3>
              <p className="text-slate-400 text-sm max-w-xl">
                A selection of software and robotics projects developed during my CS degree at FAST Multan.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium self-start md:self-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "all" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab("robotics")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "robotics" ? "bg-amber-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Robotics (2)
              </button>
              <button
                onClick={() => setActiveTab("software")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "software" ? "bg-indigo-500 text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Software (2)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/70 transition-all shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${project.badgeColor} text-slate-950 font-bold`}
                    >
                      {project.badge}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                  {/* Stats Pill */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stats.map((s, idx) => (
                      <div
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        <span className="text-slate-500 mr-1">{s.label}:</span>
                        <span className="text-cyan-400 font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Technical Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills &amp; Capabilities</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              A comprehensive toolkit spanning low-level hardware control, core computer science, and modern frontend design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((grp, idx) => {
              const Icon = grp.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{grp.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {grp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACADEMICS SECTION (FAST MULTAN) */}
        <section id="academics" className="py-16 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Academic Journey</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">FAST-NUCES Multan</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Bachelor of Science in Computer Science (BSCS) • Progression and key milestones.
            </p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
            
            {/* Semester 3 (Current) */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 h-6 w-6 rounded-full bg-cyan-500 border-4 border-slate-950 ring-4 ring-cyan-500/20 flex items-center justify-center" />
              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Current • 3rd Semester
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">
                    In Progress
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">Advanced Core Computing &amp; Systems</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep immersion in Data Structures &amp; Algorithms (DSA), Computer Organization &amp; Assembly Language (COAL), and Discrete Mathematical Structures.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-slate-300">
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">DSA (C++)</span>
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">Assembly x86</span>
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">Discrete Mathematics</span>
                </div>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 h-6 w-6 rounded-full bg-slate-700 border-4 border-slate-950 flex items-center justify-center" />
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                    2nd Semester
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                    Completed
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">Object-Oriented Programming &amp; Digital Logic</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Architected modular software systems using OOP concepts (inheritance, polymorphism, abstraction) and studied circuit logic gates via Digital Logic Design (DLD).
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-slate-300">
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">OOP (C++)</span>
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">DLD Circuit Design</span>
                  <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800">Linear Algebra</span>
                </div>
              </div>
            </div>

            {/* Semester 1 */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 h-6 w-6 rounded-full bg-slate-700 border-4 border-slate-950 flex items-center justify-center" />
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                    1st Semester
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                    Completed
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">Programming Fundamentals &amp; Computing Foundations</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Established fundamental computational problem-solving paradigms using structured C++, control flow, memory arrays, and calculus.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 border-t border-slate-900 mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Let&apos;s Connect</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get in Touch with Burhan</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Interested in collaborating on a robotics project, discussing algorithms, or hiring? Drop me a message!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-6">
                <h4 className="text-lg font-bold text-white">Contact Information</h4>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Email Address</span>
                      <span className="text-slate-200 font-mono">burhan.fastmultan@gmail.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">University &amp; City</span>
                      <span className="text-slate-200">FAST-NUCES, Multan, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Current Focus</span>
                      <span className="text-slate-200">3rd Sem CS &amp; Robotics Research</span>
                    </div>
                  </div>
                </div>

                {/* Social pill links */}
                <div className="pt-4 border-t border-slate-800 flex gap-3">
                  <a
                    href="https://github.com/bburhanali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4 text-cyan-400" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-4"
              >
                {contactSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    Thank you! Your message has been received. Burhan will reply soon.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Khan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Robotics Collaboration / Hello"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Burhan, I would love to connect about..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Burhan • CS Student at FAST-NUCES Multan</p>
          <p className="text-slate-400">Crafted with Next.js, Tailwind CSS &amp; Passion</p>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
