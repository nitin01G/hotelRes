import React from 'react';
import { RoomType } from '../../types';
import { BedDouble, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoomTypePickerProps {
  selectedRoomType: RoomType;
  onSelectRoomType: (roomType: RoomType) => void;
  priceDisplay: string;
}

export const RoomTypePicker: React.FC<RoomTypePickerProps> = ({
  selectedRoomType,
  onSelectRoomType,
  priceDisplay,
}) => {
  const options: { id: RoomType; title: string; desc: string; priceRange: string }[] = [
    {
      id: 'standard',
      title: 'Standard Room',
      desc: 'Comfortable king bed, city view, high-speed WiFi, modern bath.',
      priceRange: '₹10,000 - ₹12,000',
    },
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      desc: 'Spacious suite area, premium balcony view, breakfast included.',
      priceRange: '₹15,000 - ₹18,000',
    },
    {
      id: 'suite',
      title: 'Luxury Suite',
      desc: 'Royal master bedroom, separate lounge, private jacuzzi, butler.',
      priceRange: '₹20,000 - ₹25,000',
    },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
        Select Accommodations Category
      </label>

      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => {
          const isSelected = selectedRoomType === opt.id;
          return (
            <div
              key={opt.id}
              onClick={() => onSelectRoomType(opt.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                isSelected
                  ? 'border-accent bg-accent/5 ring-2 ring-accent/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start space-x-3.5">
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <BedDouble className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-brand-900">{opt.title}</h4>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-accent" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                </div>
              </div>

              <div className="text-right shrink-0 pl-2">
                <span className="text-xs font-bold text-brand-900 block">{opt.priceRange}</span>
                <span className="text-[10px] text-slate-400">per night</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 text-xs font-semibold text-accent flex items-center gap-1.5 bg-accent/10 p-2.5 rounded-xl border border-accent/20">
        <Sparkles className="w-4 h-4" />
        Current Price Range Preview: {priceDisplay}
      </div>
    </div>
  );
};
