'use client';
import { motion } from 'framer-motion';
import { Shield, Play, MapPin, Star, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Farmers and Crops
const products = [
  {
    id: 1,
    farmer: 'Ramesh Kumar',
    location: 'Nashik, Maharashtra',
    crop: 'Organic Tomatoes',
    price: '₹40/kg',
    rating: 4.8,
    image: '🍅',
    videoProof: true,
    escrow: true
  },
  {
    id: 2,
    farmer: 'Suresh Patel',
    location: 'Anand, Gujarat',
    crop: 'Fresh Milk (A2)',
    price: '₹80/L',
    rating: 4.9,
    image: '🥛',
    videoProof: true,
    escrow: true
  },
  {
    id: 3,
    farmer: 'Anita Devi',
    location: 'Punjab',
    crop: 'Basmati Rice',
    price: '₹120/kg',
    rating: 4.7,
    image: '🌾',
    videoProof: true,
    escrow: true
  },
  {
    id: 4,
    farmer: 'Vikram Singh',
    location: 'Indore, MP',
    crop: 'Soybean',
    price: '₹4500/quintal',
    rating: 4.6,
    image: '🫘',
    videoProof: true,
    escrow: true
  }
];

export default function Marketplace() {
  return (
    <main className="min-h-screen relative noise overflow-hidden pb-20">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}} />
      </div>

      {/* Navbar / Header */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition" />
            <span className="text-xl font-bold text-gradient">Humaixo Marketplace</span>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 gradient-bg rounded-full text-white text-sm font-semibold glow flex items-center gap-2"
          >
            <Shield className="w-4 h-4" />
            Sell Your Crop
          </motion.button>
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
            Direct from <span className="text-gradient">Farmers</span> to You
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            100% Fraud-Proof. Every product comes with a packing video proof and secure Escrow payment protection.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-5 hover:border-emerald-500/30 transition duration-300 group"
            >
              {/* Product Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{product.image}</div>
                {product.escrow && (
                  <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/20">
                    <Shield className="w-3 h-3" />
                    Escrow
                  </div>
                )}
              </div>

              {/* Product Details */}
              <h3 className="text-xl font-bold text-white mb-1">{product.crop}</h3>
              <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                {product.location}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  {product.farmer.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{product.farmer}</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    {product.rating}
                  </div>
                </div>
              </div>

              {/* Video Proof Button */}
              {product.videoProof && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mb-4 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition group-hover:border-emerald-500/30"
                >
                  <Play className="w-4 h-4 text-emerald-400" />
                  Watch Packing Video
                </motion.button>
              )}

              {/* Price & Buy Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-2xl font-bold text-gradient">{product.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 gradient-bg rounded-lg text-white text-sm font-semibold glow flex items-center gap-1"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}