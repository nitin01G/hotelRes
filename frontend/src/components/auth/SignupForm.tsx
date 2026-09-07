import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Phone, Lock, Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signup({ firstName, lastName, email, phone, password });
      navigate('/login?success=Account created successfully. Please login.');
    } catch (err: any) {
      setError(err.message || 'Unable to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-brand-900">Register Account</h2>
        <p className="text-xs text-slate-500 mt-2">Join ACCOMO Luxe for exclusive hotel booking privileges</p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-3.5 text-xs text-red-700 font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                id="firstName"
                required
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <input
              type="email"
              id="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <input
              type="tel"
              id="phone"
              required
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-bold shadow-md shadow-accent/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Creating Account...</span>
          ) : (
            <>
              <span>Register</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-xs text-slate-500 border-t border-slate-100 pt-5">
        Already have an account?{' '}
        <Link to="/login" className="font-bold text-accent hover:underline">
          Log In
        </Link>
      </div>
    </div>
  );
};
