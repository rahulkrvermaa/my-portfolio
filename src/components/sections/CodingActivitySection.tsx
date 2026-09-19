import React from'react';
import { Code2, ExternalLink, Flame, Trophy, Award, CheckCircle2 } from'lucide-react';
import { motion } from'motion/react';

export const CodingActivitySection: React.FC = () => {
 const leetcodeStats = {
 platform:'LeetCode',
 username:'@rahulkrverma',
 profileUrl:'https://leetcode.com/u/rahulkrverma/',
 totalSolved: 141,
 difficulty: [
 { label:'Easy', count: 75, color:'bg-emerald-50 text-emerald-800 border-emerald-300' },
 { label:'Medium', count: 60, color:'bg-amber-50 text-amber-800 border-amber-300' },
 { label:'Hard', count: 6, color:'bg-rose-50 text-rose-800 border-rose-300' },
 ],
 badge:'Consistent Problem Solver'
 };

 const gfgStats = {
 platform:'GeeksforGeeks',
 username:'@rahulkrve40r1',
 profileUrl:'https://www.geeksforgeeks.org/profile/rahulkrve40r1',
 totalSolved: 50,
 difficulty: [
 { label:'Basic', count: 12, color:'bg-zinc-100 text-zinc-800 border-zinc-300' },
 { label:'Easy', count: 22, color:'bg-emerald-50 text-emerald-800 border-emerald-300' },
 { label:'Medium', count: 14, color:'bg-amber-50 text-amber-800 border-amber-300' },
 { label:'Hard', count: 2, color:'bg-rose-50 text-rose-800 border-rose-300' },
 ],
 badge:'Coding Streak Active'
 };

 return (
 <section id="coding-activity" className="py-20 sm:py-28 bg-[#F8F9FA] border-t border-[#121212] relative overflow-hidden">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 
 {/* Section Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="space-y-2 mb-12"
 >
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>05 / Coding Activity & DSA Progress</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_05</span>
 </h2>
 <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-black font-mono">
 Proof of Work & Consistency
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-mono">
 Active problem-solving metrics and algorithmic practice across competitive programming platforms.
 </p>
 </motion.div>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 
 {/* LeetCode Card */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: 0.1 }}
 whileHover={{ y: -4 }}
 className="p-6 sm:p-8 bg-white border border-[#121212] shadow-sm flex flex-col justify-between group relative overflow-hidden"
 >
 {/* Top Accent Bar */}
 <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />

 <div className="space-y-6">
 <div className="flex items-start justify-between">
 <div className="space-y-1">
 <div className="flex items-center gap-2">
 <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-900 border border-amber-300">
 {leetcodeStats.badge}
 </span>
 </div>
 <h4 className="text-xl font-extrabold text-black uppercase font-mono tracking-tight pt-2">
 {leetcodeStats.platform}
 </h4>
 <p className="text-sm font-mono text-zinc-500">
 {leetcodeStats.username}
 </p>
 </div>
 <div className="p-3 bg-zinc-100 border border-black group-hover:bg-black group-hover:text-white transition-colors">
 <Code2 className="w-6 h-6" />
 </div>
 </div>

 {/* Total Solved Metric */}
 <div className="p-4 bg-zinc-50 border border-zinc-200 flex items-center justify-between">
 <div>
 <span className="text-[10px] font-mono uppercase text-zinc-500 block font-bold">Total Solved</span>
 <span className="text-2xl font-extrabold font-mono text-black">{leetcodeStats.totalSolved} Problems</span>
 </div>
 <Flame className="w-6 h-6 text-amber-600 animate-pulse" />
 </div>

 {/* Breakdown Grid */}
 <div className="grid grid-cols-3 gap-3">
 {leetcodeStats.difficulty.map((item) => (
 <div key={item.label} className={`p-3 border text-center ${item.color}`}>
 <span className="text-[10px] font-mono uppercase font-bold block">{item.label}</span>
 <span className="text-xl font-extrabold font-mono mt-0.5 block">{item.count}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="pt-8 mt-6 border-t border-zinc-200 flex items-center justify-between">
 <span className="text-[10px] font-mono uppercase text-zinc-500">Verified Profile</span>
 <a
 href={leetcodeStats.profileUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-mono font-bold uppercase hover:bg-zinc-800 transition-colors border border-black shadow-xs"
 >
 <span>View Profile</span>
 <ExternalLink className="w-3.5 h-3.5" />
 </a>
 </div>
 </motion.div>

 {/* GFG Card */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: 0.2 }}
 whileHover={{ y: -4 }}
 className="p-6 sm:p-8 bg-white border border-[#121212] shadow-sm flex flex-col justify-between group relative overflow-hidden"
 >
 {/* Top Accent Bar */}
 <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600" />

 <div className="space-y-6">
 <div className="flex items-start justify-between">
 <div className="space-y-1">
 <div className="flex items-center gap-2">
 <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-emerald-50 text-emerald-900 border border-emerald-300">
 {gfgStats.badge}
 </span>
 </div>
 <h4 className="text-xl font-extrabold text-black uppercase font-mono tracking-tight pt-2">
 {gfgStats.platform}
 </h4>
 <p className="text-sm font-mono text-zinc-500">
 {gfgStats.username}
 </p>
 </div>
 <div className="p-3 bg-zinc-100 border border-black group-hover:bg-black group-hover:text-white transition-colors">
 <Trophy className="w-6 h-6" />
 </div>
 </div>

 {/* Total Solved Metric */}
 <div className="p-4 bg-zinc-50 border border-zinc-200 flex items-center justify-between">
 <div>
 <span className="text-[10px] font-mono uppercase text-zinc-500 block font-bold">Total Solved</span>
 <span className="text-2xl font-extrabold font-mono text-black">{gfgStats.totalSolved} Problems</span>
 </div>
 <CheckCircle2 className="w-6 h-6 text-emerald-600" />
 </div>

 {/* Breakdown Grid */}
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
 {gfgStats.difficulty.map((item) => (
 <div key={item.label} className={`p-2.5 border text-center ${item.color}`}>
 <span className="text-[9px] font-mono uppercase font-bold block">{item.label}</span>
 <span className="text-lg font-extrabold font-mono mt-0.5 block">{item.count}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="pt-8 mt-6 border-t border-zinc-200 flex items-center justify-between">
 <span className="text-[10px] font-mono uppercase text-zinc-500">Verified Profile</span>
 <a
 href={gfgStats.profileUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-mono font-bold uppercase hover:bg-zinc-800 transition-colors border border-black shadow-xs"
 >
 <span>View Profile</span>
 <ExternalLink className="w-3.5 h-3.5" />
 </a>
 </div>
 </motion.div>

 </div>

 </div>
 </section>
 );
};
