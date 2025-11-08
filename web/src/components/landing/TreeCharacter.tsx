'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const pastelMint = '#d4f4d0';
const pastelSage = '#b8d9b5';
const pastelGreen = '#a8c9a5';
const pastelBrown = '#a0826d';

const encouragingMessages = [
  "Let's grow together! 🌱",
  "You're doing great! 🌳",
  "Keep studying! 🍃",
  "Your tree is growing! 🌲",
  "Stay focused! 🌿",
  "Amazing progress! 🌴",
];

interface TreeCharacterProps {
  size?: number;
  message?: string;
  showMessage?: boolean;
  animated?: boolean;
}

export function TreeCharacter({ 
  size = 120, 
  message = "Let's grow together! 🌱",
  showMessage = false,
  animated = true 
}: TreeCharacterProps) {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [isVisible, setIsVisible] = useState(showMessage);

  useEffect(() => {
    if (showMessage) {
      setIsVisible(true);
      const interval = setInterval(() => {
        setCurrentMessage(encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)]);
      }, 4000);
      return () => clearInterval(interval);
    } else {
      setIsVisible(false);
    }
  }, [showMessage]);

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="relative"
        animate={animated ? { y: [0, -8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-lg">
          {/* Trunk */}
          <motion.rect
            x="50"
            y="70"
            width="20"
            height="40"
            rx="4"
            fill={pastelBrown}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          {/* Main foliage */}
          <motion.circle cx="60" cy="55" r="18" fill={pastelGreen} opacity="0.9" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: 'spring', stiffness: 200 }} />
          <motion.circle cx="50" cy="60" r="15" fill={pastelMint} opacity="0.85" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 200 }} />
          <motion.circle cx="70" cy="60" r="15" fill={pastelSage} opacity="0.85" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: 'spring', stiffness: 200 }} />
          {/* Smaller leaves */}
          <motion.circle cx="45" cy="50" r="10" fill={pastelMint} opacity="0.7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: 'spring', stiffness: 200 }} />
          <motion.circle cx="75" cy="50" r="10" fill={pastelSage} opacity="0.7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring', stiffness: 200 }} />
          {/* Top leaves */}
          <motion.circle cx="55" cy="40" r="8" fill={pastelMint} opacity="0.6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: 'spring', stiffness: 200 }} />
          <motion.circle cx="65" cy="40" r="8" fill={pastelSage} opacity="0.6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring', stiffness: 200 }} />
          {/* Face */}
          <motion.circle cx="55" cy="58" r="2.5" fill="#5a4a3a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
          <motion.circle cx="65" cy="58" r="2.5" fill="#5a4a3a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
          <motion.path d="M 55 65 Q 60 68 65 65" stroke="#5a4a3a" strokeWidth="2" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.5 }} />
        </svg>
      </motion.div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          className="absolute -top-16 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-2xl shadow-lg border border-white/20 min-w-[140px] text-center"
        >
          <p className="text-sm font-medium">{currentMessage}</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/95"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}


