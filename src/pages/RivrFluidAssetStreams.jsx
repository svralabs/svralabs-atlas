import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RivrFluidAssetStreams() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
<main className="min-h-screen">
{/*  BEGIN: HeroSection  */}
<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">
<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-white/10">
{/*  Background Media  */}
<img alt="Dark navy blue fluid abstract background" className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLcUgwrPVSBMUsRtv0YTbSljDYCxFAY7S7-58aO8o9q_p7lBv13RkcAwyU6gtnPwvmQJnie47gHw2UOXIwuZbNMMZVSakcHT4_61LmRDRMfIF3WaDHpl4YQVqNIwmFXEiToIjlqu5BWks33NpBcY-2mPaeNpGSTxY3k_sHE5el7bjt1ka_y3EBdXixOPhmvqJt2MmWPMGyQmlIZfGa3LMZe3AWbpZVccYmT3Ng5CoPx7ZiQpSazncBsw"/>
{/*  Legibility Overlay  */}
<div className="absolute inset-0 z-[5]" style={{ "background": "linear-gradient(180deg, var(--hero-overlay) 0%, var(--hero-overlay) 55%, var(--hero-overlay-bottom) 100%)" }}></div>
{/*  Foreground Content  */}
<div className="relative z-10 w-full h-full flex flex-col items-center">
{/*  Navigation  */}
<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10" data-purpose="primary-nav">
<div className="flex-1 hidden md:block"></div>
<ul className="hidden md:flex items-center gap-8 text-white/85 font-normal text-sm">
<li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group/item">
<span>Ecosystem</span>
</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group/item">
<span>Economics</span>
<i className="w-4 h-4 transition-transform group-hover/item:translate-x-0.5" data-lucide="chevron-right"></i>
</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group/item">
<span>Developers</span>
</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group/item">
<span>Governance</span>
<i className="w-4 h-4 transition-transform group-hover/item:translate-x-0.5" data-lucide="chevron-right"></i>
</li>
</ul>
{/*  Mobile Logo Placeholder  */}
<div className="md:hidden">
<span className="font-regular tracking-tighter text-xl text-white">RIVR</span>
</div>
{/*  CTA Button  */}
<div className="flex-1 flex justify-end">
<button className="btn-hover flex items-center bg-white/95 text-[rgba(30,50,90,0.95)] rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-white transition-colors group">
<div className="bg-[rgba(30,50,90,0.1)] p-1 md:p-1.5 rounded-full flex items-center justify-center">
<i className="w-4 h-4 md:w-5 md:h-5 text-[rgba(30,50,90,0.9)]" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xs md:text-sm font-normal">Book Demo</span>
</button>
</div>
</nav>
{/*  Hero Text  */}
<div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl" data-purpose="hero-copy">
<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mx-auto mb-3 w-fit">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
<span className="text-[14px] font-normal text-white">Fluid Staking</span>
</div>
<h1 className="anim-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[color:var(--hero-heading)] mb-2 tracking-tight leading-[1.05]">
            Fluid Asset Streams
          </h1>
<p className="anim-p text-sm sm:text-base md:text-lg text-[color:var(--hero-text)] leading-relaxed max-w-xl font-normal">
            Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid cash instantly.
          </p>
</div>
{/*  Floating Stats Card  */}
<div className="anim-left absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/10 backdrop-blur-xl border border-white/15 flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit">
<div className="flex flex-col">
<span className="text-2xl md:text-3xl font-normal text-[color:var(--hero-heading)] tracking-tight">5.2K</span>
<span className="text-[10px] md:text-[12px] font-normal text-[color:var(--hero-text-dim)] uppercase tracking-wider">Active Yielders</span>
</div>
<button className="btn-hover flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group">
<div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[rgba(30,50,90,0.9)]" data-lucide="arrow-up-right"></i>
</div>
<span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Join Discord</span>
</button>
</div>
{/*  Documentation Corner  */}
<div className="anim-corner absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6">
{/*  Curve masks for corner integration  */}
<div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0"></path>
</svg>
</div>
<div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0"></path>
</svg>
</div>
<div className="bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
<i className="text-[rgba(30,50,90,0.8)]" data-lucide="arrow-up-right"></i>
</div>
<div className="flex flex-col">
<span className="text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]">Documentation</span>
<div className="flex items-center gap-1 text-[rgba(30,50,90,0.6)] cursor-pointer hover:text-[rgba(30,50,90,0.8)] transition-colors">
<span className="text-[12px] md:text-[15px] font-normal">Library</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  END: HeroSection  */}
{/*  BEGIN: StatisticsBar  */}
<div className="w-full px-3 md:px-5 pb-3 md:pb-5">
<div className="reveal w-full max-w-[1536px] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/40 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-6 sm:px-10 py-8 sm:py-10">
<div className="flex flex-col items-center sm:items-start">
<span className="text-2xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">$482M</span>
<span className="text-[11px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Value Streamed</span>
</div>
<div className="hidden sm:block w-px h-10 bg-[rgba(30,50,90,0.1)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="text-2xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">5.2K</span>
<span className="text-[11px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Active Yielders</span>
</div>
<div className="hidden sm:block w-px h-10 bg-[rgba(30,50,90,0.1)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="text-2xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">12</span>
<span className="text-[11px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Chains Supported</span>
</div>
<div className="hidden sm:block w-px h-10 bg-[rgba(30,50,90,0.1)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="text-2xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">8.4%</span>
<span className="text-[11px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Avg. Vault APY</span>
</div>
</div>
</div>
{/*  END: StatisticsBar  */}
{/*  BEGIN: SmartVaultsSection  */}
<div className="w-full px-3 md:px-5 pb-3 md:pb-5">
<div className="w-full max-w-[1536px] mx-auto">
{/*  Header Content  */}
<div className="reveal flex flex-col items-center text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mb-4 w-fit">
<i className="w-4 h-4 text-[rgba(30,50,90,0.8)]" data-lucide="layers"></i>
<span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Smart Vaults</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#5E6470] tracking-tight leading-[1.1] mb-3">Every asset, kept in motion</h2>
<p className="text-sm sm:text-base text-[#5E6470] opacity-80 leading-relaxed font-normal">Three ways to turn what you hold into liquidity you can use, without ever selling the underlying position.</p>
</div>
{/*  Feature Grid  */}
<div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-4">
{/*  Card 1: Stake & Stream  */}
<div className="card-hover rounded-[1.5rem] md:rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 overflow-hidden flex flex-col">
<div className="relative h-36 md:h-40 w-full overflow-hidden">
<img alt="Fluid blue liquid texture" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZLyVz4AeIyfj3pJjyPsiOiL0hXQECmLiP5GWtfuWtjJaTmIqXUhHqeYJ1dSBh5ibrntFylXOcVzUfkF1e1Shqj3oryeOlJgEK8aoJVTfmoDHAoXHyDunybTH6ppp-bXfiOQ730fpjyoydBdtMv5fiWHxpiWFkTFdHPu0Q8NoMTQrX17nYbxhvuHcvcocQ-kQW8q6Cre9ExF1BwoiJIo49LBwO-PSLqEKfQ8I7Xh9RRkklmOMn2iHuA"/>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3">
<div className="bg-[rgba(30,50,90,0.05)] w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
<i className="w-5 h-5 text-[rgba(30,50,90,0.8)]" data-lucide="shuffle"></i>
</div>
<h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">Stake &amp; Stream</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal">Stake RIVR and let yield stream into your wallet continuously, no manual claiming required.</p>
</div>
</div>
{/*  Card 2: NFT-Backed Liquidity  */}
<div className="card-hover rounded-[1.5rem] md:rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 overflow-hidden flex flex-col">
<div className="relative h-36 md:h-40 w-full overflow-hidden">
<img alt="Translucent glass texture" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpr4LyRbFryQVYk3iYaQz3btQtAyec0wp4Iyw_XXN2lZJRaRQCHdM0XTKMjah9uznhU1RFDirfRZCVxzv4oXI7C2H4TZGIv87bDGpZo208DQpOpC-ouXqbkUUkqoMseCH_t8HkQoQRhsWi0cfQrYTeKgylt2JWx7zX3zNJfB6pYh7pJZz4CXA63fATHEJRMgDtZCxhdaiwT2ea_QDo_XAojvX9cwOg7DJ0ErNcrnaIMwxsbz7WfybWoA"/>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3">
<div className="bg-[rgba(30,50,90,0.05)] w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
<i className="w-5 h-5 text-[rgba(30,50,90,0.8)]" data-lucide="image"></i>
</div>
<h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">NFT-Backed Liquidity</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal">Deposit blue-chip NFTs as collateral and unlock stablecoin liquidity instantly.</p>
</div>
</div>
{/*  Card 3: Cross-Chain Vaults  */}
<div className="card-hover rounded-[1.5rem] md:rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 overflow-hidden flex flex-col">
<div className="relative h-36 md:h-40 w-full overflow-hidden">
<img alt="Minimalist geometric shapes" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt0Davo2XOR3BNf5skFViznWx27xOVViHuW_CTigM7wNVHIPv5HrWTw5gM0Ea27C4IV8ZGB8nHVDs8lMs5RTlbI3fPlNuBrJL9PhLB_0ecWuW8GiJ_EUhw0tB16YfEoKQJ1i3fv0JExQpZAHxHNO8de1-j1wxvLDsMZM6xLenXRFh01MBDajzMM_LPqCxokXyLVf6d_UZt2VxbRgDAbRpIWQ9lYSrp34hA5xSpGAxisoPYYGOknK8rQA"/>
</div>
<div className="p-5 md:p-6 flex flex-col gap-3">
<div className="bg-[rgba(30,50,90,0.05)] w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
<i className="w-5 h-5 text-[rgba(30,50,90,0.8)]" data-lucide="globe"></i>
</div>
<h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">Cross-Chain Vaults</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal">Route deposits across 12 chains automatically to wherever yield is highest.</p>
</div>
</div>
</div>
</div>
</div>
{/*  END: SmartVaultsSection  */}
{/*  BEGIN: HowItWorks  */}
<div className="w-full px-3 md:px-5 pb-3 md:pb-5">
<div className="reveal w-full max-w-[1536px] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/40 p-6 md:p-12">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#5E6470] tracking-tight leading-[1.1] mb-3">How the stream works</h2>
<p className="text-sm sm:text-base text-[#5E6470] opacity-80 leading-relaxed font-normal">From deposit to withdrawal, in three steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
<div className="flex flex-col items-center text-center gap-3">
<span className="text-sm font-normal text-[rgba(30,50,90,0.4)] tracking-widest">01</span>
<div className="bg-white/60 w-14 h-14 rounded-full flex items-center justify-center border border-white/40">
<i className="w-6 h-6 text-[rgba(30,50,90,0.8)]" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)]">Deposit</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal max-w-xs">Connect a wallet and deposit tokens or NFTs into a Smart Vault of your choice.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<span className="text-sm font-normal text-[rgba(30,50,90,0.4)] tracking-widest">02</span>
<div className="bg-white/60 w-14 h-14 rounded-full flex items-center justify-center border border-white/40">
<i className="w-6 h-6 text-[rgba(30,50,90,0.8)]" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)]">Stream</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal max-w-xs">Yield streams to your wallet in real time, second by second, instead of in delayed batches.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<span className="text-sm font-normal text-[rgba(30,50,90,0.4)] tracking-widest">03</span>
<div className="bg-white/60 w-14 h-14 rounded-full flex items-center justify-center border border-white/40">
<i className="w-6 h-6 text-[rgba(30,50,90,0.8)]" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)]">Withdraw</h3>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal max-w-xs">Withdraw principal and streamed yield any time, with no lockups or exit penalties.</p>
</div>
</div>
</div>
</div>
{/*  END: HowItWorks  */}
{/*  BEGIN: LiveVaultsTable  */}
<div className="w-full px-3 md:px-5 pb-3 md:pb-5">
<div className="reveal w-full max-w-[1536px] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/40 p-6 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 md:mb-8">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#5E6470] tracking-tight leading-[1.1] mb-2">Live vaults</h2>
<p className="text-sm text-[#5E6470] opacity-80 leading-relaxed font-normal">A snapshot of current Smart Vault performance.</p>
</div>
<button className="btn-hover flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-4 pr-2 py-1.5 gap-2 hover:bg-[rgba(30,50,90,1)] transition-colors self-start sm:self-auto">
<span className="text-xs md:text-sm font-normal">View all vaults</span>
<div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white" data-lucide="arrow-up-right"></i>
</div>
</button>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full min-w-[560px] border-collapse" id="pricing-table">
<thead>
<tr className="text-left text-[11px] md:text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-normal">
<th className="pb-3 font-normal">Vault</th>
<th className="pb-3 font-normal">TVL</th>
<th className="pb-3 font-normal">APY</th>
<th className="pb-3 font-normal"></th>
</tr>
</thead>
<tbody className="text-sm md:text-base text-[rgba(30,50,90,0.9)] font-normal">
<tr className="border-t border-[rgba(30,50,90,0.08)]">
<td className="py-4 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.1)] flex items-center justify-center text-[11px] font-normal text-[rgba(30,50,90,0.8)]">RV</span>
                RIVR Vault
              </td>
<td className="py-4">$182.4M</td>
<td className="py-4 text-[rgba(30,50,90,0.9)]">9.8%</td>
<td className="py-4 text-right"><i className="w-4 h-4 text-[rgba(30,50,90,0.5)] inline-block" data-lucide="chevron-right"></i></td>
</tr>
<tr className="border-t border-[rgba(30,50,90,0.08)]">
<td className="py-4 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.1)] flex items-center justify-center text-[11px] font-normal text-[rgba(30,50,90,0.8)]">ST</span>
                Stable Stream
              </td>
<td className="py-4">$96.1M</td>
<td className="py-4 text-[rgba(30,50,90,0.9)]">5.2%</td>
<td className="py-4 text-right"><i className="w-4 h-4 text-[rgba(30,50,90,0.5)] inline-block" data-lucide="chevron-right"></i></td>
</tr>
<tr className="border-t border-[rgba(30,50,90,0.08)]">
<td className="py-4 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.1)] flex items-center justify-center text-[11px] font-normal text-[rgba(30,50,90,0.8)]">NF</span>
                NFT Liquidity Pool
              </td>
<td className="py-4">$54.7M</td>
<td className="py-4 text-[rgba(30,50,90,0.9)]">11.4%</td>
<td className="py-4 text-right"><i className="w-4 h-4 text-[rgba(30,50,90,0.5)] inline-block" data-lucide="chevron-right"></i></td>
</tr>
<tr className="border-t border-[rgba(30,50,90,0.08)]">
<td className="py-4 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.1)] flex items-center justify-center text-[11px] font-normal text-[rgba(30,50,90,0.8)]">XC</span>
                Cross-Chain Router
              </td>
<td className="py-4">$148.9M</td>
<td className="py-4 text-[rgba(30,50,90,0.9)]">7.6%</td>
<td className="py-4 text-right"><i className="w-4 h-4 text-[rgba(30,50,90,0.5)] inline-block" data-lucide="chevron-right"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  END: LiveVaultsTable  */}
{/*  BEGIN: CTABanner  */}
<div className="w-full px-3 md:px-5 pb-3 md:pb-5">
<div className="reveal relative w-full max-w-[1536px] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex items-center justify-center min-h-[320px] md:min-h-[380px]">
<img alt="Dark navy abstract gradient background" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6QVm932pSgYHIVN1uJpAufWpbD9CD9Y-Tf7FwU_I6YqQsX-vEfU71JPbigw-ZIQSJup5togXXeibWlzOnE52t8HLBJFb6mKVg5ef5oIdqFhC4Kopbn_BMhy6KzGeniXiOKvjV8QhypPvxEgFup1oBJwC_HAhF-9ORT7QZxGOAnDQx42MHM06QfrsdtSSWUSDFtSAOxfeaeYHo_900eoK0yJWb18PpI2t-dpLWKCcIb_wDSmSzbhVUPQ"/>
<div className="absolute inset-0 bg-[rgba(20,30,55,0.55)]"></div>
<div className="relative z-10 flex flex-col items-center text-center px-6 py-14 md:py-16 max-w-2xl">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-5 w-fit">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
<span className="text-[14px] font-normal text-white">Now live on 12 chains</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.1] mb-4">Put your assets in motion</h2>
<p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8 max-w-lg">Join 5.2K yielders already streaming value with RIVR Smart Vaults.</p>
<button className="btn-hover flex items-center bg-white text-[rgba(30,50,90,0.95)] rounded-full pl-5 pr-2 py-1.5 md:py-2 gap-3 hover:bg-white/90 transition-colors">
<span className="text-sm font-normal">Book a demo</span>
<div className="bg-[rgba(30,50,90,0.1)] p-1.5 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-[rgba(30,50,90,0.9)]" data-lucide="arrow-up-right"></i>
</div>
</button>
</div>
</div>
</div>
{/*  END: CTABanner  */}
{/*  BEGIN: Footer  */}
<footer className="w-full px-3 md:px-5 pb-6 md:pb-10">
<div className="w-full max-w-[1536px] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/40 px-6 md:px-10 py-8 md:py-10 flex flex-col gap-8">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
{/*  Brand and Socials  */}
<div className="flex flex-col gap-3 max-w-xs">
<span className="font-regular tracking-tighter text-2xl text-[rgba(30,50,90,0.9)]">RIVR</span>
<p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed font-normal">Fluid asset streams for the on-chain economy. Smart Vaults, staking, and NFT liquidity in one place.</p>
<div className="flex items-center gap-3 mt-2">
<a aria-label="X / Twitter" className="w-9 h-9 rounded-full bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white transition-colors" href="#">
<i className="w-4 h-4 text-[rgba(30,50,90,0.8)]" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white transition-colors" href="#">
<i className="w-4 h-4 text-[rgba(30,50,90,0.8)]" data-lucide="github"></i>
</a>
<a aria-label="Telegram" className="w-9 h-9 rounded-full bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white transition-colors" href="#">
<i className="w-4 h-4 text-[rgba(30,50,90,0.8)]" data-lucide="send"></i>
</a>
</div>
</div>
{/*  Links Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="flex flex-col gap-3">
<span className="text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-normal">Ecosystem</span>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Vaults</a>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Staking</a>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">NFT Liquidity</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-normal">Economics</span>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Tokenomics</a>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Treasury</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-normal">Developers</span>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Documentation</a>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">API</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[12px] uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-normal">Governance</span>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Proposals</a>
<a className="text-sm text-[rgba(30,50,90,0.8)] hover:opacity-70 transition-opacity font-normal" href="#">Forum</a>
</div>
</div>
</div>
<div className="w-full h-px bg-[rgba(30,50,90,0.1)]"></div>
{/*  Legal and Copyright  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<span className="text-xs text-[rgba(30,50,90,0.5)] font-normal">© 2026 RIVR. All rights reserved.</span>
<div className="flex items-center gap-5">
<a className="text-xs text-[rgba(30,50,90,0.5)] hover:text-[rgba(30,50,90,0.8)] transition-colors font-normal" href="#">Privacy</a>
<a className="text-xs text-[rgba(30,50,90,0.5)] hover:text-[rgba(30,50,90,0.8)] transition-colors font-normal" href="#">Terms</a>
</div>
</div>
</div>
</footer>
{/*  END: Footer  */}
</main>
{/*  BEGIN: ScriptHandlers  */}


{/*  END: ScriptHandlers  */}

    </div>
  );
}
