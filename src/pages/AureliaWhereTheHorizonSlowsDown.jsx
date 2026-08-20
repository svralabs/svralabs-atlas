import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AureliaWhereTheHorizonSlowsDown() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
<main className="min-h-screen">

<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">
<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group shadow-2xl shadow-stone-400/20" data-purpose="hero-container">

<img alt="Golden sand dunes at sunset representing a slow desert escape" className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBsm7b71tZRzWIUp2xy0NhtDDdTUr7GS0ZX6qMpcTY9CKlM6QfReYUmdgsLWokl6G8XX3GgDxyLLmPI5fAXiwe5O9J7Vqbvpqz4D4YZVgJU4BowE33UAPMcz-pqgA7qxCWnvac4owYXk9Q2aYyvZG3pA74kr9OCSkBOQKTs-fAV7j36WwcB0R7LUcFQ5MAnEOshFATEtPSzbU0XBrG20JT0J3n5Orsn-JUcjpjvqLqqF6WBG4rNpvTUw"/>

<div className="absolute inset-0 z-[5]" style={{"background": "linear-gradient(180deg, rgba(59,38,20,0.2) 0%, rgba(40,24,12,0.1) 50%, rgba(30,17,8,0.55) 100%)"}}></div>

<div className="relative z-10 w-full h-full flex flex-col items-center">

<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full" data-purpose="main-nav">
<span className="display-font text-2xl tracking-tight text-[#FFF9F0]">Aurelia</span>
<ul className="hidden md:flex items-center gap-10 text-[#FFF9F0]/80 text-sm tracking-wide">
<li className="cursor-pointer hover:text-white transition-colors">Journeys</li>
<li className="cursor-pointer hover:text-white transition-colors">Retreats</li>
<li className="cursor-pointer hover:text-white transition-colors">Journal</li>
</ul>
<button className="btn-hover flex items-center rounded-full pl-5 pr-2 py-1.5 gap-3 text-sm font-medium" style={{"backgroundColor": "rgba(255,249,240,0.92)", "color": "var(--color-heading)"}}>
<span>Enquire</span>
<div className="p-1.5 rounded-full flex items-center justify-center bg-[#3B2E22]/10">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</button>
</nav>


<div className="w-full flex flex-col items-center pt-16 md:pt-24 px-6 text-center max-w-4xl">
<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit" style={{"backgroundColor": "rgba(255,249,240,0.15)", "backdropFilter": "blur(12px)", "border": "1px solid var(--color-border)"}}>
<i className="w-4 h-4 text-[#FFF9F0]" data-lucide="sun"></i>
<span className="text-[11px] uppercase tracking-widest font-medium text-[#FFF9F0]">Handpicked desert stays</span>
</div>
<h1 className="anim-h1 display-font text-5xl sm:text-6xl md:text-7xl lg:text-[88px] mb-6 tracking-tight leading-[1.02] text-[#FFF9F0]">
              Where the horizon<br className="hidden sm:block"/> slows down
            </h1>
<p className="anim-p text-base md:text-lg leading-relaxed max-w-xl text-[#FFF9F0]/80 font-light">
              Private camps, dune retreats and quiet journeys across the world's most striking deserts — planned around your pace, not a schedule.
            </p>
</div>


<div className="anim-right absolute bottom-32 left-6 right-auto md:right-8 md:left-auto md:bottom-8 lg:bottom-12 lg:right-12 p-5 md:p-6 rounded-[1.8rem] flex flex-col gap-4 min-w-[180px] w-fit" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(24px)", "border": "1px solid var(--color-border)"}}>
<div className="flex flex-col">
<span className="display-font text-3xl md:text-4xl text-[#FFF9F0]">27</span>
<span className="text-[11px] uppercase tracking-[0.15em] text-[#FFF9F0]/70 font-medium">Camps Worldwide</span>
</div>
<button className="btn-hover flex items-center rounded-full pl-2 pr-5 py-2 gap-3 self-start" style={{"backgroundColor": "rgba(255,249,240,0.95)", "color": "var(--color-heading)"}}>
<div className="p-1.5 rounded-full flex items-center justify-center bg-[#3B2E22]/10">
<i className="w-4 h-4" data-lucide="compass"></i>
</div>
<span className="text-xs font-semibold uppercase tracking-wider">View map</span>
</button>
</div>


<div className="anim-corner absolute bottom-0 left-0 p-5 pt-8 pr-10 md:p-8 md:pt-10 md:pr-16 rounded-tr-[2.5rem] md:rounded-tr-[4rem] flex items-center gap-5 md:gap-8" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="absolute -top-[2.5rem] md:-top-[4rem] left-0 w-[2.5rem] md:w-[4rem] h-[2.5rem] md:h-[4rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 64 64" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 64V0C0 35.3462 28.6538 64 64 64H0Z" fill="#F5F1E8"></path>
</svg>
</div>

<div className="absolute bottom-0 -right-[2.5rem] md:-right-[4rem] w-[2.5rem] md:w-[4rem] h-[2.5rem] md:h-[4rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 64 64" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 64H64C28.6538 64 0 35.3462 0 0V64Z" fill="#F5F1E8"></path>
</svg>
</div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#3B2E22]/5 border border-[#3B2E22]/10">
<i className="w-6 h-6" data-lucide="arrow-up-right" style={{"color": "var(--color-accent)"}}></i>
</div>
<div className="flex flex-col">
<span className="text-lg md:text-xl font-medium" style={{"color": "var(--color-heading)"}}>Journal</span>
<div className="flex items-center gap-1.5 cursor-pointer group/link" style={{"color": "var(--color-gold)"}}>
<span className="text-xs md:text-sm font-medium">Read the field notes</span>
<i className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" data-lucide="chevron-right"></i>
</div>
</div>
</div>

</div>
</section>
</div>

</main>




    </div>
  );
}
