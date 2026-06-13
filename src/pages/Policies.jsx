import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Policies() {
  return (
    <div className="page-enter-active">
      <Helmet>
        <title>FLEXIT | Rules & Policies - The Code</title>
        <meta name="description" content="FLEXIT is more than a gym; it's a performance laboratory. Read our gym etiquette, safety guidelines, and membership terms." />
      </Helmet>

      {/* Hero */}
      <header className="relative min-h-[520px] flex items-end overflow-hidden group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Heavy steel barbell in high energy gym"
          src="/hanumann.jpg"
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

        <div className="max-w-screen-2xl mx-auto px-8 pb-16 relative z-10 w-full">
          <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Rules & Standards</p>
          <h1
            className="uppercase text-white leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            The <span className="text-red-600">Code</span>
          </h1>
          <p className="text-zinc-300 font-lexend max-w-xl text-base leading-relaxed">
            FLEXIT is more than a gym — it's a high-performance laboratory. Our policies ensure that every athlete can pursue excellence without distraction or compromise.
          </p>
        </div>
      </header>

      {/* Gym Etiquette */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Standards</p>
            <h2
              className="text-white uppercase leading-none"
              style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Gym Etiquette
            </h2>
          </div>
          <div className="h-px flex-grow bg-zinc-800 ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="md:col-span-2 group relative min-h-[280px] overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Weights rack"
              src="/rackweight.jpg"
            />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="relative z-10 p-8">
              <span className="material-symbols-outlined text-red-600 text-3xl mb-3 block">fitness_center</span>
              <h3
                className="text-white uppercase mb-2"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
              >
                Re-Rack Your Weights
              </h3>
              <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                Respect the lab. Always return weights, bars, and plates to their designated storage after use. Leaving equipment out is an admission of weakness.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[280px] overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Clean gym equipment"
              src="/sanitize.jpg"
            />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="relative z-10 p-8">
              <span className="material-symbols-outlined text-red-600 text-3xl mb-3 block">cleaning_services</span>
              <h3
                className="text-white uppercase mb-2"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
              >
                Sanitize Station
              </h3>
              <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                Wipe down all surfaces post-set. Cleanliness is a mandatory standard here.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[280px] overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Gym timer clock"
              src="/clock.jpg"
            />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="relative z-10 p-8">
              <span className="material-symbols-outlined text-red-600 text-3xl mb-3 block">timer</span>
              <h3
                className="text-white uppercase mb-2"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
              >
                Respect the Clock
              </h3>
              <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                Limit rest periods on peak machines. Don't scroll while others wait to work in.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[220px] overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Headphones no speakers"
              src="/speaker.jpg"
            />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="relative z-10 p-8">
              <span className="material-symbols-outlined text-red-600 text-3xl mb-3 block">volume_off</span>
              <h3
                className="text-white uppercase mb-2"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
              >
                No Loud Speakers
              </h3>
              <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                Use headphones. Respect the mental focus of other athletes.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 group relative min-h-[220px] overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 flex flex-col justify-end">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Zero ego zone"
              src="/ego.jpg"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 p-8 flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <span className="material-symbols-outlined text-red-600 text-3xl mb-3 block">do_not_disturb_on</span>
                <h3
                  className="text-white uppercase mb-2"
                  style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}
                >
                  The Zero-Ego Zone
                </h3>
                <p className="text-zinc-400 font-lexend text-sm leading-relaxed max-w-xl">
                  Dropping weights aggressively or screaming during sets is permitted only in the Power Cage area. Keep the main floor professional and controlled. We value technique over noise.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="border-t border-zinc-800 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Non-negotiable</p>
              <h2
                className="text-white uppercase leading-none mb-12"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
              >
                Safety <span className="text-red-600">Guidelines</span>
              </h2>
              <ul className="space-y-8">
                {[
                  {
                    icon: 'check_circle',
                    title: 'Footwear Protocol',
                    desc: 'Closed-toe athletic shoes must be worn at all times. No sandals, boots, or bare feet allowed on the training floor.'
                  },
                  {
                    icon: 'check_circle',
                    title: 'Spotting & Safety Bars',
                    desc: 'Always use safety pins in power racks. Ask for a spot when lifting heavy. No solo maxing without spotters.'
                  },
                  {
                    icon: 'check_circle',
                    title: 'Incident Reporting',
                    desc: 'Report any equipment malfunction or injury immediately to floor staff. Zero tolerance for compromised safety.'
                  }
                ].map(item => (
                  <li key={item.title} className="flex gap-5 items-start">
                    <span className="material-symbols-outlined text-red-600 text-xl mt-1">check_circle</span>
                    <div>
                      <h4 className="text-white font-lexend font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-zinc-400 font-lexend text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[460px] overflow-hidden group border border-zinc-800 hover:border-red-600/50 transition-colors duration-500">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Athlete safety training"
                src="/safety.jpg"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-6 border border-red-600/30 pointer-events-none group-hover:border-red-600/60 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Terms */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="flex items-center gap-6 mb-16">
          <div>
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Legal</p>
            <h2
              className="text-white uppercase leading-none"
              style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Membership Terms
            </h2>
          </div>
          <div className="h-px flex-grow bg-zinc-800 ml-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Cancellations',
              desc: 'All membership cancellations require a 30-day written notice. No prorated refunds for mid-month cancellations. Administrative fees may apply to contract breaks.'
            },
            {
              title: 'Access Control',
              desc: 'Your digital key is strictly for individual use. Granting access to non-members will result in immediate termination of membership without refund.'
            },
            {
              title: 'Guest Policy',
              desc: 'Guests must sign a liability waiver and pay the daily drop-in fee. One guest per member per visit is permitted during staffed hours.'
            },
            {
              title: 'Age Requirements',
              desc: 'Members must be 18+ years of age. Minors (16–17) require a legal guardian\'s signature and must complete a mandatory orientation session.'
            }
          ].map(term => (
            <div
              key={term.title}
              className="border border-zinc-800 hover:border-red-600/50 transition-colors duration-300 p-8 group"
            >
              <h3
                className="text-white uppercase mb-4 group-hover:text-red-500 transition-colors duration-300"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '22px' }}
              >
                {term.title}
              </h3>
              <div className="h-px bg-zinc-800 mb-5 group-hover:bg-red-600/30 transition-colors duration-300"></div>
              <p className="text-zinc-400 font-lexend text-sm leading-relaxed">{term.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}