
import { ArrowRight, CirclePlay } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[490px] items-center
        overflow-hidden bg-[#063d70] sm:min-h-[530px] lg:min-h-[570px]"
    >
      {/* Background photograph */}
      <img
        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=85"
        alt="Children learning together in a community setting"
        className="absolute inset-0 -z-20 h-full w-full object-cover
          object-center"
      />

      {/* Blue overlay matching the reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r
        from-[#00396d]/95 via-[#07549a]/80 to-[#00345e]/20" />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-16
        sm:px-10 lg:px-16 lg:py-20">

        <div className="max-w-[620px]">
          <p className="mb-4 text-[10px] font-bold uppercase
            tracking-[0.32em] text-blue-100 sm:text-xs">
            Uzima Mupya Rejuvenated Foundation
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08]
            tracking-tight text-white sm:text-5xl lg:text-6xl">
            Brighter Futures
            <span className="block text-[#ffdc36]">
              for Every Girl
            </span>
          </h1>

          <p className="mt-5 max-w-[490px] text-sm leading-6
            text-white/90 sm:text-base sm:leading-7">
            We empower individuals and communities through education,
            mental health support, menstrual hygiene, and opportunities
            that nurture dignity, resilience, and inclusion.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#get-involved"
              className="inline-flex min-h-12 items-center justify-center
                gap-2 rounded-full bg-[#ffda32] px-6 py-3
                text-xs font-extrabold text-[#15365b] shadow-md
                transition-all duration-200 hover:-translate-y-0.5
                hover:bg-[#ffe66b] hover:shadow-lg"
            >
              Get Involved
              <ArrowRight size={16} />
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center
                gap-2 rounded-full border border-white/80 px-6 py-3
                text-xs font-bold text-white transition-all duration-200
                hover:bg-white hover:text-[#07549a]"
            >
              <CirclePlay size={16} fill="currentColor" />
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
