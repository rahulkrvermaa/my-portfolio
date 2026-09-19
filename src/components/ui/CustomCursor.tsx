import React, { useEffect, useState } from'react';

export const CustomCursor: React.FC = () => {
 const [position, setPosition] = useState({ x: 0, y: 0 });
 const [isHovering, setIsHovering] = useState(false);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const onMouseMove = (e: MouseEvent) => {
 setPosition({ x: e.clientX, y: e.clientY });
 if (!isVisible) setIsVisible(true);
 
 // Check if we're hovering over an interactive element
 const target = e.target as HTMLElement;
 const isInteractive = 
 window.getComputedStyle(target).cursor ==='pointer' ||
 target.tagName.toLowerCase() ==='button' ||
 target.tagName.toLowerCase() ==='a' ||
 target.closest('button') !== null ||
 target.closest('a') !== null;
 
 setIsHovering(isInteractive);
 };
 
 const onMouseLeave = () => setIsVisible(false);
 const onMouseEnter = () => setIsVisible(true);

 window.addEventListener('mousemove', onMouseMove);
 window.addEventListener('mouseleave', onMouseLeave);
 window.addEventListener('mouseenter', onMouseEnter);

 return () => {
 window.removeEventListener('mousemove', onMouseMove);
 window.removeEventListener('mouseleave', onMouseLeave);
 window.removeEventListener('mouseenter', onMouseEnter);
 };
 }, [isVisible]);

 // Don't render on touch devices
 if (typeof window !=='undefined' && window.matchMedia('(hover: none)').matches) {
 return null;
 }

 return (
 <div aria-hidden="true" 
 className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
 isVisible ?'opacity-100' :'opacity-0'
 } ${isHovering ?'custom-cursor-hover' :''}`}
 >
 <div aria-hidden="true" 
 className="custom-cursor-dot"
 style={{ left:`${position.x}px`, top:`${position.y}px` }}
 />
 <div aria-hidden="true" 
 className="custom-cursor-ring"
 style={{ left:`${position.x}px`, top:`${position.y}px` }}
 />
 </div>
 );
};
