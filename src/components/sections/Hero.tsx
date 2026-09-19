import React, { useState, useEffect } from'react';
import { motion, AnimatePresence } from'motion/react';
import { 
 MapPin, 
 GraduationCap, 
 Sparkles, 
 Terminal, 
 ArrowRight, 
 Github, 
 Linkedin, 
 Mail, 
 Code2, 
 Cpu, 
 Layers, 
 CheckCircle2, 
 Download, 
 FolderGit2, 
 BrainCircuit,
 Compass,
 Brain,
 Database
} from'lucide-react';
import { studentData, projectsData, certificatesData } from'../../data/data.ts';

interface HeroProps {
 onOpenTerminal: () => void;
 onOpenResume: () => void;
}

interface FloatingRole {
 role: string;
 technologies: string[];
 icons: Array<{
 type:'brain' |'react' |'code' |'platform' |'database' |'cpu';
 title: string;
 }>;
}

const ROTATING_STACK_ROLES: FloatingRole[] = [
 {
 role:'Full-Stack Developer',
 technologies: ['React 18','Node.js','PostgreSQL','TypeScript','Tailwind CSS'],
 icons: [
 { type:'brain', title:'Problem Solving & Algorithms' },
 { type:'react', title:'React Ecosystem' },
 { type:'code', title:'Full-Stack Engineering' }
 ]
 },
 {
 role:'Frontend Architect',
 technologies: ['Next.js','React','JavaScript','Tailwind CSS','Framer Motion'],
 icons: [
 { type:'react', title:'React Ecosystem' },
 { type:'code', title:'Tailwind CSS' },
 { type:'cpu', title:'Optimized Web Performance' }
 ]
 },
 {
 role:'AI & ML',
 technologies: ['Python','AI','ML','DL'],
 icons: [
 { type:'platform', title:'Kaggle & Google Colab' },
 { type:'database', title:'UCI ML Repo' },
 { type:'code', title:'Python' }
 ]
 },
 {
 role:'Problem Solver',
 technologies: ['C','C++','Python','Data Structures & Algorithms','Leetcode'],
 icons: [
 { type:'brain', title:'Data Structures & Algorithms' },
 { type:'cpu', title:'C++' },
 { type:'code', title:'Python' }
 ]
 }
];

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
 const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

 // Smooth automatic rotation every 3.5 seconds
 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentRoleIndex((prev) => (prev + 1) % ROTATING_STACK_ROLES.length);
 }, 3500);
 return () => clearInterval(timer);
 }, []);

 const currentRole = ROTATING_STACK_ROLES[currentRoleIndex];

 const renderIconBadge = (type: string) => {
 switch (type) {
 case'brain':
 return <Brain className="w-4 h-4 text-[#121212]" />;
 case'react':
 return (
 <svg className="w-4 h-4 text-[#087ea4]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
 <circle cx="0" cy="0" r="2.05" fill="#087ea4" />
 <g stroke="#087ea4" strokeWidth="1" fill="none">
 <ellipse rx="11" ry="4.2" />
 <ellipse rx="11" ry="4.2" transform="rotate(60)" />
 <ellipse rx="11" ry="4.2" transform="rotate(120)" />
 </g>
 </svg>
 );
 case'server':
 return <Layers className="w-4 h-4 text-emerald-600" />;
 case'database':
 return <Database className="w-4 h-4 text-amber-600" />;
 case'cpu':
 return <Cpu className="w-4 h-4 text-indigo-600" />;
 case'code':
 default:
 return <Code2 className="w-4 h-4 text-blue-600" />;
 }
 };

 return (
 <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#121212] bg-[#F8F9FA]">
 {/* Background Architectural Grid Pattern */}
 <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 space-y-10">
 
 {/* Geometric Balance Top Header Block */}
 <div className="border border-[#121212] bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12">
 
 {/* Main Title & Subtitle (8 cols) */}
 <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between space-y-6">
 <div className="space-y-3">
 <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest font-bold">
 <span>Active Status</span>
 <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
 <span>Open for SDE Internships</span>
 </div>
 
 <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-[#121212] leading-none">
 {studentData.name}
 </h1>

 <p className="text-sm sm:text-base font-mono tracking-wider text-zinc-600 uppercase">
 {studentData.role}
 </p>
 </div>

 {/* Dynamic Floating Tech Stack Card (Smooth Motion Animated Auto-Rotation) */}
 <div className="space-y-2.5 pt-1">
 <div className="flex flex-wrap items-center gap-3">
 {/* Main Dark Floating Pill */}
 <motion.div 
 layout
 className="inline-flex items-center gap-3.5 sm:gap-4 bg-[#222222] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-zinc-700 shadow-md select-none overflow-hidden"
 >
 {/* Overlapping White Circular Badges with Dark Outline */}
 <div className="flex items-center -space-x-2 pl-0.5 shrink-0">
 <AnimatePresence mode="popLayout" initial={false}>
 {currentRole.icons.map((item, idx) => (
 <motion.div
 key={`${currentRole.role}-${item.type}-${idx}`}
 initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
 animate={{ scale: 1, opacity: 1, rotate: 0 }}
 exit={{ scale: 0.6, opacity: 0, rotate: 15 }}
 transition={{ 
 duration: 0.45, 
 ease: [0.16, 1, 0.3, 1],
 delay: idx * 0.05 
 }}
 className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#222222] flex items-center justify-center shadow-xs"
 style={{ zIndex: 10 + idx }}
 title={item.title}
 >
 {renderIconBadge(item.type)}
 </motion.div>
 ))}
 </AnimatePresence>
 </div>

 {/* Role Title with Smooth Slide & Blur Fade */}
 <div className="pr-2 min-w-[210px] sm:min-w-[245px] relative h-6 sm:h-7 flex items-center">
 <AnimatePresence mode="wait" initial={false}>
 <motion.span 
 key={currentRole.role}
 initial={{ opacity: 0, y: 8, filter:'blur(3px)' }}
 animate={{ opacity: 1, y: 0, filter:'blur(0px)' }}
 exit={{ opacity: 0, y: -8, filter:'blur(3px)' }}
 transition={{ 
 duration: 0.4, 
 ease: [0.16, 1, 0.3, 1] 
 }}
 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-zinc-100 whitespace-nowrap absolute left-0"
 >
 {currentRole.role}
 </motion.span>
 </AnimatePresence>
 </div>
 </motion.div>
 </div>

 {/* Dynamic Tech Stack Badges corresponding to auto-rotating role */}
 <div className="flex flex-wrap items-center gap-1.5 text-sm font-mono min-h-[28px]">
 <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-wider">Stack:</span>
 <AnimatePresence mode="popLayout" initial={false}>
 {currentRole.technologies.map((tech, i) => (
 <motion.span
 key={`${currentRole.role}-${tech}`}
 layout
 initial={{ opacity: 0, scale: 0.85, y: 4 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.85, y: -4 }}
 transition={{ 
 duration: 0.35, 
 ease: [0.16, 1, 0.3, 1],
 delay: i * 0.03
 }}
 className="px-2 py-0.5 bg-white border border-zinc-300 text-zinc-800 text-[11px] font-medium shadow-2xs hover:border-black transition-colors"
 >
 {tech}
 </motion.span>
 ))}
 </AnimatePresence>
 </div>
 </div>

 {/* Quick Links / Channels */}
 <div className="flex flex-wrap items-center gap-4 text-sm font-mono uppercase tracking-wider text-zinc-700 pt-2 border-t border-zinc-200">
 <span className="font-bold text-black">Channels:</span>
 <a
 href={studentData.contact.github}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-1 hover:text-black hover:underline"
 >
 <Github className="w-3.5 h-3.5" />
 <span>GitHub</span>
 </a>
 <span>&bull;</span>
 <a
 href={studentData.contact.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-1 hover:text-black hover:underline"
 >
 <Linkedin className="w-3.5 h-3.5" />
 <span>LinkedIn</span>
 </a>
 <span>&bull;</span>
 <a
 href={`mailto:${studentData.contact.email}`}
 className="flex items-center gap-1 hover:text-black hover:underline"
 >
 <Mail className="w-3.5 h-3.5" />
 <span>Email</span>
 </a>
 </div>
 </div>

 {/* Right Top Box: Academic Standing & Location (4 cols) */}
 <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#121212] p-6 sm:p-8 flex flex-col justify-between bg-zinc-50">
 <div>
 <span className="block text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-500 mb-2">
 Academic Standing
 </span>
 <p className="text-2xl sm:text-3xl font-serif italic text-[#121212] leading-tight">
 {studentData.year}, {studentData.college}
 </p>
 <div className="mt-4">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
 <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
 CSE &bull; Specialization in AI
 </span>
 </div>
 </div>

 <div className="pt-6 border-t border-zinc-300 flex items-center justify-between">
 <div>
 <span className="block text-[10px] uppercase font-mono text-zinc-500">Location Base</span>
 <p className="text-sm font-mono font-bold uppercase text-[#121212]">{studentData.location}</p>
 </div>
 <div className="text-right">
 <span className="block text-[10px] uppercase font-mono text-zinc-500">Timezone</span>
 <p className="text-sm font-mono font-bold text-zinc-800">IST (UTC+5:30)</p>
 </div>
 </div>
 </div>

 </div>

 {/* Hero Grid: Narrative (7 cols) + Status Matrix (5 cols) */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 
 {/* Left Column: Narrative, Career Vision & CTAs */}
 <div className="lg:col-span-7 space-y-6">
 
 <div className="p-6 sm:p-8 bg-white border border-[#121212] shadow-sm space-y-4">
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>01 / Profile Overview</span>
 <span className="font-mono text-zinc-400 font-normal">SEC_01</span>
 </h2>

 <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
 {studentData.shortBio || studentData.bio}
 </p>

 {/* Career Goal Callout */}
 <div className="p-4 bg-zinc-100 border border-zinc-300 space-y-1">
 <div className="flex items-center gap-1.5 text-sm font-mono font-bold uppercase tracking-wider text-black">
 <Compass className="w-3.5 h-3.5" />
 <span>Engineering Objective</span>
 </div>
 <p className="text-sm sm:text-base text-zinc-700 leading-snug">
 {studentData.careerGoal}
 </p>
 </div>

 {/* CTA Action Bar */}
 <div className="pt-3 flex flex-wrap items-center gap-3">
 <a
 href="#projects"
 id="hero-view-projects-btn"
 className="flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-blue-600 hover:border-blue-600 text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors border border-black shadow-sm"
 >
 <FolderGit2 className="w-4 h-4" />
 <span>Featured Projects</span>
 <ArrowRight className="w-4 h-4" />
 </a>

 <button
 id="hero-terminal-btn"
 onClick={onOpenTerminal}
 className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 text-black font-mono text-sm font-bold uppercase tracking-wider transition-colors border border-black"
 >
 <Terminal className="w-4 h-4" />
 <span>CLI Terminal</span>
 </button>

 <button
 id="hero-resume-btn"
 onClick={onOpenResume}
 className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-zinc-900 font-mono text-sm font-bold uppercase tracking-wider transition-colors border border-zinc-400"
 >
 <Download className="w-4 h-4" />
 <span>CV / Resume</span>
 </button>
 </div>
 </div>

 {/* Quick Metrics Bento Row */}
 <div className="grid grid-cols-3 gap-3">
 <div className="p-4 bg-white border border-[#121212] text-center space-y-1">
 <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
 0{projectsData.length}
 </div>
 <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">Featured Apps</div>
 </div>
 <div className="p-4 bg-white border border-[#121212] text-center space-y-1">
 <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
 15+
 </div>
 <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">Core Skills</div>
 </div>
 <div className="p-4 bg-white border border-[#121212] text-center space-y-1">
 <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
 0{certificatesData.length}
 </div>
 <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">Certificates</div>
 </div>
 </div>

 </div>

 {/* Right Column: Active Learning Radar & Technical Capabilities (5 cols) */}
 <div className="lg:col-span-5 space-y-4">
 
 {/* Active Learning Radar */}
 <div className="p-6 bg-white border border-[#121212] space-y-4">
 <div className="flex items-center justify-between border-b border-black pb-2">
 <div className="flex items-center gap-2">
 <BrainCircuit className="w-4 h-4 text-black" />
 <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">
 Active Learning Radar
 </h3>
 </div>
 <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-black text-white">
 2025–26
 </span>
 </div>

 <p className="text-sm text-zinc-600 font-mono">
 Continuous upskilling focused on modern frameworks, system design, and production-grade engineering.
 </p>

 <div className="flex flex-wrap gap-1.5">
 {studentData.currentlyLearning.map((item) => (
 <span
 key={item}
 className="px-2.5 py-1 text-sm font-mono font-bold uppercase bg-zinc-100 text-black border border-zinc-400"
 >
 {item}
 </span>
 ))}
 </div>

 {/* Technical Interests Chips */}
 <div className="pt-3 border-t border-zinc-200">
 <span className="block text-[10px] font-mono uppercase text-zinc-500 mb-2 font-bold">
 Core Engineering Domains:
 </span>
 <div className="flex flex-wrap gap-1.5">
 {studentData.interests.map((interest) => (
 <span
 key={interest}
 className="px-2 py-0.5 text-[10px] font-mono uppercase bg-black text-white"
 >
 {interest}
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* Quick Developer Specs Card */}
 <div className="p-5 bg-zinc-100 border border-[#121212] space-y-3">
 <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
 <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-black flex items-center gap-1.5">
 <Code2 className="w-3.5 h-3.5" />
 <span>Developer Specification</span>
 </span>
 <span className="text-[10px] font-mono text-zinc-600 font-bold uppercase">Ready</span>
 </div>
 <div className="space-y-1.5 text-sm font-mono text-zinc-800">
 <div className="flex justify-between py-0.5 border-b border-zinc-200">
 <span className="text-zinc-500">Core Stack:</span>
 <span className="font-bold text-black">React &bull; Node.js &bull; C++</span>
 </div>
 <div className="flex justify-between py-0.5 border-b border-zinc-200">
 <span className="text-zinc-500">Focus:</span>
 <span className="font-bold text-black">Algorithms & Full-Stack</span>
 </div>
 <div className="flex justify-between py-0.5">
 <span className="text-zinc-500">Availability:</span>
 <span className="font-bold text-emerald-800">Summer / Immediate SDE</span>
 </div>
 </div>
 </div>

 </div>

 </div>

 </div>
 
 </section>
 );
};
