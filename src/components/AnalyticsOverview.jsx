import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChart3 } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsOverview() {
  const accuracyData = useMemo(
    () => ({
      labels: ["Physics", "Chemistry", "Math/Bio"],
      datasets: [
        {
          label: "Accuracy %",
          data: [82, 76, 88],
          backgroundColor: ["#0ea5e9", "#22c55e", "#f59e0b"],
          borderWidth: 0,
        },
      ],
    }),
    []
  );

  const timeData = useMemo(
    () => ({
      labels: ["P", "C", "M/B"],
      datasets: [
        {
          label: "Avg Time per Q (sec)",
          data: [65, 58, 72],
          backgroundColor: "#e2e8f0",
          borderColor: "#94a3b8",
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const trendData = useMemo(
    () => ({
      labels: ["W1", "W2", "W3", "W4"],
      datasets: [
        {
          label: "Score",
          data: [610, 645, 632, 688],
          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14,165,233,0.15)",
          fill: true,
          tension: 0.35,
          pointRadius: 2,
        },
      ],
    }),
    []
  );

  return (
    <div id="analytics" className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-sky-600 text-white flex items-center justify-center"><BarChart3 size={18} /></div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Analytics Overview</h2>
          <p className="text-xs text-slate-500">Insights from your recent mock tests</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-3">
            <div className="text-xs text-slate-500 mb-2">Subject-wise Accuracy</div>
            <Pie
              data={accuracyData}
              options={{
                responsive: true,
                plugins: { legend: { position: "bottom" } },
              }}
            />
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3">
            <div className="text-xs text-slate-500 mb-2">Avg Time per Question</div>
            <Bar
              data={timeData}
              options={{
                responsive: true,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3">
          <div className="text-xs text-slate-500 mb-2">Weekly Score Trend</div>
          <Line
            data={trendData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: false } },
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-700 px-2 py-1">NEET</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-1">JEE Main</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-1">JEE Adv</span>
      </div>
    </div>
  );
}

export default AnalyticsOverview;
