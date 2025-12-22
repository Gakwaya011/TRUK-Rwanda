import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck } from 'lucide-react';
import logo from '../assets/Logo-01.png'; 

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // Clean, centered layout with NO Navbar/Footer
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Brand Header */}
      <div className="mb-8 text-center">
        <img src={logo} alt="TRUK Logo" className="h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Internal Portal</h2>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Security Banner */}
        <div className="bg-trukGreen p-4 flex items-center justify-center gap-2 text-white/90 text-sm font-medium">
            <ShieldCheck size={18} /> Secure Admin Access
        </div>

        <div className="p-8">
            {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center font-medium">
                {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Username</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                    </div>
                    <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-trukGreen focus:ring-2 focus:ring-trukGreen/20 outline-none transition-all font-medium"
                    placeholder="admin"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </div>
                </div>

                <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-trukGreen focus:ring-2 focus:ring-trukGreen/20 outline-none transition-all font-medium"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                </div>

                <button
                type="submit"
                disabled={loading}
                className="w-full bg-trukGreen text-white font-bold py-3.5 rounded-lg hover:bg-[#0d522b] transition-all transform active:scale-[0.98] shadow-md mt-2"
                >
                {loading ? 'Authenticating...' : 'Access Dashboard'}
                </button>
            </form>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-xs">© 2025 TRUK Rwanda Ltd. Authorized personnel only.</p>
    </div>
  );
};

export default AdminLogin;