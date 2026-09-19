import React, { useState } from'react';
import { 
 Code2, 
 Layers, 
 Server, 
 Database, 
 Wrench, 
 Search, 
 Sparkles, 
 Terminal, 
 Cpu, 
 CheckCircle2, 
 BrainCircuit 
} from'lucide-react';
import { skillsData, studentData } from'../../data/data.ts';
import { motion, AnimatePresence } from'motion/react';

export const SkillsSection: React.FC = () => {
 const [searchQuery, setSearchQuery] = useState('');

 const getCategoryIcon = (category: string) => {
 switch (category) {
 case'Languages':
 return <Code2 className="w-4 h-4 text-black" />;
 case'Frontend':
 return <Layers className="w-4 h-4 text-black" />;
 case'Backend':
 return <Server className="w-4 h-4 text-black" />;
 case'Database':
 return <Database className="w-4 h-4 text-black" />;
 case'Tools':
 return <Wrench className="w-4 h-4 text-black" />;
 default:
 return <Cpu className="w-4 h-4 text-black" />;
 }
 };

 const filteredSkills = skillsData.map((group) => {
 if (!searchQuery.trim()) return group;
 const matchingItems = group.items.filter((item) =>
 item.toLowerCase().includes(searchQuery.toLowerCase())
 );
 return {
 ...group,
 items: matchingItems,
 };
 }).filter((group) => group.items.length > 0);

 return (
 <section id="skills" className="py-16 md:py-24 bg-[#F8F9FA] border-b border-[#121212] relative">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 
 {/* Header & Search */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
 >
 <div className="space-y-2">
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>03 / Technical Competencies</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_03</span>
 </h2>
 <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
 Skills & Tooling Matrix
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-mono">
 Strong foundation in object-oriented programming, data structures, full-stack JavaScript architectures, and developer toolchains.
 </p>
 </div>

 {/* Quick Search Input */}
 <div className="relative w-full md:w-64">
 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
 <input
 type="text"
 placeholder="Search skill (e.g. React, C++)..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#121212] text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-black font-mono transition-colors shadow-sm"
 />
 </div>
 </motion.div>

 {/* Skills Grid */}
 <motion.div 
 layout
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
 >
 <AnimatePresence>
 {filteredSkills.map((group, idx) => (
 <motion.div
 key={group.category}
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.4, delay: idx * 0.08 }}
 whileHover={{ y: -3 }}
 className="p-6 bg-white border border-[#121212] shadow-sm group"
 >
 {/* Category Header */}
 <div className="flex items-center justify-between pb-3 mb-4 border-b border-black">
 <div className="flex items-center gap-2.5">
 <div className="p-1.5 bg-zinc-100 border border-zinc-300">
 {getCategoryIcon(group.category)}
 </div>
 <div>
 <h4 className="text-base font-bold uppercase tracking-tight text-[#121212]">
 {group.category}
 </h4>
 <p className="text-[10px] font-mono uppercase text-zinc-500">
 {group.label}
 </p>
 </div>
 </div>
 <span className="text-[10px] font-mono font-bold uppercase text-white bg-black px-2 py-0.5">
 {group.items.length} Skills
 </span>
 </div>

 {/* Skill Pills */}
 <div className="flex flex-wrap gap-2">
 {group.items.map((skill) => (
 <div
 key={skill}
 className="flex items-center gap-1.5 px-2.5 py-1 text-sm font-mono font-bold uppercase bg-zinc-100 hover:bg-black text-zinc-800 hover:text-white border border-zinc-300 transition-colors"
 >
 <span className="w-1.5 h-1.5 bg-black group-hover:bg-white" />
 <span>{skill}</span>
 </div>
 ))}
 </div>
 </motion.div>
 ))}
 </AnimatePresence>

 {/* Special Card: Learning Radar */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: 0.5 }}
 className="p-6 bg-zinc-100 border border-dashed border-zinc-500 shadow-sm space-y-4"
 >
 <div className="flex items-center justify-between pb-3 border-b border-zinc-300">
 <div className="flex items-center gap-2">
 <div className="p-1.5 bg-black text-white">
 <BrainCircuit className="w-4 h-4" />
 </div>
 <div>
 <h4 className="text-base font-bold uppercase tracking-tight text-black">
 Active Growth Radar
 </h4>
 <p className="text-[10px] font-mono text-zinc-600 uppercase">
 Currently Deepening
 </p>
 </div>
 </div>
 <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-black text-white">
 Sprint 2025-26
 </span>
 </div>

 <div className="space-y-1.5">
 {studentData.currentlyLearning.map((item, idx) => (
 <div
 key={item}
 className="flex items-center justify-between p-2 bg-white border border-zinc-300 text-sm font-mono text-zinc-800"
 >
 <span className="flex items-center gap-2">
 <span className="text-black font-bold">0{idx + 1}.</span>
 <span className="font-bold uppercase">{item}</span>
 </span>
 <span className="text-[10px] font-bold text-zinc-500 uppercase">In Progress</span>
 </div>
 ))}
 </div>
 </motion.div>
 </motion.div>

 </div>
 </section>
 );
};
