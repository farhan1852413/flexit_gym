import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Coaches() {
  const coachesList = [
    {
      name: 'Vikram Singh',
      role: 'Head Coach',
      specialty: 'Elite Bodybuilding & Hypertrophy',
      img: '/arjun.jpg',
      colSpan: 'md:col-span-8',
      aspect: 'aspect-[16/9]'
    },
    {
      name: 'Ananya Sharma',
      role: 'Elite Coach',
      specialty: 'HIIT & Agility',
      img: '/ananya.jpg',
      colSpan: 'md:col-span-4',
      aspect: 'aspect-square md:aspect-auto'
    },
    {
      name: 'Priya Das',
      role: 'Mobility Specialist',
      specialty: 'Power Yoga & Mobility',
      img: '/priya.jpg',
      colSpan: 'md:col-span-4',
      aspect: 'aspect-square md:aspect-auto'
    },
    {
      name: 'Arjun Kapoor',
      role: 'Strength & Conditioning',
      specialty: 'Strength & Conditioning',
      img: '/vikram.jpg',
      colSpan: 'md:col-span-8',
      aspect: 'aspect-[16/9]'
    }
  ];

  const positions = [
    { title: 'Personal Trainer', type: 'Full-time · Performance Lab' },
    { title: 'Front Desk Manager', type: 'Full-time · Operations' },
    { title: 'Nutrition Specialist', type: 'Part-time · Wellness' },
    { title: 'Social Media Strategist', type: 'Remote · Marketing' }
  ];

  return (
    <div className="page-enter-active">
      <Helmet>
        <title>FLEXIT | Coaches - Meet The Elite Team</title>
        <meta name="description" content="Train with world-class athletic coaches at FLEXIT." />
      </Helmet>

      {/* Hero */}
      <header className="relative min-h-[520px] flex items-end overflow-hidden group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Elite training facility"
          src="/coachhero.jpg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-8 pb-16 relative z-10 w-full">
          <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Our Team</p>
          <h1
            className="uppercase text-white leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Meet the Elite
          </h1>
          <p className="text-zinc-300 font-lexend max-w-xl text-base leading-relaxed">
            Driven by results. Guided by expertise. No excuses.
          </p>
        </div>
      </header>

      {/* Coaches Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-3">Coaches</p>
            <h2
              className="text-white uppercase leading-none"
              style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Our Coaches
            </h2>
          </div>
          <p className="text-zinc-400 font-lexend text-sm max-w-md leading-relaxed">
            Every coach at FLEXIT undergoes rigorous selection. We don't just train — we transform lifestyles through mechanical precision and raw power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {coachesList.map((coach) => (
            <div
              key={coach.name}
              className={`${coach.colSpan} ${coach.aspect} group relative overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-colors duration-500`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt={`${coach.name} - ${coach.role}`}
                src={coach.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-red-600 font-lexend text-xs uppercase tracking-[3px] mb-2">
                  {coach.role}
                </p>
                <h3
                  className="text-white uppercase mb-2"
                  style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '28px' }}
                >
                  {coach.name}
                </h3>
                <p className="text-zinc-400 font-lexend text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {coach.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team */}
      <section className="border-t border-zinc-800 py-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Careers</p>
              <h2
                className="text-white uppercase leading-none mb-8"
                style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
              >
                Join the Team
              </h2>
              <p className="text-zinc-400 font-lexend text-base leading-relaxed mb-12">
                We are looking for elite performers who breathe discipline and live for results. If you have the drive to push yourself and others to their absolute limit, FLEXIT is your arena.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <span className="material-symbols-outlined text-red-600 text-2xl mt-1">verified</span>
                  <div>
                    <h4 className="text-white font-lexend font-bold text-sm uppercase tracking-widest mb-2">
                      Elite Environment
                    </h4>
                    <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                      Work with the best equipment and the most dedicated athletes in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <span className="material-symbols-outlined text-red-600 text-2xl mt-1">trending_up</span>
                  <div>
                    <h4 className="text-white font-lexend font-bold text-sm uppercase tracking-widest mb-2">
                      Growth Mastery
                    </h4>
                    <p className="text-zinc-400 font-lexend text-sm leading-relaxed">
                      Continuous education and certifications funded by the Performance Lab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Positions */}
            <div>
              <h3 className="text-white font-lexend font-bold text-xs uppercase tracking-[4px] mb-8">
                Open Positions
              </h3>
              <div className="space-y-3">
                {positions.map((pos) => (
                  <div
                    key={pos.title}
                    className="border border-zinc-800 hover:border-red-600/50 p-6 flex justify-between items-center group transition-all duration-300 hover:bg-zinc-950"
                  >
                    <div>
                      <h4
                        className="text-white uppercase mb-1"
                        style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '20px' }}
                      >
                        {pos.title}
                      </h4>
                      <p className="text-zinc-500 font-lexend text-xs uppercase tracking-widest">
                        {pos.type}
                      </p>
                    </div>
                    <button
                      onClick={() => alert(`Application for ${pos.title} submitted!`)}
                      className="text-red-600 font-lexend font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
                    >
                      Apply
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800 py-24 group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Ready to elevate"
          src="/elevate.jpg"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

        <div className="max-w-screen-2xl mx-auto px-8 text-center relative z-10">
          <p className="text-red-600 text-xs font-lexend uppercase tracking-[4px] mb-4">Get started</p>
          <h2
            className="text-white uppercase leading-none mb-12"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Ready to Elevate?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plans"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              Start Training →
            </Link>
            <button
              onClick={() => alert('Our team will contact you.')}
              className="border border-zinc-600 hover:border-red-600 text-white px-12 py-4 font-lexend font-black text-sm uppercase tracking-widest transition-all duration-300 hover:bg-red-600/10"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}