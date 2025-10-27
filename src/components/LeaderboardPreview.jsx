import React, { useMemo, useState } from "react";
import { Trophy, ChevronRight, RefreshCcw } from "lucide-react";

const sampleStudents = [
  { id: 1, name: "Aarav Gupta", state: "MH", batch: "JEE-2025", score: 720, tests: 12, accuracy: 92 },
  { id: 2, name: "Ishita Mehra", state: "DL", batch: "NEET-2025", score: 710, tests: 10, accuracy: 90 },
  { id: 3, name: "Rohan Verma", state: "KA", batch: "JEE-2025", score: 705, tests: 14, accuracy: 89 },
  { id: 4, name: "Sara Khan", state: "TN", batch: "NEET-2025", score: 701, tests: 13, accuracy: 88 },
  { id: 5, name: "Dev Patel", state: "GJ", batch: "JEE-2025", score: 698, tests: 11, accuracy: 88 },
  { id: 6, name: "Ananya Rao", state: "KA", batch: "NEET-2025", score: 694, tests: 9, accuracy: 86 },
  { id: 7, name: "Rahul Singh", state: "UP", batch: "JEE-2025", score: 690, tests: 10, accuracy: 85 },
  { id: 8, name: "Priya Nair", state: "KL", batch: "NEET-2025", score: 688, tests: 8, accuracy: 84 },
  { id: 9, name: "Kunal Shah", state: "MH", batch: "JEE-2025", score: 685, tests: 7, accuracy: 83 },
  { id: 10, name: "Neha Jain", state: "RJ", batch: "NEET-2025", score: 683, tests: 9, accuracy: 83 },
];

function LeaderboardPreview() {
  const [scope, setScope] = useState("all");
  const [range, setRange] = useState("weekly");

  const filtered = useMemo(() => {
    // For preview, we just sample-slice; in-app this would filter by state/batch and date range
    let list = [...sampleStudents];
    if (scope === "state") list = list.filter((s) => s.state === "MH");
    if (scope === "batch") list = list.filter((s) => s.batch === "JEE-2025");
    return list.slice(0, 7);
  }, [scope, range]);

  return (
    <div id="leaderboard" className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-amber-500 text-white flex items-center justify-center"><Trophy size={18} /></div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Leaderboard</h2>
            <p className="text-xs text-slate-500">Live ranks with filters</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900"><RefreshCcw size={14}/>Refresh</button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button onClick={() => setScope("all")} className={`px-3 py-1 rounded-md ${scope==='all' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>All India</button>
          <button onClick={() => setScope("state")} className={`px-3 py-1 rounded-md ${scope==='state' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>My State</button>
          <button onClick={() => setScope("batch")} className={`px-3 py-1 rounded-md ${scope==='batch' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>My Batch</button>
        </div>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button onClick={() => setRange("weekly")} className={`px-3 py-1 rounded-md ${range==='weekly' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Weekly</button>
          <button onClick={() => setRange("monthly")} className={`px-3 py-1 rounded-md ${range==='monthly' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Monthly</button>
          <button onClick={() => setRange("custom")} className={`px-3 py-1 rounded-md ${range==='custom' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Custom</button>
        </div>
      </div>

      <div className="mt-4 divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
        {filtered.map((s, idx) => (
          <div key={s.id} className="flex items-center justify-between bg-white px-3 sm:px-4 py-3">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 flex items-center justify-center rounded-full text-xs font-semibold ${idx < 3 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}>{idx + 1}</div>
              <div>
                <div className="text-sm font-medium text-slate-900">{s.name}</div>
                <div className="text-xs text-slate-500">{s.batch} • {s.state}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-right">
              <div>
                <div className="text-xs text-slate-500">Score</div>
                <div className="text-sm font-semibold text-slate-900">{s.score}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Accuracy</div>
                <div className="text-sm font-semibold text-emerald-600">{s.accuracy}%</div>
              </div>
              <button className="hidden sm:inline-flex items-center gap-1 text-xs text-sky-700 hover:underline">View <ChevronRight size={14}/></button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-slate-500">Top 10 public. Full leaderboard for paid users.</span>
        <a className="text-sky-700 hover:underline" href="#download-csv">Export CSV</a>
      </div>
    </div>
  );
}

export default LeaderboardPreview;
