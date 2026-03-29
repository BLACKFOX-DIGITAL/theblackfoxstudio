'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Globe, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib';
import { getFontFamily } from '@/utils/font';

export function TeamMemberCardUI({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Robust parsing for social data
  let social = { twitter: '', linkedin: '', web: '' };
  try {
    if (member.social) {
      social = typeof member.social === 'string' ? JSON.parse(member.social) : member.social;
    }
  } catch (e) {
    console.error("Social parsing error:", e);
  }

  return (
    <div 
      className="group perspective-1000 h-[480px] relative w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full preserve-3d relative"
      >
        {/* FRONT: Visual Identity */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl z-20 bg-white"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {member.avatar ? (
            <Image 
              src={member.avatar} 
              alt={member.name} 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
               <UserCircle size={120} strokeWidth={1} />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#011] via-[#011]/70 to-transparent">
            <h4 className="text-white font-black text-2xl mb-1 tracking-tight">{member.name}</h4>
            <p className="text-[#EE3A39] text-xs font-black uppercase tracking-[3px]">{member.role}</p>
          </div>
        </div>

        {/* BACK: Personnel Manifesto (Bio & Socials) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#011] rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center border border-[#EE3A39]/30 shadow-2xl z-10"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#EE3A39]/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <h4 className="text-white font-black text-xl mb-1 uppercase tracking-tight">{member.name}</h4>
          <p className="text-[#EE3A39] text-[10px] font-black uppercase tracking-[3px] mb-6">{member.role}</p>
          
          <div className="w-8 h-1 bg-[#EE3A39] rounded-full mb-8"></div>
          
          <div className="max-h-[160px] overflow-y-auto custom-scrollbar pr-2 mb-8">
            <p className={cn("text-gray-300 text-sm leading-relaxed font-medium italic", getFontFamily("lato"))}>
              &quot;{member.bio || "Dedicated to pushing the boundaries of visual excellence and technical precision in every frame."}&quot;
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center">
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] hover:shadow-lg hover:shadow-[#EE3A39]/30 transition-all active:scale-95">
                <Twitter size={20} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] hover:shadow-lg hover:shadow-[#EE3A39]/30 transition-all active:scale-95">
                <Linkedin size={20} />
              </a>
            )}
            {social.web && (
              <a href={social.web} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#EE3A39] hover:shadow-lg hover:shadow-[#EE3A39]/30 transition-all active:scale-95">
                <Globe size={20} />
              </a>
            )}
            {!social.twitter && !social.linkedin && !social.web && (
               <div className="text-[10px] text-gray-500 font-black uppercase tracking-[2px]">Secured Personnel</div>
            )}
          </div>
          
          <div className="mt-10 text-[9px] text-[#EE3A39] font-black uppercase tracking-[4px] opacity-20">
            Blackfox Certified
          </div>
        </div>
      </motion.div>
    </div>
  );
}
