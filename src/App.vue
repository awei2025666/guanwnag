<template>
	<div @click="handleCopy">
		<div class="min-h-screen bg-[#F0FDFA] text-white overflow-x-hidden">
			<div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-sky-500 to-orange-500 origin-left z-[200]"
				style="transform: scaleX(0);"></div><button
				class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/30 flex items-center justify-center z-[200] md:w-14 md:h-14"
				tabindex="0" style="opacity: 0; transform: scale(0);"><svg class="w-5 h-5 md:w-6 md:h-6 text-black"
					fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"></path>
				</svg></button>
			<div class="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-[150]"
				style="opacity: 0;">
				<div class="w-1 h-32 bg-zinc-800 rounded-full overflow-hidden">
					<div class="w-full bg-gradient-to-b from-sky-500 to-sky-500 rounded-full origin-top"
						style="transform: scaleY(0);"></div>
				</div><span class="text-xs text-zinc-500 font-mono" style="opacity: 0;"><span>0%</span></span>
			</div>
			<nav class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-5">
				<div class="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-4 shadow-2xl border border-blue-500/10"
					style="background: #fff; border: solid 2px #fdcf00;">
					<div class="flex items-center gap-2 sm:gap-4 cursor-pointer group">
						<div class="relative"><img src="/theme/default/uploads/logo.png" :alt="currentSite.domain"
								class="h-10 sm:h-14 w-auto transition-all duration-500 group-hover:scale-110"
								loading="eager" style="mix-blend-mode: normal; background: transparent;"></div>
						<div class="flex flex-col"><span
								class="font-display font-bold text-base sm:text-xl tracking-tight text-white group-hover:text-blue-300 transition-all duration-300"
								style="color: #2a59cf !important;">{{ currentSite.domain }}</span><span
								class="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-medium uppercase">Official
								Platform</span></div>
					</div>
					<div class="flex items-center gap-3 sm:gap-6">
						<span class="hidden md:flex items-center gap-2 text-xs text-zinc-400"
							style="color: #2a59cf !important;">
							<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>24/7 在线服务
						</span>
						<div class="h-5 w-px bg-blue-500/20 hidden md:block"></div>
						<span class="text-xs font-semibold" style="color: #2a59cf !important;">官方认证</span>
					</div>
				</div>
			</nav>
			<main class="relative">
				<section
					class="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 hero-bg overflow-hidden">
					<div
						class="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[140px] float">
					</div>
					<div class="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[120px] float"
						style="animation-delay: 2s;"></div>
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[180px]">
					</div>
					<div class="absolute inset-0 grid-bg"></div>
					<div class="relative z-10 max-w-5xl w-full">
						<div class="text-center mb-8 sm:mb-12" style="opacity: 1; transform: none;">
							<div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass mb-6 sm:mb-10 relative pulse-ring"
								style="background:#fee606; margin-top: 20PX; color: #9a0003;">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
									fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" class="lucide lucide-sparkles text-blue-400 sm:w-4 sm:h-4">
									<path
										d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
									</path>
									<path d="M5 3v4"></path>
									<path d="M19 17v4"></path>
									<path d="M3 5h4"></path>
									<path d="M17 19h4"></path>
								</svg><span class="text-base sm:text-lg font-black text-zinc-200 tracking-wide"
									style="color: #9a0003;">注册就送100包赔！！！</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
									fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-star text-cyan-400 fill-cyan-400 sm:w-3.5 sm:h-3.5">
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
									</polygon>
								</svg>
							</div>
							<h1
								class="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[1.1]">
								<span class="text-white text-glow">{{ currentSite.domain }}</span><br><span
									class="gradient-text">官方直营通道</span>
							</h1>
							<p class="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed font-light px-4"
								style="color: #fff;">全球顶级体育平台，为您提供最专业的体育娱乐服务</p>
						</div>
						<div class="glass rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 max-w-2xl mx-auto relative overflow-hidden glow gradient-border"
							style="opacity: 1; transform: none;">
							<div
								class="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/20 rounded-full blur-[60px] sm:blur-[80px] glow-pulse">
							</div>
							<div
								class="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-32 sm:w-48 h-32 sm:h-48 bg-cyan-500/15 rounded-full blur-[60px] sm:blur-[80px]">
							</div>
							<div class="relative z-10">
								<div class="text-center mb-6 sm:mb-10">
									<h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3"
										style="color: #fff !important;">{{ currentSite.domain }}</h2>
									<p class="text-zinc-400 text-sm sm:text-base" style="color: #fff !important;">官方直营 ·
										极致信誉</p>
								</div>

								<a :href="currentSite.loginUrl" target="_blank" rel="noopener noreferrer"
									class="btn-accent w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg mb-6 sm:mb-8"
									tabindex="0"><span>立即注册</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
										fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" class="lucide lucide-arrow-right sm:w-5 sm:h-5">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</a>
								<a :href="currentSite.loginUrl" target="_blank" rel="noopener noreferrer"
									class="btn-accent w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg mb-6 sm:mb-8"
									tabindex="0"
									style="background: #fdce02; color: #fff; border: solid 2px #ad9118;"><span>立即登录</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
										fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" class="lucide lucide-arrow-right sm:w-5 sm:h-5">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</a>
								<div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-blue-500/10"
									style="background: #fff !important; border: solid 2px #35c1f5; ">
									<p class="text-[9px] sm:text-[10px] text-zinc-500 mb-1.5 sm:mb-2 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold"
										style="color: #cc0000;">官方下载地址</p>
									<a :href="currentSite.downloadUrl"
										target="_blank" rel="noopener"
										class="text-xs sm:text-sm text-zinc-300 hover:text-blue-400 font-mono transition-colors break-all block">{{ currentSite.downloadUrl }}</a>
								</div>
								<div class="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
									style="opacity: 1; background: #fff; border: solid 2px #35c1f5;">
									<p class="text-center text-xs sm:text-sm font-semibold"><span class="text-blue-700"
											style="color: #cc0000;">添加下方客服联系方式 领取彩金</span></p>
								</div>
								<div class="mt-5 sm:mt-7">
									<div class="flex items-center gap-2 mb-3 sm:mb-4">
										<div class="w-7 h-7 rounded-lg bg-blue-500/25 flex items-center justify-center">
											<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
												viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
												stroke-linecap="round" stroke-linejoin="round"
												class="lucide lucide-headphones ">
												<path
													d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
												</path>
											</svg>
										</div><span
											class="text-sm sm:text-base font-bold text-white tracking-wide">联系客服</span><span
											class="ml-auto flex items-center gap-1.5"><span
												class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span
												class="text-[10px] sm:text-xs text-emerald-300 font-semibold"
												style="color: #21c753 !important;">24/7 在线</span></span>
									</div>
									<div class="flex flex-col gap-3 sm:gap-3.5">
										<div
											class="order-2 rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl" style="order: 2;">
											<div class="flex items-center gap-3 sm:gap-4 mb-4">
											<img :src="currentSite.avatar" :alt="currentSite.nickname"
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 border border-amber-300/70"
													loading="lazy">

												<div
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-500/25 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-500/40 hidden">
													<div class="scale-[1.8]">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
															viewBox="0 0 24 24" fill="none" stroke="currentColor"
															stroke-width="2" stroke-linecap="round"
															stroke-linejoin="round" class="lucide lucide-link ">
															<path
																d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">
															</path>
															<path
																d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
															</path>
														</svg>
													</div>
												</div>
												<div class="flex-1 min-w-0">
													<p
														class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">
														 SafeW 专员{{ currentSite.nickname }}</p>
													<p class="text-lg sm:text-xl font-bold text-white font-mono break-all leading-tight"
														style="color: #0c3bc1 !important;">下载后添加 SafeW ID：<br>{{ currentSite.safewId }}</p>
												</div>
											</div>
											<div class="flex gap-2"><button
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg
														xmlns="http://www.w3.org/2000/svg" width="15" height="15"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
														class="lucide lucide-copy ">
														<rect width="14" height="14" x="8" y="8" rx="2"></rect>
														<path
															d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2">
														</path>
											</svg><span class="copy-btn" :data-copy="currentSite.safewId">复制账号</span></button>
												<a :href="currentSite.safewUrl" target="_blank" rel="noopener noreferrer"
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20"><span>下载
														SafeW</span></a>
											</div>
										</div>
										<div
											class="order-3 rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl" style="order: 3;">
											<div class="flex items-center gap-3 sm:gap-4 mb-4">
												<img src="/theme/default/uploads/01.png" alt="QQ 图标"
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain bg-[#f4fbff] flex-shrink-0 border border-sky-200"
													loading="lazy">

												<div
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-500/25 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-500/40 hidden">
													<div class="scale-[1.8]">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
															viewBox="0 0 24 24" fill="none" stroke="currentColor"
															stroke-width="2" stroke-linecap="round"
															stroke-linejoin="round" class="lucide lucide-link ">
															<path
																d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">
															</path>
															<path
																d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
															</path>
														</svg>
													</div>
												</div>
												<div class="flex-1 min-w-0">
													<!-- <p
														class="text-[11px] sm:text-xs text-blue-700 uppercase tracking-wider font-semibold mb-1">
														客服</p> -->
															<p v-if="currentSite.qq" class="text-lg sm:text-xl font-bold font-mono break-all leading-tight flex items-center"
														style="color: #0c3bc1 !important;">QQ ：{{ currentSite.qq }} <svg
															t="1791461141975" @click.stop="copyAccount(currentSite.qq)" class="icon cursor-pointer" viewBox="0 0 1024 1024"
															version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6113"
															width="16" height="16">
															<path
																d="M808.768 197.312c10.432 0 17.408 6.912 17.408 17.344l0 485.568c0 10.368-6.976 17.344-17.408 17.344l-87.296 0c-19.136 0-34.944 15.552-34.944 34.624 0 19.136 15.808 34.688 34.944 34.688l104.768 0c38.464 0 69.824-31.168 69.824-69.312l0-520.32C896 159.168 864.64 128 826.176 128l-384 0c-38.4 0-69.824 31.232-69.824 69.312l0 34.688c0 19.072 15.68 34.688 34.88 34.688 19.2 0 34.88-15.616 34.88-34.688L442.112 214.656c0-10.432 6.976-17.344 17.408-17.344L808.768 197.312z"
																fill="#41c8ef" p-id="6114"></path>
															<path
																d="M128 363.968l0 469.376C128 867.84 160.32 896 199.808 896l394.944 0c39.488 0 71.872-28.16 71.872-62.656L666.624 363.968c0-34.432-32.384-62.592-71.872-62.592L199.808 301.376C160.32 301.376 128 329.536 128 363.968z"
																fill="#41c8ef" p-id="6115"></path>
														</svg></p>
													<p class="text-lg sm:text-xl font-bold font-mono break-all leading-tight flex items-center"
														style="color: #0c3bc1 !important;">微信：{{ currentSite.wechat }}<svg
															t="1791461141975" @click.stop="copyAccount(currentSite.wechat)" class="icon cursor-pointer" viewBox="0 0 1024 1024"
															version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6113"
															width="16" height="16">
															<path
																d="M808.768 197.312c10.432 0 17.408 6.912 17.408 17.344l0 485.568c0 10.368-6.976 17.344-17.408 17.344l-87.296 0c-19.136 0-34.944 15.552-34.944 34.624 0 19.136 15.808 34.688 34.944 34.688l104.768 0c38.464 0 69.824-31.168 69.824-69.312l0-520.32C896 159.168 864.64 128 826.176 128l-384 0c-38.4 0-69.824 31.232-69.824 69.312l0 34.688c0 19.072 15.68 34.688 34.88 34.688 19.2 0 34.88-15.616 34.88-34.688L442.112 214.656c0-10.432 6.976-17.344 17.408-17.344L808.768 197.312z"
																fill="#41c8ef" p-id="6114"></path>
															<path
																d="M128 363.968l0 469.376C128 867.84 160.32 896 199.808 896l394.944 0c39.488 0 71.872-28.16 71.872-62.656L666.624 363.968c0-34.432-32.384-62.592-71.872-62.592L199.808 301.376C160.32 301.376 128 329.536 128 363.968z"
																fill="#41c8ef" p-id="6115"></path>
														</svg></p>
															<p v-for="wechat in (currentSite.additionalWechats || [])" :key="wechat"
																class="text-lg sm:text-xl font-bold font-mono break-all leading-tight flex items-center"
																style="color: #0c3bc1 !important;">微信：{{ wechat }} <svg
																	@click.stop="copyAccount(wechat)" class="icon cursor-pointer" viewBox="0 0 1024 1024"
																	width="16" height="16">
																	<path d="M808.768 197.312c10.432 0 17.408 6.912 17.408 17.344v485.568c0 10.368-6.976 17.344-17.408 17.344h-87.296c-19.136 0-34.944 15.552-34.944 34.624 0 19.136 15.808 34.688 34.944 34.688h104.768c38.464 0 69.824-31.168 69.824-69.312v-520.32C896 159.168 864.64 128 826.176 128h-384c-38.4 0-69.824 31.232-69.824 69.312V232c0 19.072 15.68 34.688 34.88 34.688 19.2 0 34.88-15.616 34.88-34.688v-17.344c0-10.432 6.976-17.344 17.408-17.344h349.248z" fill="#41c8ef"></path>
																	<path d="M128 363.968v469.376C128 867.84 160.32 896 199.808 896h394.944c39.488 0 71.872-28.16 71.872-62.656V363.968c0-34.432-32.384-62.592-71.872-62.592H199.808C160.32 301.376 128 329.536 128 363.968z" fill="#41c8ef"></path>
																</svg></p>
												</div>
											</div>
											<div class="flex gap-2"><button v-if="currentSite.qq" @click.stop="addContact('qq', currentSite.qq)"
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg
														xmlns="http://www.w3.org/2000/svg" width="15" height="15"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
														class="lucide lucide-copy ">
														<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
														<path
															d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2">
														</path>
													</svg><span>即刻添加qq</span></button>
												<button @click.stop="addContact('wechat', currentSite.wechat)"
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">即刻添加微信</button>
											</div>

										</div>
										<!-- <div
											class="rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl">
											<div class="flex items-center gap-3 sm:gap-4 mb-4">
												<img src="/promo/wechat-service.svg" alt="微信图标"
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover bg-[#f3fff6] flex-shrink-0 border border-emerald-200"
													loading="lazy">
												<div class="flex-1 min-w-0">
													<p
														class="text-[11px] sm:text-xs text-emerald-700 uppercase tracking-wider font-semibold mb-1 text-blue-700">
														微信客服</p>
													<p class="text-lg sm:text-xl font-bold font-mono break-all leading-tight"
														style="color: #0c3bc1 !important;">W15011926172</p>
												</div>
											</div>
											<div class="flex gap-2">
												<button
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><span
														class="copy-btn" data-copy="W15011926172">复制微信</span></button>
												<a href="https://www.wechat.com/zh_CN/" target="_blank"
													rel="noopener noreferrer"
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">下载微信</a>
											</div>
										</div> -->
										<div
											class="order-1 rounded-2xl bg-gradient-to-br from-blue-50 via-white border border-blue-500/40 p-4 sm:p-5 shadow-lg shadow-blue-500/25 backdrop-blur-xl" style="order: 1;">
											<div class="flex items-center gap-3 sm:gap-4 mb-4">
												<img  src="/theme/default/uploads/01.png" alt="SafeW 龙图标"
													class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0 border border-amber-300/70"
													loading="lazy">
												<div class="flex-1 min-w-0">
													<p
														class="text-sm sm:text-base text-blue-700 uppercase tracking-wider font-bold mb-1 leading-tight">
														SafeW / SafeX（无需邀请码）</p>
													<p class="text-base sm:text-lg font-bold text-white font-mono break-all leading-tight"
													style="color: #d84665 !important;">网址：{{ currentSite.safewDisplay }}</p>
													<p class="text-xs sm:text-sm text-slate-600 text-blue-700 mt-1">
														苹果手机下载选
														iPhone；<br />安卓手机下载选 Android</p>
												</div>
											</div>
											<div class="flex gap-2"><button
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-500/25 hover:bg-blue-500/45 active:bg-blue-500/55 text-blue-800 text-sm font-bold transition-all"><svg
														xmlns="http://www.w3.org/2000/svg" width="15" height="15"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
														class="lucide lucide-copy ">
														<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
														<path
															d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2">
														</path>
													</svg><span class="copy-btn"
														:data-copy="currentSite.safewDisplay">复制网址</span></button>
												<a :href="currentSite.safewUrl" target="_blank" rel="noopener noreferrer"
													class="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 hover:from-cyan-500/60 hover:to-blue-500/60 active:from-cyan-500/70 active:to-blue-500/70 text-white text-sm font-bold transition-all shadow-md shadow-cyan-500/20">
													<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
														viewBox="0 0 24 24" fill="none" stroke="currentColor"
														stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
														class="lucide lucide-download ">
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
						<div class="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-[10px] sm:text-xs text-zinc-500"
							style="opacity: 1;">
							<div class="flex items-center gap-1.5 sm:gap-2">
								<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400"></div><span
									style="color: #fff;">安全认证</span>
							</div>
							<div class="h-3 w-px bg-blue-500/20 hidden sm:block"></div>
							<div class="flex items-center gap-1.5 sm:gap-2">
								<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-400"></div><span
									style="color: #fff;">极速到账</span>
							</div>
							<div class="h-3 w-px bg-blue-500/20 hidden sm:block"></div>
							<div class="flex items-center gap-1.5 sm:gap-2">
								<div class="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400"></div><span
									style="color: #fff;">24/7服务</span>
							</div>
						</div>
					</div>
				</section>
				<!--新人豪礼开始-->
				<section class="py-12 sm:py-16 relative overflow-hidden" style="background: #4978f0;">
					<div class="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/5 to-transparent">
					</div>
					<div class="container mx-auto px-3 sm:px-4 relative z-10">
						<div class="text-center mb-8 sm:mb-12" style="opacity: 1; transform: none;">
							<div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass mb-6 sm:mb-8"
								style="background: #fee606; color: #092d21;">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
									fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" class="lucide lucide-gift text-fuchsia-400 sm:w-4 sm:h-4">
									<rect x="3" y="8" width="18" height="4" rx="1"></rect>
									<path d="M12 8v13"></path>
									<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
									<path
										d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5">
									</path>
								</svg><span class="text-[10px] sm:text-xs font-semibold text-zinc-300"
									style="color: #092d21;">限时优惠</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
									fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-zap text-cyan-400 fill-cyan-400 sm:w-3.5 sm:h-3.5">
									<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
								</svg>
							</div>
							<h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-5"><span
									style="color: #fff;">新人豪礼</span></h2>
							<p class="text-zinc-500 text-sm sm:text-base" style="color: #fff;">注册即享专属福利</p>
						</div>
						<div class="max-w-5xl mx-auto space-y-6">
							<div class="activity-summary-card">
								<img src="/promo/activity-1.jpg" alt="新人首存与介绍好友活动" loading="lazy" decoding="async">
							</div>
							<div class="activity-summary-card">
								<img src="/promo/activity-2.jpg" alt="每日首存与周累计活动" loading="lazy" decoding="async">
							</div>
							<div class="activity-summary-card">
								<img src="/promo/activity-3.jpg" alt="周流水与 VIP 包赔活动" loading="lazy" decoding="async">
							</div>
						</div>
					</div>
				</section>
				<!--新人豪礼结束-->

			</main>
			<footer class="py-12 sm:py-16 border-t border-blue-500/10 relative overflow-hidden"
				style="background: #4978f0;color: #fff;">
				<div class="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
				<div class="container mx-auto px-4 text-center relative z-10">
					<div class="flex items-center justify-center gap-3 mb-4 sm:mb-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-crown text-blue-400 sm:w-5 sm:h-5">
							<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
						</svg><span class="font-display text-sm sm:text-base font-semibold text-zinc-300"
							style="color: #fff;">{{ currentSite.domain }}</span>
					</div>
					<div class="flex items-center justify-center gap-2 mb-3 sm:mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-sparkles text-cyan-400 sm:w-3 sm:h-3">
							<path
								d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
							</path>
							<path d="M5 3v4"></path>
							<path d="M19 17v4"></path>
							<path d="M3 5h4"></path>
							<path d="M17 19h4"></path>
						</svg>
						<p class="text-zinc-500 text-xs" style="color: #fff;">全球顶级体育娱乐平台</p>
					</div>
					<p class="text-zinc-700 text-xs" style="color: #fff;">© 2026 {{ currentSite.domain }}. All Rights Reserved.</p>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup>
const safewUrl = 'https://safew.im/'

const siteConfigs = {
	'tx12.top': {
		domain: 'tx12.top', nickname: '猫王', registerUrl: 'http://txty380.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1301242',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1301242',
		qq: '2865054309', wechat: 'LM648559536', safewId: 'seven521', avatar: '/promo/avatar-maowang.png',
	},
	'tx1618.vip': {
		domain: 'tx1618.vip', nickname: '龙全能王', registerUrl: 'http://txty945.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=4097300',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=4097300',
		qq: '807876646', wechat: 'liguofu123-', safewId: 'tx1618', avatar: '/promo/avatar-long.png',
	},
	'txty.help': {
		domain: 'txty.help', nickname: '财总', registerUrl: 'http://txty597.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=7044198',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=7044198',
		qq: '933867557', wechat: 'ddd2180999', safewId: 'tx888', avatar: '/promo/avatar-caizong.png',
	},
	'txty.shop': {
		domain: 'txty.shop', nickname: '太子', registerUrl: 'http://txty555.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1503675',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1503675',
		qq: '1780606236', wechat: 'L-Jun9_Gem', safewId: 'TX373', avatar: '/promo/avatar-taizi.png',
	},
	'txty123.top': {
		domain: 'txty123.top', nickname: '二爷『双花红棍』', registerUrl: 'http://txty1020.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8170847',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=8170847',
		qq: '3830467242', wechat: 'RabbitYoyi', safewId: 'tx118', avatar: '/promo/avatar-erye.png',
	},
	'tx999.top': {
		domain: 'tx999.top', nickname: '风哥', registerUrl: 'http://txty873k.vip',
		loginUrl: 'https://www.txty075.com:30000/?i_code=8070925',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8070925',
		qq: '3896168770', wechat: 'wuziwen545', safewId: 'fage188', avatar: '/promo/avatar-fengge.png',
	},
	'txty520.vip': {
		domain: 'txty520.vip', nickname: '东哥', registerUrl: 'http://txty555.com',
		loginUrl: 'https://www.txty075.com:30000/?i_code=1503675',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1503675',
		qq: '2942212259', wechat: 'zrq-1210', safewId: 'tx16888', avatar: '/promo/avatar-dongge.png',
	},
	'tv520.vip': {
		domain: 'tv520.vip', nickname: '旺哥', registerUrl: 'http://txty111.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=3003864',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=3003864',
		qq: '3866577833', wechat: 'Mj1115558', safewId: 'tx158', avatar: '/promo/avatar-wangge.png',
	},
	'tx5.top': {
		domain: 'tx5.top', nickname: '校长', registerUrl: 'http://txty1023.com',
		loginUrl: 'https://www.txty075.com:30000/?i_code=4867463',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=4867463',
		qq: '2944129513', wechat: 'respect693', safewId: 'XG9527', avatar: '/promo/avatar-xiaozhang-tx5.png',
	},
	'tx99.one': {
		domain: 'tx99.one', nickname: '板板💰（红万）', registerUrl: 'http://txty178.com',
		loginUrl: 'https://www.txty075.com:30000/?i_code=1761070',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=1761070',
		qq: '2667043625', wechat: 'quyuqing0608', safewId: '@fcai88', avatar: '/promo/avatar-banban.png',
	},
	'tx100.vip': {
		domain: 'tx100.vip', nickname: 'D速', registerUrl: 'http://txty1026.com',
		loginUrl: 'https://www.txty015.com:32101/?i_code=3938140',
		downloadUrl: 'https://www.txty052.com:30122/entry/register/?i_code=3938140',
		qq: '1873938835', wechat: 'ythcs1103', safewId: 'gaosu66', avatar: '/promo/avatar-dsu.png',
	},
	'tx1314.vip': {
		domain: 'tx1314.vip', nickname: '小可爱', registerUrl: 'http://txty402.com',
		loginUrl: 'https://www.txty908.com:32202/?sport=1&i_code=8884175',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8884175',
		qq: '434221149', wechat: 'MM0330---', safewId: 'keai168', avatar: '/promo/avatar-keai.png',
	},
	'ty1314.vip': {
		domain: 'ty1314.vip', nickname: '小可爱', registerUrl: 'http://txty402.com',
		loginUrl: 'https://www.txty908.com:32202/?sport=1&i_code=8884175',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8884175',
		qq: '434221149', wechat: 'MM0330---', safewId: 'keai168', avatar: '/promo/avatar-keai.png',
	},
	'tx9.top': {
		domain: 'tx9.top', nickname: '校长', registerUrl: 'http://txty515.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8885958', downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=8885958',
		qq: '1847532728', wechat: 'Enting2026', additionalWechats: ['w061003z-'], safewId: 'xiaozhang66', avatar: '/promo/avatar-xiaozhang-tx9.png',
	},
	'tx7.top': {
		domain: 'tx7.top', nickname: '帝王', registerUrl: 'http://txty435.com',
		loginUrl: 'https://www.txty908.com:32202/?sport=1&i_code=2333350',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=2333350',
		qq: '470232997', wechat: 'liu13688987659', safewId: 'dw4880', avatar: '/promo/avatar-diwang.png',
	},
	'ty520.work': {
		domain: 'ty520.work', nickname: '四喜', registerUrl: 'http://txty017.com',
		loginUrl: 'https://www.txty963.com:30113/?i_code=2753117',
		downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=2753117',
		qq: '3840766712', wechat: 'X15292123362y', safewId: 'zhage1668', avatar: '/promo/avatar-sixi.png',
	},
	'ty360.cc': {
		domain: 'ty360.cc', nickname: '团长', registerUrl: 'http://txty24.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=7416946', downloadUrl: 'https://www.txty085.com:30000/entry/register/?i_code=7416946',
		qq: '', wechat: 'LL74259850', additionalWechats: ['x15335944193', 'YIli28_'], safewId: 'Tuanz58', avatar: '/promo/avatar-tuanzhang.png',
	},
	'tx360.cc': {
		domain: 'tx360.cc', nickname: '糖丫丫', registerUrl: 'http://txty022.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=9607163',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=9607163',
		qq: '2856570197', wechat: 'maryaaaa1111', safewId: 'yaya23519', avatar: '/promo/avatar-tangyaya.png',
	},
	'tx138.top': {
		domain: 'tx138.top', nickname: '客服', registerUrl: 'http://txty018.com',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=7064184',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=7064184',
		qq: '2856570197', wechat: 'HovikY-240608', safewId: 'mange168', avatar: '/promo/avatar-mange.png',
	},
	'tx996.vip': {
		domain: 'tx996.vip', nickname: '客服', registerUrl: 'http://txty94.vip',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=5529578',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=5529578',
		qq: '3652305892', wechat: 'LW1399857857', safewId: 'tx018', avatar: '/promo/avatar-tx996.png',
	},
	'x996.vip': {
		domain: 'x996.vip', nickname: '客服', registerUrl: 'http://txty94.vip',
		loginUrl: 'https://www.txty085.com:30000/entry/register/?i_code=5529578',
		downloadUrl: 'https://www.txty075.com:30000/?i_code=5529578',
		qq: '3652305892', wechat: 'LW1399857857', safewId: 'tx018', avatar: '/promo/avatar-tx996.png',
	},
}

const hostname = window.location.hostname.toLowerCase().replace(/^www\./, '')
const siteAliases = {
	'ty99.help': 'tx99.one',
	't99.help': 'tx99.one',
	'tx9.help': 'tx9.top',
	'tx9.shop': 'tx9.top',
	'tx7.help': 'tx7.top',
	't718.top': 'tx7.top',
	'tx520.work': 'ty520.work',
	'ty521.vip': 'ty520.work',
	'ty360.vip': 'ty360.cc',
	'ty360.one': 'ty360.cc',
	'tx360.one': 'tx360.cc',
	'tx360.xyz': 'tx360.cc',
	'tx5.help': 'tx5.top',
	'tx5.shop': 'tx5.top',
	'ty1314.top': 'ty1314.vip',
	'ty1314.cc': 'ty1314.vip',
	'x718.vip': 'tx996.vip',
	'x911.vip': 'tx996.vip',
	'x100.work': 'tx100.vip',
	'tx100.top': 'tx100.vip',
	'ty138.top': 'tx138.top',
	'tx139.top': 'tx138.top',
}
const testDomainById = {
	1: 'tx12.top',
	2: 'tx1618.vip',
	3: 'txty.help',
	4: 'txty.shop',
	5: 'txty123.top',
	6: 'tx999.top',
	7: 'txty520.vip',
	8: 'tv520.vip',
	9: 'tx5.top',
	10: 'tx99.one',
	11: 'tx100.vip',
	12: 'tx1314.vip',
	13: 'tx9.top',
	14: 'tx7.top',
	15: 'ty520.work',
	16: 'ty360.cc',
	17: 'tx360.cc',
	18: 'tx138.top',
	19: 'tx996.vip',
	20: 'x996.vip',
	21: 'ty1314.vip',
}
const testId = new URLSearchParams(window.location.search).get('id')
const selectedDomain = testDomainById[testId] || hostname
console.log('selectedDomain', selectedDomain, 'hostname', hostname, 'testId', testId)
const resolvedDomain = siteAliases[selectedDomain] || selectedDomain
const currentSite = {
	...(siteConfigs[resolvedDomain] || siteConfigs['tx1618.vip']),
	domain: siteConfigs[resolvedDomain] && resolvedDomain !== selectedDomain ? selectedDomain : (siteConfigs[resolvedDomain] || siteConfigs['tx1618.vip']).domain,
	safewUrl,
	safewDisplay: 'safew.im',
}

document.title = `${currentSite.domain} | 官方直营通道`

async function copyAccount(copyText) {
	if (!copyText) return false
	try {
		if (navigator.clipboard?.writeText && window.isSecureContext) {
			await navigator.clipboard.writeText(copyText)
			return true
		}
	} catch (error) {
		// Fall through to the legacy clipboard API for HTTP/LAN previews.
	}

	const input = document.createElement('textarea')
	input.value = copyText
	input.setAttribute('readonly', '')
	input.style.cssText = 'position:fixed;opacity:0;pointer-events:none;'
	document.body.appendChild(input)
	input.select()
	input.setSelectionRange(0, input.value.length)
	const copied = document.execCommand('copy')
	input.remove()
	return copied
}

async function handleCopy(event) {
	const target = event.target.closest('.copy-btn')
	if (!target) return
	const copyText = target.dataset.copy || ''
	const originalText = target.innerText
	if (await copyAccount(copyText)) {
		target.innerText = '已复制'
		window.setTimeout(() => {
			target.innerText = originalText
		}, 1500)
	}
}

async function addContact(platform, account) {
	if (platform === 'wechat') {
		const hasMultipleWechat = (currentSite.additionalWechats?.length || 0) > 0
		const confirmed = window.confirm(
			hasMultipleWechat
				? `即将打开微信\n\n当前站点有多个微信号，请先复制需要添加的微信到粘贴板。打开微信后，请进入「通讯录 → 添加朋友」，在搜索栏中粘贴该账号即可添加客服。`
				: `即将打开微信\n\n微信号「${account}」会自动复制到剪贴板。打开微信后，请进入「通讯录 → 添加朋友」，在搜索栏中粘贴该账号即可添加客服。`,
		)
		if (!confirmed) return
		if (hasMultipleWechat) {
			window.location.href = 'weixin://'
			return
		}
	}

	await copyAccount(account)

	if (platform === 'qq') {
		window.location.href = `mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${encodeURIComponent(account)}&card_type=person&source=sharecard`
		return
	}

	window.location.href = 'weixin://'
}
</script>
