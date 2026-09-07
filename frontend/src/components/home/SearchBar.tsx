import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="relative bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-md flex items-center">
      <div className="pl-3 text-slate-400">
        <MapPin className="w-5 h-5 text-accent" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by hotel name, location, or landmark..."
        className="w-full pl-3 pr-4 py-2 text-sm text-brand-900 placeholder:text-slate-400 bg-transparent focus:outline-none font-medium"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="pr-3 text-xs font-semibold text-slate-400 hover:text-slate-600"
        >
          Clear
        </button>
      )}
      <div className="pr-1">
        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white">
          <Search className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
