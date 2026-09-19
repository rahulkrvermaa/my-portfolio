import React, { useState } from'react';
import { 
 Award, 
 Calendar, 
 Eye, 
 Briefcase
} from'lucide-react';
import { certificatesData } from'../../data/data.ts';
import { Certificate } from'../../types/types.ts';
import { CertificateModal } from'../modals/CertificateModal.tsx';
import { motion } from'framer-motion';
import Tilt from'react-parallax-tilt';

export const CertificatesSection: React.FC = () => {
 const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
 const [activeTab, setActiveTab] = useState<'internship' |'certificate'>('internship');

 const internships = certificatesData.filter(c => c.category ==='internship');
 const certificates = certificatesData.filter(c => c.category ==='certificate');

 return (
 <section id="certificates" className="py-16 md:py-24 bg-[#F8F9FA] border-b border-[#121212] relative">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 
 {/* Main Section Header */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="space-y-4 mb-10"
 >
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>04 / Accreditations & Internships</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_04</span>
 </h2>
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
 <div>
 <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
 Certificates & Internships
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-mono mt-1">
 Professional accreditations, certifications, and hands-on industrial internships.
 </p>
 </div>

 {/* Filter Tabs */}
 <div className="flex items-center gap-2 bg-white p-1.5 border border-black shadow-xs">
 <button
 onClick={() => setActiveTab('internship')}
 className={`px-3 py-1.5 text-sm font-mono uppercase font-bold transition-colors flex items-center gap-1.5 ${
 activeTab ==='internship'
 ?'bg-black text-white'
 :'bg-white text-zinc-700 hover:bg-zinc-100'
 }`}
 >
 <Briefcase className="w-3.5 h-3.5" />
 <span>Internships ({internships.length})</span>
 </button>
 <button
 onClick={() => setActiveTab('certificate')}
 className={`px-3 py-1.5 text-sm font-mono uppercase font-bold transition-colors flex items-center gap-1.5 ${
 activeTab ==='certificate'
 ?'bg-black text-white'
 :'bg-white text-zinc-700 hover:bg-zinc-100'
 }`}
 >
 <Award className="w-3.5 h-3.5" />
 <span>Certificates ({certificates.length})</span>
 </button>
 </div>
 </div>
 </motion.div>

 {/* Internships Subsection */}
 {activeTab ==='internship' && internships.length > 0 && (
 <div className="mb-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {internships.map((cert, idx) => (
 <Tilt key={cert.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="flex flex-col">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.05 }}
 id={`internship-card-${cert.id}`}
 className="p-6 h-full bg-white border border-[#121212] shadow-sm flex flex-col justify-between group"
 >
 <div>
 {/* Header: Issuer & Badge */}
 <div className="flex items-center justify-between gap-2 mb-3">
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-mono uppercase font-bold text-white bg-black px-2.5 py-1">
 {cert.issuer}
 </span>
 <span className="text-[9px] font-mono uppercase font-bold px-2 py-0.5 border bg-amber-50 text-amber-900 border-amber-300">
 Internship
 </span>
 </div>
 </div>

 {/* Thumbnail Box */}
 <div 
 onClick={() => setSelectedCert(cert)}
 className="relative w-full h-48 sm:h-52 bg-white border border-black mb-4 overflow-hidden group/img cursor-pointer shadow-sm flex items-center justify-center"
 >
 <img 
 src={cert.imageSrc} 
 alt={cert.title}
 className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-500"
 referrerPolicy="no-referrer"
 />
 </div>

 {/* Title */}
 <h3 className="text-xl font-bold uppercase tracking-tight text-[#121212] group-hover:text-blue-600 transition-colors">
 {cert.title}
 </h3>

 {/* Metadata */}
 <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 mt-2 mb-3">
 <div className="flex items-center gap-1.5">
 <Calendar className="w-3.5 h-3.5 text-zinc-500" />
 <span>{cert.issueDate}</span>
 </div>
 <span>•</span>
 <span>ID: {cert.credentialId}</span>
 </div>

 {/* Description */}
 <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4 line-clamp-2 font-sans">
 {cert.description}
 </p>

 {/* Skills tags */}
 <div className="flex flex-wrap gap-1.5 mb-6">
 {cert.skills.map((skill) => (
 <span
 key={skill}
 className="px-2 py-0.5 text-[10px] font-mono uppercase bg-zinc-100 text-zinc-800 border border-zinc-300"
 >
 {skill}
 </span>
 ))}
 </div>
 </div>

 {/* Action Button */}
 <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3">
 <button
 onClick={() => setSelectedCert(cert)}
 className="w-full flex items-center justify-center gap-2 text-sm font-mono font-bold uppercase text-white bg-black hover:bg-zinc-800 py-2 px-4 border border-black transition-colors"
 >
 <Eye className="w-4 h-4" />
 <span>View Document</span>
 </button>
 </div>
 </motion.div>
 </Tilt>
 ))}
 </div>
 </div>
 )}

 {/* Certificates Subsection */}
 {activeTab ==='certificate' && certificates.length > 0 && (
 <div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {certificates.map((cert, idx) => (
 <Tilt key={cert.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="flex flex-col">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.05 }}
 id={`certificate-card-${cert.id}`}
 className="p-6 h-full bg-white border border-[#121212] shadow-sm flex flex-col justify-between group"
 >
 <div>
 {/* Header: Issuer & Badge */}
 <div className="flex items-center justify-between gap-2 mb-3">
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-mono uppercase font-bold text-white bg-black px-2.5 py-1">
 {cert.issuer}
 </span>
 <span className="text-[9px] font-mono uppercase font-bold px-2 py-0.5 border bg-emerald-50 text-emerald-900 border-emerald-300">
 Certificate
 </span>
 </div>
 </div>

 {/* Thumbnail Box */}
 <div 
 onClick={() => setSelectedCert(cert)}
 className="relative w-full h-48 sm:h-52 bg-white border border-black mb-4 overflow-hidden group/img cursor-pointer shadow-sm flex items-center justify-center"
 >
 <img 
 src={cert.imageSrc} 
 alt={cert.title}
 className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-500"
 referrerPolicy="no-referrer"
 />
 </div>

 {/* Title */}
 <h3 className="text-xl font-bold uppercase tracking-tight text-[#121212] group-hover:text-blue-600 transition-colors">
 {cert.title}
 </h3>

 {/* Metadata */}
 <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 mt-2 mb-3">
 <div className="flex items-center gap-1.5">
 <Calendar className="w-3.5 h-3.5 text-zinc-500" />
 <span>{cert.issueDate}</span>
 </div>
 <span>•</span>
 <span>ID: {cert.credentialId}</span>
 </div>

 {/* Description */}
 <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4 line-clamp-2 font-sans">
 {cert.description}
 </p>

 {/* Skills tags */}
 <div className="flex flex-wrap gap-1.5 mb-6">
 {cert.skills.map((skill) => (
 <span
 key={skill}
 className="px-2 py-0.5 text-[10px] font-mono uppercase bg-zinc-100 text-zinc-800 border border-zinc-300"
 >
 {skill}
 </span>
 ))}
 </div>
 </div>

 {/* Action Button */}
 <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-3">
 <button
 onClick={() => setSelectedCert(cert)}
 className="w-full flex items-center justify-center gap-2 text-sm font-mono font-bold uppercase text-white bg-black hover:bg-zinc-800 py-2 px-4 border border-black transition-colors"
 >
 <Eye className="w-4 h-4" />
 <span>View Document</span>
 </button>
 </div>
 </motion.div>
 </Tilt>
 ))}
 </div>
 </div>
 )}

 </div>

 {/* Modal */}
 <CertificateModal
 certificate={selectedCert}
 onClose={() => setSelectedCert(null)}
 />
 </section>
 );
};

