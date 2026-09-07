import React from 'react';
import { PaymentMethod } from '../../types';
import { QrCode, Smartphone, CreditCard } from 'lucide-react';

interface MethodSelectorProps {
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}

export const MethodSelector: React.FC<MethodSelectorProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  const methods: { id: PaymentMethod; title: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'UPI',
      title: 'UPI Payment',
      desc: 'Pay using Google Pay, PhonePe, Paytm, or BHIM UPI ID.',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 'QRScanner',
      title: 'QR Code Scan',
      desc: 'Scan UPI QR code instantly using any payment app.',
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      id: 'DebitCard',
      title: 'Debit Card',
      desc: 'Visa, Mastercard, RuPay, or Maestro Debit Card.',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: 'CreditCard',
      title: 'Credit Card',
      desc: 'Visa, Mastercard, Amex Credit Card with instant authorization.',
      icon: <CreditCard className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
        Select Payment Method
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((method) => {
          const active = selectedMethod === method.id;
          return (
            <div
              key={method.id}
              onClick={() => onSelectMethod(method.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start space-x-3.5 ${
                active
                  ? 'border-accent bg-accent/5 ring-2 ring-accent/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${active ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}`}>
                {method.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-900">{method.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{method.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
