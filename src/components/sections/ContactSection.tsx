import React, { useState } from'react';
import { 
 Mail, 
 Send, 
 Check, 
 Copy, 
 Github, 
 Linkedin, 
 MapPin, 
 Sparkles, 
 MessageSquare, 
 Clock,
 ArrowUpRight,
 CheckCircle2
} from'lucide-react';
import { studentData } from'../../data/data.ts';

export const ContactSection: React.FC = () => {
 const [copied, setCopied] = useState(false);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [submitted, setSubmitted] = useState(false);

 const copyEmail = () => {
 navigator.clipboard.writeText(studentData.contact.email);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (!name.trim() || !email.trim() || !message.trim()) return;

 const mailtoUrl =`mailto:${studentData.contact.email}?subject=${encodeURIComponent(
`Message from ${name} via Portfolio`
 )}&body=${encodeURIComponent(
`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
 )}`;
 
 window.location.href = mailtoUrl;
 setSubmitted(true);
 setTimeout(() => {
 setName('');
 setEmail('');
 setMessage('');
 setSubmitted(false);
 }, 5000);
 };

 return (
 <section id="contact" className="py-16 md:py-24 bg-[#F8F9FA] border-b border-[#121212] relative">
 <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
 
 {/* Section Header */}
 <div className="space-y-2 mb-10">
 <h2 className="text-[10px] uppercase font-bold tracking-[0.3em] text-black border-b border-black pb-2 flex items-center justify-between">
 <span>05 / Communication & Inquiries</span>
 <span className="font-mono text-zinc-500 font-normal">SEC_05</span>
 </h2>
 <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight uppercase">
 Let’s Build Something Great Together
 </h3>
 <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-mono">
 Currently open to engineering internships, technical collaborations, and software development opportunities.
 </p>
 </div>

 {/* Grid: Direct Contact Info (5 Cols) vs Interactive Message Form (7 Cols) */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 
 {/* Left Column: Direct Contact Details */}
 <div className="lg:col-span-5 space-y-4">
 
 {/* Primary Email Card */}
 <div className="p-6 bg-white border border-[#121212] shadow-sm space-y-4">
 <div className="flex items-center justify-between">
 <span className="text-[10px] font-mono uppercase font-bold text-zinc-500">Direct Email</span>
 <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5">
 <span className="w-1.5 h-1.5 bg-emerald-600 animate-pulse" />
 <span>Replies &lt; 24h</span>
 </span>
 </div>

 <div>
 <p className="text-lg sm:text-xl font-bold text-black font-mono break-all">
 {studentData.contact.email}
 </p>
 </div>

 <div className="pt-2 flex items-center gap-2">
 <button
 onClick={copyEmail}
 className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-100 hover:bg-zinc-200 text-black text-sm font-mono font-bold uppercase border border-zinc-300 transition-colors"
 >
 {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-zinc-500" />}
 <span>{copied ?'Copied to Clipboard' :'Copy Email Address'}</span>
 </button>

 <a
 href={`mailto:${studentData.contact.email}`}
 className="flex items-center justify-center p-2.5 bg-black hover:bg-zinc-800 text-white transition-colors border border-black shadow-sm"
 title="Open in Mail App" aria-label="Send email"
 >
 <ArrowUpRight className="w-4 h-4" />
 </a>
 </div>
 </div>

 {/* Social Channels */}
 <div className="p-6 bg-white border border-[#121212] shadow-sm space-y-3">
 <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block mb-1">Professional Profiles</span>
 
 <a
 href={studentData.contact.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 hover:border-black text-black transition-all group"
 >
 <div className="flex items-center gap-3">
 <div className="p-2 bg-black text-white">
 <Linkedin className="w-4 h-4" />
 </div>
 <div>
 <span className="text-sm font-bold uppercase block">LinkedIn Profile</span>
 <span className="text-[10px] text-zinc-500 font-mono">Connect & Endorse</span>
 </div>
 </div>
 <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
 </a>

 <a
 href={studentData.contact.github}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-300 hover:border-black text-black transition-all group"
 >
 <div className="flex items-center gap-3">
 <div className="p-2 bg-black text-white">
 <Github className="w-4 h-4" />
 </div>
 <div>
 <span className="text-sm font-bold uppercase block">GitHub Repositories</span>
 <span className="text-[10px] text-zinc-500 font-mono">@rahulkrvermaa</span>
 </div>
 </div>
 <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
 </a>
 </div>

 {/* Location & Timezone */}
 <div className="p-4 bg-zinc-100 border border-zinc-300 flex items-center justify-between text-sm font-mono text-zinc-700">
 <div className="flex items-center gap-2">
 <MapPin className="w-4 h-4 text-black" />
 <span className="uppercase font-bold">{studentData.location}</span>
 </div>
 <div className="flex items-center gap-1.5 text-zinc-500">
 <Clock className="w-3.5 h-3.5 text-black" />
 <span>IST (UTC+5:30)</span>
 </div>
 </div>

 </div>

 {/* Right Column: Contact Form with Name, Email & Message */}
 <div className="lg:col-span-7 p-6 sm:p-8 bg-white border border-[#121212] shadow-sm">
 <div className="flex items-center justify-between mb-6 pb-3 border-b border-black">
 <div className="flex items-center gap-2">
 <MessageSquare className="w-4 h-4 text-black" />
 <h4 className="text-base font-bold uppercase tracking-tight text-black">Contact Form</h4>
 </div>
 <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold">Quick Inquiries</span>
 </div>

 {submitted ? (
 <div className="p-6 bg-emerald-50 border border-emerald-300 text-center space-y-3">
 <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-full">
 <Check className="w-5 h-5" />
 </div>
 <h5 className="font-bold text-base text-emerald-900 uppercase">Message Prepared</h5>
 <p className="text-sm text-emerald-700 font-mono">
 Your mail client has been opened to send this note directly to {studentData.contact.email}.
 </p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Name field */}
 <div>
 <label htmlFor="contact-name" className="block text-[10px] font-mono uppercase font-bold text-zinc-700 mb-1.5">
 Your Name <span className="text-red-500">*</span>
 </label>
 <input
 id="contact-name"
 type="text"
 required
 placeholder="e.g. Rahul Sharma / Recruiter"
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-[#121212] text-black placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-black font-sans"
 />
 </div>

 {/* Email field */}
 <div>
 <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase font-bold text-zinc-700 mb-1.5">
 Your Email <span className="text-red-500">*</span>
 </label>
 <input
 id="contact-email"
 type="email"
 required
 placeholder="e.g. name@company.com"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-[#121212] text-black placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-black font-sans"
 />
 </div>

 {/* Message field */}
 <div>
 <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase font-bold text-zinc-700 mb-1.5">
 Your Message <span className="text-red-500">*</span>
 </label>
 <textarea
 id="contact-message"
 required
 rows={5}
 placeholder="Write your inquiry, project proposal, or internship opportunity details here..."
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-[#121212] text-black placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-black font-sans leading-relaxed resize-y"
 />
 </div>

 <button
 type="submit"
 id="contact-submit-btn"
 className="w-full py-3 bg-black hover:bg-zinc-800 text-white font-bold font-mono text-sm uppercase tracking-wider transition-all border border-black shadow-sm flex items-center justify-center gap-2"
 >
 <Send className="w-4 h-4" />
 <span>Send Message</span>
 </button>
 </form>
 )}
 </div>

 </div>

 </div>
 </section>
 );
};

