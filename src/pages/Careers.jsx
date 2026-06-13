import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Careers() {
  const handleShare = (name) => {
    if (navigator.share) {
      navigator.share({
        title: `${name} - FLEXIT Success Story`,
        text: `Check out the incredible fitness transformation of ${name} at FLEXIT Performance Lab!`,
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(`Link copied to clipboard!`);
    }
  };

  return (
    <div className="page-enter-active">
      <Helmet>
        <title>FLEXIT | Success Stories - The Victors</title>
        <meta name="description" content="Real people. Extreme discipline. Measurable results." />
      </Helmet>

      {/* Hero */}
      <header className="relative min-h-screen flex items-end overflow-hidden group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Elite Gym Interior"
          src="/accomplish.jpg"
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

        <div className="max-w-screen-2xl mx-auto px-8 pb-20 relative z-10 w-full">
          <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Execution & Evolution</p>
          <h1
            className="uppercase text-white leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 9vw, 110px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Mission<br /><span className="text-red-600">Accomplished</span>
          </h1>
          <p className="text-zinc-300 font-lexend max-w-xl text-base leading-relaxed mb-10">
            Inside the FLEXIT Lab, transformation isn't a wish — it's an engineering requirement. Meet the victors who redefined their limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            
              href="#victors"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              Explore The Vault →
            
            <button
              onClick={() => alert('Submit your story to success@flexit.com')}
              className="inline-block border border-zinc-600 hover:border-red-600 text-white px-10 py-4 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:bg-red-600/10"
            >
              Submit Your Story
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-red-600 text-4xl">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* Stories Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20" id="victors">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Results</p>
            <h2
              className="text-white uppercase leading-none"
              style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              The Victors
            </h2>
          </div>
          <p className="text-zinc-400 font-lexend text-sm max-w-sm leading-relaxed">
            Real individuals. Extreme discipline. Measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Rohan Mehta */}
          <div className="md:col-span-7 group relative overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col">
            <div className="aspect-video relative overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Rohan Mehta"
                src="/dead.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-red-600 text-white font-lexend font-black px-4 py-1 text-xs uppercase tracking-widest">
                Powerlifting
              </div>
              <div className="absolute bottom-4 right-4 text-right">
                <span className="block text-3xl font-black text-white" style={{ fontFamily: 'Anton, Impact, sans-serif' }}>200KG</span>
                <span className="text-zinc-400 font-lexend text-xs uppercase tracking-widest">Deadlift Max</span>
              </div>
            </div>
            <div className="p-8 bg-zinc-950 flex-grow">
              <h3
                className="text-white uppercase mb-1"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}
              >
                Rohan Mehta
              </h3>
              <p className="text-red-600 font-lexend text-xs uppercase tracking-widest mb-6">@rohan_lifts</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-400 font-lexend text-sm leading-relaxed italic border-l-2 border-red-600 pl-4 mb-6">
                    "FlexIt Lab provided the precision I needed. I didn't just get stronger — I optimized my entire physiology."
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => handleShare('Rohan Mehta')} className="text-zinc-500 hover:text-red-600 transition-colors">
                      <span className="material-symbols-outlined text-base">share</span>
                    </button>
                  </div>
                </div>
                <div className="border border-zinc-800 p-5">
                  <h4 className="text-white font-lexend font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-base">verified</span> Pro Tip
                  </h4>
                  <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                    Consistency over intensity. Showing up when you don't want to is the only way to build an iron will.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ishani Iyer */}
          <div className="md:col-span-5 group border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col">
            <div className="h-72 relative overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Ishani Iyer"
                src="/girl.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-red-600 text-white font-lexend font-black px-4 py-1 text-xs uppercase tracking-widest">
                Fat Loss
              </div>
              <div className="absolute bottom-4 right-4 text-right">
                <span className="block text-3xl font-black text-white" style={{ fontFamily: 'Anton, Impact, sans-serif' }}>-15KG</span>
                <span className="text-zinc-400 font-lexend text-xs uppercase tracking-widest">Total Result</span>
              </div>
            </div>
            <div className="p-8 bg-zinc-950 flex-grow flex flex-col justify-between">
              <div>
                <h3
                  className="text-white uppercase mb-1"
                  style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}
                >
                  Ishani Iyer
                </h3>
                <p className="text-zinc-400 font-lexend text-sm leading-relaxed italic mt-4 mb-6">
                  "The community here is relentless. Every session pushed me beyond what I thought was physically possible."
                </p>
              </div>
              <div className="border border-zinc-800 p-5">
                <h4 className="text-white font-lexend font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">water_drop</span> Pro Tip
                </h4>
                <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                  Hydration is the secret weapon. It's the simplest way to recover faster and stay sharp.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Kavita Rao */}
          <div className="md:col-span-12 group border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col md:flex-row">
            <div className="md:w-1/3 relative overflow-hidden min-h-[320px]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt="Kavita Rao"
                src="/gym3.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60"></div>
            </div>
            <div className="md:w-2/3 p-10 bg-zinc-950 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <p className="text-red-600 font-lexend text-xs uppercase tracking-[3px] mb-2">Executive Performance</p>
                  <h3
                    className="text-white uppercase leading-none"
                    style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)' }}
                  >
                    Kavita Rao
                  </h3>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="text-center px-6 py-3 border border-zinc-700">
                    <span className="block font-black text-white text-lg leading-none" style={{ fontFamily: 'Anton, Impact, sans-serif' }}>4:00 AM</span>
                    <span className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">Wake Up Call</span>
                  </div>
                  <div className="text-center px-6 py-3 bg-red-600">
                    <span className="block font-black text-white text-lg leading-none" style={{ fontFamily: 'Anton, Impact, sans-serif' }}>100%</span>
                    <span className="text-white/70 font-lexend text-xs uppercase tracking-widest">Discipline</span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-zinc-300 font-lexend text-base leading-relaxed italic mb-6">
                    "As a CEO, my energy levels are my most valuable asset. FLEXIT engineered a program that didn't just make me fit — it made me cognitively sharper."
                  </p>
                  <div className="flex items-center gap-1 text-red-600">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                  </div>
                </div>
                <div className="border-l border-zinc-800 pl-10">
                  <div className="border-l-2 border-red-600 pl-5 mb-6">
                    <h4 className="text-white font-lexend font-bold text-xs uppercase tracking-widest mb-2">Strategy Tip</h4>
                    <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                      Control your mornings. A workout at 5 AM means you've won the day before the world even wakes up.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">Follow her:</span>
                    <button onClick={() => handleShare('Kavita Rao')} className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-red-600 hover:text-red-600 transition-colors text-xs font-bold font-lexend">Ig</button>
                    <button onClick={() => handleShare('Kavita Rao')} className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-red-600 hover:text-red-600 transition-colors text-xs font-bold font-lexend">Tw</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800 py-32 group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Ready to become evidence"
          src="/evidence.jpg"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 px-8 text-center max-w-4xl mx-auto">
          <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Your turn</p>
          <h2
            className="text-white uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Ready to Become <span className="text-red-600">Evidence?</span>
          </h2>
          <p className="text-zinc-400 font-lexend text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Your transformation is a technical challenge. We are the engineers. Join the next cohort of high-performers at FLEXIT.
          </p>
          <Link
            to="/plans"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-16 py-5 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]"
          >
            Join the Elite →
          </Link>
        </div>
      </section>

    </div>
  );
}