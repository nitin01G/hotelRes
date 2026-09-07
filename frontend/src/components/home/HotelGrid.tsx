import React from 'react';
import { Hotel } from '../../types';
import { HotelCard } from './HotelCard';
import { SearchX, AlertCircle, RefreshCw } from 'lucide-react';

interface HotelGridProps {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
  onRetry?: () => void;
}

export const HotelGrid: React.FC<HotelGridProps> = ({
  hotels,
  loading,
  error,
  onRetry,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="bg-white rounded-3xl h-96 border border-slate-200/80 p-4 animate-pulse flex flex-col justify-between">
            <div className="bg-slate-200 h-48 rounded-2xl w-full mb-4" />
            <div className="space-y-3">
              <div className="bg-slate-200 h-5 rounded w-3/4" />
              <div className="bg-slate-200 h-4 rounded w-full" />
              <div className="bg-slate-200 h-4 rounded w-1/2" />
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <div className="bg-slate-200 h-6 w-24 rounded" />
              <div className="bg-slate-200 h-8 w-20 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-3xl p-12 text-center max-w-xl mx-auto my-8">
        <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-red-900 mb-2">Unable to Load Hotels</h3>
        <p className="text-sm text-red-700 mb-6">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Retry Request
          </button>
        )}
      </div>
    );
  }

  if (hotels.length === 0) {
    return (
      <div className="bg-white border border-slate-200/80 rounded-3xl p-16 text-center max-w-xl mx-auto my-8 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">No Matching Hotels Found</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          We couldn't find any hotels matching your current category or price range filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};
