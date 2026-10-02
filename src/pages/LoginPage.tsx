import React from 'react';
import {
  Shield,
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
  PowerOff,
  Server,
  Layout,
  Database,
  Cpu,
  Globe,
  Heart,
} from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/guna-kovvuri/';
const INSTAGRAM_URL = 'https://www.instagram.com/guna_sai_22/';

const REPOS = [
  {
    title: 'Frontend',
    desc: 'React + TypeScript + Vite + Tailwind console, risk dashboards and GIS map views.',
    url: 'https://github.com/GunaReddy-22/mplads-frontend-main',
    icon: Layout,
    glow: 'from-cyan-500/25 to-transparent',
    accent: 'text-cyan-300',
  },
  {
    title: 'Backend',
    desc: 'Node.js + TypeScript API with Prisma schema, auth and risk-scoring services.',
    url: 'https://github.com/GunaReddy-22/mplads-backend',
    icon: Server,
    glow: 'from-blue-500/25 to-transparent',
    accent: 'text-blue-300',
  },
];

const CONTACTS = [
  {
    label: 'Instagram',
    handle: '@guna_sai_22',
    url: INSTAGRAM_URL,
    icon: Instagram,
    gradient: 'from-pink-500 via-fuchsia-500 to-orange-400',
  },
  {
    label: 'LinkedIn',
    handle: 'Guna Sai Venkata Reddy',
    url: LINKEDIN_URL,
    icon: Linkedin,
    gradient: 'from-sky-500 to-blue-600',
  },
];

const SERVICES = [
  { name: 'Web Portal', icon: Globe },
  { name: 'API Server', icon: Server },
  { name: 'Database', icon: Database },
  { name: 'Risk Engine', icon: Cpu },
];

// Deterministic floating particles (no randomness -> stable renders)
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + (i % 3),
  delay: (i * 0.7) % 9,
  duration: 9 + (i % 6) * 2,
}));

const STYLES = `
@keyframes mp-float-up { 0%{transform:translateY(0);opacity:0} 15%{opacity:.7} 100%{transform:translateY(-110vh);opacity:0} }
@keyframes mp-spin { to { transform: rotate(360deg); } }
@keyframes mp-spin-rev { to { transform: rotate(-360deg); } }
@keyframes mp-pulse-ring { 0%{transform:scale(.7);opacity:.7} 100%{transform:scale(1.6);opacity:0} }
@keyframes mp-flicker { 0%,100%{opacity:1} 45%{opacity:.55} 50%{opacity:1} 55%{opacity:.4} 60%{opacity:1} }
@keyframes mp-rise { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes mp-shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
@keyframes mp-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
.mp-rise { animation: mp-rise .7s cubic-bezier(.2,.8,.2,1) both; }
.mp-title { background-size:200% auto; animation: mp-shimmer 6s linear infinite; }
`;

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B16] relative overflow-hidden flex items-center justify-center px-4 py-10">
      <style>{STYLES}</style>

      {/* ---------- Background graphics ---------- */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:26px_26px] opacity-25 pointer-events-none" />
      <div className="absolute -top-48 -left-40 w-[34rem] h-[34rem] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-40 w-[34rem] h-[34rem] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-red-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-[-10px] rounded-full bg-cyan-300/70"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animation: `mp-float-up ${p.duration}s linear ${p.delay}s infinite`,
              boxShadow: '0 0 8px rgba(103,232,249,.8)',
            }}
          />
        ))}
      </div>

      {/* ---------- Main content ---------- */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Hero graphic */}
        <div className="mp-rise flex flex-col items-center text-center">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6">
            {/* pulse rings */}
            <span className="absolute inset-0 rounded-full border border-red-400/40" style={{ animation: 'mp-pulse-ring 3s ease-out infinite' }} />
            <span className="absolute inset-0 rounded-full border border-red-400/30" style={{ animation: 'mp-pulse-ring 3s ease-out 1.5s infinite' }} />

            {/* orbit svg */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="mpRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <g style={{ transformOrigin: '100px 100px', animation: 'mp-spin 18s linear infinite' }}>
                <circle cx="100" cy="100" r="92" fill="none" stroke="url(#mpRing)" strokeWidth="1" strokeDasharray="3 7" opacity=".7" />
                <circle cx="100" cy="8" r="4" fill="#22d3ee" />
                <circle cx="192" cy="100" r="3" fill="#818cf8" />
              </g>
              <g style={{ transformOrigin: '100px 100px', animation: 'mp-spin-rev 26s linear infinite' }}>
                <circle cx="100" cy="100" r="72" fill="none" stroke="#1E3E62" strokeWidth="1.2" strokeDasharray="1 5" />
                <circle cx="28" cy="100" r="3.5" fill="#f87171" />
                <circle cx="100" cy="172" r="2.5" fill="#22d3ee" />
              </g>
              <circle cx="100" cy="100" r="52" fill="none" stroke="#22d3ee" strokeWidth=".8" opacity=".25" />
            </svg>

            {/* core shield */}
            <div className="absolute inset-[28%] rounded-3xl bg-gradient-to-br from-[#0F223D] to-[#070F1E] border border-cyan-400/30 shadow-[0_0_40px_-5px_rgba(34,211,238,.45)] flex items-center justify-center overflow-hidden">
              <Shield className="w-1/2 h-1/2 text-cyan-300" strokeWidth={1.6} />
              <div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent" style={{ animation: 'mp-scan 3.2s linear infinite' }} />
              {/* offline slash */}
              <span className="absolute w-[120%] h-[2px] bg-red-500/80 rotate-45 shadow-[0_0_10px_rgba(239,68,68,.9)]" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/30 text-xs font-semibold tracking-wide mb-4 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <PowerOff className="w-3.5 h-3.5" />
            ALL SERVICES STOPPED
          </div>

          <h1 className="mp-title text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight">
            This project has been discontinued
          </h1>
          <p className="mt-2 text-sm font-semibold text-cyan-400/90">
            MPLADS AI &middot; Risk Intelligence for eSAKSHI
          </p>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            We are stopping all running instances. Every server, database and deployment
            for this project is now down, so sign-in and the portal are no longer available.
          </p>
        </div>

        {/* Server status grid */}
        <div className="mp-rise mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ animationDelay: '.15s' }}>
          {SERVICES.map(({ name, icon: Icon }, i) => (
            <div
              key={name}
              className="relative rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur p-3.5 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
              <Icon className="w-5 h-5 text-slate-500 mb-2" />
              <p className="text-xs font-semibold text-slate-300">{name}</p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-red-400" style={{ animation: `mp-flicker 4s ease-in-out ${i * 0.6}s infinite` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                OFFLINE
              </div>
            </div>
          ))}
        </div>

        {/* Repositories */}
        <div className="mp-rise mt-8" style={{ animationDelay: '.3s' }}>
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-slate-500 mb-3 text-center">
            For reference &middot; developed parts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REPOS.map(({ title, desc, url, icon: Icon, glow, accent }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 backdrop-blur p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,.45)]"
              >
                <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${glow} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-700/80 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${accent}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="relative mt-4 text-lg font-bold text-white">{title} repository</h3>
                <p className="relative mt-1 text-xs text-slate-400 leading-relaxed">{desc}</p>
                <p className="relative mt-3 text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5 truncate">
                  <Github className="w-3.5 h-3.5 shrink-0" />
                  {url.replace('https://github.com/', '')}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mp-rise mt-8" style={{ animationDelay: '.45s' }}>
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-slate-500 mb-3 text-center">
            Need more information? Get in touch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACTS.map(({ label, handle, url, icon: Icon, gradient }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl p-[1.5px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-40 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-center gap-4 rounded-[14px] bg-[#0A1424] p-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-bold text-white">{label}</p>
                    <p className="text-xs text-slate-400 truncate">{handle}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Thank you */}
        <div className="mp-rise mt-8 text-center" style={{ animationDelay: '.6s' }}>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-950/60 via-slate-900/60 to-indigo-950/60 border border-cyan-500/25 backdrop-blur">
            <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
            <span className="text-sm text-cyan-100">Thank you for your cooperation and support.</span>
          </div>
          <p className="mt-5 text-[11px] text-slate-500">
            Built by Guna Sai Venkata Reddy &middot;{' '}
            <a
              href="https://gunasai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/80 hover:text-cyan-300 transition-colors"
            >
              gunasai.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
