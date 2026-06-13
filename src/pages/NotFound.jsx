import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="page-enter-active min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-black">
      <Helmet>
        <title>FLEXIT | 404 - Limits Exceeded</title>
        <meta name="description" content="This page does not exist. Return to the FLEXIT Performance Lab." />
      </Helmet>

      <div className="max-w-md">
        {/* Glowing Warning Icon */}
        <div className="w-24 h-24 rounded-full bg-red-600/10 border border-red-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(239,68,68,0.25)] animate-pulse">
          <span className="material-symbols-outlined text-red-600 text-5xl">warning</span>
        </div>

        {/* 404 Title */}
        <h1 className="font-display-xl text-5xl sm:text-7xl font-black italic text-white mb-4 leading-none">
          404
        </h1>
        <h2 className="font-headline-md text-2xl uppercase text-red-600 mb-6 tracking-widest">
          Limits Exceeded
        </h2>

        {/* Message */}
        <p className="font-body-lg text-secondary text-sm sm:text-base mb-10 leading-relaxed">
          The coordinate you have entered does not exist in the FLEXIT Performance Lab. You have crossed into the no-grind zone.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-block bg-primary-container text-on-primary-container px-10 py-4 font-label-bold uppercase tracking-widest hover:bg-inverse-primary transition-all active:scale-95 shadow-[0_0_20px_rgba(255,85,64,0.3)]"
        >
          Return to Base
        </Link>
      </div>
    </div>
  );
}
