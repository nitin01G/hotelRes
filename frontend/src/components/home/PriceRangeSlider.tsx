import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
          Price Filter
        </span>
        <span className="text-xs font-semibold text-brand-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          ₹{minPrice.toLocaleString()} - ₹{maxPrice.toLocaleString()}
        </span>
      </div>

      <input
        type="range"
        min={10000}
        max={50000}
        step={5000}
        value={minPrice}
        onChange={(e) => onMinPriceChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
      />
    </div>
  );
};
