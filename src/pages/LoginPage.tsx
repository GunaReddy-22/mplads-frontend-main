import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowRight, CheckCircle, Database, Cpu, Activity, MapPin, Key, Sparkles, Copy, Check } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@mplads.ai');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please check credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemoCreds = () => {
    setEmail('admin@mplads.ai');
    setPassword('admin123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070F1E] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Dynamic Background Mesh / GIS Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left Visual & Mission Panel (Compact & Streamlined) */}
        <div className="hidden md:flex lg:col-span-5 bg-gradient-to-br from-[#0B192C] via-[#0F223D] to-[#070F1E] p-6 sm:p-8 flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div>
            {/* Government Emblem / Tech Header */}
            <div className="flex items-center gap-3 mb-6">
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
                <p className="text-[11px] text-cyan-400/90 font-medium">
                  Risk Intelligence for eSAKSHI
                </p>
              </div>
            </div>

            {/* Core Proposition Box */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/25 mb-6 backdrop-blur-md">
              <p className="text-xs font-semibold text-cyan-200 leading-relaxed italic">
                “We don’t replace eSAKSHI — we make eSAKSHI intelligent.”
              </p>
            </div>

            {/* Step-by-Step Architecture Pipeline */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Intelligent Pipeline
              </p>
              <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-[11px]">1. eSAKSHI / MPLADS Ingestion</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-[11px]">2. Multi-Signal Risk Scoring</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[11px]">3. Explainable AI (SHAP)</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px]">4. Human-in-the-Loop Review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>MoSPI Smart Governance</span>
            <span className="font-mono text-cyan-400/80 font-bold">SIH 2026</span>
          </div>
        </div>

        {/* Right Authentication Card (Focal Point) */}
        <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-slate-950/60">
          <div>
            {/* Mobile Header (Only visible on small screens) */}
            <div className="flex md:hidden items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-glow border border-cyan-400/40 shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-black tracking-tight text-white">MPLADS AI</h1>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                    Decision Support
                  </span>
                </div>
                <p className="text-[10px] text-cyan-400 font-medium">
                  Risk Intelligence & Decision Support System
                </p>
              </div>
            </div>

            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800 text-[11px] mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Prototype Demo • Live Evaluation</span>
              </div>
              <h2 className="text-xl font-bold text-white">Officer Sign In</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Access the national risk analytics & decision support console
              </p>
            </div>

            {/* Demo Credentials Helper Box */}
            <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900/60 to-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                  <Key className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Demo Login Credentials</span>
                </div>
                <button
                  type="button"
                  onClick={handleFillDemoCreds}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[10px] font-semibold transition-colors"
                  title="Auto-fill credentials"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Filled</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-cyan-300" />
                      <span>Auto-fill</span>
                    </>
                  )}
                </button>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between font-mono bg-slate-950/60 px-2 py-1 rounded-lg border border-slate-800 text-slate-300 text-[11px]">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-cyan-200 select-all font-bold">admin@mplads.ai</span>
                </div>
                <div className="flex items-center justify-between font-mono bg-slate-950/60 px-2 py-1 rounded-lg border border-slate-800 text-slate-300 text-[11px]">
                  <span className="text-slate-500">Password:</span>
                  <span className="text-cyan-200 select-all font-bold">admin123</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span>Role: Central Administrator</span>
                <span className="text-emerald-400 font-medium">Pre-filled & Ready</span>
              </div>
            </div>

            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@mplads.ai"
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-950/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Enter Decision Support Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[10px] text-slate-500">
              Authorized Government Personnel • Ministry of Statistics and Programme Implementation
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
