import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Code, Sparkles, Terminal, BookOpen, 
  Briefcase, GraduationCap, ExternalLink, ChevronRight, 
  Volume2, VolumeX, Search, CheckCircle2,
  Send, MousePointer, Info, X, Compass, Layers, Globe
} from 'lucide-react';

// Brand Icon Fallbacks
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// DATA SYNTHESIS
const DATA = {
  profile: {
    name: "James Laskey",
    title: "Fullstack Software Engineer",
    subtitle: "UC Berkeley Cognitive Science & CS Minor '26",
    email: "james.laskey23@berkeley.edu",
    github: "https://github.com/james-laskey",
    linkedin: "https://linkedin.com/in/james-laskey",
    status: "Open for Full-Time SWE Roles (Graduating May 2026)"
  },
  
  projects: [
    {
      id: "crossword",
      title: "Hello Crossword — Agentic Engine",
      tagline: "Constraint-Satisfaction AI Crossword Architecture",
      tech: ["Python", "Flask", "DeepSeek API", "Constraint Algorithms", "Cognitive Science"],
      link: "https://www.hello-ai.info",
      highlights: [
        "Architected a 5-stage agent pipeline eliminating LLM spatial reasoning flaws: seed selection, deterministic skeleton builder, batched sentence calls, slide-to-anchor placement, and parallel clue generation.",
        "Reduced generation cycle to under 1 minute at ~$0.003/puzzle, replacing naive LLM retry loops that took hours.",
        "Engineered SVO (Subject-Verb-Object) hint sequencing based on cognitive retrieval practice research, hiding object first, then verb, then subject.",
        "Built a self-evaluating verification loop with individual slot retries and an autonomous solver agent that outputs solution traces as pedagogical artifacts."
      ]
    },
    {
      id: "hello-ai",
      title: "Hello AI — Language Platform",
      tagline: "Free Real-time AI-Generated Language Learning",
      tech: ["React Native", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "DeepSeek API"],
      link: "https://www.hello-ai.info",
      highlights: [
        "Full-stack platform with 3 AI-generated games (Hello Ninja, Hello Land of Fortune, Hello Crossword), reading lessons, and spaced-repetition flashcards across 9+ languages.",
        "Dynamic lesson generation tailored on the fly to learner proficiency, topic preferences, and real-time voice speech recognition.",
        "Engineered backend architecture, prompt design, deployment pipelines, and cost-optimized API streaming ($0.003/round)."
      ]
    },
    {
      id: "carbon2null",
      title: "Carbon2Null AI Agent Lead",
      tagline: "Medical Device Bill of Materials Orchestration",
      tech: ["Python", "DeepSeek API", "LLM Pipelines", "Data Extraction"],
      organization: "Open Project Berkeley (Spring 2025)",
      highlights: [
        "Led a technical team to develop an AI agent that generates, cross-references, and exports structured Bills of Materials (BOMs) for hundreds of commercial medical devices.",
        "Architected reliable schema extraction pipelines in Python with partner firm Carbon2Null to meet rigorous manufacturing specifications."
      ]
    },
    {
      id: "badger-geo",
      title: "GeoJSON Borough Mapping Engine",
      tagline: "Spatial API & Data Parser for SEO Growth",
      tech: ["Python", "GeoJSON", "REST API", "Web Architecture"],
      highlights: [
        "Engineered a high-performance Python backend parsing coordinate polygon data from NYC borough GeoJSON files.",
        "Improved organic traffic and local SEO indexation for sales rep routing maps."
      ]
    }
  ],

  experience: [
    {
      role: "Associate Software Developer",
      company: "Everstream Analytics",
      period: "Apr 2022 – Nov 2022",
      stack: ["Backbone.js", "Django", "React.js", "Auth0", "Mixpanel", "KANBAN"],
      bullets: [
        "Worked directly with enterprise manufacturing clients to manage end-to-end data import processes from ingestion to validation.",
        "Configured custom ETL data pipelines integrated with existing customer supply chain infrastructure.",
        "Contributed full-stack solutions for global risk monitoring platforms within a fast-paced KANBAN workflow."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Salesforce (Marketing Cloud / Social Studio)",
      location: "New York, NY",
      period: "May 2018 – Aug 2018",
      stack: ["Backbone.js", "PHP", "CSS", "jQuery", "Facebook API"],
      demo: "https://tinyurl.com/salesforce-summer-2018",
      bullets: [
        "Engineered the Active Targeting Language Widget utilizing Facebook API language datasets into a configurable targeting UI.",
        "Patched a cross-site scripting (XSS) vulnerability in third-party integrations by escaping injected scripts at boundary layers.",
        "Resolved complex cascading UI bug clusters including broken-avatar fallback logic and approval-rule label capitalizations."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Salesforce",
      location: "San Francisco, CA",
      period: "May 2017 – Aug 2017",
      stack: ["Salesforce Aura", "Java Apex", "SQL", "JavaScript", "XML"],
      demo: "https://tinyurl.com/salesforce-summer-2017",
      bullets: [
        "Shipped an Aura component rendering Contact Engagement History as an interactive Eclair donut chart on the Account Flexipage sidebar.",
        "Built Java Apex controller (engagementHistoryController.java) querying custom Engagement_History__c objects connected to JS helpers.",
        "Modeled custom Salesforce lookup relationships (Forms, Emails, Landing Pages) with hover tooltips and interactive settings filters."
      ]
    },
    {
      role: "Coding Instructor",
      company: "Nucamp & MIT xPRO",
      location: "Remote",
      period: "Apr 2020 – Present",
      stack: ["MERN Stack", "React", "Node.js", "Python", "Data Structures"],
      bullets: [
        "Co-teaching 10-month MERN stack bootcamps at MIT xPRO to cohorts of ~30 professional students.",
        "Instructing foundational JS, HTML/CSS, Python algorithms, and web security principles."
      ]
    },
    {
      role: "Software Engineer & Customer Success Intern",
      company: "Badger Maps",
      location: "San Francisco, CA",
      period: "Aug 2016 – Nov 2016",
      stack: ["Python", "GeoJSON", "REST APIs"],
      bullets: [
        "Engineered Python backend parsers for spatial borough coordinates.",
        "Handled technical customer troubleshooting and onboarding pipelines for territorial mapping software."
      ]
    },
    {
      role: "Freelance Full Stack Engineer",
      company: "Self-Employed",
      period: "Nov 2018 – Present",
      stack: ["PERN Stack", "React", "PostgreSQL", "Express", "AWS S3"],
      bullets: [
        "Delivered end-to-end full stack web applications including server routing, database architecture, network security, and UI/UX."
      ]
    }
  ],

  skills: {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PHP", "HTML5", "CSS3"],
    "Frontend": ["React", "React Native", "Next.js", "Backbone.js", "jQuery", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Django", "Prisma", "Flask", "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB", "Oracle", "MySQL"],
    "AI / ML": ["DeepSeek API", "Prompt Engineering", "AI Agent Orchestration", "LLM Pipelines", "Constraint-Satisfaction"],
    "Tools & Platforms": ["Git", "Vercel", "Auth0", "Mixpanel", "Docker", "Salesforce Aura", "AWS S3"]
  },

  education: {
    school: "University of California, Berkeley",
    degree: "B.A. Cognitive Science | Computer Science Minor",
    graduation: "Expected May 2026",
    coursework: [
      "CS188 Artificial Intelligence",
      "COGSCI C132 Computational Models of Cognition",
      "CS61A Structure & Interpretation of Computer Programs (Python/OOP)",
      "CS61B Data Structures & Algorithms (Java)"
    ]
  },

  leadership: [
    {
      role: "Peer Academic Counselor (EOP)",
      org: "UC Berkeley",
      period: "May 2016 – May 2017",
      desc: "Facilitated workshops on metacognitive learning strategies, time management, and exam preparation for first-generation, low-income, and underrepresented students."
    },
    {
      role: "Academic Mentor (R.I.S.E)",
      org: "Berkeley High School",
      period: "Sep 2015 – May 2016",
      desc: "Mentored low-income, IEP, and minority high school students in STEM subjects and personal growth."
    },
    {
      role: "Business Dev Team Member",
      org: "Formula Electric Berkeley",
      period: "Jan 2025 – Present",
      desc: "Managed outreach and corporate partnerships to secure funding for electric vehicle engineering."
    }
  ]
};

const PLANETS = [
  { id: 'overview', title: 'OVERVIEW', icon: Sparkles, tag: '01 // BIO' },
  { id: 'projects', title: 'PROJECTS', icon: Code, tag: '02 // WORK' },
  { id: 'experience', title: 'EXPERIENCE', icon: Briefcase, tag: '03 // CAREER' },
  { id: 'skills', title: 'SKILLS', icon: Terminal, tag: '04 // TECH' },
  { id: 'education', title: 'EDUCATION', icon: GraduationCap, tag: '05 // ACADEMICS' },
  { id: 'contact', title: 'CONTACT', icon: Mail, tag: '06 // REACH OUT' }
];

export default function App() {
  const [rotation, setRotation] = useState(0); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Elliptical Orbit Radii State
  const [radiusX, setRadiusX] = useState(480);
  const [radiusY, setRadiusY] = useState(260);

  const [showInstructions, setShowInstructions] = useState(true);
  
  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const wheelLockRef = useRef(false);

  // Audio effect synthesizer using Web Audio API
  const playChime = (freq = 440) => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  };

  // Adjust Elliptical Orbit Responsively
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadiusX(200);
        setRadiusY(230);
      } else if (w < 1024) {
        setRadiusX(360);
        setRadiusY(250);
      } else {
        setRadiusX(480);
        setRadiusY(270);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate active index when rotation changes
  useEffect(() => {
    const numPlanets = PLANETS.length;
    const step = 360 / numPlanets;
    const normalized = ((rotation % 360) + 360) % 360;
    let closestIdx = 0;
    let minDiff = 999;
    
    for (let i = 0; i < numPlanets; i++) {
      const planetAngle = (i * step + normalized) % 360;
      let diff = Math.abs(planetAngle - 90);
      if (diff > 180) diff = 360 - diff;
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    
    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
      playChime(300 + closestIdx * 80);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [rotation]);

  // Rotate to specific planet index
  const rotateTo = (index) => {
    const step = 360 / PLANETS.length;
    const targetAngleForIndex = 90 - (index * step);
    
    const currentNorm = ((rotation % 360) + 360) % 360;
    let delta = (targetAngleForIndex - currentNorm) % 360;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    
    setRotation(rotation + delta);
  };

  /// Scroll threshold configuration
const SCROLL_THRESHOLD = 35; // Minimum deltaY value needed to trigger rotation (filters minor nudges)
const SCROLL_COOLDOWN = 750;  // Milliseconds to lock rotation (absorbs trackpad inertia/momentum)

const handleWheel = (e) => {
  const scrollEl = scrollContainerRef.current;
  
  // Check if scroll event originated inside the active menu content card
  if (scrollEl && scrollEl.contains(e.target)) {
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const atTop = scrollEl.scrollTop <= 0 && e.deltaY < 0;
    const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 2 && e.deltaY > 0;

    // Allow natural internal card scrolling unless at exact top or bottom boundaries
    if (isScrollable && !atTop && !atBottom) {
      return; 
    }
  }

  // 1. Ignore subtle, accidental, or micro-scrolls
  if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) {
    return;
  }

  // 2. Prevent multi-page jumps from continuous trackpad momentum
  if (wheelLockRef.current) return;
  wheelLockRef.current = true;

  // 3. Trigger rotation
  if (e.deltaY > 0) {
    const nextIdx = (activeIndex + 1) % PLANETS.length;
    rotateTo(nextIdx);
  } else if (e.deltaY < 0) {
    const prevIdx = (activeIndex - 1 + PLANETS.length) % PLANETS.length;
    rotateTo(prevIdx);
  }

  // Unlock after cooldown period
  setTimeout(() => {
    wheelLockRef.current = false;
  }, SCROLL_COOLDOWN);
};

  // Drag Handlers for Orbital Rotation
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    const diff = currentX - dragStart;
    setRotation(prev => prev + diff * 0.4);
    setDragStart(currentX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    window.location.href = `mailto:${DATA.profile.email}?subject=Contact from Portfolio - ${encodeURIComponent(contactName)}&body=${encodeURIComponent(contactMessage)}`;
  };

  // Canvas Starfield Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.01 + 0.002
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
        ctx.fillStyle = `rgba(255, 220, 150, ${Math.abs(star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      onWheel={handleWheel}
      className="w-screen h-screen overflow-hidden bg-[#0d0a07] text-[#e8e0d5] font-sans selection:bg-[#d4af37] selection:text-black fixed inset-0 relative"
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80 w-full h-full" />

      {/* SLEEK MINIMALIST HEADER BADGE (Top Left) */}
      <header className="absolute top-5 left-5 z-30 flex items-center space-x-2.5 pointer-events-auto bg-[#120d08]/70 backdrop-blur-md border border-[#3a2e1e]/60 px-3.5 py-1.5 rounded-full shadow-lg">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#b8860b] to-[#ffd700] p-[1px] flex items-center justify-center shrink-0">
          <div className="w-full h-full bg-[#120d08] rounded-full flex items-center justify-center font-bold text-[10px] text-[#ffd700]">
            JL
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold tracking-wider text-xs text-[#f5e6c8]">{DATA.profile.name.toUpperCase()}</span>
          <span className="text-[#5c4a35] text-xs font-mono">•</span>
          <span className="text-[10px] text-[#a08d75] tracking-wide font-mono hidden sm:inline">{DATA.profile.subtitle}</span>
          <span className="text-[10px] text-[#a08d75] tracking-wide font-mono sm:hidden">UC BERKELEY '26</span>
        </div>
      </header>

      {/* OVERLAY CONTROLS (Top Right) */}
      <div className="absolute top-5 right-5 z-30 flex items-center space-x-2.5 pointer-events-auto">
        <button 
          onClick={() => setShowInstructions(true)}
          className="p-2 rounded-full bg-[#120d08]/80 border border-[#4a3b2c] hover:border-[#d4af37] text-[#c5b398] hover:text-[#ffd700] transition-colors shadow-lg backdrop-blur-md"
          title="How to Navigate"
        >
          <Info size={15} />
        </button>
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-full bg-[#120d08]/80 border border-[#4a3b2c] hover:border-[#d4af37] text-[#c5b398] hover:text-[#ffd700] transition-colors shadow-lg backdrop-blur-md"
          title="Toggle Audio Effects"
        >
          {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>
        <a href={DATA.profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#120d08]/80 border border-[#4a3b2c] hover:border-[#d4af37] text-[#a08d75] hover:text-[#ffd700] transition-colors shadow-lg backdrop-blur-md" aria-label="GitHub">
          <GithubIcon size={15} />
        </a>
        <a href={DATA.profile.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#120d08]/80 border border-[#4a3b2c] hover:border-[#d4af37] text-[#a08d75] hover:text-[#ffd700] transition-colors shadow-lg backdrop-blur-md" aria-label="LinkedIn">
          <LinkedinIcon size={15} />
        </a>
      </div>

      {/* MAIN FULLSCREEN INTERACTIVE ORBIT & MENU CONTAINER */}
      <main className="w-full h-full flex items-center justify-center relative z-10">
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        >
          {/* Orbital Elliptical Track */}
          <div 
            style={{
              width: `${radiusX * 2}px`,
              height: `${radiusY * 2}px`
            }}
            className="absolute rounded-[50%] border border-[#6b5536]/35 shadow-[0_0_50px_rgba(180,130,40,0.1)] pointer-events-none transition-all duration-300" 
          />

          {/* Orbiting Planets */}
          {PLANETS.map((planet, index) => {
            const numPlanets = PLANETS.length;
            const step = 360 / numPlanets;
            const angleDeg = (index * step + rotation) % 360;
            const angleRad = (angleDeg * Math.PI) / 180;
            
            const x = Math.cos(angleRad) * radiusX;
            const y = Math.sin(angleRad) * radiusY;

            const distFromBottom = Math.abs(((angleDeg - 90 + 540) % 360) - 180);
            const scale = 0.55 + 0.45 * (1 - distFromBottom / 180);
            const sizePx = Math.round(60 * scale + 30);
            const isSelected = index === activeIndex;

            return (
              <button
                key={planet.id}
                onClick={(e) => {
                  e.stopPropagation();
                  rotateTo(index);
                }}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  width: `${sizePx}px`,
                  height: `${sizePx}px`,
                  zIndex: isSelected ? 40 : Math.round(scale * 30)
                }}
                className={`absolute rounded-full transition-all duration-300 flex flex-col items-center justify-center text-center p-2 group shadow-2xl focus:outline-none ${
                  isSelected 
                    ? 'ring-4 ring-[#ffd700] ring-offset-4 ring-offset-[#0d0a07] scale-110' 
                    : 'hover:scale-110 opacity-80 hover:opacity-100'
                }`}
              >
                {/* 3D Volumetric Planet Sphere */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br transition-opacity ${
                  isSelected
                    ? 'from-[#fff0a8] via-[#d4af37] to-[#5e4110] shadow-[0_0_35px_rgba(255,215,0,0.6)]'
                    : 'from-[#d4af37] via-[#8c6b23] to-[#2e1d08]'
                }`} />

                {/* Icon & Label */}
                <div className="relative z-10 flex flex-col items-center justify-center text-black">
                  <planet.icon size={isSelected ? 20 : 15} className="text-[#2b1d07] drop-shadow" />
                  {isSelected && (
                    <span className="text-[9px] font-black tracking-wider uppercase mt-0.5 text-[#1a1103]">
                      {planet.title}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* CENTER MENU CONTENT CARD */}
          <div className="relative z-20 w-[300px] sm:w-[380px] md:w-[450px] h-[430px] sm:h-[480px] bg-[#140f0a]/95 border border-[#4a3723] rounded-2xl p-5 sm:p-6 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col cursor-default">
            
            {/* Menu Header */}
            <div className="flex items-center justify-between border-b border-[#3a2e1e] pb-3 mb-3">
              <div>
                <span className="text-[10px] font-mono text-[#d4af37] tracking-widest">{PLANETS[activeIndex].tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f5e6c8] tracking-wider mt-0.5">
                  {PLANETS[activeIndex].title}
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#ffd700] text-[10px] font-mono">
                {activeIndex + 1} / 6
              </div>
            </div>

            {/* Menu Content Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex-grow overflow-y-auto pr-1 space-y-4 custom-scrollbar"
            >
              
              {/* --- 01. OVERVIEW --- */}
              {activeIndex === 0 && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#d8c8b0] leading-relaxed">
                    Fullstack Software Engineer and Cognitive Science student at <span className="text-[#ffd700] font-semibold">UC Berkeley ('26)</span>. Specialized in building high-performance AI agent architectures, full-stack web platforms, and constraint-satisfaction systems.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-[#1d160f] border border-[#3a2b1a]">
                      <div className="text-lg sm:text-xl font-bold text-[#ffd700]">3+ Yrs</div>
                      <div className="text-[10px] text-[#a08d75] uppercase tracking-wider mt-0.5">Fullstack Exp</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#1d160f] border border-[#3a2b1a]">
                      <div className="text-lg sm:text-xl font-bold text-[#ffd700]">Salesforce</div>
                      <div className="text-[10px] text-[#a08d75] uppercase tracking-wider mt-0.5">SWE Alum ('17 & '18)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1a1209] border border-[#4a351a]/60 space-y-1.5">
                    <div className="flex items-center space-x-2 text-[11px] font-bold text-[#ffd700] uppercase tracking-wider">
                      <Sparkles size={14} />
                      <span>Current Focus</span>
                    </div>
                    <p className="text-[11px] text-[#c5b59e] leading-relaxed">
                      Building agentic AI engines, constraint solvers, and scalable microservices with Python, React, Next.js, and DeepSeek API pipelines.
                    </p>
                  </div>
                </div>
              )}

              {/* --- 02. PROJECTS --- */}
              {activeIndex === 1 && (
                <div className="space-y-3">
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-2.5 text-[#8a755d]" size={14} />
                    <input 
                      type="text" 
                      placeholder="Search projects or tech stack..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#1c140c] border border-[#3d2e1c] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#f5e6c8] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  {DATA.projects
                    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())))
                    .map(proj => (
                      <div key={proj.id} className="p-3.5 rounded-xl bg-[#1a130b] border border-[#3a2b19] hover:border-[#d4af37]/50 transition-all space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-[#f5e6c8]">{proj.title}</h4>
                            <p className="text-[10px] text-[#b09e85]">{proj.tagline}</p>
                          </div>
                          {proj.link && (
                            <a href={proj.link} target="_blank" rel="noreferrer" className="text-[#ffd700] hover:underline flex items-center text-[10px]">
                              Live <ExternalLink size={10} className="ml-0.5" />
                            </a>
                          )}
                        </div>

                        <ul className="space-y-1 text-[11px] text-[#c2b29c] list-disc list-inside">
                          {proj.highlights.map((h, i) => (
                            <li key={i} className="leading-relaxed">{h}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.tech.map(t => (
                            <span key={t} className="px-1.5 py-0.5 rounded bg-[#2e2112] text-[#d4af37] text-[9px] font-mono border border-[#4a361e]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* --- 03. EXPERIENCE --- */}
              {activeIndex === 2 && (
                <div className="space-y-4">
                  {DATA.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-[#3a2e1e] space-y-1">
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#d4af37]" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h4 className="font-bold text-xs text-[#f5e6c8]">{exp.role}</h4>
                        <span className="text-[10px] font-mono text-[#a08d75]">{exp.period}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-[#ffd700]">
                        {exp.company} {exp.location && `• ${exp.location}`}
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#c5b59e] list-disc list-inside">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* --- 04. SKILLS --- */}
              {activeIndex === 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(DATA.skills).map(([category, items]) => (
                    <div key={category} className="p-3 rounded-xl bg-[#18110a] border border-[#3a2a18] space-y-1.5">
                      <h4 className="text-[10px] font-bold text-[#ffd700] uppercase tracking-wider">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {items.map(skill => (
                          <span key={skill} className="px-1.5 py-0.5 rounded bg-[#2a1d0f] text-[#e0d0b8] text-[10px] border border-[#42311c]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* --- 05. EDUCATION --- */}
              {activeIndex === 4 && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#1a1209] border border-[#3d2e1c] space-y-2">
                    <div className="flex items-center space-x-3">
                      <GraduationCap size={22} className="text-[#ffd700]" />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#f5e6c8]">{DATA.education.school}</h4>
                        <p className="text-[11px] text-[#ffd700]">{DATA.education.degree}</p>
                        <p className="text-[10px] text-[#a08d75]">{DATA.education.graduation}</p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <div className="text-[10px] font-bold text-[#c5b59e] mb-1 uppercase tracking-wider">Key Coursework</div>
                      <div className="grid grid-cols-1 gap-1 text-[11px] text-[#d8c8b0]">
                        {DATA.education.coursework.map((course, i) => (
                          <div key={i} className="flex items-center space-x-1.5">
                            <CheckCircle2 size={11} className="text-[#d4af37]" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#18110a] border border-[#3a2a18]">
                    <h4 className="text-[10px] font-bold text-[#ffd700] uppercase tracking-wider mb-2">Leadership</h4>
                    <div className="space-y-2">
                      {DATA.leadership.map((item, i) => (
                        <div key={i} className="text-[11px] border-b border-[#2d2112] pb-1.5 last:border-b-0 last:pb-0">
                          <div className="flex justify-between font-bold text-[#f5e6c8]">
                            <span>{item.role}</span>
                            <span className="text-[#a08d75] font-mono text-[9px]">{item.period}</span>
                          </div>
                          <p className="text-[#c5b59e] text-[10px] mt-0.5">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* --- 06. CONTACT --- */}
              {activeIndex === 5 && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#1a1209] border border-[#3d2e1c] space-y-2">
                    <h4 className="font-bold text-xs sm:text-sm text-[#f5e6c8]">Get in Touch</h4>
                    <p className="text-[11px] text-[#c5b59e]">
                      Open for full-time SWE roles starting May 2026. Feel free to send a message below!
                    </p>

                    <a 
                      href={`mailto:${DATA.profile.email}`}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-[#24180d] border border-[#4a351a] text-[11px] text-[#f5e6c8]"
                    >
                      <Mail size={14} className="text-[#ffd700]" />
                      <span className="truncate">{DATA.profile.email}</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#18110a] border border-[#3a2a18]">
                    <h4 className="text-[10px] font-bold text-[#ffd700] uppercase tracking-wider mb-2">Quick Message</h4>
                    {contactFormSubmitted ? (
                      <div className="p-3 rounded-lg bg-[#221c10] border border-[#d4af37]/40 text-center space-y-1">
                        <CheckCircle2 size={18} className="text-[#ffd700] mx-auto" />
                        <p className="text-xs text-[#f5e6c8] font-bold">Email draft generated!</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-2">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-[#1c140c] border border-[#3d2e1c] rounded-lg px-2.5 py-1.5 text-xs text-[#f5e6c8] focus:outline-none focus:border-[#d4af37]"
                        />
                        <textarea 
                          rows={2} 
                          placeholder="Your Message..." 
                          required
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full bg-[#1c140c] border border-[#3d2e1c] rounded-lg px-2.5 py-1.5 text-xs text-[#f5e6c8] focus:outline-none focus:border-[#d4af37] resize-none"
                        />
                        <button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black font-bold text-xs py-1.5 rounded-lg flex items-center justify-center space-x-1 hover:opacity-90 transition-opacity"
                        >
                          <Send size={12} />
                          <span>SEND EMAIL</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      {/* FLOATING NAVIGATION HINT BADGE */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-[#140f0a]/80 border border-[#4a3723]/60 backdrop-blur-md text-[10px] text-[#a08d75] tracking-widest uppercase flex items-center space-x-2 shadow-lg">
          <MousePointer size={12} className="text-[#ffd700]" />
          <span>Scroll outside card to rotate • Scroll inside to view content</span>
        </div>
      </div>

      {/* INSTRUCTION POPUP MODAL ON LOAD */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-[#16100b] border border-[#ffd700]/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center space-y-5">
            <button 
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 text-[#a08d75] hover:text-[#ffd700] transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 flex items-center justify-center mx-auto text-[#ffd700]">
              <Compass size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#f5e6c8]">How to Navigate</h3>
              <p className="text-xs text-[#a08d75] mt-1">The James Laskey-verse</p>
            </div>

            <div className="space-y-3 text-left text-xs text-[#d8c8b0] bg-[#1a130c] p-4 rounded-xl border border-[#3a2b1a]">
              <div className="flex items-start space-x-3">
                <Compass className="text-[#ffd700] shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-[#ffd700]">Scroll Outside Card or Drag Orbit:</strong>
                  <p className="text-[#a08d75]">Rotates planets and changes active portfolio section.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MousePointer className="text-[#ffd700] shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-[#ffd700]">Scroll Inside Menu Card:</strong>
                  <p className="text-[#a08d75]">Scrolls through details, work highlights, and skills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="text-[#ffd700] shrink-0 mt-0.5" size={16} />
                <div>
                  <strong className="text-[#ffd700]">Click Any Planet:</strong>
                  <p className="text-[#a08d75]">Instantly jump to that section on demand.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowInstructions(false)}
              className="w-full bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-black font-bold text-xs py-2.5 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider"
            >
              Start Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  );
}