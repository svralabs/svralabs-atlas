import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NimbusYourFilesAlwaysInTheAir() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="min-h-screen" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">

<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group" data-purpose="hero-card">

<img alt="A single fluffy cloud in a clear blue sky" className="absolute inset-0 w-full h-full object-cover object-center z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqrHeqTHXb5KUxMOm47Ax7fNbU_iMM-8JMddFhfIAWxKAJ31tyJvyysZCL_0iEdThIx0T-l7NiNQ5-CaFCb5sfugdybJh_lwsdzytwLEoA-ze7Yz1617Sqnx8P9TSI25Gkj23x8jv37VGGSYKrngMM1LbgRKQ51trtMbZcJPApcwjxgfTbYXCAsaJw6U-U9w5O3ivij7uR5C5NpIdkplNXQoycF6-8RZFYallQ1SICf-7kZtEhhbNT3w"/>

<div className="absolute inset-0 z-[5]" style={{"background": "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(234,242,251,0.25) 60%, rgba(234,242,251,0.55) 100%)"}}></div>

<div className="relative z-10 w-full h-full flex flex-col items-center">

<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full">
<span className="text-2xl font-semibold tracking-tight" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>nimbus</span>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium" style={{"color": "var(--color-heading)"}}>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Product</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Teams</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Pricing</li>
</ul>
<button className="btn-hover flex items-center rounded-full pl-4 pr-2 py-1.5 gap-2 text-sm font-medium" style={{"backgroundColor": "var(--color-heading)", "color": "#F5F9FF"}}>
<span>Get Started</span>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(245,249,255,0.2)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</button>
</nav>


<div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-3xl">

<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full mb-4 w-fit" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(12px)", "border": "1px solid var(--color-border)"}}>
<i className="w-4 h-4" data-lucide="cloud" style={{"color": "var(--color-accent)"}}></i>
<span className="text-sm font-medium" style={{"color": "var(--color-heading)"}}>2.1PB synced today</span>
</div>
<h1 className="anim-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[76px] mb-3 tracking-tight leading-[1.05] font-medium" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>
              Your files, always<br className="hidden sm:block"/> in the air
            </h1>
<p className="anim-p text-sm sm:text-base md:text-lg leading-relaxed max-w-xl" style={{"color": "var(--color-text)"}}>
              One workspace that syncs across every device instantly, keeps every version, and never asks you to think about storage again.
            </p>
</div>


<div className="anim-left absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] flex flex-col gap-2 lg:gap-3 min-w-[150px] w-fit" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(20px)", "border": "1px solid var(--color-border)"}}>
<div className="flex flex-col">
<span className="text-2xl md:text-3xl tracking-tight" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)", "fontWeight": "600"}}>99.99%</span>
<span className="text-[10px] md:text-[12px] uppercase tracking-wider font-bold" style={{"color": "rgba(31,45,61,0.55)"}}>Uptime, 12mo avg</span>
</div>
<button className="btn-hover flex items-center rounded-full pl-1.5 pr-4 py-1.5 gap-2 self-start" style={{"backgroundColor": "white", "color": "var(--color-heading)"}}>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(59,130,196,0.12)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right" style={{"color": "var(--color-accent)"}}></i>
</div>
<span className="text-sm font-medium">Status page</span>
</button>
</div>


<div className="anim-corner absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="var(--color-bg)"></path>
</svg>
</div>

<div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="var(--color-bg)"></path>
</svg>
</div>

<div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(59,130,196,0.08)", "border": "1px solid rgba(59,130,196,0.18)"}}>
<i data-lucide="arrow-up-right" style={{"color": "var(--color-accent)"}}></i>
</div>
<div className="flex flex-col">
<span className="text-[16px] md:text-[20px] font-medium" style={{"color": "var(--color-heading)"}}>Documentation</span>
<div className="flex items-center gap-1 cursor-pointer transition-colors hover:opacity-80" style={{"color": "rgba(31,45,61,0.55)"}}>
<span className="text-[12px] md:text-[15px]">API reference</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
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
