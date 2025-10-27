import React from "react";
import { Rocket, Trophy, BarChart3, ShieldCheck, Menu, User } from "lucide-react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-slate-700 hover:text-sky-700 transition-colors px-2 py-1 rounded-md hover:bg-sky-50"
  >
    {children}
  </a>
);

function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">RankUp</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#tests">Tests</NavLink>
          <NavLink href="#leaderboard">Leaderboard</NavLink>
          <NavLink href="#analytics">Analytics</NavLink>
          <NavLink href="#proctoring">Proctoring</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="#login" className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-sky-700 px-3 py-2 rounded-md hover:bg-sky-50">
            <User size={16} /> Login
          </a>
          <a href="#signup" className="inline-flex items-center justify-center rounded-md bg-sky-600 text-white px-3 py-2 text-sm font-medium hover:bg-sky-700 transition-colors">
            Sign up
          </a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700">
          <Menu size={18} />
        </button>
      </div>
      <div className="md:hidden border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between text-sm">
          <a className="inline-flex items-center gap-1 text-slate-700" href="#leaderboard"><Trophy size={16}/>Leaderboard</a>
          <a className="inline-flex items-center gap-1 text-slate-700" href="#analytics"><BarChart3 size={16}/>Analytics</a>
          <a className="inline-flex items-center gap-1 text-slate-700" href="#proctoring"><ShieldCheck size={16}/>Proctor</a>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
