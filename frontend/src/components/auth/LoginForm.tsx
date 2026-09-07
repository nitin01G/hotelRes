import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(searchParams.get('error'));
  const [successMsg] = useState<string | null>(searchParams.get('success'));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-brand-900">Welcome Back</h2>
        <p className="text-xs text-slate-500 mt-2">Log in to manage your luxury hotel reservations</p>
      </div>

      {successMsg && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-3.5 text-xs text-red-700 font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="loginEmail" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="loginEmail"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="loginPassword" className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="loginPassword"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 text-brand-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-bold shadow-md shadow-accent/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Logging in...</span>
          ) : (
            <>
              <span>Log In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center text-xs text-slate-500 border-t border-slate-100 pt-6">
        Don't have an account?{' '}
        <Link to="/signup" className="font-bold text-accent hover:underline">
          Register an Account
        </Link>
      </div>
    </div>
  );
};
