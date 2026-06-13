import React from 'react';

export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-4">
      <div className="relative w-20 h-20">
        {/* Glowing track */}
        <div className="absolute inset-0 rounded-full border-4 border-zinc-900"></div>
        {/* Spinning red loader */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 animate-spin"></div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-red-600 text-3xl animate-pulse">fitness_center</span>
        </div>
      </div>
      <div className="text-white font-lexend font-black tracking-widest text-sm uppercase animate-pulse">
        Loading <span className="text-red-600">FLEXIT</span> Lab...
      </div>
    </div>
  );
}
