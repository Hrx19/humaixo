'use client';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Lock, ShieldCheck, ArrowLeft, Download, PlusCircle, Search } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Documents
const documents = [
  { id: 1, name: 'Aadhaar_Card.pdf', size: '1.2 MB', date: '2023-10-15', encrypted: true },
  { id: 2, name: '10th_Marksheet.pdf', size: '3.4 MB', date: '2023-08-20', encrypted: true },
  { id: 3, name: 'College_ID.pdf', size: '0.8 MB', date: '2024-01-10', encrypted: true },
];

// Mock Data for Books
const books = [
  { id: 1, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: '₹299', condition: 'Like New', image: '📘' },
  { id: 2, title: 'Physics Class 12', author: 'HC Verma', price: '₹450', condition: 'Good', image: '📗' },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', price: '₹350', condition: 'New', image: '📙' },
];

export default function Education() {
  return (
    <main className="min-h-screen relative noise overflow-hidden pb-20">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}} />
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
            <span className="text-xl font-bold text-gradient">Humaixo Edu & Vault</span>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 gradient-bg rounded-full text-white text-sm font-semibold glow flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            Upload Document
          </motion.button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 space-y-16">
        
        {/* Section 1: Secure Document Vault */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Lock className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Secure Document Vault</h2>
              <p className="text-gray-400 text-sm">End-to-end encrypted storage for your important files.</p>
            </div>
          </div>

          <div className="glass rounded-2xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-4 p-4 bg-white/5 text-gray-400 text-sm font-medium border-b border-white/5">
              <div>File Name</div>
              <div>Date</div>
              <div>Size</div>
              <div className="text-right">Action</div>
            </div>
            {documents.map((doc, index) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-4 p-4 items-center hover:bg-white/5 transition border-b border-white/5 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{doc.name}</span>
                  {doc.encrypted && <ShieldCheck className="w-4 h-4 text-emerald-400" title="Encrypted" />}
                </div>
                <div className="text-gray-400 text-sm">{doc.date}</div>
                <div className="text-gray-400 text-sm">{doc.size}</div>
                <div className="text-right">
                  <button className="p-2 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Books Marketplace */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Books Marketplace</h2>
                <p className="text-gray-400 text-sm">Buy and sell new or used books directly.</p>
              </div>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search books..." 
                className="pl-10 pr-4 py-2 glass rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 border border-white/10 w-64"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-blue-500/30 transition duration-300 group"
              >
                <div className="text-5xl mb-4 text-center">{book.image}</div>
                <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                <p className="text-gray-400 text-sm mb-3">by {book.author}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10">
                    Condition: {book.condition}
                  </span>
                  <span className="text-xl font-bold text-gradient">{book.price}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 gradient-bg rounded-xl text-white font-semibold glow flex items-center justify-center gap-2"
                >
                  Buy Now <BookOpen className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}