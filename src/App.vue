<template>
  <div @click="handleCopy">
    <div class="min-h-screen bg-[#F0FDFA] text-white overflow-x-hidden">
    		<div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-sky-500 to-orange-500 origin-left z-[200]" style="transform: scaleX(0);"></div><button class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/30 flex items-center justify-center z-[200] md:w-14 md:h-14" tabindex="0" style="opacity: 0; transform: scale(0);"><svg class="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"></path></svg></button>
    		<div class="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-[150]" style="opacity: 0;">
    			<div class="w-1 h-32 bg-zinc-800 rounded-full overflow-hidden">
    				<div class="w-full bg-gradient-to-b from-sky-500 to-sky-500 rounded-full origin-top" style="transform: scaleY(0);"></div>
    			</div><span class="text-xs text-zinc-500 font-mono" style="opacity: 0;"><span>0%</span></span>
    		</div>
    		<nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-5">
    			<div class="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-4 shadow-2xl border border-blue-500/10" style="background: #fff; border: solid 2px #fdcf00;">
    				<div class="flex items-center gap-2 sm:gap-4 cursor-pointer group">
    					<div class="relative"><img src="/theme/default/uploads/logo.png" alt="天行体育.vip" class="h-10 sm:h-14 w-auto transition-all duration-500 group-hover:scale-110" loading="eager" style="mix-blend-mode: normal; background: transparent;"></div>
    					<div class="flex flex-col"><span class="font-display font-bold text-base sm:text-xl tracking-tight text-white group-hover:text-blue-300 transition-all duration-300" style="color: #2a59cf !important;">天行体育.vip</span><span class="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-medium uppercase">Official Platform</span></div>
    				</div>
    				<div class="flex items-center gap-3 sm:gap-6">
    					<span class="hidden md:flex items-center gap-2 text-xs text-zinc-400" style="color: #2a59cf !important;">
    						<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>24/7 在线服务</span>
    					<div class="h-5 w-px bg-blue-500/20 hidden md:block"></div>
    					<span class="text-xs font-semibold" style="color: #2a59cf !important;">官方认证</span>
    				</div>
    			</div>
    		</nav>
    		<main class="relative">
    			<section class="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 hero-bg overflow-hidden">
    				<div class="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[140px] float"></div>
    				<div class="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[120px] float" style="animation-delay: 2s;"></div>
    				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[180px]"></div>
    				<div class="absolute inset-0 grid-bg"></div>
    				<div class="relative z-10 max-w-5xl w-full">
    					<div class="text-center mb-8 sm:mb-12" style="opacity: 1; transform: none;">
    						<div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass mb-6 sm:mb-10 relative pulse-ring" style="background:#fee606; margin-top: 20PX; color: #9a0003;">
    							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-blue-400 sm:w-4 sm:h-4">
    								<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    								<path d="M5 3v4"></path>
    								<path d="M19 17v4"></path>
    								<path d="M3 5h4"></path>
    								<path d="M17 19h4"></path>
    							</svg><span class="text-[10px] sm:text-xs font-semibold text-zinc-200 tracking-wide" style="color: #9a0003;">官方认证 · 安全可靠</span>
    							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-cyan-400 fill-cyan-400 sm:w-3.5 sm:h-3.5">
    								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    							</svg>
    						</div>
    						<h1 class="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[1.1]"><span class="text-white text-glow">天行体育.vip</span><br><span class="gradient-text">官方直营通道</span></h1>
    						<p class="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-light px-4" style="color: #fff;">全球顶级体育平台，为您提供最专业的体育娱乐服务</p>
    					</div>
    					<div class="glass rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 max-w-2xl mx-auto relative overflow-hidden glow gradient-border" style="opacity: 1; transform: none;">
    						<div class="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/20 rounded-full blur-[60px] sm:blur-[80px] glow-pulse"></div>
    						<div class="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-32 sm:w-48 h-32 sm:h-48 bg-cyan-500/15 rounded-full blur-[60px] sm:blur-[80px]"></div>
    						<div class="relative z-10">
    							<div class="text-center mb-6 sm:mb-10">
    								<h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3" style="color: #fff !important;">天行体育.vip</h2>
    								<p class="text-zinc-400 text-sm sm:text-base" style="color: #fff !important;">官方直营 · 极致信誉</p>
    							</div>
    							
    							<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="btn-accent w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg mb-6 sm:mb-8" tabindex="0"><span>立即注册</span>
    								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right sm:w-5 sm:h-5">
    									<path d="M5 12h14"></path>
    									<path d="m12 5 7 7-7 7"></path>
    								</svg>
    							</a>
    							<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="btn-accent w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg mb-6 sm:mb-8" tabindex="0" style="background: #fdce02; color: #fff; border: solid 2px #ad9118;"><span>立即登录</span>
    								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right sm:w-5 sm:h-5">
    									<path d="M5 12h14"></path>
    									<path d="m12 5 7 7-7 7"></path>
    								</svg>
    							</a>
    							<div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-blue-500/10" style="background: #fff !important; border: solid 2px #35c1f5; ">
    								<p class="text-[9px] sm:text-[10px] text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold" style="color: #cc0000;">官方下载地址</p>
    								<a href="https://www.txty888.app:30111/?i_code=7450040" target="_blank" rel="noopener" class="text-xs sm:text-sm text-zinc-300 hover:text-blue-400 font-mono transition-colors break-all block">https://www.txty888.app:30111/?i_code=7450040</a>
    							</div>
    							<div class="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20" style="opacity: 1; background: #fff; border: solid 2px #35c1f5;">
    								<p class="text-center text-xs sm:text-sm font-semibold"><span class="text-blue-700" style="color: #cc0000;">注册成功后添加上级管理咨询更多福利</span></p>
    							</div>
    							<div class="mt-5 sm:mt-7">
    								<div class="flex items-center gap-2 mb-3 sm:mb-4">
    									<div class="w-7 h-7 rounded-lg bg-blue-500/25 flex items-center justify-center">
    										<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones ">
    											<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
    										</svg>
    									</div><span class="text-sm sm:text-base font-bold text-white tracking-wide">联系客服</span><span class="ml-auto flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-[10px] sm:text-xs text-emerald-300 font-semibold" style="color: #21c753 !important;">24/7 在线</span></span>
    								</div>
    								<div class="space-y-3 sm:space-y-3.5">
    									<div class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
    										<div class="flex items-center gap-3 sm:gap-4 mb-4">
    											<img src="/theme/default/uploads/01.png" alt="Telegram" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0 border border-white/10" loading="lazy" referrerpolicy="no-referrer">
    											
    											<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-500/25 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-500/40 hidden">
    												<div class="scale-[1.8]">
    													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link ">
    														<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    														<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    													</svg>
    												</div>
    											</div>
    											<div class="flex-1 min-w-0">
    												<p class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">safew专员璐璐</p>
    												<p class="text-lg sm:text-xl font-bold text-white font-mono break-all leading-tight" style="color: #0c3bc1 !important;">@luluvip778</p>
    											</div>
    										</div>
    										<div class="flex gap-2"><button class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy "><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="copy-btn" data-copy="@luluvip778">复制账号</span></button>
    											<a href="https://fafacai.ysepan.com/" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">
    												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download ">
    													<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    													<polyline points="7 10 12 15 17 10"></polyline>
    													<line x1="12" x2="12" y1="15" y2="3"></line>
    												</svg><span>下载 APP</span></a>
    										</div>
    									</div>
    									<div class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
    										<div class="flex items-center gap-3 sm:gap-4 mb-4">
    											<img src="/theme/default/uploads/01.png" alt="Telegram" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0 border border-white/10" loading="lazy" referrerpolicy="no-referrer">
    											
    											<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-500/25 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-500/40 hidden">
    												<div class="scale-[1.8]">
    													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link ">
    														<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    														<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    													</svg>
    												</div>
    											</div>
    											<div class="flex-1 min-w-0">
    												<p class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">safew专员晴晴</p>
    												<p class="text-lg sm:text-xl font-bold text-white font-mono break-all leading-tight" style="color: #0c3bc1 !important;">@qingiqng6666</p>
    											</div>
    										</div>
    										<div class="flex gap-2"><button class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy "><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="copy-btn" data-copy="@qingiqng6666">复制账号</span></button>
    											<a href="https://fafacai.ysepan.com/" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">
    												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download ">
    													<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    													<polyline points="7 10 12 15 17 10"></polyline>
    													<line x1="12" x2="12" y1="15" y2="3"></line>
    												</svg><span>下载 APP</span></a>
    										</div>
    									</div>
    									
    									<div class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
    										<div class="flex items-center gap-3 sm:gap-4 mb-4">
    											<img src="/theme/default/uploads/qq.png" alt="QQ客服" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0 border border-white/10" loading="lazy" referrerpolicy="no-referrer">
    											<div class="flex-1 min-w-0">
    												<p class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">QQ老谭专属</p>
    												<p class="text-lg sm:text-xl font-bold text-white font-mono break-all leading-tight" style="color: #0c3bc1 !important;">2151376492</p>
    											</div>
    										</div>
    										<div class="flex gap-2"><button class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy "><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="copy-btn" data-copy="2151376492">复制QQ</span></button>
    											<a href="https://im.qq.com/index/#/" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download "><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg><span>下载 APP</span></a>
    										</div>
    									</div>
    									<div class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
    										<div class="flex items-center gap-3 sm:gap-4 mb-4">
    											<img src="/theme/default/uploads/qq.png" alt="QQ客服" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0 border border-white/10" loading="lazy" referrerpolicy="no-referrer">
    											<div class="flex-1 min-w-0">
    												<p class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">QQ晴晴专属</p>
    												<p class="text-lg sm:text-xl font-bold text-white font-mono break-all leading-tight" style="color: #0c3bc1 !important;">2119522390</p>
    											</div>
    										</div>
    										<div class="flex gap-2"><button class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy "><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="copy-btn" data-copy="2119522390">复制QQ</span></button>
    											<a href="https://im.qq.com/index/#/" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download "><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg><span>下载 APP</span></a>
    										</div>
    									</div>
    									<div class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
    										<div class="flex items-center gap-3 sm:gap-4 mb-4">
    											<img src="/theme/default/uploads/01.png" alt="Safex" class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0 border border-white/10" loading="lazy" referrerpolicy="no-referrer">
    											<div class="flex-1 min-w-0">
    												<p class="text-sm sm:text-base text-blue-700 uppercase tracking-wider font-bold mb-1 leading-tight">安卓三方聊天软件点击下载APP进入网盘下载</p>
    												<p class="text-lg sm:text-2xl font-bold text-white font-mono break-all leading-tight" style="color: #d84665 !important;">苹果手机直接在App Store搜索： Safex</p>
    											</div>
    										</div>
    										<div class="flex gap-2"><button class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy "><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="copy-btn" data-copy="Safex">复制账号</span></button>
    											<a href="https://fafacai.ysepan.com/" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">
    												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download ">
    													<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    													<polyline points="7 10 12 15 17 10"></polyline>
    													<line x1="12" x2="12" y1="15" y2="3"></line>
    												</svg><span>下载 APP</span></a>
    										</div>
    									</div>
    									
    								</div>
    							</div>
    						</div>
    					</div>
    					<div class="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-[10px] sm:text-xs text-zinc-500" style="opacity: 1;">
    						<div class="flex items-center gap-1.5 sm:gap-2">
    							<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400"></div><span style="color: #fff;">安全认证</span></div>
    						<div class="h-3 w-px bg-blue-500/20 hidden sm:block"></div>
    						<div class="flex items-center gap-1.5 sm:gap-2">
    							<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-400"></div><span style="color: #fff;">极速到账</span></div>
    						<div class="h-3 w-px bg-blue-500/20 hidden sm:block"></div>
    						<div class="flex items-center gap-1.5 sm:gap-2">
    							<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400"></div><span style="color: #fff;">24/7服务</span></div>
    					</div>
    				</div>
    			</section>
    			<!--新人豪礼开始-->
    	<section class="py-12 sm:py-16 relative overflow-hidden" style="background: #4978f0;">
    	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/5 to-transparent"></div>
    	<div class="container mx-auto px-3 sm:px-4 relative z-10">
    		<div class="text-center mb-8 sm:mb-12" style="opacity: 1; transform: none;">
    			<div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass mb-6 sm:mb-8" style="background: #fee606; color: #092d21;">
    				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift text-fuchsia-400 sm:w-4 sm:h-4">
    					<rect x="3" y="8" width="18" height="4" rx="1"></rect>
    					<path d="M12 8v13"></path>
    					<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
    					<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
    				</svg><span class="text-[10px] sm:text-xs font-semibold text-zinc-300" style="color: #092d21;">限时优惠</span>
    				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-cyan-400 fill-cyan-400 sm:w-3.5 sm:h-3.5">
    					<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    				</svg>
    			</div>
    			<h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-5"><span style="color: #fff;">新人豪礼</span></h2>
    			<p class="text-zinc-500 text-sm sm:text-base" style="color: #fff;">注册即享专属福利</p>
    		</div>
    		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
    			<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="activity-image-card block">
    				<img src="/promo/optimized/first-deposit.jpg" alt="首存豪礼" loading="lazy" decoding="async">
    				<div class="activity-image-overlay">
    					<h3>首存豪礼</h3>
    					<p>点击查看详情</p>
    				</div>
    			</a>
    			<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="activity-image-card block">
    				<img src="/promo/optimized/daily-redeposit.jpg" alt="每日复存福利" loading="lazy" decoding="async">
    				<div class="activity-image-overlay">
    					<h3>每日复存福利</h3>
    					<p>点击查看详情</p>
    				</div>
    			</a>
    			<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="activity-image-card block">
    				<img src="/promo/optimized/referral.jpg" alt="好友介绍福利" loading="lazy" decoding="async">
    				<div class="activity-image-overlay">
    					<h3>好友介绍福利</h3>
    					<p>点击查看详情</p>
    				</div>
    			</a>
    			<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="activity-image-card block">
    				<img src="/promo/optimized/daily-turnover.jpg" alt="每日流水福利" loading="lazy" decoding="async">
    				<div class="activity-image-overlay">
    					<h3>每日流水福利</h3>
    					<p>点击查看详情</p>
    				</div>
    			</a>
    			<a href="http://txty014.com" target="_blank" rel="noopener noreferrer" class="activity-image-card block md:col-span-2 md:max-w-[520px] md:mx-auto md:w-full">
    				<img src="/promo/optimized/weekend-compensation.jpg" alt="周末赛事包赔" loading="lazy" decoding="async">
    				<div class="activity-image-overlay">
    					<h3>周末赛事包赔</h3>
    					<p>点击查看详情</p>
    				</div>
    			</a>
    		</div>
    	</div>
    </section>
    <!--新人豪礼结束-->
    
    		</main>
    		<footer class="py-12 sm:py-16 border-t border-blue-500/10 relative overflow-hidden" style="background: #4978f0;color: #fff;">
    			<div class="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
    			<div class="container mx-auto px-4 text-center relative z-10">
    				<div class="flex items-center justify-center gap-3 mb-4 sm:mb-6">
    					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown text-blue-400 sm:w-5 sm:h-5">
    						<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
    					</svg><span class="font-display text-sm sm:text-base font-semibold text-zinc-300" style="color: #fff;">天行体育.vip</span></div>
    				<div class="flex items-center justify-center gap-2 mb-3 sm:mb-4">
    					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-cyan-400 sm:w-3 sm:h-3">
    						<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    						<path d="M5 3v4"></path>
    						<path d="M19 17v4"></path>
    						<path d="M3 5h4"></path>
    						<path d="M17 19h4"></path>
    					</svg>
    					<p class="text-zinc-500 text-xs" style="color: #fff;">全球顶级体育娱乐平台</p>
    				</div>
    				<p class="text-zinc-700 text-xs" style="color: #fff;">© 2026 天行体育.vip. All Rights Reserved.</p>
    			</div>
    		</footer>
    	</div>
  </div>
</template>

<script setup>
async function handleCopy(event) {
  const target = event.target.closest('.copy-btn')
  if (!target) return
  const copyText = target.dataset.copy || ''
  const originalText = target.innerText
  try {
    await navigator.clipboard.writeText(copyText)
    target.innerText = '已复制'
    window.setTimeout(() => {
      target.innerText = originalText
    }, 1500)
  } catch (error) {
    window.alert('复制失败，请手动复制')
  }
}
</script>
