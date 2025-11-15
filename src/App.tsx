import { Mail, Globe, Stethoscope, Brain, Package, Star, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white pt-12 pb-8 px-4 relative overflow-hidden">
        {/* Decorative header background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Syringe */}
          <svg aria-hidden="true" className="absolute -top-6 -left-8 w-28 h-28 opacity-60 rotate-12" viewBox="0 0 120 120" fill="none">
            <rect x="32" y="42" width="64" height="18" rx="4" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
            <rect x="86" y="38" width="8" height="26" rx="2" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
            <path d="M98 51 L118 51" stroke="#e07a6e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="46" width="10" height="10" rx="2" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
          </svg>

          {/* Pill bottle */}
          <svg aria-hidden="true" className="absolute top-2 left-1/4 w-16 h-16 opacity-60 rotate-6 hidden sm:block" viewBox="0 0 64 64" fill="none">
            <rect x="10" y="18" width="44" height="38" rx="8" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
            <rect x="16" y="10" width="32" height="10" rx="3" fill="#f9d3cc" stroke="#e07a6e" strokeWidth="3"/>
            <path d="M22 36h20M32 26v20" stroke="#e07a6e" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          {/* First aid kit */}
          <svg aria-hidden="true" className="absolute -right-10 -top-6 w-40 h-32 opacity-60 hidden md:block" viewBox="0 0 160 120" fill="none">
            <rect x="16" y="26" width="128" height="80" rx="14" fill="#fde9e6" stroke="#e07a6e" strokeWidth="4"/>
            <rect x="56" y="10" width="48" height="20" rx="8" fill="#f9d3cc" stroke="#e07a6e" strokeWidth="4"/>
            <path d="M80 44v44M58 66h44" stroke="#e07a6e" strokeWidth="8" strokeLinecap="round"/>
          </svg>

          {/* Dropper bottle */}
          <svg aria-hidden="true" className="absolute right-6 top-24 w-14 h-16 opacity-60 rotate-6" viewBox="0 0 56 64" fill="none">
            <rect x="10" y="20" width="36" height="38" rx="8" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
            <rect x="18" y="10" width="20" height="12" rx="4" fill="#f9d3cc" stroke="#e07a6e" strokeWidth="3"/>
            <circle cx="28" cy="40" r="6" fill="#fbe2dc" stroke="#e07a6e" strokeWidth="2"/>
          </svg>

          {/* Clipboard / paper */}
          <svg aria-hidden="true" className="absolute -left-10 bottom-0 w-32 h-32 opacity-50 -rotate-12 hidden md:block" viewBox="0 0 120 120" fill="none">
            <rect x="24" y="18" width="72" height="92" rx="8" fill="#fde9e6" stroke="#e07a6e" strokeWidth="3"/>
            <rect x="38" y="10" width="44" height="12" rx="4" fill="#f9d3cc" stroke="#e07a6e" strokeWidth="3"/>
            <path d="M36 46h48M36 60h48M36 74h48" stroke="#e07a6e" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          {/* Stethoscope */}
          <svg aria-hidden="true" className="absolute -right-6 bottom-2 w-28 h-28 opacity-60 hidden sm:block" viewBox="0 0 120 120" fill="none">
            <path d="M90 20c8 0 14 6 14 14s-6 14-14 14c-5 0-9-3-11-7l-14 14c0 16-12 30-28 30S18 71 18 55V20" stroke="#ca3433" strokeWidth="4" fill="none"/>
            <circle cx="90" cy="34" r="6" fill="#ca3433"/>
            <circle cx="18" cy="20" r="6" fill="#ca3433"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="mb-6">
            <img
              src="https://lirp.cdn-website.com/3bba8822/dms3rep/multi/opt/Exceed-learning-center-1920w.png"
              alt="Exceed Learning Center"
              className="mx-auto h-16 md:h-20 w-auto"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#ca3433] mb-8 leading-tight">
            Inspiring the Next Generation of Doctors
          </h2>

          <p className="text-base md:text-lg text-[#0e1f3e] max-w-3xl mx-auto leading-relaxed font-medium">
            Little Medical School inspires young minds by sharing our passion for learning, health
            and careers in medicine. Through hands-on activities, role-play, and interactive
            demonstrations, children explore the exciting world of healthcare.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ca3433] to-[#a32222] px-8 py-4 text-white text-lg font-semibold shadow-lg shadow-red-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200"
              aria-label="Enroll now. Price $359"
            >
              <span>Enroll Now — $359</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="w-6 h-6 text-[#ca3433]" />
              <h3 className="text-2xl font-serif font-bold text-[#0e1f3e]">Program Highlights</h3>
            </div>
            <p className="text-[#0e1f3e] font-medium">
              Ages: 6–11 | Sessions: 6 one-hour classes | Focus: Heart, lungs, brain, and digestion • First aid & hygiene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-[#ca3433]" />
                <h3 className="text-2xl font-serif font-bold text-[#0e1f3e]">What Kids Learn</h3>
              </div>
              <ul className="space-y-2 text-[#0e1f3e]">
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Learn about the Heart, lungs, and digestive systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Learn what it's like to be a doctor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Learn to use doctor's tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Wound care and suturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Prepare for a pretend gall bladder surgery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Master surgical knots and more!</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-end">
              <img
                src="/images/2.png"
                alt="Children learning in medical school"
                className="w-44 h-44 md:w-60 md:h-60 object-cover rounded-3xl shadow-md transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-[1.02] hover:rotate-1 hover:shadow-lg transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-6 h-6 text-[#ca3433]" />
                <h3 className="text-2xl font-serif font-bold text-[#0e1f3e]">Children take home</h3>
              </div>
              <ul className="space-y-2 text-[#0e1f3e]">
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Working stethoscopes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Workbook</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Lab coat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Exam checklist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ca3433] mr-3 font-bold">•</span>
                  <span>Graduation certificate</span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/images/1.png"
                alt="Children in medical training"
                className="w-full h-72 md:h-80 object-cover rounded-3xl shadow-md transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-[1.01] hover:rotate-1 hover:shadow-xl transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
              />
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#ca3433]" />
              <h3 className="text-2xl font-serif font-bold text-[#0e1f3e]">Learning Outcomes</h3>
            </div>
            <ul className="space-y-2 text-[#0e1f3e]">
              <li className="flex items-start">
                <span className="text-[#ca3433] mr-3 font-bold">•</span>
                <span>Sparks interest in Medicine & STEM</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ca3433] mr-3 font-bold">•</span>
                <span>Builds confidence, empathy & teamwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ca3433] mr-3 font-bold">•</span>
                <span>Encourages responsibility through play</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-serif font-bold text-[#0e1f3e] mb-3">Why Parents & Educators Love It</h3>
            <p className="text-[#0e1f3e] font-medium text-lg">
              STEM-aligned and packed with science and fun!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 pb-8">
        <div className="max-w-5xl mx-auto flex justify-end items-center gap-6 md:gap-10">
          <img
            src="/images/STEM.org-Accredited-Educational-Experience.webp"
            alt="STEM.org Accredited Educational Experience"
            className="h-24 md:h-24 w-auto object-contain animate-fade-up transition-transform duration-600 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:scale-105 hover:rotate-1 transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
            loading="lazy"
          />
          <img
            src="/images/BISTEM_logo_textured2022-782x1024.png"
            alt="Best in STEM badge"
            className="h-28 md:h-28 w-auto object-contain animate-fade-up transition-transform duration-600 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:scale-105 hover:rotate-1 transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
            loading="lazy"
          />
        </div>
      </div>

      <footer id="contact" className="bg-[#ca3433] text-white py-12 px-4 animate-fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Contact:</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a
              href="mailto:Olga@exceedlearningcenterny.com"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-base md:text-lg">Olga@exceedlearningcenterny.com</span>
            </a>
            <a
              href="https://www.littlemedicalschool.com/nassau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Globe className="w-5 h-5 flex-shrink-0" />
              <span className="text-base md:text-lg">www.littlemedicalschool.com/nassau</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

