import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Plans() {
  return (
    <div className="page-enter-active">
      <Helmet>
        <title>FLEXIT | Membership Plans - Choose Your Weapon</title>
        <meta name="description" content="Select the membership that fuels your obsession. Monthly, 6-Month, and Yearly plans designed for elite athletes." />
      </Helmet>

      {/* ── Hero Header ── */}
      <header className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden min-h-[320px] sm:min-h-[420px] flex items-end group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Choose your weapon"
          src="/hero9.jpg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 relative z-10 pb-2 sm:pb-4">
          <p className="text-red-600 text-[10px] sm:text-xs font-lexend uppercase tracking-[3px] sm:tracking-[4px] mb-3 sm:mb-4">Membership</p>
          <h1
            className="uppercase text-white leading-none mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(36px, 8vw, 96px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Choose Your <span className="text-red-600">Weapon</span>
          </h1>
          <p className="text-zinc-300 font-lexend max-w-xl text-sm sm:text-base leading-relaxed">
            Select the membership that fuels your obsession. No shortcuts. No excuses. Just performance.
          </p>
        </div>
      </header>

      {/* ── Pricing Section ── */}
      <main className="max-w-screen-2xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">

          {/* Monthly Plan */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 p-6 sm:p-8 flex flex-col group">
            <div className="mb-6 sm:mb-8">
              <p className="text-zinc-500 text-xs font-lexend uppercase tracking-[3px] mb-2 sm:mb-3">Entry tier</p>
              <h3 className="text-white uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}>Monthly</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-red-600 font-black" style={{ fontSize: '38px' }}>₹2,500</span>
                <span className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">/ month</span>
              </div>
            </div>
            <div className="h-px bg-zinc-800 mb-6 sm:mb-8"></div>
            <div className="flex-grow space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                'Full gym floor access',
                '24/7 elite access',
                'Standard locker access',
                'All cardio zones',
                'Group fitness classes',
                'Mobile app access',
                'Fitness assessment (1x)',
              ].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600 text-lg flex-shrink-0">check_circle</span>
                  <span className="text-zinc-300 font-lexend text-sm">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 font-lexend text-xs uppercase tracking-widest">Flexible. Cancel anytime.</p>
          </div>

          {/* 6-Month Plan */}
          <div className="bg-zinc-950 border-2 border-red-600 p-6 sm:p-8 flex flex-col relative md:scale-105 z-10 shadow-[0_0_60px_rgba(220,38,38,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-lexend font-black px-4 sm:px-6 py-1.5 uppercase text-xs tracking-widest whitespace-nowrap">
              Most Popular · Save 20%
            </div>
            <div className="mb-6 sm:mb-8">
              <p className="text-red-600 text-xs font-lexend uppercase tracking-[3px] mb-2 sm:mb-3">Best seller</p>
              <h3 className="text-white uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}>6-Month</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black" style={{ fontSize: '38px' }}>₹12,000</span>
                <span className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">/ 6 months</span>
              </div>
              <p className="text-zinc-500 font-lexend text-xs mt-1">~₹2,000 per month</p>
            </div>
            <div className="h-px bg-red-600/30 mb-6 sm:mb-8"></div>
            <div className="flex-grow space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                'Everything in Monthly',
                '1 PT session per month',
                'Dedicated locker room',
                'Guest pass (1 per month)',
                'Nutrition consultation (1x)',
                'Recovery zone access',
                'Priority class booking',
                'Body composition scan (1x)',
              ].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600 text-lg flex-shrink-0">check_circle</span>
                  <span className="text-zinc-200 font-lexend text-sm">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 font-lexend text-xs uppercase tracking-widest">Commit to the process.</p>
          </div>

          {/* Yearly Plan */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 p-6 sm:p-8 flex flex-col group">
            <div className="mb-6 sm:mb-8">
              <p className="text-zinc-500 text-xs font-lexend uppercase tracking-[3px] mb-2 sm:mb-3">Elite tier</p>
              <h3 className="text-white uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}>Yearly</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-red-600 font-black" style={{ fontSize: '38px' }}>₹20,000</span>
                <span className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">/ year</span>
              </div>
              <p className="text-zinc-500 font-lexend text-xs mt-1">~₹1,667 per month</p>
            </div>
            <div className="h-px bg-zinc-800 mb-6 sm:mb-8"></div>
            <div className="flex-grow space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                'Everything in 6-Month',
                'Unlimited PT consultations',
                'Full global access',
                'Premium recovery zone',
                'Nutrition blueprint included',
                'Unlimited guest passes',
                'Exclusive member events',
                'Dedicated performance coach',
                'Monthly body scan & report',
              ].map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600 text-lg flex-shrink-0">check_circle</span>
                  <span className="text-zinc-300 font-lexend text-sm">{f}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 font-lexend text-xs uppercase tracking-widest">Best value. Full dominance.</p>
          </div>

        </div>
      </main>

      {/* ── Image Section ── */}
      <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 pb-12 sm:pb-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="relative min-h-[220px] sm:min-h-[320px] overflow-hidden group">
          <img
            alt="Elite Equipment"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/elite.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 border border-zinc-800 group-hover:border-red-600/50 transition-colors pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 p-5 sm:p-8">
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[3px] mb-1 sm:mb-2">Facility</p>
            <h4 className="text-white uppercase" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(22px, 4vw, 32px)' }}>
              Elite Equipment
            </h4>
          </div>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[320px] overflow-hidden group">
          <img
            alt="Recovery Lab"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/ice.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 border border-zinc-800 group-hover:border-red-600/50 transition-colors pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 p-5 sm:p-8">
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[3px] mb-1 sm:mb-2">Recovery</p>
            <h4 className="text-white uppercase" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(22px, 4vw, 32px)' }}>
              Recovery Lab
            </h4>
          </div>
        </div>
      </section>

      {/* ── Feature Matrix — hidden on mobile, shown md+ ── */}
      <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 pb-12 sm:pb-20 hidden md:block">
        <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Compare</p>
        <h2 className="text-white uppercase mb-12" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '40px' }}>
          Feature Matrix
        </h2>
        <div className="border border-zinc-800 overflow-hidden">
          <div className="grid grid-cols-4 bg-zinc-950 border-b border-zinc-800 p-6">
            <div className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">Benefit</div>
            <div className="text-center text-zinc-400 font-lexend text-xs uppercase tracking-widest">Monthly</div>
            <div className="text-center text-red-600 font-lexend text-xs uppercase tracking-widest">6-Month</div>
            <div className="text-center text-zinc-400 font-lexend text-xs uppercase tracking-widest">Yearly</div>
          </div>
          {[
            { label: '24/7 Gym Access',           monthly: true,  six: true,  yearly: true  },
            { label: 'All Cardio Zones',           monthly: true,  six: true,  yearly: true  },
            { label: 'Group Fitness Classes',      monthly: true,  six: true,  yearly: true  },
            { label: 'Mobile App Access',          monthly: true,  six: true,  yearly: true  },
            { label: 'Fitness Assessment',         monthly: true,  six: true,  yearly: true  },
            { label: 'PT Sessions',                monthly: false, six: true,  yearly: true  },
            { label: 'Dedicated Locker Room',      monthly: false, six: true,  yearly: true  },
            { label: 'Guest Passes',               monthly: false, six: true,  yearly: true  },
            { label: 'Recovery Zone',              monthly: false, six: true,  yearly: true  },
            { label: 'Nutrition Consultation',     monthly: false, six: true,  yearly: true  },
            { label: 'Priority Class Booking',     monthly: false, six: true,  yearly: true  },
            { label: 'Body Composition Scan',      monthly: false, six: true,  yearly: true  },
            { label: 'Unlimited PT Consultations', monthly: false, six: false, yearly: true  },
            { label: 'Dedicated Coach',            monthly: false, six: false, yearly: true  },
            { label: 'Nutrition Blueprint',        monthly: false, six: false, yearly: true  },
            { label: 'Unlimited Guest Passes',     monthly: false, six: false, yearly: true  },
            { label: 'Exclusive Member Events',    monthly: false, six: false, yearly: true  },
            { label: 'Monthly Body Scan & Report', monthly: false, six: false, yearly: true  },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-4 p-5 items-center border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors ${i % 2 === 0 ? 'bg-black' : 'bg-zinc-950'}`}
            >
              <div className="text-zinc-300 font-lexend text-sm">{row.label}</div>
              <div className="text-center">
                {row.monthly ? <span className="material-symbols-outlined text-red-600">check</span> : <span className="text-zinc-700 font-lexend text-xs">—</span>}
              </div>
              <div className="text-center">
                {row.six ? <span className="material-symbols-outlined text-red-600">check</span> : <span className="text-zinc-700 font-lexend text-xs">—</span>}
              </div>
              <div className="text-center">
                {row.yearly ? <span className="material-symbols-outlined text-red-600">check</span> : <span className="text-zinc-700 font-lexend text-xs">—</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature Matrix mobile version ── */}
      <section className="max-w-screen-2xl mx-auto px-5 pb-12 md:hidden">
        <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Compare</p>
        <h2 className="text-white uppercase mb-6" style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}>
          Feature Matrix
        </h2>
        {/* Tab-style accordion per plan */}
        {[
          { plan: 'Monthly', color: 'border-zinc-700', features: ['24/7 Gym Access','All Cardio Zones','Group Fitness Classes','Mobile App Access','Fitness Assessment'] },
          { plan: '6-Month', color: 'border-red-600', features: ['Everything in Monthly','PT Sessions','Dedicated Locker Room','Guest Passes','Recovery Zone','Nutrition Consultation','Priority Class Booking','Body Composition Scan'] },
          { plan: 'Yearly',  color: 'border-zinc-700', features: ['Everything in 6-Month','Unlimited PT Consultations','Dedicated Coach','Nutrition Blueprint','Unlimited Guest Passes','Exclusive Member Events','Monthly Body Scan & Report'] },
        ].map(({ plan, color, features }) => (
          <div key={plan} className={`border-l-2 ${color} pl-4 mb-6`}>
            <p className="text-white font-lexend font-black uppercase text-sm tracking-widest mb-3">{plan}</p>
            <div className="space-y-2">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base flex-shrink-0">check_circle</span>
                  <span className="text-zinc-400 font-lexend text-xs">{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}