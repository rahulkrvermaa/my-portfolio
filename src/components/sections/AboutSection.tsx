import React, { useState } from"react";
import {
 User,
 MapPin,
 GraduationCap,
 Target,
 Sparkles,
 Code2,
 Compass,
 Milestone,
 CheckCircle2,
 Calendar,
 Layers,
 Maximize2,
 X,
} from"lucide-react";
import { studentData } from"../../data/data.ts";

export const AboutSection: React.FC = () => {
 const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
 const [activeStatus, setActiveStatus] = useState<
"dsa" |"building" |"debugging" |"ai"
 >("building");

 const statusMessages = {
 dsa: {
 label:"Solving DSA Problems (LeetCode / GFG)",
 color:"bg-emerald-50 text-emerald-800 border-emerald-300",
 },
 building: {
 label:"Building Full-Stack React & Node Apps",
 color:"bg-blue-50 text-blue-800 border-blue-300",
 },
 debugging: {
 label:"Refactoring & Optimizing Code",
 color:"bg-amber-50 text-amber-800 border-amber-300",
 },
 ai: {
 label:"Exploring AI & Machine Learning",
 color:"bg-purple-50 text-purple-800 border-purple-300",
 },
 };

 const milestones = [
 {
 year:"2023",
 title:"Started B.Tech in CSE",
 description:
"Enrolled in college, learning core programming, data structures, and object-oriented concepts.",
 },
 {
 year:"2024",
 title:"Web Development Basics",
 description:
"Learned HTML, CSS, JavaScript, and built foundational frontend projects.",
 },
 {
 year:"2025",
 title:"DSA & Full-Stack Projects",
 description:
"Practiced data structures and built full-stack applications like CampusConnect and Obys Agency.",
 },
 {
 year:"2025–26",
 title:"Backend & Cloud Exploring",
 description:
"Learning Node.js, databases, and exploring software engineering internship opportunities.",
 },
 ];

 return (
 <section
 id="about"
 className="py-16 md:py-24 bg-[#F8F9FA] border-b border-[#121212] relative"
 >
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 {/* Section Header */}
 <div className="space-y-2 mb-10">
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>02 / About Me</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_02</span>
 </h2>
 <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
 Student & Developer
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-2xl font-mono">
 Computer science student building practical web apps and learning
 software engineering.
 </p>
 </div>

 {/* Grid: Image & Bio on Left (7 cols) + Timeline on Right (5 cols) */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 {/* Narrative & Profile Image Column */}
 <div className="lg:col-span-7 space-y-6">
 {/* Top Profile Card: Round Image + Identity Row */}
 <div className="p-6 sm:p-8 bg-white border border-[#121212] shadow-sm space-y-6">
 <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
 {/* Round Profile Image */}
 <div className="sm:col-span-4 flex flex-col items-center justify-center">
 <div
 onClick={() => setIsPhotoModalOpen(true)}
 className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-zinc-100 border-2 border-black p-1 shadow-sm overflow-hidden ring-4 ring-zinc-100/85 cursor-pointer"
 >
 <img
 src={studentData.avatarUrl}
 alt={studentData.name}
 className="w-full h-full object-cover rounded-full transition-all duration-300"
 />
 </div>
 </div>

 {/* Bio & Intro Details */}
 <div className="sm:col-span-8 space-y-3">
 <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
 <span className="text-sm font-mono font-bold uppercase text-black">
 {studentData.name}
 </span>
 </div>

 <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-sans">
 {studentData.bio}
 </p>

 <p className="text-zinc-600 text-sm leading-relaxed font-sans">
 Based in{""}
 <span className="text-black font-bold">
 {studentData.location}
 </span>
 , focusing on algorithms, robust web systems, and clean UI
 architecture.
 </p>

 {/* Extra Feature: Live Status Vibe Switcher */}
 <div className="pt-2 space-y-2">
 <div className="flex items-center justify-between text-[10px] font-mono uppercase text-zinc-500 font-bold">
 <span>Live Status Vibe</span>
 <span className="text-black flex items-center gap-1">
 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
 Active
 </span>
 </div>
 <div className="flex flex-wrap gap-1.5">
 {(
 Object.keys(statusMessages) as Array<
 keyof typeof statusMessages
 >
 ).map((key) => (
 <button
 key={key}
 onClick={() => setActiveStatus(key)}
 className={`px-2 py-1 text-[10px] font-mono uppercase font-bold border transition-all ${
 activeStatus === key
 ?"bg-black text-white border-black shadow-xs"
 :"bg-zinc-100 text-zinc-700 border-zinc-300 hover:bg-zinc-200"
 }`}
 >
 {key.toUpperCase()}
 </button>
 ))}
 </div>
 <div
 className={`p-2 border text-[11px] font-mono font-bold uppercase ${statusMessages[activeStatus].color}`}
 >
 ⚡ {statusMessages[activeStatus].label}
 </div>
 </div>
 </div>
 </div>

 {/* Quick Info Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-200 text-sm font-mono">
 <div className="p-3 bg-zinc-50 border border-zinc-300 space-y-1">
 <span className="text-zinc-500 text-[10px] uppercase block font-bold">
 ACADEMIC PROGRAM
 </span>
 <span className="text-black font-bold">
 {studentData.degree}
 </span>
 <span className="text-zinc-700 block text-[11px] mb-1">
 {studentData.year} &bull; {studentData.college}
 </span>
 <div className="pt-1">
 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-[9px] font-mono font-bold uppercase tracking-widest">
 <span className="w-1 h-1 rounded-full bg-blue-500" />
 CSE &bull; Specialization in AI
 </span>
 </div>
 </div>
 <div className="p-3 bg-zinc-50 border border-zinc-300 space-y-1">
 <span className="text-zinc-500 text-[10px] uppercase block font-bold">
 PRIMARY OBJECTIVE
 </span>
 <span className="text-black font-bold">
 Software Engineer
 </span>
 <span className="text-emerald-700 font-bold block text-[11px]">
 Ready for SDE Internships
 </span>
 </div>
 </div>
 </div>

 {/* Interest Matrix */}
 <div className="p-6 bg-white border border-[#121212] space-y-3">
 <h4 className="text-[10px] font-mono uppercase text-black font-bold tracking-wider flex items-center gap-2 border-b border-black pb-2">
 <Target className="w-3.5 h-3.5" />
 <span>Interests & Focus</span>
 </h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
 {studentData.interests.map((interest) => (
 <div
 key={interest}
 className="p-2.5 bg-zinc-50 border border-zinc-300 flex items-center gap-2.5 text-sm text-zinc-900 font-mono"
 >
 <span className="w-1.5 h-1.5 bg-black" />
 <span className="font-bold">{interest}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Timeline & Roadmap */}
 <div className="lg:col-span-5 p-6 sm:p-8 bg-white border border-[#121212] shadow-sm space-y-6">
 <div className="flex items-center justify-between pb-3 border-b border-black">
 <div className="flex items-center gap-2">
 <Milestone className="w-4 h-4 text-black" />
 <h3 className="text-sm font-bold text-black uppercase tracking-wider font-mono">
 Journey & Milestones
 </h3>
 </div>
 <span className="text-sm font-mono font-bold text-black bg-zinc-200 px-2 py-0.5 border border-zinc-400">
 2023–Present
 </span>
 </div>

 <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-black">
 {milestones.map((item, idx) => (
 <div key={idx} className="relative flex items-start gap-4 pl-8">
 {/* Square marker for geometric balance */}
 <div className="absolute left-1.5 top-1.5 w-3 h-3 bg-black -translate-x-1/2" />

 <div className="space-y-1">
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.2">
 {item.year}
 </span>
 </div>
 <h4 className="text-sm sm:text-base font-bold text-[#121212] uppercase tracking-tight">
 {item.title}
 </h4>
 <p className="text-sm text-zinc-600 leading-relaxed font-sans">
 {item.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Profile Photo Lightbox Modal */}
 {isPhotoModalOpen && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
 <div
 className="relative w-full max-w-md bg-white border-2 border-black shadow-2xl p-6 text-center space-y-4"
 onClick={(e) => e.stopPropagation()}
 >
 <div className="flex items-center justify-between border-b border-black pb-3">
 <span className="text-sm font-mono font-bold uppercase tracking-wider text-black">
 Profile Photo (JPG)
 </span>
 <button
 onClick={() => setIsPhotoModalOpen(false)}
 className="p-1.5 bg-zinc-200 hover:bg-black hover:text-white transition-colors border border-black font-bold"
 >
 <X className="w-5 h-5" />
 </button>
 </div>

 <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-zinc-100 border-2 border-black overflow-hidden shadow-inner">
 <img
 src={studentData.avatarUrl}
 alt={studentData.name}
 className="w-full h-full object-cover"
 />
 </div>

 <div className="text-sm font-mono text-zinc-600 uppercase">
 {studentData.name}
 </div>

 <button
 onClick={() => setIsPhotoModalOpen(false)}
 className="w-full py-2.5 bg-black text-white text-sm font-mono font-bold uppercase tracking-wider hover:bg-blue-600 hover:border-blue-600 transition-colors border border-black"
 >
 Close Preview
 </button>
 </div>
 </div>
 )}
 </section>
 );
};
