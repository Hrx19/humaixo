'use client';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Scan, Lock, Eye, ArrowLeft, Activity } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CyberShield() {
  const [linkToScan, setLinkToScan] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [password, setPassword] = useState('');

  const handleScan = () => {
    if (!linkToScan) return;
    setIsScanning(true);
    // Mock scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(linkToScan.includes('http') ? 'safe' : 'unsafe');
    }, 2000);
  };

  const getPasswordStrength = (pwd) => {
    if (pwd.length === 0) return 0;
    if (pwd.length < 6) return 1;
    if (pwd.length < 10) return 2;
    return 3;
  };

  const strength = getPasswordStrength(password);
  const strengthColors = ['bg-gray-600', 'bg-red-500', 'bg-yellow-500', 'bg-emerald-500'];
  const strengthTexts = ['Enter Password', 'Weak', 'Medium', 'Strong'];

  return (
    <main className="min-h-screen relative noise overflow-hidden pb-20">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}} />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition" />
            <span className="text-xl font-bold text-gradient">Humaixo Cyber Shield</span>
          </Link>
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <Shield className="w-4 h-4" />
            System Secure
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 space-y-12">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Digital <span className="text-gradient">Fortress</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Advanced tools to protect you from phishing, weak passwords, and online fraud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tool 1: Link Scanner */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="glass rounded-3xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Scan className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Phishing Link Scanner</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">Paste any suspicious URL to check if it's safe before you click.</p>
            
            <div className="flex gap-3 mb-4">
              <input 
                type="text" 
                value={linkToScan}
                onChange={(e) => setLinkToScan(e.target.value)}
                placeholder="https://suspicious-link.com" 
                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScan}
                disabled={isScanning}
                className="px-6 py-3 gradient-bg rounded-xl text-white font-semibold glow flex items-center gap-2 disabled:opacity-50"
              >
                {isScanning ? 'Scanning...' : 'Scan'} <Scan className="w-4 h-4" />
              </motion.button>
            </div>

            {scanResult && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  scanResult === 'safe' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {scanResult === 'safe' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                <span className="font-medium">{scanResult === 'safe' ? 'This link appears to be safe.' : 'Warning! This link looks suspicious.'}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Tool 2: Password Strength Checker */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Password Strength</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">Check how secure your password is against brute-force attacks.</p>
            
            <div className="relative mb-4">
              <input 
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type a password..." 
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
              />
              <Eye className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            <div className="space-y-2">
              <div className="flex gap-2 h-2">
                {[1, 2, 3].map((level) => (
                  <div 
                    key={level} 
                    className={`flex-1 rounded-full transition-all duration-500 ${
                      strength >= level ? strengthColors[strength] : 'bg-white/10'
                    }`} 
                  />
                ))}
              </div>
              <p className={`text-sm font-medium ${
                strength === 0 ? 'text-gray-500' : 
                strength === 1 ? 'text-red-400' : 
                strength === 2 ? 'text-yellow-400' : 'text-emerald-400'
              }`}>
                Strength: {strengthTexts[strength]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tool 3: Fraud Alert Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
              <Activity className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Recent Security Alerts</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Unusual Login Attempt', location: 'Mumbai, India', time: '2 hours ago', status: 'Blocked' },
              { title: 'New Device Added', location: 'Chrome on Windows', time: '1 day ago', status: 'Verified' },
              { title: 'Suspicious Transaction Blocked', location: 'UPI Payment', time: '3 days ago', status: 'Blocked' },
            ].map((alert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5 hover:border-white/10 transition"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${alert.status === 'Blocked' ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
                    {alert.status === 'Blocked' ? <AlertTriangle className="w-5 h-5 text-red-400" /> : <CheckCircle className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{alert.title}</h4>
                    <p className="text-gray-400 text-sm">{alert.location} • {alert.time}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  alert.status === 'Blocked' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {alert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}