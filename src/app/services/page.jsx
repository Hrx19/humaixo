'use client';
import { motion } from 'framer-motion';
import { Smartphone, Wrench, MapPin, Clock, Star, Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Technicians
const technicians = [
  {
    id: 1,
    name: 'Rahul Verma',
    expertise: 'iPhone & Samsung Expert',
    rating: 4.9,
    jobs: 120,
    distance: '2.5 km away',
    time: '15 mins',
    price: '299 visiting charge',
    status: 'Available Now'
  },
  {
    id: 2,
    name: 'Amit Singh',
    expertise: 'All Android Motherboard Repair',
    rating: 4.8,
    jobs: 85,
    distance: '4.1 km away',
    time: '25 mins',
    price: '₹199 visiting charge',
    status: 'Available Now'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    expertise: 'Software & Screen Replacement',
    rating: 5.0,
    jobs: 210,
    distance: '1.2 km away',
    time: '10 mins',
    price: '₹349 visiting charge',
    status: 'On a job'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen relative noise overflow-hidden pb-20">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" />
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
            <span className="text-xl font-bold text-gradient">Humaixo Services</span>
          </Link>
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <MapPin className="w-4 h-4" />
            Connaught Place, Delhi
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Expert Repair at Your <span className="text-gradient">Doorstep</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Verified technicians, transparent pricing, and live tracking. We fix your device while you watch.
          </p>
        </motion.div>

        {/* Live Map Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-64 md:h-80 glass rounded-3xl mb-12 relative overflow-hidden border border-white/10"
        >
          {/* Fake Map Background */}
          <div className="absolute inset-0 bg-[#0a0f1c] opacity-80">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          </div>
          
          {/* Map Pins */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 flex flex-col items-center"
          >
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center glow">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="mt-2 px-3 py-1 glass rounded-full text-xs text-white">Rahul is arriving</div>
          </motion.div>

          <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-white">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="mt-2 px-3 py-1 glass rounded-full text-xs text-gray-300">Your Location</div>
          </div>

          {/* Route Line (Mock) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path 
              d="M 250 120 Q 400 200 600 220" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="3" 
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Technicians List */}
        <h2 className="text-2xl font-bold text-white mb-6">Available Technicians Near You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-emerald-500/30 transition duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-lg font-bold">
                  {tech.name.charAt(0)}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tech.status === 'Available Now' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {tech.status}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tech.expertise}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {tech.rating}
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {tech.jobs} jobs
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 mb-4">
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {tech.time}
                </div>
                <div className="text-emerald-400 font-bold text-sm">
                  {tech.price}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 gradient-bg rounded-xl text-white font-semibold glow flex items-center justify-center gap-2"
              >
                Book Now <Smartphone className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}