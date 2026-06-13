import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [phone, setPhone] = useState('');

  return (
    <footer className="bg-black w-full border-t-4 border-red-600">
      
      {/* Top Section - Stay in the Fight */}
      {/* Top Section - Quote */}
<div className="max-w-screen-2xl mx-auto px-8 pt-16 pb-12 border-b border-zinc-800 text-center">
  <p className="text-zinc-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Words to train by</p>
  <h2 className="uppercase text-zinc-300 leading-none" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px',fontWeight: 400 }}>
    "A smooth sea never<br />made a skilled sailor."
  </h2>
</div>

        <div className="flex items-start justify-end">
          <p className="text-zinc-400 text-sm font-lexend max-w-xs text-right leading-relaxed">
            Get updates on new classes, training tips, and exclusive offers delivered to your inbox.
          </p>
        </div>
      

      {/* Bottom Section */}
      <div className="max-w-screen-2xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand + Address + Contact */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-2xl font-black italic text-red-600 tracking-widest font-lexend uppercase mb-4">
              FLEXIT
            </div>
            <p className="text-zinc-500 text-xs font-lexend uppercase tracking-widest font-bold mb-1">Address</p>
            <p className="text-white text-sm font-lexend font-bold">Bengaluru, MG Road, 15</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-lexend uppercase tracking-widest font-bold mb-1">Contact</p>
            <p className="text-white text-sm font-lexend font-bold">+91 98765 43210</p>
            <p className="text-white text-sm font-lexend font-bold">info@flexit.com</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-red-600 hover:text-red-600 transition-colors">
              <span className="material-symbols-outlined text-base">photo_camera</span>
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-red-600 hover:text-red-600 transition-colors">
              <span className="material-symbols-outlined text-base">groups</span>
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-red-600 hover:text-red-600 transition-colors">
              <span className="material-symbols-outlined text-base">play_circle</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-sm font-lexend uppercase tracking-widest font-bold mb-2">Navigation</p>
          <Link to="/" className="text-zinc-400 hover:text-white transition-colors text-sm font-lexend font-bold">Home</Link>
          <Link to="/plans" className="text-zinc-400 hover:text-white transition-colors text-sm font-lexend font-bold">Plans</Link>
          <Link to="/coaches" className="text-zinc-400 hover:text-white transition-colors text-sm font-lexend font-bold">Coaches</Link>
          <Link to="/careers" className="text-zinc-400 hover:text-white transition-colors text-sm font-lexend font-bold">Careers</Link>
          <Link to="/policies" className="text-zinc-400 hover:text-white transition-colors text-sm font-lexend font-bold">Policies</Link>
        </div>

        {/* Map */}
        <div className="w-full h-64 rounded overflow-hidden border border-zinc-800">
          <iframe
            title="FLEXIT Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
          ></iframe>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-zinc-800 py-4 text-center">
        <p className="font-lexend font-bold uppercase text-[10px] tracking-widest text-zinc-600">
          © {currentYear} FLEXIT PERFORMANCE LAB. NO EXCUSES.
        </p>
      </div>

    </footer>
  );
}