import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AureliaJourneyIntoTheStillness() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
<main className="min-h-screen">
{/*  BEGIN: Hero Section  */}
<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">
<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group shadow-2xl shadow-stone-400/20" data-purpose="hero-container">
{/*  Background Image  */}
<img alt="Golden sand dunes at sunset representing a slow desert escape" className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUv7ebbxz3t91wDdvFLxTOS3mad1tCsHzgfSkVnOVr8bYRtWx8tMRCWsYTo03rua9Tam_Fd41D2fWa0GEYgFf_jMUK4MGC60HsxetwCM25mvoU_-EhW-tkDoKPH21fCz8izV272mUOQsFdX87mwCQrtH0ufHCni8JKq_htmXc2_mXFyruPPoXhJhfxkARPGidBj107R2JebeId05mbFIUh6ZBWJBpbY4ykmNkAT2-aiknOQejP8f4kmA"/>
{/*  Overlay Gradient  */}
<div className="absolute inset-0 z-[5]" style={{ "background": "linear-gradient(180deg, rgba(59,38,20,0.2) 0%, rgba(40,24,12,0.1) 50%, rgba(30,17,8,0.55) 100%)" }}></div>
{/*  Content Overlay  */}
<div className="relative z-10 w-full h-full flex flex-col items-center">
{/*  BEGIN: Navigation  */}
<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full" data-purpose="main-nav">
<span className="display-font text-2xl tracking-tight text-[#FFF9F0]">Aurelia</span>
<ul className="hidden md:flex items-center gap-10 text-[#FFF9F0]/80 text-sm tracking-wide">
<li className="cursor-pointer hover:text-white transition-colors">Journeys</li>
<li className="cursor-pointer hover:text-white transition-colors">Retreats</li>
<li className="cursor-pointer hover:text-white transition-colors">Journal</li>
</ul>
<button className="btn-hover flex items-center rounded-full pl-5 pr-2 py-1.5 gap-3 text-sm font-medium" style={{ "backgroundColor": "rgba(255,249,240,0.92)", "color": "var(--color-heading)" }}>
<span>Enquire</span>
<div className="p-1.5 rounded-full flex items-center justify-center bg-[#3B2E22]/10">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</button>
</nav>
{/*  END: Navigation  */}
{/*  BEGIN: Hero Text  */}
<div className="w-full flex flex-col items-center pt-16 md:pt-24 px-6 text-center max-w-4xl">
<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit" style={{ "backgroundColor": "rgba(255,249,240,0.15)", "backdropFilter": "blur(12px)", "border": "1px solid var(--color-border)" }}>
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
{/*  END: Hero Text  */}
{/*  BEGIN: Stats Card  */}
<div className="anim-right absolute bottom-32 left-6 right-auto md:right-8 md:left-auto md:bottom-8 lg:bottom-12 lg:right-12 p-5 md:p-6 rounded-[1.8rem] flex flex-col gap-4 min-w-[180px] w-fit" style={{ "backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(24px)", "border": "1px solid var(--color-border)" }}>
<div className="flex flex-col">
<span className="display-font text-3xl md:text-4xl text-[#FFF9F0]">27</span>
<span className="text-[11px] uppercase tracking-[0.15em] text-[#FFF9F0]/70 font-medium">Camps Worldwide</span>
</div>
<button className="btn-hover flex items-center rounded-full pl-2 pr-5 py-2 gap-3 self-start" style={{ "backgroundColor": "rgba(255,249,240,0.95)", "color": "var(--color-heading)" }}>
<div className="p-1.5 rounded-full flex items-center justify-center bg-[#3B2E22]/10">
<i className="w-4 h-4" data-lucide="compass"></i>
</div>
<span className="text-xs font-semibold uppercase tracking-wider">View map</span>
</button>
</div>
{/*  END: Stats Card  */}
{/*  BEGIN: Bottom-Left Notch  */}
<div className="anim-corner absolute bottom-0 left-0 p-5 pt-8 pr-10 md:p-8 md:pt-10 md:pr-16 rounded-tr-[2.5rem] md:rounded-tr-[4rem] flex items-center gap-5 md:gap-8" style={{ "backgroundColor": "var(--color-bg)" }}>
{/*  Top Intersection Mask (SVG Curve)  */}
<div className="absolute -top-[2.5rem] md:-top-[4rem] left-0 w-[2.5rem] md:w-[4rem] h-[2.5rem] md:h-[4rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 64 64" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 64V0C0 35.3462 28.6538 64 64 64H0Z" fill="#F5F1E8"></path>
</svg>
</div>
{/*  Right Intersection Mask (SVG Curve)  */}
<div className="absolute bottom-0 -right-[2.5rem] md:-right-[4rem] w-[2.5rem] md:w-[4rem] h-[2.5rem] md:h-[4rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 64 64" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 64H64C28.6538 64 0 35.3462 0 0V64Z" fill="#F5F1E8"></path>
</svg>
</div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#3B2E22]/5 border border-[#3B2E22]/10">
<i className="w-6 h-6" data-lucide="arrow-up-right" style={{ "color": "var(--color-accent)" }}></i>
</div>
<div className="flex flex-col">
<span className="text-lg md:text-xl font-medium" style={{ "color": "var(--color-heading)" }}>Journal</span>
<div className="flex items-center gap-1.5 cursor-pointer group/link" style={{ "color": "var(--color-gold)" }}>
<span className="text-xs md:text-sm font-medium">Read the field notes</span>
<i className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" data-lucide="chevron-right"></i>
</div>
</div>
</div>
{/*  END: Bottom-Left Notch  */}
</div>
</section>
</div>
{/*  END: Hero Section  */}
{/*  BEGIN: Featured Retreats Section  */}
<section className="py-24 md:py-32 px-6 md:px-10 max-w-[1536px] mx-auto" data-purpose="featured-retreats">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 block" style={{ "color": "var(--color-accent)" }}>Curated Sanctuaries</span>
<h2 className="display-font text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight" style={{ "color": "var(--color-heading)" }}>Exceptional stays for the intentional traveler</h2>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<span className="text-sm font-medium border-b border-stone-300 pb-1" style={{ "color": "var(--color-heading)" }}>Explore all retreats</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" style={{ "color": "var(--color-heading)" }}></i>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1: Oman  */}
<div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="The Empty Quarter, Oman" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5M510KITpGSQ6ieQobNGHKP_UVlCUbOF3wxZ_kUfVjfNrDmNyUhKCqxkhvWbxisybB1JUq_BxhFDgcIBMelg2dUGPe89a6yxhAiTw7Fhc935fWWyuHwV2tyzhVAWeC7tqYETq8CjbviGD5OGrCrt8UGCGrLcoWcJT6Br25WnA2Nn1e_FExF3f4T6iC7TJhiqw-3uqhHVPnHqO3hgCoquqHAzTTGaCA9xqzowdbnv7mqq1hlHqAnKNuw"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/20 flex flex-col gap-2" style={{ "backgroundColor": "var(--color-card-glass-strong)" }}>
<span className="text-[10px] uppercase tracking-widest font-semibold" style={{ "color": "var(--color-accent)" }}>Solitude</span>
<h3 className="display-font text-2xl text-[#3B2E22]">The Empty Quarter, Oman</h3>
<p className="text-xs leading-relaxed text-[#3B2E22]/70">Wander through ancient sands in the quietest place on Earth.</p>
</div>
</div>
</div>
{/*  Card 2: Arizona  */}
<div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="Sonoran Sanctuary, Arizona" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYH4QppMWQfhWhH-tf26SxzvDuTkWVtmeMKg9ERYEb3V-C6Y2nZliV_99sKbnfzdhyZ5WS4ObhK9j06cuKzVOlwfHL3Y_Tduzz-9jN4hHdVoGtU10NTemb2iO1TVed0l-x9lgdMVoI-zmm5i-BJ9518CfuOgXyhc2X3myStWZT6Y1K9Te0-gpU_x0Bl46o0G-3xiim9Yvo64oqKm8OtUNYuNgSDmEjy3loXUDRTuSpZvcKWyes9t1hiA"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/20 flex flex-col gap-2" style={{ "backgroundColor": "var(--color-card-glass-strong)" }}>
<span className="text-[10px] uppercase tracking-widest font-semibold" style={{ "color": "var(--color-accent)" }}>Wellness</span>
<h3 className="display-font text-2xl text-[#3B2E22]">Sonoran Sanctuary, Arizona</h3>
<p className="text-xs leading-relaxed text-[#3B2E22]/70">Holistic restoration amidst the iconic Saguaro silhouettes.</p>
</div>
</div>
</div>
{/*  Card 3: Jordan  */}
<div className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="Wadi Rum Escape, Jordan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmUOeztVIWzsuOuliGSvxg37a3sureihl1pmuKoOdRpJkX4L_CkPZrhQVpLzQtYAjK9LaU3892Z7OT_nPolmbsZMO762MLCm6jvK3HbdxMf-zMq8TNwzT-mLdsUBVrMX5Q0lTnoQ4v197ZWkdHoc-acUJxvFpHWcg2wpo0ba7C5J4LhsUnuJOywGTGo6QUHQ8MbGe1h33CvY9Il6iRSPpqyZOaGpvqhLABtiEeZxW8XPovmffhPWZoUw"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/20 flex flex-col gap-2" style={{ "backgroundColor": "var(--color-card-glass-strong)" }}>
<span className="text-[10px] uppercase tracking-widest font-semibold" style={{ "color": "var(--color-accent)" }}>Heritage</span>
<h3 className="display-font text-2xl text-[#3B2E22]">Wadi Rum Escape, Jordan</h3>
<p className="text-xs leading-relaxed text-[#3B2E22]/70">Red sands and Bedouin hospitality in a Martian landscape.</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: Featured Retreats Section  */}
{/*  BEGIN: Philosophy Section  */}
<section className="bg-stone-50 py-32 px-6 md:px-10 overflow-hidden" data-purpose="philosophy">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="w-12 h-[1px] mb-12" style={{ "backgroundColor": "var(--color-accent)" }}></div>
<h2 className="display-font text-3xl md:text-5xl lg:text-6xl leading-tight mb-16" style={{ "color": "var(--color-heading)" }}>
      "The desert is a place of <span style={{ "color": "var(--color-accent)" }}>subtraction</span>, where everything that is not essential falls away until only the <span className="italic">horizon</span> remains."
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-3xl">
<p className="text-base md:text-lg leading-relaxed opacity-80">
      At Aurelia, we believe travel shouldn't be about the number of destinations visited, but the depth of the presence found. We curate journeys that prioritize stillness over schedules and connection over checklists.
    </p>
<p className="text-base md:text-lg leading-relaxed opacity-80">
      Our philosophy of <span className="font-semibold" style={{ "color": "var(--color-accent)" }}>slow travel</span> invites you to linger. To watch the light change across a dune for three hours. To listen to the silence of a desert night. To truly arrive.
    </p>
</div>
</div>
</section>
{/*  END: Philosophy Section  */}
{/*  BEGIN: Inquiry Footer  */}
<footer className="pt-24 pb-12 px-6 md:px-10 max-w-[1536px] mx-auto" data-purpose="footer">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
{/*  Branding & Newsletter  */}
<div className="lg:col-span-5 flex flex-col gap-8">
<span className="display-font text-3xl tracking-tight" style={{ "color": "var(--color-heading)" }}>Aurelia</span>
<p className="max-w-sm text-sm leading-relaxed opacity-70">
        Receive our seasonal field notes on quiet places and the art of slowing down. No noise, just inspiration.
      </p>
<form className="flex gap-2 max-w-md">
<input className="flex-1 bg-white/50 border border-stone-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C1652F]/30 placeholder:text-stone-400 backdrop-blur-sm" placeholder="Your email address" type="email"/>
<button className="bg-[#3B2E22] text-[#F5F1E8] px-6 py-3 rounded-full text-sm font-medium btn-hover">Join</button>
</form>
</div>
{/*  Links  */}
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-5">
<span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Discovery</span>
<ul className="flex flex-col gap-3 text-sm font-medium" style={{ "color": "var(--color-heading)" }}>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Journeys</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Retreats</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Private Hire</li>
</ul>
</div>
<div className="flex flex-col gap-5">
<span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Journal</span>
<ul className="flex flex-col gap-3 text-sm font-medium" style={{ "color": "var(--color-heading)" }}>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Field Notes</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Artist Residency</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Slow Living</li>
</ul>
</div>
<div className="flex flex-col gap-5">
<span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Contact</span>
<ul className="flex flex-col gap-3 text-sm font-medium" style={{ "color": "var(--color-heading)" }}>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Enquire</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Instagram</li>
<li className="hover:text-[#C1652F] cursor-pointer transition-colors">Press</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-stone-200 gap-6">
<span className="text-[10px] uppercase tracking-widest font-medium opacity-40">© 2024 Aurelia Travel Group</span>
<div className="flex items-center gap-8">
<span className="text-[10px] uppercase tracking-widest font-medium opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Privacy</span>
<span className="text-[10px] uppercase tracking-widest font-medium opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Terms</span>
<span className="text-[10px] uppercase tracking-widest font-medium opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Cookies</span>
</div>
</div>
</footer>
{/*  END: Inquiry Footer  */}
</main>
{/*  BEGIN: Scripts  */}

{/*  END: Scripts  */}

    </div>
  );
}
