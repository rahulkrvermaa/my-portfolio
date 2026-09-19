import React from'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2, Sparkles, Terminal } from'lucide-react';
import { studentData } from'../../data/data.ts';

interface FooterProps {
 onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior:'smooth' });
 };

 return (
 <footer className="bg-white border-t border-[#121212] py-12 text-black text-sm font-mono relative">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8">
 <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200">
 
 {/* Brand info */}
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
 RV
 </div>
 <div>
 <p className="font-bold text-black text-base uppercase">{studentData.name}</p>
 <p className="text-zinc-500 font-mono text-[10px] uppercase">
 {studentData.degree} 
 </p>
 </div>
 </div>

 {/* Quick links */}
 <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase font-bold text-zinc-700">
 <a href="#about" className="hover:text-black transition-colors">About</a>
 <a href="#projects" className="hover:text-black transition-colors">Projects</a>
 <a href="#skills" className="hover:text-black transition-colors">Skills</a>
 <a href="#certificates" className="hover:text-black transition-colors">Certifications</a>
 <a href="#contact" className="hover:text-black transition-colors">Contact</a>
 <button onClick={onOpenTerminal} className="hover:text-black transition-colors">Terminal</button>
 </div>

 {/* Back to top & Socials */}
 <div className="flex items-center gap-2">
 <a
 href={studentData.contact.github}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 text-black hover:bg-zinc-100 border border-zinc-300 transition-colors"
 >
 <Github className="w-4 h-4" /><span className="sr-only">GitHub</span>
 </a>
 <a
 href={studentData.contact.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 text-black hover:bg-zinc-100 border border-zinc-300 transition-colors"
 >
 <Linkedin className="w-4 h-4" /><span className="sr-only">LinkedIn</span>
 </a>
 <button
 onClick={scrollToTop}
 className="p-2 text-white bg-black hover:bg-zinc-800 transition-colors flex items-center gap-1 text-sm font-mono"
 title="Back to Top"
 >
 <ArrowUp className="w-4 h-4" />
 </button>
 </div>
 </div>

 {/* Copyright & Disclaimer */}
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500 uppercase">
 <p>
 &copy; {new Date().getFullYear()} Rahul Verma
 </p>
 <div className="flex items-center gap-1.5 font-bold text-zinc-800">
 <span>Made with</span>
 <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 animate-pulse inline-block" />
 <span>by Rahul</span>
 </div>
 </div>
 </div>
 </footer>
 );
};
