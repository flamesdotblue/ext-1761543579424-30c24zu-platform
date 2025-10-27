import React from "react";
import HeaderNav from "./components/HeaderNav";
import QuickActions from "./components/QuickActions";
import LeaderboardPreview from "./components/LeaderboardPreview";
import AnalyticsOverview from "./components/AnalyticsOverview";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-900">
      <HeaderNav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 space-y-6">
        <section className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Welcome to RankUp</h1>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">AI-powered mock tests, leaderboards, and analytics for NEET & JEE aspirants.</p>
            </div>
            <div className="flex gap-2">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-sky-600 text-white px-4 py-2 text-sm font-medium hover:bg-sky-700 transition-colors">Take Demo Test</a>
              <a href="#upgrade" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors">Upgrade</a>
            </div>
          </div>
          <QuickActions />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeaderboardPreview />
          <AnalyticsOverview />
        </section>
      </main>
      <footer className="mt-8 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} RankUp • Built for NEET & JEE • PWA Ready</footer>
    </div>
  );
}

export default App;
