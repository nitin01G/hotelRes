import React from 'react';
import { Receipt, Building, Calendar, Users, ShieldCheck } from 'lucide-react';

interface OrderSummaryProps {
  reservationId: string;
  hotelName?: string;
  checkinDate?: string;
  checkoutDate?: string;
  guests?: number;
  roomType?: string;
  priceDisplay?: string;
  amount: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  reservationId,
  hotelName = 'Grand Palace Hotel',
  checkinDate,
  checkoutDate,
  guests = 2,
  roomType = 'Standard Room',
  priceDisplay = '10000 - 12000',
  amount,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
        <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-brand-900">Reservation Summary</h3>
          <p className="text-xs text-slate-500">ID: <span className="font-bold text-accent">{reservationId}</span></p>
        </div>
      </div>

      <div className="space-y-3.5 text-xs text-slate-600">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-400 font-medium">
            <Building className="w-3.5 h-3.5 text-accent" /> Hotel Property
          </span>
          <span className="font-bold text-brand-900">{hotelName}</span>
        </div>

        {checkinDate && checkoutDate && (
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5 text-accent" /> Dates
            </span>
            <span className="font-bold text-brand-900">{checkinDate} to {checkoutDate}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-400 font-medium">
            <Users className="w-3.5 h-3.5 text-accent" /> Guests & Room
          </span>
          <span className="font-bold text-brand-900">{guests} Guest(s) • {roomType}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-medium">Price Range Rate</span>
          <span className="font-semibold text-slate-700">₹{priceDisplay}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Payable Amount</span>
          <div className="text-2xl font-serif font-bold text-brand-900">
            ₹{amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          Taxes Included
        </div>
      </div>
    </div>
  );
};
