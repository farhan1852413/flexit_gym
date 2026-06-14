import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/CTASection.jsx';
import axios from '../api/axios.js';

export default function Home() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      await axios.post('/contacts', { name, email, message });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter-active">
      <Helmet>
        <title>FLEXIT | Home - Forge Your Greatness</title>
        <meta name="description" content="Break your limits at FLEXIT Performance Lab. Elite equipment, world-class coaches, and a community built for winners." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="Vibrant high-energy gym shot with professional athlete performing heavy barbell squats"
            src="/hero3.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          {/* Extra bottom fade for mobile readability */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden"></div>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-8 w-full mt-16 sm:mt-20">
          <div className="max-w-3xl">
            <p className="text-red-600 font-lexend text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] mb-4 sm:mb-6">
              Bengaluru's Elite Performance Lab
            </p>
            <h1
              className="text-white uppercase leading-none mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(40px, 9vw, 110px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
            >
              Build Strength<br />That Lasts
            </h1>
            <p
              className="text-zinc-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-sm sm:max-w-lg leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              Fitness should be accessible to everyone. Train harder, recover smarter, and become the best version of yourself.
            </p>
            {/* Buttons: stack on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
  <Link
    to="/plans"
    className="inline-block text-white px-10 py-4 font-lexend font-black text-sm uppercase tracking-[3px] transition-all duration-300 active:scale-95 text-center"
    style={{
      background: 'rgba(220, 38, 38, 0.35)',
      border: '1px solid rgba(220, 38, 38, 0.6)',
    }}
  >
    Start Training Now →
  </Link>
  <Link
    to="/coaches"
    className="inline-block text-zinc-200 hover:text-white px-10 py-4 font-lexend font-black text-sm uppercase tracking-[3px] transition-all duration-300 text-center"
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}
  >
    Meet the Coaches
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-12 sm:py-section-gap max-w-screen-2xl mx-auto px-5 sm:px-6">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase mb-6 sm:mb-8 text-center">
          Why FLEXIT?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-surface-container p-6 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-2">precision_manufacturing</span>
            <h3 className="font-headline-md text-white uppercase mb-2">Elite Equipment</h3>
            <p className="font-body-md text-white">State-of-the-art machines curated for performance.</p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-2">sports_gymnastics</span>
            <h3 className="font-headline-md text-white uppercase mb-2">World‑Class Coaching</h3>
            <p className="font-body-md text-white">Elite coaches to guide your transformation.</p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-2">people</span>
            <h3 className="font-headline-md text-white uppercase mb-2">Premium Community</h3>
            <p className="font-body-md text-white">Join a supportive network of high‑performers.</p>
          </div>
        </div>
      </section>

      {/* ── Gallery Banner ── */}
      <section className="relative min-h-[400px] sm:min-h-[600px] flex items-end overflow-hidden group">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          alt="Gym facility in action"
          src="/run.jpg"
        />
        {/* Dark gradient only at the bottom — image stays fully visible above */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
        <div className="relative z-10 w-full text-center pb-12 sm:pb-16 px-5">
          <h2 className="font-display-xl text-2xl sm:text-3xl md:text-4xl text-white uppercase font-label-bold drop-shadow-lg">
            Our Facility in Action
          </h2>
          <p className="font-body-lg text-white/90 mt-3 sm:mt-4 text-sm sm:text-base max-w-md mx-auto drop-shadow">
            Experience the energy, the lights, the intensity – all captured for you.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us – Bento Grid ── */}
      <section className="py-12 sm:py-section-gap max-w-screen-2xl mx-auto px-5 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <h2 className="font-headline-lg text-headline-lg text-white uppercase mb-2">
            Why <span className="text-primary-container">Flexit</span>?
          </h2>
          <div className="h-1 w-24 bg-primary-container"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

          {/* Elite Bio-Mechanical – wide card */}
          <div className="sm:col-span-2 bg-surface-container p-7 sm:p-10 flex flex-col justify-end relative min-h-[280px] sm:min-h-[350px] overflow-hidden group border border-zinc-800 hover:border-red-600/35 transition-colors duration-500">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Close-up of professional steel dumbbells highlighted by saturated red lighting"
              src="/hero2.jpg"
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-3 sm:mb-4">
                precision_manufacturing
              </span>
              <h3 className="font-headline-md text-headline-md text-white uppercase mb-2">
                Elite Bio-Mechanical Design
              </h3>
              <p className="font-body-md text-body-md text-on-secondary-container max-w-md text-sm sm:text-base">
                Our equipment is curated to match natural human movement patterns, maximizing hypertrophy while minimizing joint stress.
              </p>
            </div>
          </div>

          {/* Certified Coaches */}
          <div className="bg-surface-container p-7 sm:p-10 flex flex-col justify-end relative min-h-[260px] sm:min-h-[300px] overflow-hidden group border-l-4 border-primary-container hover:border-red-500 transition-colors duration-500">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Certified coach training an athlete"
              src="/lift.jpg"
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl mb-3 sm:mb-4">
                military_tech
              </span>
              <h3 className="font-headline-md text-xl sm:text-2xl text-white uppercase mb-2 sm:mb-4">
                Certified Coaches
              </h3>
              <p className="font-body-md text-body-md text-on-secondary-container text-sm sm:text-base">
                Work with professionals who have trained world-class athletes and transformed thousands of lives.
              </p>
            </div>
          </div>

          {/* 24/7 Access */}
          <div className="bg-surface-container p-7 sm:p-10 flex flex-col justify-end relative min-h-[260px] sm:min-h-[300px] overflow-hidden group border-b-4 border-primary-container hover:border-red-500 transition-colors duration-500">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Gym facility at night with lights on"
              src="/pull.jpg"
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl sm:text-5xl mb-3 sm:mb-4">
                schedule
              </span>
              <h3 className="font-headline-md text-xl sm:text-2xl text-white uppercase mb-2 sm:mb-4">
                24/7 Elite Access
              </h3>
              <p className="font-body-md text-body-md text-on-secondary-container text-sm sm:text-base">
                Your goals don't sleep. Full access to our facility anytime, day or night, under 24/7 security.
              </p>
            </div>
          </div>

          {/* Performance Lab – wide card */}
          <div className="sm:col-span-2 flex flex-col justify-end relative min-h-[260px] sm:min-h-[300px] overflow-hidden group shadow-[0_10px_30px_rgba(255,85,64,0.15)]">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Performance lab with advanced training equipment"
              src="/hero1.jpg"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
            <div className="relative z-10 p-7 sm:p-10">
              <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg uppercase mb-3 sm:mb-4 text-white">
                The Performance Lab
              </h3>
              <p className="font-body-lg text-body-lg font-bold mb-4 sm:mb-6 text-white text-sm sm:text-base">
                More than a gym. A scientific approach to your physical transformation.
              </p>
              <div className="flex gap-6 sm:gap-8">
                <div>
                  <span className="block font-display-xl text-3xl sm:text-4xl md:text-5xl font-black text-white">15k+</span>
                  <span className="font-label-bold uppercase text-xs text-white/70">Members</span>
                </div>
                <div>
                  <span className="block font-display-xl text-3xl sm:text-4xl md:text-5xl font-black text-white">50+</span>
                  <span className="font-label-bold uppercase text-xs text-white/70">Pro Coaches</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── The Arsenal ── */}
      <section className="bg-surface-container-lowest py-12 sm:py-section-gap border-y border-zinc-800">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-16">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white uppercase">
                The <span className="text-primary-container">Arsenal</span>
              </h2>
              <p className="text-secondary font-body-lg mt-2 text-sm sm:text-base">Only the best for the elite.</p>
            </div>
            <Link
              to="/plans"
              className="text-primary-container font-label-bold uppercase flex items-center gap-2 hover:gap-4 transition-all text-sm"
            >
              Explore Plans <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { tag: 'Cardio Evolution', name: 'X-Series Treadmills', src: '/treadmill.jpg', alt: 'High-end professional treadmill with digital dashboard glowing red' },
              { tag: 'Strength Alpha',   name: 'Olympic Power Racks', src: '/rack.jpg',      alt: 'Olympic heavy-duty power rack highlighted by red neon strips' },
              { tag: 'Precision Load',   name: 'Custom Dumbbells',    src: '/db.jpg',        alt: 'Steel studio dumbbells catching sharp ambient lights' },
              { tag: 'Hypertrophy King', name: 'Iso-Lateral Leg Press', src: '/leg.jpg',    alt: 'Iso-lateral leg press with red upholstery' },
            ].map(({ tag, name: equip, src, alt }) => (
              <div key={equip} className="bg-surface p-3 sm:p-4 border border-outline-variant hover:border-primary-container transition-colors group">
                <div className="aspect-square bg-surface-container mb-3 sm:mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={alt}
                    src={src}
                  />
                </div>
                <span className="text-primary-container font-label-bold text-[10px] sm:text-xs uppercase tracking-widest">
                  {tag}
                </span>
                <h4 className="font-headline-md text-base sm:text-xl text-white uppercase mt-1 sm:mt-2 leading-tight">
                  {equip}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section className="py-12 sm:py-section-gap">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-white uppercase">
              The <span className="text-primary-container">Victors</span>
            </h2>
            <p className="text-secondary font-body-lg mt-2 text-sm sm:text-base">Real people. Real pain. Real results.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">

            {/* Story 1 */}
            <div className="flex flex-col sm:flex-row bg-surface-container items-stretch border border-zinc-800 hover:border-red-600/20 transition-all duration-300">
              <div className="w-full sm:w-2/5 min-h-[240px] sm:min-h-[350px]">
                <img
                  className="w-full h-full object-cover object-top"
                  alt="Vikram Singh transformation portrait"
                  src="https://i.pinimg.com/736x/d0/ca/3f/d0ca3f58367f73db574455916501349a.jpg"
                />
              </div>
              <div className="w-full sm:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex mb-3 sm:mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                  ))}
                </div>
                <h4 className="font-headline-md text-lg sm:text-2xl text-white uppercase mb-3 sm:mb-4">
                  "Lost 45lbs, Gained a Life"
                </h4>
                <p className="italic text-on-surface-variant font-body-md mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "The atmosphere at FlexIt is unlike anything I've ever experienced. No judgment, just pure focus on the goal. My trainer didn't just give me a program; they gave me a new mindset."
                </p>
                <div>
                  <p className="font-label-bold text-white uppercase text-sm">Vikram Singh</p>
                  <p className="text-primary-container text-xs font-bold uppercase">Member since 2022</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col sm:flex-row bg-surface-container items-stretch border border-zinc-800 hover:border-red-600/20 transition-all duration-300">
              <div className="w-full sm:w-2/5 min-h-[240px] sm:min-h-[350px]">
                <img
                  className="w-full h-full object-cover object-top"
                  alt="Ananya Sharma transformation portrait"
                  src="https://i.pinimg.com/736x/ea/ca/f6/eacaf63a4ceb4362b8d16573e2800acd.jpg"
                />
              </div>
              <div className="w-full sm:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex mb-3 sm:mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                  ))}
                </div>
                <h4 className="font-headline-md text-lg sm:text-2xl text-white uppercase mb-3 sm:mb-4">
                  "Performance at its Peak"
                </h4>
                <p className="italic text-on-surface-variant font-body-md mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "As a competitive athlete, equipment matters. FlexIt has everything I need to push my limits safely. The 24/7 access is a game-changer for my training schedule."
                </p>
                <div>
                  <p className="font-label-bold text-white uppercase text-sm">Ananya Sharma</p>
                  <p className="text-primary-container text-xs font-bold uppercase">IFBB Pro</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="bg-surface-container-lowest py-12 sm:py-16">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-6">
          <h2
            className="text-white uppercase leading-none mb-3 sm:mb-4"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-1px' }}
          >
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-red-600 mb-6 sm:mb-8"></div>
          <p className="text-zinc-400 text-xs font-lexend uppercase tracking-widest mb-6 sm:mb-8">
            We respond within 24 hours. No spam. Ever.
          </p>

          {success && (
            <p className="text-green-400 mb-6 font-lexend text-xs sm:text-sm uppercase tracking-widest border-l-2 border-green-400 pl-4">
              Message sent! We'll get back to you soon.
            </p>
          )}
          {error && (
            <p className="text-red-400 mb-6 font-lexend text-xs sm:text-sm uppercase tracking-widest border-l-2 border-red-400 pl-4">
              {error}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-zinc-500 text-xs font-lexend uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="bg-transparent border-b border-zinc-700 hover:border-zinc-400 focus:border-red-600 transition-colors py-3 text-white text-sm font-lexend outline-none placeholder-zinc-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-zinc-500 text-xs font-lexend uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-transparent border-b border-zinc-700 hover:border-zinc-400 focus:border-red-600 transition-colors py-3 text-white text-sm font-lexend outline-none placeholder-zinc-600"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-6 sm:mb-8">
            <label className="text-zinc-500 text-xs font-lexend uppercase tracking-widest">Message</label>
            <textarea
              placeholder="Tell us about your goals..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="bg-transparent border-b border-zinc-700 hover:border-zinc-400 focus:border-red-600 transition-colors py-3 text-white text-sm font-lexend outline-none placeholder-zinc-600 h-28 sm:h-32 resize-none w-full"
            ></textarea>
          </div>

          {/* Full-width on mobile, auto on desktop */}
          <div
            onClick={handleSubmit}
            className="flex sm:inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white uppercase px-8 sm:px-12 py-4 font-lexend font-black text-sm tracking-widest cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                Sending...
              </>
            ) : (
              <>
                Submit
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </div>
  );
}