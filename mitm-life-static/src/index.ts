/**
 * MITM.life - Red Team Education Platform
 * Advanced red team methodologies, penetration testing techniques, and security research
 */

interface Env {
  // Add any environment variables here if needed
}

// Function to generate HTML with CSS
function getHomeHTML(): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>MITM.life - Red Team Education &amp; Research Platform</title><meta name="description" content="Advanced red team methodologies, penetration testing techniques, and cutting-edge security research. Professional education for offensive security specialists."/><meta name="author" content="MITM Team"/><meta name="keywords" content="red team,penetration testing,offensive security,ethical hacking,security research,mitm attacks"/><meta name="robots" content="index, follow"/><meta property="og:title" content="MITM.life - Red Team Education &amp; Research Platform"/><meta property="og:description" content="Advanced red team methodologies, penetration testing techniques, and cutting-edge security research. Professional education for offensive security specialists."/><meta property="og:url" content="https://mitm.life/"/><meta property="og:site_name" content="MITM.life"/><meta property="og:type" content="website"/><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="relative flex min-h-screen flex-col"><header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"><div class="container mx-auto flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8"><div class="flex gap-6 md:gap-10"><a href="/" class="flex items-center space-x-2 group"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">M</span></div><span class="inline-block font-bold text-xl bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">MITM.life</span></a></div><nav class="flex items-center space-x-6"><a href="/research" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Research</a><a href="/techniques" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Techniques</a><a href="/tools" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Tools</a><a href="/about" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">About</a></nav></div></header><main class="flex-1"><div class="relative"><section class="relative min-h-[90vh] flex items-center justify-center matrix-bg"><div class="matrix-rain" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:1"></div><div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="mx-auto max-w-5xl text-center"><div class="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm scan-effect"><div class="flex items-center gap-2 text-sm mr-2"><div class="status-indicator w-2 h-2 rounded-full bg-red-400"></div><span class="font-medium text-red-400">⚡ </span></div>Advanced Red Team Research Hub</div><h1 class="mb-8 text-hero font-bold tracking-tight">Advanced Red Team <span class="gradient-text">Methodologies</span> &amp; Research</h1><p class="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">Cutting-edge red team techniques, penetration testing methodologies, and offensive security research. Advanced education for security professionals and researchers.</p><div class="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center"><a href="/techniques" class="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg focus-ring">Explore Techniques</a><a href="/tools" class="cyber-button-enhanced inline-flex h-14 items-center justify-center rounded-xl border border-primary bg-background/50 backdrop-blur-sm px-8 text-base font-semibold text-primary shadow-lg hover:bg-primary hover:text-primary-foreground focus-ring">Red Team Tools</a></div><div class="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground stagger-fade-in"><div class="flex items-center gap-2 text-sm"><div class="status-indicator w-2 h-2 rounded-full bg-green-400"></div><span class="font-medium text-green-400">● Advanced attack chains</span></div><div class="flex items-center gap-2 text-sm"><div class="status-indicator w-2 h-2 rounded-full bg-blue-400"></div><span class="font-medium text-blue-400">🛡 Ethical security research</span></div><div class="flex items-center gap-2 text-sm"><div class="status-indicator w-2 h-2 rounded-full bg-primary"></div><span class="font-medium text-primary">⟳ Professional methodologies</span></div></div></div></div></section><section class="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10"><div class="mx-auto max-w-6xl"><div class="glass-card-enhanced p-8 grid gap-8 md:grid-cols-4 text-center scan-effect"><div class="group data-flow"><div class="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">50+</div><div class="text-sm text-muted-foreground font-medium">Attack Techniques</div></div><div class="group data-flow"><div class="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">24/7</div><div class="text-sm text-muted-foreground font-medium">Research Updates</div></div><div class="group data-flow"><div class="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">15+</div><div class="text-sm text-muted-foreground font-medium">Tool Categories</div></div><div class="group data-flow"><div class="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform terminal-text">100%</div><div class="text-sm text-muted-foreground font-medium">Ethical Research</div></div></div></div></section><section class="mx-auto mt-16 max-w-6xl"><h2 class="mb-12 text-center text-3xl font-bold">Red Team Specializations</h2><div class="grid gap-8 lg:grid-cols-3 stagger-fade-in"><div class="tool-card text-center"><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Web Application Testing</h3><p class="text-muted-foreground mb-4">Advanced techniques for web app penetration testing, including OWASP methodology and custom exploit development.</p><a href="/techniques" class="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent focus-ring">Learn More</a></div><div class="tool-card text-center border-2 border-primary shadow-lg scale-105 relative"><div class="absolute -top-3 left-1/2 transform -translate-x-1/2"><span class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium trust-badge">Core Focus</span></div><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Network Infiltration</h3><p class="text-muted-foreground mb-4">MITM attacks, lateral movement, and advanced network penetration techniques for security professionals.</p><a href="/techniques" class="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-ring">Explore</a></div><div class="tool-card text-center"><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto scan-effect"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div><h3 class="mb-2 text-xl font-semibold">Social Engineering</h3><p class="text-muted-foreground mb-4">Psychological attack vectors, pretexting techniques, and human factor exploitation for red team engagements.</p><a href="/techniques" class="cyber-button-enhanced inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent focus-ring">Learn More</a></div></div></section><section class="mx-auto mt-16 max-w-4xl text-center"><div class="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 border"><h2 class="mb-4 text-3xl font-bold">Master Advanced Red Team Techniques</h2><p class="mb-6 text-lg text-muted-foreground">Comprehensive research hub for red team professionals. Advanced methodologies, cutting-edge techniques, professional development.</p><div class="flex flex-col gap-4 sm:flex-row sm:justify-center"><a href="/techniques" class="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">Explore Techniques</a><a href="/tools" class="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">Red Team Tools</a></div></div></section></div></main><footer class="border-t border-border/40 bg-card/50 backdrop-blur-sm"><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid gap-8 md:grid-cols-4"><div class="md:col-span-2"><div class="flex items-center space-x-2 mb-4"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">M</span></div><span class="font-bold text-lg bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">MITM.life</span></div><p class="text-muted-foreground text-sm mb-4 max-w-md">Advanced red team education platform and security research hub. Professional development for offensive security specialists.</p></div><div><h3 class="font-semibold mb-4 text-foreground">Techniques</h3><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="/techniques" class="hover:text-primary transition-colors">Network Infiltration</a></li><li><a href="/techniques" class="hover:text-primary transition-colors">Web App Testing</a></li><li><a href="/techniques" class="hover:text-primary transition-colors">Social Engineering</a></li></ul></div><div><h3 class="font-semibold mb-4 text-foreground">Resources</h3><ul class="space-y-2 text-sm text-muted-foreground"><li><a href="/tools" class="hover:text-primary transition-colors">Red Team Tools</a></li><li><a href="/research" class="hover:text-primary transition-colors">Research</a></li><li><a href="/about" class="hover:text-primary transition-colors">About</a></li></ul></div></div><div class="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground"><p>© 2025 MITM.life. All rights reserved.</p></div></div></div></footer></div>${MATRIX_SCRIPT}</body></html>`;
}

function getTechniquesHTML(): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Red Team Techniques - MITM.life</title><meta name="description" content="Advanced red team techniques, penetration testing methodologies, and offensive security research for professional development."/><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="relative flex min-h-screen flex-col"><header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"><div class="container mx-auto flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8"><div class="flex gap-6 md:gap-10"><a href="/" class="flex items-center space-x-2 group"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">M</span></div><span class="inline-block font-bold text-xl bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">MITM.life</span></a></div><nav class="flex items-center space-x-6"><a href="/research" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Research</a><a href="/techniques" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Techniques</a><a href="/tools" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Tools</a><a href="/about" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">About</a></nav></div></header><main class="flex-1"><section class="relative py-20 matrix-bg"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><div class="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">⚡ Advanced Attack Methodologies</div><h1 class="mb-8 text-hero font-bold tracking-tight">Red Team <span class="gradient-text">Techniques</span></h1><p class="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">Comprehensive red team methodologies and attack techniques for professional security education and research.</p></div></div></section><section class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"><div class="mx-auto max-w-7xl"><div class="grid gap-8 lg:grid-cols-3"><div class="tool-card"><div class="text-center mb-8"><h3 class="text-2xl font-bold mb-4">Network Infiltration</h3><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg></div></div><p class="text-muted-foreground mb-8 text-center leading-relaxed">MITM attacks, ARP poisoning, and network interception techniques</p><ul class="space-y-4 mb-10"><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">ARP spoofing techniques</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">SSL/TLS interception</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">Traffic manipulation</span></li></ul><a href="#" class="cyber-button w-full rounded-xl px-6 py-3 text-base font-semibold transition-all focus-ring border border-primary bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg">Learn Techniques</a></div><div class="tool-card featured"><div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><span class="bg-gradient-to-r from-primary to-green-400 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Core Focus</span></div><div class="text-center mb-8"><h3 class="text-2xl font-bold mb-4">Web Application Testing</h3><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div></div><p class="text-muted-foreground mb-8 text-center leading-relaxed">Advanced web app penetration testing and exploit development</p><ul class="space-y-4 mb-10"><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">SQL injection techniques</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">XSS exploitation</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">Authentication bypass</span></li></ul><a href="#" class="cyber-button w-full rounded-xl px-6 py-3 text-base font-semibold transition-all focus-ring bg-primary text-primary-foreground shadow-lg">Master Techniques</a></div><div class="tool-card"><div class="text-center mb-8"><h3 class="text-2xl font-bold mb-4">Social Engineering</h3><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto"><svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div></div><p class="text-muted-foreground mb-8 text-center leading-relaxed">Psychological attack vectors and human factor exploitation</p><ul class="space-y-4 mb-10"><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">Phishing campaigns</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">Pretexting techniques</span></li><li class="flex items-start"><div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"><svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm font-medium">Physical security bypass</span></li></ul><a href="#" class="cyber-button w-full rounded-xl px-6 py-3 text-base font-semibold transition-all focus-ring border border-primary bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground shadow-lg">Study Methods</a></div></div></div></section></main><footer class="border-t border-border/40 bg-card/50 backdrop-blur-sm"><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"><p class="text-center text-sm text-muted-foreground">© 2025 MITM.life. All rights reserved.</p></div></footer></div></body></html>`;
}

function getToolsHTML(): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Red Team Tools - MITM.life</title><meta name="description" content="Professional red team tools and resources for penetration testing, network infiltration, and offensive security research."/><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="relative flex min-h-screen flex-col"><header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"><div class="container mx-auto flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8"><div class="flex gap-6 md:gap-10"><a href="/" class="flex items-center space-x-2 group"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"><span class="text-primary-foreground font-bold text-sm">M</span></div><span class="inline-block font-bold text-xl bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">MITM.life</span></a></div><nav class="flex items-center space-x-6"><a href="/research" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Research</a><a href="/techniques" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Techniques</a><a href="/tools" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">Tools</a><a href="/about" class="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus-ring rounded-md px-2 py-1">About</a></nav></div></header><main class="flex-1"><section class="relative py-20 matrix-bg"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><div class="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">⚡ Professional Red Team Arsenal</div><h1 class="mb-8 text-hero font-bold tracking-tight">Advanced <span class="gradient-text">Red Team Tools</span></h1><p class="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">Professional-grade tools and resources for penetration testing, network infiltration, and offensive security research.</p></div></div></section><section class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"><div class="mx-auto max-w-6xl"><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Network Scanning</h3><p class="text-muted-foreground text-sm mb-4">Advanced network discovery, port scanning, and service enumeration techniques for penetration testing.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Payload Generation</h3><p class="text-muted-foreground text-sm mb-4">Custom exploit development, shellcode generation, and payload delivery mechanisms.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Wireless Attacks</h3><p class="text-muted-foreground text-sm mb-4">WiFi penetration testing, wireless network exploitation, and radio frequency analysis.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Web Application Testing</h3><p class="text-muted-foreground text-sm mb-4">SQL injection, XSS, authentication bypass, and advanced web app penetration techniques.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Post-Exploitation</h3><p class="text-muted-foreground text-sm mb-4">Privilege escalation, lateral movement, and persistence techniques for red team operations.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div><div class="tool-card p-6"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><h3 class="mb-2 text-lg font-semibold">Social Engineering</h3><p class="text-muted-foreground text-sm mb-4">Phishing frameworks, pretexting techniques, and human factor exploitation methodologies.</p><a href="#" class="text-primary text-sm hover:underline">Learn More →</a></div></div></div></section></main><footer class="border-t border-border/40 bg-card/50 backdrop-blur-sm"><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"><p class="text-center text-sm text-muted-foreground">© 2025 MITM.life. All rights reserved.</p></div></footer></div></body></html>`;
}
// Enhanced CSS with cybersecurity theme and animations
const CSS_CONTENT = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 142.1 76.2% 36.3%;
  --radius: 0.5rem;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.text-hero {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
}

.text-display {
  font-size: clamp(1.875rem, 4vw, 3rem);
}

.gradient-text {
  background: linear-gradient(135deg, hsl(var(--primary)), #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-card, .glass-card-enhanced {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.tool-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.tool-card.featured {
  border: 2px solid hsl(var(--primary));
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(34, 197, 94, 0.2);
  position: relative;
}

.cyber-button, .cyber-button-enhanced {
  background: linear-gradient(135deg, hsl(var(--primary)), #10b981);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.cyber-button:hover, .cyber-button-enhanced:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
}

.matrix-bg {
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  overflow: hidden;
}

.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: 1;
}

.scan-effect {
  position: relative;
  overflow: hidden;
}

.scan-effect::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scan-effect:hover::before {
  opacity: 1;
  animation: scan 2s infinite linear;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.status-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.terminal-text {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.trust-badge {
  position: relative;
  overflow: hidden;
}

.trust-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.trust-badge:hover::before {
  left: 100%;
}

.focus-ring:focus {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

.stagger-fade-in > * {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.stagger-fade-in > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-fade-in > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-fade-in > *:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.data-flow {
  position: relative;
}

.data-flow::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  width: 2px;
  height: 20px;
  background: hsl(var(--primary));
  transform: translateX(-50%);
  opacity: 0.6;
}

.text-primary { color: hsl(var(--primary)); }
.text-muted-foreground { color: hsl(var(--muted-foreground)); }
.text-foreground { color: hsl(var(--foreground)); }
.bg-background { background-color: hsl(var(--background)); }
.bg-primary { background-color: hsl(var(--primary)); }
.bg-card { background-color: hsl(var(--card)); }
.bg-muted { background-color: hsl(var(--muted)); }
.border-border { border-color: hsl(var(--border)); }
.border-primary { border-color: hsl(var(--primary)); }

.grid { display: grid; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.hidden { display: none; }
.block { display: block; }
.relative { position: relative; }
.absolute { position: absolute; }
.sticky { position: sticky; }
.top-0 { top: 0; }
.z-50 { z-index: 50; }
.z-10 { z-index: 10; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.flex-col { flex-direction: column; }
.flex-1 { flex: 1; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.text-center { text-align: center; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-10 { margin-bottom: 2.5rem; }
.mb-12 { margin-bottom: 3rem; }
.mt-8 { margin-top: 2rem; }
.mt-16 { margin-top: 4rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.border { border-width: 1px; }
.border-2 { border-width: 2px; }
.border-t { border-top-width: 1px; }
.border-b { border-bottom-width: 1px; }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.transition-all { transition: all 0.3s ease; }
.transition-colors { transition: color 0.3s ease; }
.hover\\:text-primary:hover { color: hsl(var(--primary)); }
.hover\\:bg-primary:hover { background-color: hsl(var(--primary)); }
.hover\\:scale-105:hover { transform: scale(1.05); }
.group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
.backdrop-blur-sm { backdrop-filter: blur(4px); }
.backdrop-blur-md { backdrop-filter: blur(12px); }
.antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-4 > * + * { margin-left: 1rem; }
.space-x-6 > * + * { margin-left: 1.5rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }

.max-w-sm { max-width: 24rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-5xl { max-width: 64rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

.w-2 { width: 0.5rem; }
.h-2 { height: 0.5rem; }
.w-3 { width: 0.75rem; }
.h-3 { height: 0.75rem; }
.w-5 { width: 1.25rem; }
.h-5 { height: 1.25rem; }
.w-6 { width: 1.5rem; }
.h-6 { height: 1.5rem; }
.w-8 { width: 2rem; }
.h-8 { height: 2rem; }
.w-12 { width: 3rem; }
.h-12 { height: 3rem; }
.w-16 { width: 4rem; }
.h-16 { height: 4rem; }
.rounded-full { border-radius: 9999px; }

@media (min-width: 640px) {
  .sm\\:flex-row { flex-direction: row; }
  .sm\\:justify-center { justify-content: center; }
  .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
}

@media (min-width: 768px) {
  .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  .md\\:gap-10 { gap: 2.5rem; }
  .md\\:block { display: block; }
  .md\\:flex-row { flex-direction: row; }
  .md\\:col-span-2 { grid-column: span 2 / span 2; }
}

@media (min-width: 1024px) {
  .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
}

.dark { color-scheme: dark; }

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: hsl(var(--primary));
}

ul {
  list-style: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}
`;

// Matrix rain animation script
const MATRIX_SCRIPT = `
<script>
(function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const matrixContainer = document.querySelector('.matrix-rain');
  if (!matrixContainer) return;
  
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '1';
  canvas.style.pointerEvents = 'none';
  matrixContainer.appendChild(canvas);
  
  function resizeCanvas() {
    canvas.width = matrixContainer.offsetWidth;
    canvas.height = matrixContainer.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(1);
  
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f4';
    ctx.font = '15px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 20, drops[i] * 20);
      
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 33);
})();
</script>
`;

// 404 page
function get404HTML(): string {
  return `<!DOCTYPE html><html><head><title>404 - Page Not Found</title><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark flex items-center justify-center"><div class="text-center"><h1 class="text-4xl font-bold text-primary mb-4">404</h1><p class="text-muted-foreground mb-4">Page not found</p><a href="/" class="cyber-button">Go Home</a></div></body></html>`;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Security headers
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline';",
      'Cache-Control': 'public, max-age=3600',
    };
    
    // Health check endpoint
    if (path === '/health') {
      return new Response(JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '3.0.0-redteam'
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders
        }
      });
    }
    
    // API endpoints
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'API endpoint not implemented' }), {
        status: 501,
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders
        }
      });
    }
    
    // Route static pages
    let htmlContent: string;
    
    switch (path) {
      case '/':
        htmlContent = getHomeHTML();
        break;
      case '/techniques':
      case '/techniques/':
        htmlContent = getTechniquesHTML();
        break;
      case '/tools':
      case '/tools/':
        htmlContent = getToolsHTML();
        break;
      case '/about':
      case '/about/':
        htmlContent = `<!DOCTYPE html><html><head><title>About - MITM.life</title><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="container mx-auto px-4 py-20"><h1 class="text-4xl font-bold text-center mb-8">About MITM.life</h1><div class="max-w-4xl mx-auto text-muted-foreground"><p class="mb-6">MITM.life is an advanced red team education platform and security research hub dedicated to offensive security methodologies and ethical hacking techniques.</p><p class="mb-6">We specialize in comprehensive red team education, penetration testing methodologies, and cutting-edge security research for professional development in offensive security.</p><p class="mb-6">Our research covers advanced attack techniques, network infiltration methods, and man-in-the-middle attack scenarios for educational and defensive security purposes.</p></div><div class="text-center mt-12"><a href="/techniques" class="cyber-button">Explore Techniques</a></div></div></body></html>`;
        break;
      case '/research':
      case '/research/':
      case '/blog':
      case '/blog/':
        htmlContent = `<!DOCTYPE html><html><head><title>Research - MITM.life</title><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="container mx-auto px-4 py-20"><h1 class="text-4xl font-bold text-center mb-8">Red Team Research</h1><div class="max-w-4xl mx-auto"><div class="grid gap-8 md:grid-cols-2"><div class="tool-card p-6"><h2 class="text-xl font-semibold mb-4">Advanced MITM Attack Techniques</h2><p class="text-muted-foreground mb-4">Comprehensive research on man-in-the-middle attacks, interception methods, and network infiltration.</p><span class="text-sm text-primary">Research Available</span></div><div class="tool-card p-6"><h2 class="text-xl font-semibold mb-4">Red Team Methodology Framework</h2><p class="text-muted-foreground mb-4">Systematic approach to red team engagements, from reconnaissance to post-exploitation.</p><span class="text-sm text-primary">Research Available</span></div></div></div></div></body></html>`;
        break;
      case '/privacy':
      case '/privacy/':
        htmlContent = `<!DOCTYPE html><html><head><title>Privacy Policy - MITM.life</title><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="container mx-auto px-4 py-20"><h1 class="text-4xl font-bold text-center mb-8">Privacy Policy</h1><div class="max-w-4xl mx-auto text-muted-foreground"><p class="mb-6">At MITM.life, we take your privacy seriously and are committed to protecting your personal information.</p><p class="mb-6"><strong>Information Collection:</strong> We collect minimal information necessary for educational content delivery and platform functionality.</p><p class="mb-6"><strong>Data Protection:</strong> All user data is encrypted and stored securely. We do not share personal information with third parties without explicit consent.</p><p class="mb-6"><strong>Educational Standards:</strong> All research and content is provided for educational purposes and follows strict ethical guidelines and legal compliance requirements.</p></div></div></body></html>`;
        break;
      case '/terms':
      case '/terms/':
        htmlContent = `<!DOCTYPE html><html><head><title>Terms of Service - MITM.life</title><style>${CSS_CONTENT}</style></head><body class="min-h-screen bg-background font-sans antialiased dark"><div class="container mx-auto px-4 py-20"><h1 class="text-4xl font-bold text-center mb-8">Terms of Service</h1><div class="max-w-4xl mx-auto text-muted-foreground"><p class="mb-6"><strong>Platform Scope:</strong> MITM.life provides advanced red team education and security research for legitimate cybersecurity education, professional development, and defensive security purposes only.</p><p class="mb-6"><strong>Ethical Guidelines:</strong> All research and techniques are provided for educational purposes and adhere to applicable laws and ethical standards.</p><p class="mb-6"><strong>Prohibited Uses:</strong> Content may not be used for illegal activities, unauthorized access, malicious attacks, or any other unlawful purposes.</p><p class="mb-6"><strong>Educational Standards:</strong> We maintain the highest standards of ethical security research and responsible disclosure in all educational content.</p></div></div></body></html>`;
        break;
      default:
        return new Response(get404HTML(), {
          status: 404,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            ...securityHeaders
          }
        });
    }
    
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        ...securityHeaders
      }
    });
  },
} satisfies ExportedHandler<Env>;