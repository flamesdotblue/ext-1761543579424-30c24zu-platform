import React from "react";
import { PlayCircle, Building2, Crown, Users } from "lucide-react";

function QuickActions() {
  const actions = [
    { label: "Take Demo Test", icon: PlayCircle, href: "#demo", color: "bg-sky-600 text-white", subtle: false },
    { label: "Join Institute", icon: Building2, href: "#onboard", color: "bg-white text-slate-800 border border-slate-200", subtle: true },
    { label: "View Leaderboard", icon: Users, href: "#leaderboard", color: "bg-white text-slate-800 border border-slate-200", subtle: true },
    { label: "Upgrade", icon: Crown, href: "#upgrade", color: "bg-amber-500 text-white", subtle: false },
  ];

  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {actions.map((a) => (
        <a
          key={a.label}
          href={a.href}
          className={`group rounded-xl px-4 py-3 sm:py-4 flex items-center justify-center gap-2 text-sm font-medium shadow-sm hover:shadow transition-all ${a.color}`}
        >
          <a.icon size={18} className={a.subtle ? "text-sky-600" : ""} />
          <span>{a.label}</span>
        </a>
      ))}
    </div>
  );
}

export default QuickActions;
