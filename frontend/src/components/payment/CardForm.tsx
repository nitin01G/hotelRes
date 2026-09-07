import React from 'react';
import { CreditCard, Calendar, Lock, User } from 'lucide-react';

interface CardFormProps {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  onCardNameChange: (v: string) => void;
  onCardNumberChange: (v: string) => void;
  onExpiryDateChange: (v: string) => void;
  onCvvChange: (v: string) => void;
}

export const CardForm: React.FC<CardFormProps> = ({
  cardName,
  cardNumber,
  expiryDate,
  cvv,
  onCardNameChange,
  onCardNumberChange,
  onExpiryDateChange,
  onCvvChange,
}) => {
  return (
    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
      <div>
        <label htmlFor="cardName" className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
          Cardholder Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            id="cardName"
            required
            placeholder="John Doe"
            value={cardName}
            onChange={(e) => onCardNameChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cardNumber" className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
          Card Number (16 Digits)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <CreditCard className="w-4 h-4" />
          </div>
          <input
            type="text"
            id="cardNumber"
            required
            maxLength={16}
            placeholder="1234567890123456"
            value={cardNumber}
            onChange={(e) => onCardNumberChange(e.target.value.replace(/\D/g, ''))}
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="expiryDate" className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
            Expiry Date (MM/YY)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="expiryDate"
              required
              maxLength={5}
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => onExpiryDateChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cvv" className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
            CVV (3 Digits)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type="password"
              id="cvv"
              required
              maxLength={3}
              placeholder="123"
              value={cvv}
              onChange={(e) => onCvvChange(e.target.value.replace(/\D/g, ''))}
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
