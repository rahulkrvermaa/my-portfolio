import React from'react';
import { X, Award, CheckCircle2, FileCheck } from'lucide-react';
import { Certificate } from'../../types/types.ts';
import { studentData } from'../../data/data.ts';
import { motion } from'motion/react';

interface CertificateModalProps {
 certificate: Certificate | null;
 onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
 if (!certificate) return null;

 return (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs"
 >
 <motion.div 
 initial={{ scale: 0.95, opacity: 0, y: 15 }}
 animate={{ scale: 1, opacity: 1, y: 0 }}
 exit={{ scale: 0.95, opacity: 0, y: 15 }}
 transition={{ type:'spring', damping: 25, stiffness: 300 }}
 className="relative w-full max-w-2xl max-h-[92vh] bg-white border-2 border-black shadow-2xl overflow-y-auto flex flex-col"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Header - Sticky top for mobile & desktop accessibility */}
 <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 bg-[#F8F9FA] border-b-2 border-black shadow-xs">
 <div className="flex items-center gap-2.5">
 <div className="p-1.5 bg-black text-white">
 <Award className="w-5 h-5" />
 </div>
 <div>
 <h2 className="text-base font-bold uppercase tracking-tight text-black leading-tight">Certificate Preview</h2>
 <p className="text-[11px] sm:text-sm text-zinc-500 font-mono truncate max-w-[200px] sm:max-w-xs">File: {certificate.fileName}</p>
 </div>
 </div>
 <button
 onClick={onClose}
 aria-label="Close modal"
 className="p-2 sm:p-2.5 text-black hover:text-white bg-zinc-200 hover:bg-black transition-colors rounded-none border border-black flex items-center justify-center font-bold"
 >
 <X className="w-5 h-5" />
 </button>
 </div>

 {/* Certificate Render Card */}
 <div className="p-6 space-y-6">
 <div className="relative w-full h-72 sm:h-96 bg-white border-2 border-black overflow-hidden shadow-inner flex items-center justify-center p-2">
 <img 
 src={certificate.imageSrc} 
 alt={certificate.title} 
 className="w-full h-full object-contain opacity-100"
 referrerPolicy="no-referrer"
 />
 <div className="absolute top-3 right-3 bg-black text-white px-2.5 py-1 text-[10px] font-mono uppercase font-bold tracking-wider shadow-md">
 {certificate.fileName}
 </div>
 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white pointer-events-none">
 <p className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase font-bold">
 {certificate.issuer}
 </p>
 <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
 {certificate.title}
 </h3>
 </div>
 </div>

 <div className="text-sm sm:text-base text-zinc-700 leading-relaxed bg-zinc-50 p-4 border border-zinc-300 font-sans">
 {certificate.description}
 </div>

 <div className="grid grid-cols-2 gap-3 text-left pt-2 border-t border-zinc-200 font-mono text-sm text-zinc-600">
 <div>
 <span className="text-zinc-500 block text-[10px] uppercase font-bold">Awarded To</span>
 <span className="text-black font-bold">{studentData.name}</span>
 </div>
 <div className="text-right">
 <span className="text-zinc-500 block text-[10px] uppercase font-bold">Issue Date</span>
 <span className="text-black font-bold">{certificate.issueDate}</span>
 </div>
 </div>

 {/* Validated Skills */}
 <div>
 <h4 className="text-sm font-mono uppercase text-black font-bold tracking-wider mb-2">
 Key Focus Skills
 </h4>
 <div className="flex flex-wrap gap-2">
 {certificate.skills.map((skill) => (
 <span
 key={skill}
 className="flex items-center gap-1.5 px-2.5 py-1 text-sm font-mono font-bold uppercase bg-zinc-100 text-black border border-zinc-300"
 >
 <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
 <span>{skill}</span>
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* Modal Actions */}
 <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FA] border-t border-black">
 <div className="text-sm font-mono font-bold text-zinc-700 flex items-center gap-1.5 uppercase">
 <FileCheck className="w-4 h-4 text-zinc-800" />
 <span>Ready for JPG Replacement</span>
 </div>

 <button
 onClick={onClose}
 className="px-4 py-2 text-sm font-mono font-bold uppercase text-white bg-black hover:bg-zinc-800 transition-colors shadow-sm"
 >
 Close Preview
 </button>
 </div>
 </motion.div>
 </motion.div>
 );
};
