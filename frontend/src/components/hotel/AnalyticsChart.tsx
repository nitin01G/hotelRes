import React from 'react';
import { TrendingUp } from 'lucide-react';

export const AnalyticsChart: React.FC = () => {
  const data = [
    { month: 'Jan', value: 420, heightPct: 40 },
    { month: 'Feb', value: 480, heightPct: 50 },
    { month: 'Mar', value: 520, heightPct: 60 },
    { month: 'Apr', value: 580, heightPct: 70 },
    { month: 'May', value: 620, heightPct: 80 },
    { month: 'Jun', value: 750, heightPct: 90 },
    { month: 'Jul', value: 820, heightPct: 95 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Guest Analytics</h4>
          <h3 className="font-serif text-lg font-bold text-brand-900 flex items-center gap-2">
            Monthly Customer Demand
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          +18.4% Growth
        </span>
      </div>

      <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-slate-100">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
            <span className="text-[11px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
              {item.value}
            </span>
            <div
              style={{ height: `${item.heightPct}%` }}
              className="w-full bg-gradient-to-t from-accent to-accent-light rounded-t-lg transition-all duration-300 group-hover:from-accent-hover group-hover:to-accent shadow-sm"
              title={`${item.month}: ${item.value} guests`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-3 px-1 text-xs font-medium text-slate-500">
        {data.map((item, idx) => (
          <span key={idx} className="flex-1 text-center">{item.month}</span>
        ))}
      </div>
    </div>
  );
};
