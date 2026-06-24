import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/FloatingCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

import { BUSINESS_INFO } from './constants';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-dark selection:bg-primary selection:text-dark">
          <Helmet>
            <title>{BUSINESS_INFO.name} | Expert Plumber in Birmingham</title>
            <meta name="description" content={`Professional heating and plumbing services in Birmingham by Mitch (Ex-British Gas). 37 years of experience in boiler installations, repairs, and bathroom fitting.`} />
          </Helmet>

          <EmergencyBanner />
          <Navbar />
          
          <main>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={
                <>
                  <Hero />
                  <div className="relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none -z-10" />
                    
                    <About />
                    <Services />
                    
                    <section className="py-32 bg-primary/5 border-y border-white/5">
                      <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8">
                          {[
                            { label: "Experience", value: "37 Years", sub: "Ex-British Gas" },
                            { label: "Recommendation", value: "98%", sub: "Highly Recommended" },
                            { label: "Reliability", value: "Local", sub: "Birmingham Area" },
                            { label: "Quote", value: "FREE", sub: "No Call-out Fees" }
                          ].map((stat, i) => (
                            <div key={i} className="text-center p-8 glass rounded-3xl border-primary/10">
                              <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                              <p className="text-4xl font-display font-black text-white mb-2">{stat.value}</p>
                              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.sub}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <Gallery />
                    <Testimonials />
                    <SectionDivider />
                    <Contact />
                  </div>
                </>
              } />

              {/* Separate Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-10 overflow-hidden opacity-10">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary" />
      <div className="mx-8 transform rotate-45">
        <div className="w-4 h-4 border border-primary" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}
