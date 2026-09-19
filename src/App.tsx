import React, { useState, useEffect, Suspense, lazy } from'react';
import { Navbar } from'./components/ui/Navbar.tsx';
import { Hero } from'./components/sections/Hero.tsx';
import { Footer } from'./components/ui/Footer.tsx';
import { AppleLoadingScreen } from'./components/ui/AppleLoadingScreen.tsx';
import { Terminal } from'lucide-react';
import { CustomCursor } from'./components/ui/CustomCursor.tsx';
import { Reveal } from'./components/ui/Reveal.tsx';
import { Analytics } from'@vercel/analytics/react';

// Lazy loaded non-critical section components & modals
const AboutSection = lazy(() => import('./components/sections/AboutSection.tsx').then(m => ({ default: m.AboutSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection.tsx').then(m => ({ default: m.ProjectsSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection.tsx').then(m => ({ default: m.SkillsSection })));
const CertificatesSection = lazy(() => import('./components/sections/CertificatesSection.tsx').then(m => ({ default: m.CertificatesSection })));
const CodingActivitySection = lazy(() => import('./components/sections/CodingActivitySection.tsx').then(m => ({ default: m.CodingActivitySection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection.tsx').then(m => ({ default: m.ContactSection })));
const InteractiveTerminal = lazy(() => import('./components/ui/InteractiveTerminal.tsx').then(m => ({ default: m.InteractiveTerminal })));
const ResumeModal = lazy(() => import('./components/modals/ResumeModal.tsx').then(m => ({ default: m.ResumeModal })));

// Architectural Section Loading Fallback with Full Width Grid
const SectionLoadingFallback: React.FC<{ label?: string }> = ({ label ='Loading Architecture Module' }) => (
 <div className="py-12 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
 <div className="p-8 border border-[#121212] bg-white flex flex-col items-center justify-center gap-2.5 text-center shadow-xs">
 <div className="w-5 h-5 border-2 border-black border-t-transparent animate-spin" />
 <span className="text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-zinc-600">
 {label}
 </span>
 </div>
 </div>
);

export default function App() {
 const [isLoading, setIsLoading] = useState(true);
 const [terminalOpen, setTerminalOpen] = useState(false);
 const [resumeOpen, setResumeOpen] = useState(false);

 // Global hotkey listener for CLI terminal (` or ~)
 useEffect(() => {
 const handleKeyDown = (e: KeyboardEvent) => {
 if (e.key ==='`' || e.key ==='~') {
 if (
 document.activeElement?.tagName !=='INPUT' &&
 document.activeElement?.tagName !=='TEXTAREA'
 ) {
 e.preventDefault();
 setTerminalOpen((prev) => !prev);
 }
 } else if (e.key ==='Escape') {
 setTerminalOpen(false);
 setResumeOpen(false);
 }
 };

 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
 }, []);

 useEffect(() => {
 if (terminalOpen) {
 document.body.classList.add('terminal-open');
 } else {
 document.body.classList.remove('terminal-open');
 }
 }, [terminalOpen]);

 return (
 <div className="min-h-screen bg-[#F8F9FA] bg-grid-pattern text-[#121212] selection:bg-[#121212] selection:text-white relative font-sans">
 <CustomCursor />
 
 {/* Apple-Style Cursive Handwriting Loading Animation */}
 {isLoading && (
 <AppleLoadingScreen onComplete={() => setIsLoading(false)} />
 )}

 {/* Navigation Bar */}
 <Navbar
 onOpenTerminal={() => setTerminalOpen(true)}
 onOpenResume={() => setResumeOpen(true)}
 />

 {/* Main Content Sections with Lazy Loading */}
 <main className="w-full">
 <Hero
 onOpenTerminal={() => setTerminalOpen(true)}
 onOpenResume={() => setResumeOpen(true)}
 />
 
 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading About Section" />}>
 <AboutSection />
 </Suspense>
 </Reveal>

 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading Featured Projects" />}>
 <ProjectsSection />
 </Suspense>
 </Reveal>

 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading Technical Skills" />}>
 <SkillsSection />
 </Suspense>
 </Reveal>

 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading Verified Certifications" />}>
 <CertificatesSection />
 </Suspense>
 </Reveal>

 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading Coding Activity" />}>
 <CodingActivitySection />
 </Suspense>
 </Reveal>

 <Reveal delay={0.1}>
 <Suspense fallback={<SectionLoadingFallback label="Loading Contact System" />}>
 <ContactSection />
 </Suspense>
 </Reveal>
 </main>

 {/* Footer */}
 <Footer onOpenTerminal={() => setTerminalOpen(true)} />

 {/* Lazy Loaded Interactive Terminal Shell Modal */}
 {terminalOpen && (
 <Suspense fallback={null}>
 <InteractiveTerminal
 isOpen={terminalOpen}
 onClose={() => setTerminalOpen(false)}
 />
 </Suspense>
 )}

 {/* Lazy Loaded Printable / Viewable Resume Modal */}
 {resumeOpen && (
 <Suspense fallback={null}>
 <ResumeModal
 isOpen={resumeOpen}
 onClose={() => setResumeOpen(false)}
 />
 </Suspense>
 )}

 <Analytics />
 </div>
 );
}
