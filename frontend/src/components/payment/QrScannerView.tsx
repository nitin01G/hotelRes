import React from 'react';
import { QrCode, ScanLine } from 'lucide-react';

export const QrScannerView: React.FC = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
        <ScanLine className="w-4 h-4" />
        Instant QR Checkout
      </div>

      <div className="flex justify-center">
        <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-md">
          <img
            src={`${import.meta.env.BASE_URL}images/Upi.jpg`}
            alt="UPI QR Code"
            className="w-56 h-56 object-contain rounded-xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/accomo.jpg`;
            }}
          />
        </div>
      </div>

      <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
        Scan this QR code using any UPI enabled payment app (Google Pay, PhonePe, Paytm, BHIM) to complete your transaction.
      </p>
    </div>
  );
};
