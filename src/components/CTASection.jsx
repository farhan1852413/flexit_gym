import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection({
  title = "Stay in the Fight",
  subtitle = "Get updates on new classes, training tips, and exclusive offers delivered to your inbox.",
  buttonText = "Apply for Membership",
  linkTo = "/plans"
}) {
  return (
    <section className="relative overflow-hidden my-12 min-h-[420px] flex items-center group">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        alt="High energy gym training"
        src="/cta.jpg"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Red accent borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>

      {/* Glow accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left - Big Title */}
          <h2
            className="text-white uppercase leading-none"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            {title}
          </h2>

          {/* Right - Caption + Button with blur strip */}
          <div className="py-8 px-10 flex flex-col items-start gap-6 max-w-md w-full">
            <p className="text-white text-xl md:text-2xl font-lexend leading-relaxed">
              {subtitle}
            </p>
            <Link
              to={linkTo}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              {buttonText} →
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}