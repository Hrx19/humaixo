'use client';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Wrench, BookOpen, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Market', href: '/marketplace', icon: ShoppingBag },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Edu', href: '/education', icon: BookOpen },
    { name: 'Shield', href: '/cyber-shield', icon: Shield },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="mx-4 mb-4 glass rounded-2xl p-2 flex justify-between items-center border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.name} href={item.href} className="flex-1 flex flex-col items-center justify-center py-2 relative group">
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon 
                className={`w-5 h-5 mb-1 transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-gray-400 group-hover:text-white'
                }`} 
              />
              <span className={`text-[10px] font-medium transition-colors ${
                isActive ? 'text-emerald-400' : 'text-gray-500 group-hover:text-gray-300'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
