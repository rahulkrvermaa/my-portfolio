import React, { useState } from'react';
import { 
 FolderGit2, 
 ExternalLink, 
 Github, 
 Sparkles, 
 Layers, 
 ArrowUpRight, 
 Code2, 
 ShieldAlert, 
 CheckCircle2, 
 Filter,
 Eye
} from'lucide-react';
import { projectsData } from'../../data/data.ts';
import { Project } from'../../types/types.ts';
import { ProjectModal } from'../modals/ProjectModal.tsx';
import { motion, AnimatePresence } from'framer-motion';
import Tilt from'react-parallax-tilt';

export const ProjectsSection: React.FC = () => {
 const [selectedCategory, setSelectedCategory] = useState<string>('All');
 const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

 const categories = ['All', 'Full-Stack', 'Frontend', 'Machine Learning'];

 const filteredProjects = selectedCategory === 'All'
 ? projectsData
 : projectsData.filter((p) => p.category.includes(selectedCategory));

 return (
 <section id="projects" className="py-16 md:py-24 bg-[#F8F9FA] border-b border-[#121212] relative">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 
 {/* Section Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
 >
 <div className="space-y-2">
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>02 / Production & Engineering Works</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_02</span>
 </h2>
 <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
 Featured Software Projects
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-mono">
 Architected and implemented using modern full-stack workflows, responsive design paradigms, and performant asynchronous pipelines.
 </p>
 </div>

 {/* Filter Pills */}
 <div className="flex items-center gap-1 p-1 bg-white border border-[#121212] shadow-sm self-start md:self-auto">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setSelectedCategory(cat)}
 className={`relative px-3 py-1 text-sm font-mono font-bold uppercase tracking-wider transition-colors ${
 selectedCategory === cat
 ?'text-white'
 :'text-zinc-700 hover:text-blue-600 hover:bg-zinc-100'
 }`}
 >
 {selectedCategory === cat && (
 <motion.span
 layoutId="projectCategoryActive"
 className="absolute inset-0 bg-black z-0"
 transition={{ type:'spring', stiffness: 300, damping: 30 }}
 />
 )}
 <span className="relative z-10">{cat}</span>
 </button>
 ))}
 </div>
 </motion.div>

 {/* Projects Grid */}
 <motion.div 
 layout
 className="grid grid-cols-1 lg:grid-cols-3 gap-6"
 >
 <AnimatePresence>
 {filteredProjects.map((project, idx) => (
 <Tilt key={project.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="flex">
 <motion.div
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.4, delay: idx * 0.1 }}
 id={`project-card-${project.id}`}
 className="flex flex-col justify-between w-full h-full bg-white border border-[#121212] shadow-sm hover:shadow-md transition-shadow group p-6 relative overflow-hidden"
 >
 {/* Corner Number Accent */}
 <div className="absolute top-4 right-5 font-mono text-4xl font-extrabold text-zinc-200 group-hover:text-zinc-300 transition-colors pointer-events-none">
 {project.number}
 </div>

 <div>
 {/* Header: Category & Status */}
 <div className="flex items-center gap-2 mb-4">
 <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-black text-white">
 {project.category}
 </span>
 <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase border ${
 project.status ==='Complete'
 ?'bg-emerald-50 text-emerald-800 border-emerald-400'
 :'bg-amber-50 text-amber-800 border-amber-400'
 }`}>
 {project.status}
 </span>
 </div>

 {/* Title & Subtitle */}
 <h4 className="text-xl font-bold uppercase tracking-tight text-[#121212] group-hover:underline">
 {project.title}
 </h4>
 <p className="text-sm font-mono text-zinc-500 uppercase mt-1 mb-3">
 {project.subtitle}
 </p>

 {/* Description */}
 <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-5 line-clamp-3">
 {project.description}
 </p>

 {/* Technical Highlight Snippet */}
 <div className="p-3.5 bg-zinc-100 border border-zinc-300 mb-5 space-y-1">
 <div className="flex items-center gap-1.5 text-[10px] font-mono text-black font-bold uppercase tracking-wider">
 <Sparkles className="w-3 h-3 text-black" />
 <span>Technical Architecture</span>
 </div>
 <p className="text-sm text-zinc-700 leading-snug line-clamp-2 font-mono">
 {project.technicalHighlight}
 </p>
 </div>

 {/* Tech Chips */}
 <div className="flex flex-wrap gap-1.5 mb-6">
 {project.tech.map((t) => (
 <span
 key={t}
 className="px-2 py-0.5 text-[10px] font-mono uppercase bg-zinc-100 text-zinc-800 border border-zinc-300"
 >
 {t}
 </span>
 ))}
 </div>
 </div>

 {/* Action Buttons */}
 <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-2">
 <button
 onClick={() => setActiveProjectModal(project)}
 className="flex items-center gap-1.5 text-sm font-mono font-bold uppercase tracking-wider text-black hover:bg-zinc-100 py-1.5 px-3 border border-black transition-colors"
 >
 <Eye className="w-3.5 h-3.5" />
 <span>Deep Dive</span>
 </button>

 <div className="flex items-center gap-2">
 <a
 href={project.githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 text-zinc-700 hover:text-blue-600 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-colors"
 title="View Code on GitHub"
 >
 <Github className="w-3.5 h-3.5" />
 </a>

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono font-bold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 border border-black transition-colors"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
 </div>
 </div>
 </motion.div>
 </Tilt>
 ))}
 </AnimatePresence>
 </motion.div>

 </div>

 {/* Deep-Dive Modal */}
 <ProjectModal
 project={activeProjectModal}
 onClose={() => setActiveProjectModal(null)}
 />
 </section>
 );
};
