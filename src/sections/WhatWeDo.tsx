
import {
  HeartHandshake,
  Droplets,
  GraduationCap,
  HandHeart,
  ArrowRight,
} from 'lucide-react'

const focusAreas = [
  {
    number: '01',
    title: 'Mental Health & Well-being',
    description:
      'Promoting mental health awareness, reducing stigma, and supporting psychosocial well-being through compassionate, inclusive community approaches.',
    icon: HeartHandshake,
    accent: 'bg-[#e7f2ff]',
    iconColor: 'text-[#0871c9]',
  },
  {
    number: '02',
    title: 'WASH & Menstrual Health',
    description:
      'Encouraging safe hygiene and sanitation practices, menstrual health education, and skills for making affordable reusable sanitary pads.',
    icon: Droplets,
    accent: 'bg-[#fff5cc]',
    iconColor: 'text-[#c79b00]',
  },
  {
    number: '03',
    title: 'Empowerment & Skills',
    description:
      'Supporting education, literacy, life skills, mentorship, leadership development, vocational learning, and opportunities for economic empowerment.',
    icon: GraduationCap,
    accent: 'bg-[#e3f7eb]',
    iconColor: 'text-[#159653]',
  },
  {
    number: '04',
    title: 'Support for New Arrivals',
    description:
      'Working toward the safety, dignity, and inclusion of newly arrived refugees through orientation, psychosocial support, protection, and livelihood opportunities.',
    icon: HandHeart,
    accent: 'bg-[#f0eaff]',
    iconColor: 'text-[#7954c7]',
  },
]

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#f3f8fd] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#dceeff] opacity-60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[#fff0b3] opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#174d80] sm:text-xs">
            What We Do
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0863ad] sm:text-4xl lg:text-[44px]">
            Empowerment Through Education,
            <span className="block text-[#f3c928]">
              Skills and Support
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Guided by our constitution, we work toward healthier,
            more inclusive, and resilient communities where people
            can live with dignity, access opportunities, and build
            a better future.
          </p>
        </div>

        {/* Focus area cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = area.icon

            return (
              <article
                key={area.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6edf5] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c7e1fa] hover:shadow-xl sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#0871c9] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${area.accent} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      className={area.iconColor}
                    />
                  </div>

                  <span className="text-3xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-[#dceeff]">
                    {area.number}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-snug text-[#123b60] transition-colors duration-300 group-hover:text-[#0871c9]">
                  {area.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>

                <a
                  href="#get-involved"
                  aria-label={`Learn how to support ${area.title}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-bold text-[#0871c9] transition-all duration-200 hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={15} />
                </a>
              </article>
            )
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#082d50] px-6 py-7 text-center sm:mt-14 sm:flex-row sm:px-9 sm:text-left">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Every person deserves dignity and opportunity.
            </p>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Join us in working toward more inclusive and resilient communities.
            </p>
          </div>

          <a
            href="#get-involved"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f3c928] px-5 py-3 text-xs font-bold text-[#082d50] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdc4a]"
          >
            Get Involved
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
