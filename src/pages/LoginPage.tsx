import React from 'react';
import {
  Shield,
  Github,
  Instagram,
  Linkedin,
  ExternalLink,
  PowerOff,
  Server,
  Layout,
  Heart,
} from 'lucide-react';

// TODO: replace with your actual LinkedIn profile URL
const LINKEDIN_URL = 'https://www.linkedin.com/in/YOUR-LINKEDIN-ID';
const INSTAGRAM_URL = 'https://www.instagram.com/guna_sai_22/';

const REPOS = [
  {
    title: 'Frontend',
    desc: 'React + TypeScript + Vite + Tailwind console, risk dashboards and GIS map views.',
    url: 'https://github.com/GunaReddy-22/mplads-frontend-main',
    icon: Layout,
    accent: 'text-cyan-400',
  },
  {
    title: 'Backend',
    desc: 'Node.js + TypeScript API with Prisma schema, auth and risk-scoring services.',
    url: 'https://github.com/GunaReddy-22/mplads-backend',
    icon: Server,
    accent: 'text-blue-400',
  },
];

const CONTACTS = [
  {
    label: 'Instagram',
    handle: '@guna_sai_22',
    url: INSTAGRAM_URL,
    icon: Instagram,
    accent: 'text-pink-400',
  },
  {
    label: 'LinkedIn',
    handle: 'Guna Sai Venkata Reddy',
    url: LINKEDIN_URL,
    icon: Linkedin,
    accent: 'text-sky-400',
  },
];

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070F1E] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-2xl glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative z-10 bg-slate-950/60">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0B192C] via-[#0F223D] to-[#070F1E] p-6 sm:p-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-glow border border-cyan-400/40 shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-white">MPLADS AI</h1>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  Decision Support
                </span>
              </div>
              <p className="text-[11px] text-cyan-400/90 font-medium">Risk Intelligence for eSAKSHI</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Notice */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/60 text-red-300 border border-red-500/30 text-[11px] mb-3">
              <PowerOff className="w-3 h-3" />
              <span>All Services Stopped</span>
            </div>
            <h2 className="text-2xl font-bold text-white">This project has been discontinued</h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              We are stopping all running instances of MPLADS AI. All servers, databases and
              deployments for this project are now down, so sign-in and the portal are no longer
              available.
            </p>
          </div>

          {/* Reference repos */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              For reference — developed parts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REPOS.map(({ title, desc, url, icon: Icon, accent }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${accent}`} />
                      <span className="text-sm font-semibold text-white">{title}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{desc}</p>
                  <p className="text-[10px] font-mono text-cyan-400/80 mt-2 truncate flex items-center gap-1">
                    <Github className="w-3 h-3 shrink-0" />
                    {url.replace('https://github.com/', '')}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Need more information? Get in touch
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACTS.map(({ label, handle, url, icon: Icon, accent }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${accent}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-[11px] text-slate-400 truncate">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Thanks */}
          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/25 text-center">
            <p className="text-sm text-cyan-100 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              Thank you for your cooperation and support.
            </p>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-4 border-t border-slate-800 text-center">
          <p className="text-[10px] text-slate-500">
            Built by Guna Sai Venkata Reddy •{' '}
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
