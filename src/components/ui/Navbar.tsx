import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { studentData } from '../../data/data.ts';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Hire me', href: '#contact' },
  ];

  const isClickScrolling = React.useRef(false);

  useEffect(() => {
    // Scroll listener for sticky header
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Ensure dark class is removed from HTML since user doesn't want dark mode
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    // Scroll Spy Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#121212] py-3'
          : 'bg-[#F8F9FA]/80 backdrop-blur-sm border-b border-zinc-300 py-4'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          id="navbar-brand"
          className="group flex items-center gap-3 text-[#121212] hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-[#121212] text-white flex items-center justify-center font-mono font-bold text-sm">
            RV
          </div>
          <div>
            <div className="font-bold tracking-tight text-base sm:text-lg flex items-center gap-2 uppercase">
              <span>{studentData.name}</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase hidden sm:block">
              B.Tech CSE &bull; Developer &bull; Problem Solver
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 border border-[#121212] bg-white px-2 py-1 shadow-sm relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href.substring(1));
                  isClickScrolling.current = true;
                  setTimeout(() => { isClickScrolling.current = false; }, 1000);
                }}
                className={`relative px-3 py-1 text-base font-mono font-bold uppercase tracking-wider transition-colors z-10 ${
                  isActive ? 'text-white' : 'text-zinc-700 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbarActivePill"
                    className="absolute inset-0 bg-black z-[-1]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#121212] hover:bg-zinc-800 border border-[#121212] transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
            <span className="text-[10px] px-1 py-0.2 bg-zinc-800 text-zinc-300 font-mono">
              `~`
            </span>
          </button>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono font-bold uppercase tracking-wider text-[#121212] bg-white hover:bg-zinc-100 border border-[#121212] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href={studentData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-700 hover:text-blue-600 hover:bg-zinc-200 border border-zinc-300 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={studentData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-700 hover:text-blue-600 hover:bg-zinc-200 border border-zinc-300 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenTerminal}
            className="p-2 text-white bg-[#121212] border border-[#121212]"
            title="Open Terminal" aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#121212] hover:bg-zinc-200 bg-white border border-[#121212]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-[#121212] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-150">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider border transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#121212] text-white border-[#121212]'
                    : 'text-zinc-800 bg-zinc-50 border-zinc-300 hover:bg-[#121212] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-200 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-mono font-bold uppercase tracking-wider bg-white hover:bg-zinc-100 text-[#121212] border border-[#121212]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <a
              href={`mailto:${studentData.contact.email}`}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-mono font-bold uppercase tracking-wider bg-[#121212] hover:bg-blue-600 hover:border-blue-600 text-white border border-[#121212]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
