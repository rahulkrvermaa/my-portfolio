import React, { useState, useRef, useEffect } from'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft, Sparkles, Trash2 } from'lucide-react';
import { studentData, projectsData, skillsData, experimentsData, certificatesData } from'../../data/data.ts';

interface InteractiveTerminalProps {
 isOpen: boolean;
 onClose: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
 const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
 {
 command:'welcome',
 output: (
 <div className="space-y-1 text-slate-300">
 <p className="text-cyan-400 font-bold">Rahul Verma — Interactive CLI Shell v1.0.4</p>
 <p className="text-slate-400 text-sm">Type <span className="text-cyan-300 font-semibold">'help'</span> to see available commands, or click the quick command chips below.</p>
 </div>
 ),
 },
 ]);
 const [input, setInput] = useState('');
 const [historyIndex, setHistoryIndex] = useState<number>(-1);
 const [commandList, setCommandList] = useState<string[]>([]);
 const terminalEndRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
 if (isOpen) {
 setTimeout(() => inputRef.current?.focus(), 100);
 }
 }, [isOpen]);

 useEffect(() => {
 terminalEndRef.current?.scrollIntoView({ behavior:'smooth' });
 }, [history]);

 if (!isOpen) return null;

 const handleCommand = (cmd: string) => {
 const trimmed = cmd.trim();
 if (!trimmed) return;

 setCommandList((prev) => [...prev, trimmed]);
 setHistoryIndex(-1);

 const lower = trimmed.toLowerCase();
 let outputNode: React.ReactNode = null;

 switch (lower) {
 case'help':
 outputNode = (
 <div className="space-y-1.5 text-sm">
 <p className="text-white font-bold uppercase tracking-wider">Available Commands:</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-300">
 <div><span className="text-white font-bold font-mono">about</span> : Candidate background & bio</div>
 <div><span className="text-white font-bold font-mono">projects</span> : List featured software works</div>
 <div><span className="text-white font-bold font-mono">skills</span> : Technical skills & toolchain</div>
 <div><span className="text-white font-bold font-mono">labs</span> : Experiments & prototypes</div>
 <div><span className="text-white font-bold font-mono">certs</span> : Verified certifications</div>
 <div><span className="text-white font-bold font-mono">building</span> : Currently building details</div>
 <div><span className="text-white font-bold font-mono">learning</span> : Active learning radar</div>
 <div><span className="text-white font-bold font-mono">contact</span> : Email & social links</div>
 <div><span className="text-white font-bold font-mono">sudo hire rahul</span> : Unlock fast-track hiring</div>
 <div><span className="text-white font-bold font-mono">clear</span> : Clear console buffer</div>
 </div>
 </div>
 );
 break;

 case'about':
 outputNode = (
 <div className="space-y-2 text-sm text-zinc-300">
 <p className="text-white font-bold uppercase">{studentData.name}</p>
 <p><span className="text-zinc-500 font-bold uppercase">Degree:</span> {studentData.degree} ({studentData.year})</p>
 <p><span className="text-zinc-500 font-bold uppercase">Institution:</span> {studentData.college}</p>
 <p><span className="text-zinc-500 font-bold uppercase">Location:</span> {studentData.location}</p>
 <p><span className="text-zinc-500 font-bold uppercase">Bio:</span> {studentData.bio}</p>
 <p><span className="text-zinc-500 font-bold uppercase">Career Goal:</span> {studentData.careerGoal}</p>
 </div>
 );
 break;

 case'projects':
 outputNode = (
 <div className="space-y-2 text-sm">
 <p className="text-white font-bold uppercase tracking-wider">Featured Projects:</p>
 {projectsData.map((p) => (
 <div key={p.id} className="p-2 bg-zinc-900 border border-zinc-700 space-y-1">
 <div className="flex items-center justify-between">
 <span className="font-bold text-white uppercase">[{p.number}] {p.title}</span>
 <span className="text-zinc-400 font-mono text-[10px] uppercase font-bold">{p.category} ({p.status})</span>
 </div>
 <p className="text-zinc-300">{p.subtitle}</p>
 <p className="text-zinc-500 font-mono text-[10px]">TECH: {p.tech.join(',')}</p>
 </div>
 ))}
 </div>
 );
 break;

 case'skills':
 outputNode = (
 <div className="space-y-2 text-sm">
 <p className="text-white font-bold uppercase tracking-wider">Technical Matrix:</p>
 {skillsData.map((group) => (
 <div key={group.category}>
 <span className="text-white font-bold uppercase">{group.category}</span> ({group.label}):{''}
 <span className="text-zinc-300">{group.items.join(',')}</span>
 </div>
 ))}
 </div>
 );
 break;

 case'labs':
 case'experiments':
 outputNode = (
 <div className="space-y-1.5 text-sm text-zinc-300">
 <p className="text-white font-bold uppercase tracking-wider">Lab Experiments & Prototypes:</p>
 {experimentsData.map((e) => (
 <div key={e.id} className="flex items-center justify-between py-0.5 border-b border-zinc-800">
 <span className="text-white font-medium">{e.title} ({e.type})</span>
 <span className="text-zinc-400 font-mono uppercase font-bold text-[10px]">{e.status}</span>
 </div>
 ))}
 </div>
 );
 break;

 case'certs':
 case'certificates':
 outputNode = (
 <div className="space-y-1.5 text-sm text-zinc-300">
 <p className="text-white font-bold uppercase tracking-wider">Verified Certifications:</p>
 {certificatesData.map((c) => (
 <div key={c.id} className="py-1 border-b border-zinc-800">
 <p className="text-white font-bold uppercase">{c.title}</p>
 <p className="text-zinc-400 font-mono text-[10px] uppercase">{c.issuer} &bull; {c.issueDate} &bull; ID: {c.credentialId}</p>
 </div>
 ))}
 </div>
 );
 break;

 case'building':
 outputNode = (
 <div className="p-2 bg-zinc-900 border border-zinc-700 text-sm space-y-1 text-zinc-300">
 <p className="text-white font-bold uppercase">{studentData.currentlyBuilding.project} ({studentData.currentlyBuilding.version})</p>
 <p>{studentData.currentlyBuilding.description}</p>
 </div>
 );
 break;

 case'learning':
 outputNode = (
 <div className="text-sm space-y-1 text-zinc-300">
 <p className="text-white font-bold uppercase">Active Learning Milestones:</p>
 <ul className="list-disc list-inside space-y-0.5 font-mono">
 {studentData.currentlyLearning.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </div>
 );
 break;

 case'contact':
 outputNode = (
 <div className="text-sm space-y-1 font-mono text-zinc-300">
 <p className="text-white font-bold uppercase">Contact Channels:</p>
 <p>Email: <a href={`mailto:${studentData.contact.email}`} className="text-white font-bold underline">{studentData.contact.email}</a></p>
 <p>GitHub: <a href={studentData.contact.github} target="_blank" rel="noreferrer" className="text-white font-bold underline">{studentData.contact.github}</a></p>
 <p>LinkedIn: <a href={studentData.contact.linkedin} target="_blank" rel="noreferrer" className="text-white font-bold underline">{studentData.contact.linkedin}</a></p>
 </div>
 );
 break;

 case'sudo hire rahul':
 case'hire':
 outputNode = (
 <div className="p-3 bg-zinc-900 border border-white text-zinc-200 text-sm space-y-2">
 <div className="flex items-center gap-2 font-bold text-white uppercase tracking-wider">
 <Sparkles className="w-4 h-4" />
 <span>Permission Granted: Software Engineering Opportunity Unlocked!</span>
 </div>
 <p>
 Thank you for considering Rahul Verma! He is ready to bring high energy, clean code, and disciplined problem-solving to your team.
 </p>
 <p>
 Send an internship offer or discussion email directly to{''}
 <a href={`mailto:${studentData.contact.email}?subject=Internship%20Discussion`} className="underline font-bold text-white">
 {studentData.contact.email}
 </a>.
 </p>
 </div>
 );
 break;

 case'clear':
 setHistory([]);
 setInput('');
 return;

 default:
 outputNode = (
 <p className="text-sm text-rose-400">
 Command not recognized:'{trimmed}'. Type <span className="text-white font-bold">'help'</span> for reference.
 </p>
 );
 break;
 }

 setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
 setInput('');
 };

 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
 if (e.key ==='Enter') {
 handleCommand(input);
 } else if (e.key ==='ArrowUp') {
 e.preventDefault();
 if (commandList.length > 0) {
 const nextIdx = historyIndex + 1 < commandList.length ? historyIndex + 1 : historyIndex;
 setHistoryIndex(nextIdx);
 setInput(commandList[commandList.length - 1 - nextIdx] ||'');
 }
 } else if (e.key ==='ArrowDown') {
 e.preventDefault();
 if (historyIndex > 0) {
 const nextIdx = historyIndex - 1;
 setHistoryIndex(nextIdx);
 setInput(commandList[commandList.length - 1 - nextIdx] ||'');
 } else {
 setHistoryIndex(-1);
 setInput('');
 }
 }
 };

 const quickChips = ['help','about','projects','skills','labs','certs','sudo hire rahul','contact','clear'];

 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
 <div 
 className="relative w-full max-w-3xl h-[600px] max-h-[88vh] bg-[#121212] border-2 border-black shadow-2xl flex flex-col overflow-hidden font-mono"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Terminal Header */}
 <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-700">
 <div className="flex items-center gap-2">
 <div className="flex items-center gap-1.5">
 <span className="w-3 h-3 rounded-none bg-zinc-600 hover:bg-zinc-400 cursor-pointer border border-zinc-500" onClick={onClose} />
 <span className="w-3 h-3 rounded-none bg-zinc-600 border border-zinc-500" />
 <span className="w-3 h-3 rounded-none bg-zinc-600 border border-zinc-500" />
 </div>
 <div className="ml-2 flex items-center gap-1.5 text-sm text-zinc-300 font-bold uppercase tracking-wider">
 <TerminalIcon className="w-3.5 h-3.5 text-white" />
 <span>rahul@workspace: ~ (zsh) [Geometric_Shell]</span>
 </div>
 </div>

 <div className="flex items-center gap-2">
 <button
 onClick={() => setHistory([])}
 className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
 title="Clear terminal"
 >
 <Trash2 className="w-3.5 h-3.5" />
 </button>
 <button
 onClick={onClose}
 className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
 >
 <X className="w-4 h-4" />
 </button>
 </div>
 </div>

 {/* Quick Command Chips */}
 <div className="flex items-center gap-1.5 px-4 py-2 bg-black border-b border-zinc-800 overflow-x-auto text-[10px]">
 <span className="text-zinc-500 font-bold uppercase shrink-0">Run:</span>
 {quickChips.map((chip) => (
 <button
 key={chip}
 onClick={() => handleCommand(chip)}
 className="px-2 py-0.5 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 hover:border-white transition-colors uppercase font-mono font-bold whitespace-nowrap"
 >
 {chip}
 </button>
 ))}
 </div>

 {/* Terminal Body */}
 <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm font-mono bg-[#121212] text-zinc-200">
 {history.map((item, idx) => (
 <div key={idx} className="space-y-1">
 <div className="flex items-center gap-2 text-zinc-400 font-bold">
 <span className="text-zinc-600">rahul@portfolio:~$</span>
 <span className="text-white">{item.command}</span>
 </div>
 <div className="pl-4 border-l border-zinc-800">{item.output}</div>
 </div>
 ))}
 <div ref={terminalEndRef} />
 </div>

 {/* Prompt Input Line */}
 <div className="flex items-center gap-2 px-4 py-3 bg-black border-t border-zinc-800">
 <span className="text-white text-sm shrink-0 font-bold font-mono">rahul@portfolio:~$</span>
 <input
 ref={inputRef}
 type="text"
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={handleKeyDown}
 placeholder="Type command ('help','projects','sudo hire rahul')..."
 className="flex-1 bg-transparent text-white text-sm font-mono focus:outline-none placeholder-zinc-600"
 />
 <button
 onClick={() => handleCommand(input)}
 className="p-1 text-white hover:text-zinc-300"
 title="Execute"
 >
 <CornerDownLeft className="w-4 h-4" />
 </button>
 </div>
 </div>
 </div>
 );
};
