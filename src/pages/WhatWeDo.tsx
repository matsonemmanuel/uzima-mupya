
import {
  ArrowRight,
  Brain,
  Droplets,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  UsersRound,
  HandHeart,

} from 'lucide-react'

const programmes = [
  {
    number: '01',
    category: 'MENTAL HEALTH & WELL-BEING',
    title: 'Mental Health & Psychosocial Support',
    description:
      'Promoting mental health, emotional well-being, and psychosocial support to help individuals and communities navigate challenges with dignity and resilience.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85',
    alt: 'People connecting and supporting one another',
    icon: Brain,
    accent: 'from-[#0B4778] to-[#1685D1]',
  },
  {
    number: '02',
    category: 'WASH & MENSTRUAL HEALTH',
    title: 'Water, Sanitation & Hygiene',
    description:
      'Supporting water, sanitation, hygiene, and menstrual health initiatives that promote dignity, awareness, and healthier living conditions.',
    image:
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Community and education activity',
    icon: Droplets,
    accent: 'from-[#0871C9] to-[#4EA8DE]',
  },
  {
    number: '03',
    category: 'COMMUNITY RESILIENCE',
    title: 'Inclusive & Resilient Communities',
    description:
      'Encouraging inclusive, resilient, and future-ready communities where people can participate, support one another, and pursue opportunities.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
    alt: 'A group of people gathered together',
    icon: UsersRound,
    accent: 'from-[#155E48] to-[#4F9D69]',
  },
  {
    number: '04',
    category: 'REFUGEE SUPPORT & INCLUSION',
    title: 'Support for New Arrivals',
    description:
      'Working toward support for newly arrived refugees in Kyangwali Refugee Settlement as they navigate unfamiliar circumstances and seek inclusion.',
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Community members taking part in a group activity',
    icon: HandHeart,
    accent: 'from-[#8C6B13] to-[#D5A62E]',
  },
]

const principles = [
  {
    icon: HeartHandshake,
    title: 'People First',
    description:
      'Respecting the dignity, experiences, and needs of individuals and communities.',
  },
  {
    icon: ShieldCheck,
    title: 'Equity & Inclusion',
    description:
      'Working toward fair access, participation, and inclusive community well-being.',
  },
  {
    icon: Leaf,
    title: 'Lasting Resilience',
    description:
      'Supporting approaches that encourage sustainable progress and community resilience.',
  },
]

export default function WhatWeDoPage() {
  return (
    <main className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-[#071F3B] sm:min-h-[580px] lg:min-h-[630px]">
        <img
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2200&q=85"
          alt="People working together in a community setting"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061F38]/95 via-[#082D50]/80 to-[#082D50]/30" />

        <div className="absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full border-[28px] border-[#F5C542]/20 sm:h-96 sm:w-96" />

        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-[#F5C542]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C542] sm:text-sm">
                What We Do
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turning Purpose
              <br />
              Into <span className="text-[#F5C542]">Action.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              We focus on well-being, hygiene, inclusion, and community
              resilience to support a future where people can live with
              dignity, health, and opportunity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#our-programmes"
                className="inline-flex items-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 text-sm font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </a>

              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                About UMRF
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#F5C542] via-[#1685D1] to-[#F5C542]" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
              Our Areas of Work
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Responding to Needs.
              <span className="text-[#1685D1]"> Strengthening Communities.</span>
            </h2>
          </div>

          <div className="border-l-4 border-[#F5C542] pl-6 sm:pl-8">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              UMRF's work is guided by its constitutional objectives
              and commitment to holistic well-being. Our programme
              areas reflect interconnected needs around mental health,
              hygiene, inclusion, resilience, and support for newly
              arrived refugees.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMME CARDS */}
      <section
        id="our-programmes"
        className="bg-[#F1F7FC] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
                Our Programme Areas
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D4F] sm:text-5xl">
                Where Our Work
                <span className="text-[#1685D1]"> Makes a Difference</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Four interconnected areas guide our commitment to
              dignity, health, inclusion, and resilience.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {programmes.map((programme) => {
              const Icon = programme.icon

              return (
                <article
                  key={programme.number}
                  className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(16,45,79,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(16,45,79,0.13)]"
                >
                  <div className="relative h-[250px] overflow-hidden sm:h-[300px]">
                    <img
                      src={programme.image}
                      alt={programme.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061F38]/85 via-[#061F38]/10 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#061F38]/55 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                      {programme.category}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B] shadow-lg transition duration-300 group-hover:rotate-6 sm:bottom-7 sm:right-7">
                      <Icon size={27} strokeWidth={1.8} />
                    </span>

                    <span className="absolute bottom-5 left-5 text-5xl font-black text-white/40 sm:bottom-7 sm:left-7 sm:text-6xl">
                      {programme.number}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-extrabold leading-snug text-[#102D4F] sm:text-2xl">
                      {programme.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {programme.description}
                    </p>

                    <div className="mt-7 h-[3px] w-12 rounded-full bg-[#F5C542] transition-all duration-300 group-hover:w-24" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#DCEFFA]/70" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative mx-auto w-full max-w-xl pb-7 pl-5 pr-5 pt-5">
            <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#4F9D69]" />
            <div className="absolute bottom-0 right-0 h-36 w-36 rounded-tl-[75px] bg-[#F5C542]" />

            <div className="absolute right-4 top-0 z-10 grid grid-cols-5 gap-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-[#1685D1]"
                />
              ))}
            </div>

            <div className="relative z-0 overflow-hidden rounded-[12%_32%_10%_24%/12%_14%_12%_16%] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85"
                alt="Young people learning together"
                loading="lazy"
                className="h-[400px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Guided by Values.
              <span className="text-[#1685D1]"> Grounded in Dignity.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our work is guided by the values of equitability,
              empathy, sustainability, inclusiveness, integrity, and
              resilience. These principles provide a foundation for
              how we understand community needs and pursue our mission.
            </p>

            <div className="mt-9 space-y-6">
              {principles.map((principle) => {
                const Icon = principle.icon

                return (
                  <div key={principle.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FC] text-[#1685D1]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#102D4F]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="/about#our-values"
              className="mt-9 inline-flex items-center gap-3 font-bold text-[#0871C9] transition hover:gap-5"
            >
              Discover Our Values
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        id="programme-contact"
        className="relative isolate overflow-hidden bg-[#082542] py-20 sm:py-24"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,rgba(22,133,209,0.3),transparent_38%)]" />
        <div className="absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full border-[30px] border-[#F5C542]/15" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C542]">
              Together for Well-being
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Help Us Build More Inclusive, Resilient Communities.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Connect with UMRF to learn more about our work and
              opportunities to support our mission.
            </p>
          </div>

          <a
            href="/#get-involved"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
          >
            Get Involved
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  )
}
