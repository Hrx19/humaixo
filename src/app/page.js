'use client';
import { motion, AnimatePresence } from 'framer-motion';
// Yahan 'Home' ko 'HomeIcon' kar diya gaya hai taaki conflict na ho
import { Shield, Zap, Globe, ArrowRight, Sparkles, Mic, Home as HomeIcon, ShoppingBag, Wrench, BookOpen } from 'lucide-react';
import VoiceAssistant from '../components/VoiceAssistant';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- BOTTOM NAV COMPONENT ---
function BottomNav() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon }, // Yahan bhi HomeIcon use hoga
    { name: 'Market', href: '/marketplace', icon: ShoppingBag },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Edu', href: '/education', icon: BookOpen },
    { name: 'Shield', href: '/cyber-shield', icon: Shield },
  ];

  return (
    <motion.nav initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-4 mb-4 glass rounded-2xl p-2 flex justify-between items-center border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.href} className="flex-1 flex flex-col items-center justify-center py-2 relative group">
              {isActive && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-emerald-500/10 rounded-xl border border-emerald-500/20" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
              <Icon className={`w-5 h-5 mb-1 transition-colors ${isActive ? 'text-emerald-400' : 'text-gray-400 group-hover:text-white'}`} />
              <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
// ------------------------------

export default function Home() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <main className="min-h-screen relative noise overflow-hidden pb-24">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl float" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl float" style={{animationDelay: '4s'}} />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center glow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Humaixo</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="/marketplace" className="hover:text-emerald-400 transition">Marketplace</Link>
            <Link href="/services" className="hover:text-emerald-400 transition">Services</Link>
            <Link href="/education" className="hover:text-emerald-400 transition">Education</Link>
            <Link href="/cyber-shield" className="hover:text-emerald-400 transition">Cyber Shield</Link>
          </div>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 gradient-bg rounded-full text-white font-semibold glow flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">The Future of Super Apps</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              One App.{' '}
              <span className="text-gradient">Infinite</span>{' '}
              Possibilities.
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From farmers selling crops to students learning, from secure document vaults to AI-powered assistance — Humaixo connects everything you need in one trusted platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 gradient-bg rounded-full text-white font-semibold glow flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 glass rounded-full text-white font-semibold">
                Watch Demo
              </motion.button>
            </div>

            <div className="flex gap-8 mt-12">
              {[{ num: '100K+', label: 'Active Users' }, { num: '50+', label: 'Countries' }, { num: '99.9%', label: 'Uptime' }].map((stat, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                  <div className="text-3xl font-bold text-gradient">{stat.num}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Floating Cards */}
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative h-[600px] hidden md:block">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 left-10 right-10 card-3d glass rounded-3xl p-8 glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Fraud-Proof Marketplace</div>
                  <div className="text-sm text-gray-400">Video Verified • Escrow Protected</div>
                </div>
              </div>
              <div className="space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${60 + i * 10}%` }} transition={{ delay: 1 + i * 0.2, duration: 1 }} className="h-full gradient-bg" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-40 -left-4 glass rounded-2xl p-4 glow">
              <Zap className="w-8 h-8 text-emerald-400" />
              <div className="text-xs mt-2 text-gray-300">AI Powered</div>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-20 -right-4 glass rounded-2xl p-4 glow">
              <Globe className="w-8 h-8 text-blue-400" />
              <div className="text-xs mt-2 text-gray-300">Global Reach</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating AI Voice Assistant Button */}
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsAssistantOpen(true)} className="fixed bottom-24 right-8 z-50 w-16 h-16 gradient-bg rounded-full flex items-center justify-center glow">
        <Mic className="w-8 h-8 text-white" />
      </motion.button>

      {/* AI Voice Assistant Modal */}
      <AnimatePresence>
        {isAssistantOpen && (
          <VoiceAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </main>
  );
}