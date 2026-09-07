import React from 'react';
import { HotelCategory } from '../../types';
import { Compass, Palmtree, Building2, Mountain, Crown, Waves } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Hotels', icon: <Compass className="w-4 h-4" /> },
    { id: 'beach', label: 'Beach Resorts', icon: <Palmtree className="w-4 h-4" /> },
    { id: 'city', label: 'City Luxury', icon: <Building2 className="w-4 h-4" /> },
    { id: 'mountain', label: 'Mountain Lodges', icon: <Mountain className="w-4 h-4" /> },
    { id: 'luxury', label: 'Royal & Grand', icon: <Crown className="w-4 h-4" /> },
    { id: 'lake', label: 'Lakeside Stays', icon: <Waves className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const active = selectedCategory.toLowerCase() === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              active
                ? 'bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]'
                : 'bg-white text-brand-700 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};
