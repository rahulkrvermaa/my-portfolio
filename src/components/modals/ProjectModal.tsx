import React from'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Layout, ShieldAlert, Cpu, Sparkles, Layers } from'lucide-react';
import { Project } from'../../types/types.ts';

interface ProjectModalProps {
 project: Project | null;
 onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
 if (!project) return null;

 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
 <div 
 className="relative w-full max-w-3xl max-h-[90vh] bg-white border-2 border-black shadow-2xl overflow-y-auto flex flex-col"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Header */}
 <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#F8F9FA] border-b border-black">
 <div className="flex items-center gap-3">
 <span className="font-mono text-white font-bold text-sm bg-black px-2.5 py-1 uppercase tracking-wider">
 PROJ-{project.number}
 </span>
 <div>
 <h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight leading-snug">{project.title}</h2>
 <p className="text-sm text-zinc-600 font-mono uppercase">{project.category} &bull; {project.status}</p>
 </div>
 </div>
 <button
 onClick={onClose}
 className="p-1.5 text-zinc-600 hover:text-black bg-zinc-200 hover:bg-zinc-300 transition-colors"
 >
 <X className="w-5 h-5" />
 </button>
 </div>

 {/* Content Body */}
 <div className="p-6 space-y-6 text-zinc-800 text-base">
 {/* Subtitle & High-Level Summary */}
 <div>
 <h3 className="text-base font-bold uppercase tracking-tight text-black">{project.subtitle}</h3>
 <p className="text-zinc-700 text-sm sm:text-base mt-1.5 leading-relaxed font-sans">{project.description}</p>
 </div>

 {/* Tech Stack Chips */}
 <div>
 <h4 className="text-[10px] font-mono uppercase text-zinc-600 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
 <Cpu className="w-3.5 h-3.5 text-black" />
 <span>Technology Stack</span>
 </h4>
 <div className="flex flex-wrap gap-2">
 {project.tech.map((t) => (
 <span
 key={t}
 className="px-2.5 py-1 text-sm font-mono uppercase font-bold bg-zinc-100 text-black border border-zinc-300"
 >
 {t}
 </span>
 ))}
 </div>
 </div>

 {/* Problem vs Solution Split */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="p-4 bg-zinc-50 border border-zinc-300 space-y-2">
 <div className="flex items-center gap-2 text-rose-800 font-bold text-[10px] uppercase tracking-wider font-mono">
 <ShieldAlert className="w-4 h-4" />
 <span>The Problem</span>
 </div>
 <p className="text-sm text-zinc-700 leading-relaxed font-sans">
 {project.problem}
 </p>
 </div>

 <div className="p-4 bg-zinc-50 border border-zinc-300 space-y-2">
 <div className="flex items-center gap-2 text-emerald-800 font-bold text-[10px] uppercase tracking-wider font-mono">
 <Sparkles className="w-4 h-4" />
 <span>Engineered Solution</span>
 </div>
 <p className="text-sm text-zinc-700 leading-relaxed font-sans">
 {project.solution}
 </p>
 </div>
 </div>

 {/* Technical Highlight */}
 <div className="p-4 bg-zinc-100 border border-black">
 <div className="flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-wider font-mono mb-1.5">
 <Layers className="w-4 h-4" />
 <span>Technical & Architecture Highlight</span>
 </div>
 <p className="text-sm sm:text-base text-zinc-900 leading-relaxed font-mono">
 {project.technicalHighlight}
 </p>
 </div>

 {/* Architecture Overview */}
 <div>
 <h4 className="text-[10px] font-mono uppercase text-zinc-600 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
 <Server className="w-3.5 h-3.5 text-black" />
 <span>System Architecture Overview</span>
 </h4>
 <div className="p-3.5 bg-zinc-50 border border-zinc-300 font-mono text-sm text-zinc-800 leading-relaxed">
 {project.architectureOverview}
 </div>
 </div>

 {/* Key Feature Highlights */}
 <div>
 <h4 className="text-[10px] font-mono uppercase text-zinc-600 tracking-wider mb-2 font-bold">
 Key Capabilities & Engineering Deliverables
 </h4>
 <ul className="space-y-2">
 {project.keyHighlights.map((highlight, idx) => (
 <li key={idx} className="flex items-start gap-2 text-sm text-zinc-800 font-sans">
 <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0" />
 <span>{highlight}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Footer Actions */}
 <div className="sticky bottom-0 z-10 flex items-center justify-end gap-3 px-6 py-4 bg-[#F8F9FA] border-t border-black">
 <a
 href={project.githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 px-4 py-2 text-sm font-mono font-bold uppercase text-black bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-colors"
 >
 <Github className="w-4 h-4" />
 <span>Repository Code</span>
 </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono font-bold uppercase text-white bg-black hover:bg-zinc-800 transition-colors border border-black shadow-sm"
            >
              <span>Live Experience</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
 </div>
 </div>
 </div>
 );
};
