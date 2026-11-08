import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'himalayan-roast',
    clientName: 'Aarav Shrestha',
    role: 'Founder & Managing Director',
    company: 'Himalayan Roast Co.',
    location: 'Kathmandu, Nepal',
    category: 'Branding',
    projectTitle: 'Artisan Brand Identity & Retail Packaging',
    feedback:
      'Sudip transformed our brand presence from the ground up. The visual identity, custom typography system, and eco-packaging he developed captured our artisanal spirit perfectly and directly contributed to a 40% surge in customer inquiries during our store launch.',
    rating: 5,
    initials: 'AS',
    accentColor: 'from-amber-500 to-amber-700',
    verified: true
  },
  {
    id: 'finova-flow',
    clientName: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Finova Flow',
    location: 'London, UK (Remote)',
    category: 'UI/UX Design',
    projectTitle: 'Fintech Mobile App & Web Dashboard',
    feedback:
      'Working with Sudip was effortless. He has an exceptional eye for micro-interactions, layout hierarchy, and developer-friendly Figma design systems. Our frontend engineering team was able to implement his component libraries in record time with zero friction.',
    rating: 5,
    initials: 'ER',
    accentColor: 'from-blue-500 to-indigo-700',
    verified: true
  },
  {
    id: 'ecotech-growth',
    clientName: 'Rohan Pradhan',
    role: 'Head of Growth Marketing',
    company: 'EcoTech Innovations',
    location: 'Lalitpur, Nepal',
    category: 'Digital Marketing',
    projectTitle: 'Product Launch Social & Ad Campaign',
    feedback:
      'The multi-slide social carousels and dynamic marketing visuals Sudip engineered for our quarterly campaign broke every engagement record we had. He seamlessly blends artistic design with conversion-focused performance marketing principles.',
    rating: 5,
    initials: 'RP',
    accentColor: 'from-emerald-500 to-teal-700',
    verified: true
  },
  {
    id: 'lumina-studios',
    clientName: 'Priya Adhikari',
    role: 'Co-Founder & Creative Lead',
    company: 'Lumina Studio & Editorial',
    location: 'Kathmandu, Nepal',
    category: 'Graphic Design',
    projectTitle: 'Print Collateral & Editorial Lookbook',
    feedback:
      'Sudip’s discipline in typography, grid balance, and color harmony is world-class. He doesn’t simply create attractive graphics; he understands brand storytelling and crafts comprehensive systems that remain consistent across both print and digital touchpoints.',
    rating: 5,
    initials: 'PA',
    accentColor: 'from-purple-500 to-pink-700',
    verified: true
  },
  {
    id: 'horizon-ventures',
    clientName: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Horizon Capital',
    location: 'Singapore (Remote)',
    category: 'Branding',
    projectTitle: 'Investor Presentation & Brand Guidelines',
    feedback:
      'Sudip elevated our institutional pitch decks and investor materials to international standards. He is exceptionally responsive, highly communicative across time zones, and receptive to nuanced feedback. A true partner for ambitious founders.',
    rating: 5,
    initials: 'MV',
    accentColor: 'from-stone-600 to-stone-900',
    verified: true
  },
  {
    id: 'zenith-media',
    clientName: 'Suman Thapa',
    role: 'E-commerce Brand Manager',
    company: 'Zenith Apparel',
    location: 'Pokhara, Nepal',
    category: 'Social Media Design',
    projectTitle: 'Seasonal Catalog & Motion Graphics',
    feedback:
      'From Instagram feed aesthetic to promotional motion graphics, Sudip gave our apparel collection a cohesive, premium look that immediately elevated our brand perception. Deliverables were always provided ahead of our strict schedule.',
    rating: 5,
    initials: 'ST',
    accentColor: 'from-rose-500 to-amber-700',
    verified: true
  }
];

interface TestimonialsProps {
  onOpenHireMe?: (service?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenHireMe }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = ['All', 'Branding', 'UI/UX Design', 'Digital Marketing', 'Graphic Design'];

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === selectedCategory || (selectedCategory === 'Digital Marketing' && t.category === 'Social Media Design'));

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 space-y-12">
      {/* Header with clean unboxed typographic hierarchy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-200/80 dark:border-stone-800/80">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Client Endorsements & Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Trusted by Founders, Brands & Product Teams
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Real feedback from collaborations across brand identity, intuitive UI/UX design, and performance-driven marketing visuals.
          </p>
        </div>

        {/* Rating Trust Metrics */}
        <div className="flex items-center gap-4 text-xs shrink-0 bg-stone-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-stone-200/80 dark:border-stone-800">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-amber-500 font-bold text-base">
              <span>5.0</span>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
              100% Client Satisfaction
            </p>
          </div>
          <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
          <div className="space-y-0.5">
            <div className="font-bold text-base text-stone-900 dark:text-stone-100">
              40+
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
              Projects Delivered
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-950 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel slide controls for responsive mobile/tablet navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonials Grid (Responsive 3-Column on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredTestimonials.map((item, idx) => (
          <div
            key={item.id}
            className={`group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#121215] border border-stone-200/90 dark:border-stone-800/90 hover:border-amber-500/40 dark:hover:border-amber-400/30 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              idx === activeSlide ? 'ring-1 ring-amber-500/20' : ''
            }`}
          >
            {/* Top row: Quote icon + Star Rating */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200">
                  <Quote className="w-4 h-4" />
                </div>

                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Project title badge */}
              <div className="text-[11px] font-semibold text-amber-700 dark:text-amber-400/90 uppercase tracking-wider">
                {item.projectTitle}
              </div>

              {/* Feedback text with smooth expansion & truncation */}
              {(() => {
                const isExpanded = !!expandedIds[item.id];
                const isLong = item.feedback.length > 130;

                return (
                  <div className="space-y-1.5">
                    <div
                      className={`relative transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-96' : 'max-h-18 sm:max-h-20'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                        "{item.feedback}"
                      </p>

                      {/* Smooth gradient fade overlay when truncated */}
                      {isLong && !isExpanded && (
                        <div
                          aria-hidden="true"
                          className="absolute bottom-0 inset-x-0 h-8 bg-linear-to-t from-white dark:from-[#121215] to-transparent pointer-events-none transition-opacity duration-300"
                        />
                      )}
                    </div>

                    {/* Toggle button */}
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-150 cursor-pointer pt-0.5 group/btn focus:outline-none"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-y-0.5 ${
                            isExpanded ? 'rotate-180 -translate-y-0.5' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Bottom row: Client details with avatar & verified badge */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 rounded-full bg-linear-to-br ${item.accentColor || 'from-stone-700 to-stone-900'} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                      {item.clientName}
                    </h4>
                    {item.verified && (
                      <span title="Verified Client">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                    {item.role} · <span className="font-medium text-stone-700 dark:text-stone-300">{item.company}</span>
                  </p>
                  {item.location && (
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 truncate">
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Strip: Start Your Collaboration */}
      <div className="p-6 rounded-2xl bg-stone-100/70 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-0.5 text-center sm:text-left">
          <div className="font-bold text-stone-900 dark:text-stone-100">
            Looking for thoughtful design that delivers measurable impact?
          </div>
          <p className="text-stone-500 dark:text-stone-400">
            Every project begins with deep listening, disciplined typography, and clear deliverables.
          </p>
        </div>

        {onOpenHireMe && (
          <button
            type="button"
            onClick={() => onOpenHireMe()}
            className="px-4 py-2 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer shadow-xs shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Your Project
          </button>
        )}
      </div>
    </section>
  );
};
