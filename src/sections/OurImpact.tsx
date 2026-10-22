
import {
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Sprout,
  ArrowRight,
} from 'lucide-react'

const impactAreas = [
  {
    title: 'Dignity & Well-being',
    description:
      'Promoting mental health awareness, psychosocial well-being, and compassionate community support.',
    icon: HeartHandshake,
    color: 'text-[#0871c9]',
    bg: 'bg-[#e7f2ff]',
  },
  {
    title: 'Health & Menstrual Hygiene',
    description:
      'Encouraging safe hygiene practices, menstrual health education, and approaches that uphold dignity.',
    icon: ShieldCheck,
    color: 'text-[#c79b00]',
    bg: 'bg-[#fff5cc]',
  },
  {
    title: 'Education & Opportunity',
    description:
      'Supporting literacy, mentorship, leadership, life skills, and pathways toward economic empowerment.',
    icon: GraduationCap,
    color: 'text-[#159653]',
    bg: 'bg-[#e3f7eb]',
  },
  {
    title: 'Resilience & Inclusion',
    description:
      'Working toward inclusive communities where displaced people and vulnerable individuals can rebuild and thrive.',
    icon: Sprout,
    color: 'text-[#7954c7]',
    bg: 'bg-[#f0eaff]',
  },
]

export default function OurImpact() {
  return (
    <section
      id="our-impact"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="mb-12 max-w-3xl lg:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#174d80] sm:text-xs">
            Our Impact
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0863ad] sm:text-4xl lg:text-[44px]">
            Building Change,
            <span className="block text-[#f3c928]">
              Restoring Hope
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We envision communities where every individual can live
            with dignity, health, and opportunity. Our constitution
            guides our commitment to well-being, equity, resilience,
            and inclusive community development.
          </p>
        </div>

        {/* Image left, impact content right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Decorative image card */}
          <div className="relative mx-auto w-full max-w-[600px] py-6 lg:mx-0">

            {/* Green circle */}
            <div
              aria-hidden="true"
              className="absolute left-[1%] top-[2%] z-0 h-[90px] w-[90px] rounded-full bg-[#25ad68] sm:h-[125px] sm:w-[125px]"
            />

            {/* Pale blue bottom-left accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-[1%] left-[1%] z-0 h-[75px] w-[95px] rounded-[45%] bg-[#dceeff] sm:h-[95px] sm:w-[115px]"
            />

            {/* Blue right accent */}
            <div
              aria-hidden="true"
              className="absolute right-[1%] top-[30%] z-0 h-[115px] w-[55px] rounded-[50%] bg-[#1684d3] sm:h-[150px] sm:w-[80px]"
            />

            {/* Yellow bottom-right accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-[1%] right-[3%] z-0 h-[75px] w-[90px] rounded-[45%] bg-[#ffd52f] sm:h-[100px] sm:w-[115px]"
            />

            {/* Yellow dotted pattern */}
            <div
              aria-hidden="true"
              className="absolute right-[2%] top-[3%] z-0 grid grid-cols-6 gap-[7px] sm:gap-[9px]"
            >
              {Array.from({ length: 30 }, (_, index) => (
                <span
                  key={index}
                  className="h-[3px] w-[3px] rounded-full bg-[#f3c928] sm:h-[4px] sm:w-[4px]"
                />
              ))}
            </div>

            {/* Image card with organic, slanted corners */}
            <div className="relative z-10 mx-auto aspect-[1.18/1] w-[88%] overflow-hidden rounded-[18%_8%_16%_10%/12%_10%_14%_12%] shadow-lg sm:aspect-[1.15/1]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt="Children in a community setting"
                className="block h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Impact content */}
          <div className="space-y-7">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#174d80]">
                The Change We Work Toward
              </p>

              <h3 className="text-2xl font-extrabold leading-tight text-[#123b60] sm:text-3xl">
                Creating Opportunities
                <span className="block text-[#0871c9]">
                  for Everyone
                </span>
              </h3>
            </div>

            <div className="space-y-5">
              {impactAreas.map((area) => {
                const Icon = area.icon

                return (
                  <article
                    key={area.title}
                    className="group flex items-start gap-4 rounded-xl border border-[#e6edf5] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7e1fa] hover:shadow-md sm:p-5"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${area.bg}`}
                    >
                      <Icon size={23} className={area.color} />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#123b60] transition-colors group-hover:text-[#0871c9]">
                        {area.title}
                      </h4>

                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {area.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>

            <a
              href="#get-involved"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#0871c9] px-5 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#075ba0] hover:shadow-lg"
            >
              Be Part of the Change
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom mission banner */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#082d50] px-6 py-8 sm:mt-20 sm:px-10 sm:py-10 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5"
          />

          <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f3c928]">
                Our Vision
              </p>

              <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
                A world where all individuals live with dignity,
                health, and opportunity.
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Together, we can work toward stronger, more resilient,
                and inclusive communities.
              </p>
            </div>

            <a
              href="#get-involved"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-[#f3c928] px-5 py-3 text-xs font-bold text-[#082d50] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdc4a]"
            >
              Get Involved
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
