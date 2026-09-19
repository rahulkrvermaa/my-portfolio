import React, { useEffect, useState } from'react';
import { Sparkles } from'lucide-react';

interface AppleLoadingScreenProps {
 onComplete: () => void;
}

export const AppleLoadingScreen: React.FC<AppleLoadingScreenProps> = ({ onComplete }) => {
 const [progress, setProgress] = useState(0);
 const [isFadingOut, setIsFadingOut] = useState(false);

 useEffect(() => {
 // Smooth progress counter
 const interval = setInterval(() => {
 setProgress((prev) => {
 if (prev >= 100) {
 clearInterval(interval);
 return 100;
 }
 return prev + 2;
 });
 }, 35);

 // Transition out after the cursive signature animation completes
 const timer = setTimeout(() => {
 setIsFadingOut(true);
 setTimeout(() => {
 onComplete();
 }, 600); // Allow fade out transition
 }, 2500);

 return () => {
 clearInterval(interval);
 clearTimeout(timer);
 };
 }, [onComplete]);

 return (
 <div
 className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F9FA] text-[#121212] transition-all duration-700 select-none ${
 isFadingOut ?'opacity-0 scale-105 pointer-events-none' :'opacity-100 scale-100'
 }`}
 >
 {/* Subtle Background Architectural Grid */}
 <div className="absolute inset-0 bg-grid-pattern opacity-40" />

 {/* Main Apple-style Cursive Signature Container */}
 <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto space-y-6">
 
 {/* Minimalist Top Indicator */}
 <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">
 <span className="w-1.5 h-1.5 bg-black animate-ping" />
 <span>Designing Experience</span>
 </div>

 {/* Cursive Signature Animated Text */}
 <div className="relative py-4 px-8">
 {/* Main animated cursive script */}
 <h1 className="font-cursive lowercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#121212] tracking-normal font-normal animate-cursive-write drop-shadow-xs">
 rahul verma
 </h1>

 {/* Secondary glowing handwriting accent */}
 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[1.5px] bg-gradient-to-r from-transparent via-black to-transparent opacity-80" />
 </div>

 {/* Minimal Apple-style subtitle */}
 <div className="space-y-2 text-center">
 <p className="text-sm sm:text-base font-mono tracking-widest uppercase text-zinc-600 font-semibold">
 B.Tech Computer Science &bull; Software Engineering
 </p>
 </div>

 {/* Minimal Progress Bar */}
 <div className="w-48 sm:w-64 space-y-2 pt-4">
 <div className="w-full h-1 bg-zinc-200 overflow-hidden border border-zinc-300">
 <div
 className="h-full bg-black transition-all duration-150 ease-out"
 style={{ width:`${progress}%` }}
 />
 </div>
 <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
 <span>Building things that matter.</span>
 <span>{progress}%</span>
 </div>
 </div>

 {/* Quick Skip button */}
 <button
 onClick={() => {
 setIsFadingOut(true);
 setTimeout(onComplete, 300);
 }}
 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-black transition-colors pt-2 underline underline-offset-4 cursor-pointer"
 >
 Skip Intro &rarr;
 </button>

 </div>

 {/* Corner Minimal Specs */}
 <div className="absolute bottom-6 left-6 text-[10px] font-mono text-zinc-400 uppercase tracking-wider hidden sm:block">
 SYS_INIT &bull; LAT_25.5941 &bull; LON_85.1376
 </div>
 <div className="absolute bottom-6 right-6 text-[10px] font-mono text-zinc-400 uppercase tracking-wider hidden sm:block">
 &copy; 2026 RAHUL VERMA
 </div>
 </div>
 );
};
