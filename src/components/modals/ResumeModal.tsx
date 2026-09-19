import React from'react';
import { X, Download, FileText } from'lucide-react';

interface ResumeModalProps {
 isOpen: boolean;
 onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
 if (!isOpen) return null;

 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
 <div 
 className="relative w-full max-w-4xl h-[92vh] bg-white border-2 border-black shadow-2xl overflow-hidden flex flex-col"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Modal Top Bar */}
 <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FA] border-b border-black">
 <div className="flex items-center gap-2">
 <FileText className="w-5 h-5 text-black" />
 <h2 className="text-base font-bold uppercase tracking-tight text-black">Curriculum Vitae / Resume</h2>
 <span className="text-[10px] font-mono px-2 py-0.5 bg-zinc-200 text-black border border-zinc-400 font-bold uppercase">
 myresume.pdf
 </span>
 </div>

 <div className="flex items-center gap-2">
 <a
 href="/assets/myresume.pdf"
 download
 className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono font-bold uppercase text-white bg-black hover:bg-zinc-800 transition-colors border border-black shadow-sm"
 >
 <Download className="w-3.5 h-3.5" />
 <span>Download PDF</span>
 </a>
 <button
 onClick={onClose}
 className="p-1.5 text-zinc-600 hover:text-black bg-zinc-200 hover:bg-zinc-300 transition-colors"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* PDF View */}
 <div className="flex-1 w-full h-full bg-zinc-100">
 <iframe 
 src="/assets/myresume.pdf" 
 className="w-full h-full border-none"
 title="Resume PDF"
 />
 </div>
 </div>
 </div>
 );
};
