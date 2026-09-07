import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white">
                <Hotel className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                ACCOMO
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Curating world-class luxury stays, seaside resorts, and executive
              urban retreats with seamless reservations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Hotel Discovery
                </Link>
              </li>

              <li>
                <Link
                  to="/reservations"
                  className="hover:text-white transition-colors"
                >
                  Manage Reservations
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors"
                >
                  Guest Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Why Choose ACCOMO
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                Secure Real-Time Booking
              </li>

              <li className="flex items-center gap-2 text-slate-300">
                <HeartHandshake className="w-4 h-4 text-teal-500" />
                Guaranteed Price Protection
              </li>

              <li className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-gold-500" />
                Verified 5-Star Properties
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Concierge Desk
            </h4>

            <p className="text-sm text-slate-300">
              City Center, Luxury District
            </p>

            <p className="text-sm text-slate-300 mt-1">
              support@accomo.com
            </p>

            <p className="text-sm font-semibold text-accent-light mt-2">
              +1 (800) 555-ACCOMO
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ACCOMO Hotel Reservation System.
            All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span>Java EE + React Architecture</span>
            <span>MySQL Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};