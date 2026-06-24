import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      {/* Outer Glow Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1.3, 1],
          opacity: [0, 0.4, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-x-[-20%] inset-y-[-20%] bg-orange-500 blur-[60px] rounded-full pointer-events-none"
      />

      {/* Inner Vibrant Core */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3, 0.3],
          scale: [1, 1.1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-x-0 inset-y-8 bg-[#ff4d00]/50 blur-[30px] rounded-full pointer-events-none"
      />
      
      <img 
        src="https://res.cloudinary.com/dn5dfwdzd/image/upload/v1778709272/20260514_024510_0000_1_r9coy1.png" 
        alt="MC Heating & Plumbing Logo" 
        className="relative z-10 h-48 lg:h-72 w-auto object-contain -my-14 lg:-my-24 transition-all duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
