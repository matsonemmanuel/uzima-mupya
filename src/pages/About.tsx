
import {
  ArrowDown,
  ArrowRight,
  Brain,
  
  Droplets,
  Heart,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
  HandHeart,
  BookOpen,
} from 'lucide-react'

const values = [
  {
    number: '01',
    title: 'Equitability',
    description:
      'Promoting fair access to opportunities, resources, and support for all individuals.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Empathy',
    description:
      'Approaching people and communities with compassion, understanding, and respect.',
    icon: HeartHandshake,
  },
  {
    number: '03',
    title: 'Sustainability',
    description:
      'Encouraging lasting solutions that strengthen communities and support long-term well-being.',
    icon: Leaf,
  },
  {
    number: '04',
    title: 'Inclusiveness',
    description:
      'Creating spaces where people feel valued, respected, and able to participate.',
    icon: UsersRound,
  },
  {
    number: '05',
    title: 'Integrity',
    description:
      'Upholding honesty, accountability, transparency, and responsible leadership.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Resilience',
    description:
      'Supporting individuals and communities to adapt, recover, and move forward with hope.',
    icon: Sparkles,
  },
]

const objectives = [
  {
    number: '01',
    title: 'Mental Health & Psychosocial Well-being',
    description:
      'Promoting mental health, emotional well-being, and psychosocial support for individuals and communities.',
    icon: Brain,
  },
  {
    number: '02',
    title: 'Water, Sanitation & Hygiene',
    description:
      'Supporting WASH initiatives, including menstrual health and hygiene, that contribute to dignity and well-being.',
    icon: Droplets,
  },
  {
    number: '03',
    title: 'Resilient & Inclusive Communities',
    description:
      'Strengthening communities to become resilient, inclusive, and future-ready.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Support for New Arrivals',
    description:
      'Supporting newly arrived refugees in Kyangwali Refugee Settlement as they navigate their new circumstances.',
    icon: HandHeart,
  },
]

const governanceBodies = [
  'Board of Directors',
  'Executive Committee',
  'General Assembly',
]

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#071F3B] sm:min-h-[590px] lg:min-h-[650px]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=85"
          alt="People coming together in a community"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061F38]/95 via-[#092A4B]/80 to-[#092A4B]/35" />

        <div className="absolute right-[-100px] top-[-100px] -z-10 h-72 w-72 rounded-full border-[35px] border-[#F5C542]/20 sm:h-96 sm:w-96" />

        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-[#F5C542]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#F5C542] sm:text-sm">
                About UMRF
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building Dignity.
              <br />
              Restoring Hope.
              <br />
              <span className="text-[#F5C542]">Rejuvenating Lives.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Uzima Mupya Rejuvenated Foundation is a refugee-led,
              non-profit organization committed to dignity, health,
              opportunity, and the well-being of inclusive communities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 text-sm font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Discover Our Story
                <ArrowRight size={18} />
              </a>

              <a
                href="#our-mission"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                Our Mission
                <ArrowDown size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#F5C542] via-[#1685D1] to-[#F5C542]" />
      </section>

      {/* OUR STORY */}
      <section id="our-story" className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#1685D1]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1685D1]">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102D4F] sm:text-5xl">
              A Foundation Rooted in
              <span className="text-[#1685D1]"> Dignity and Hope</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              Uzima Mupya Rejuvenated Foundation (UMRF) is a
              non-governmental, non-profit, refugee-led organization
              operating in Kyangwali Refugee Settlement and beyond.
              Our work is guided by the belief that every individual
              deserves to live with dignity, access opportunities, and
              experience holistic well-being.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on mental health and psychosocial well-being,
              water, sanitation and hygiene, menstrual health, inclusive
              and resilient communities, and support for newly arrived
              refugees. Through these priorities, we seek to contribute
              to communities where people are supported, included, and
              able to move forward.
            </p>

            <div className="mt-9 flex items-start gap-4 rounded-2xl border-l-4 border-[#F5C542] bg-[#F3F8FC] p-5 sm:p-6">
              <Heart className="mt-1 shrink-0 text-[#1685D1]" size={25} />
              <p className="text-sm font-medium leading-7 text-[#102D4F] sm:text-base">
                Our purpose is to foster resilience, equity, and
                holistic well-being for thriving and rejuvenating
                inclusive communities.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-8 pl-5 pr-4 pt-5 sm:pl-8">
            <div className="absolute left-0 top-0 h-36 w-36 rounded-full bg-[#4F9D69]" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#DCEFFA]" />
            <div className="absolute right-0 top-16 h-64 w-16 rounded-l-full bg-[#1685D1]" />
            <div className="absolute bottom-5 right-0 h-28 w-28 rounded-tl-[70px] bg-[#F5C542]" />

            <div className="absolute right-8 top-0 z-10 grid grid-cols-5 gap-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-[#F5C542]"
                />
              ))}
            </div>

            <div className="relative z-0 overflow-hidden rounded-[38%_8%_30%_8%/18%_8%_18%_8%] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85"
                alt="Community members participating in a group activity"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061F38]/45 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F5C542]">
                  Our Commitment
                </p>
                <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                  Dignity, inclusion and well-being for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        id="our-mission"
        className="relative overflow-hidden bg-[#F0F7FC] py-20 sm:py-28"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-[#1685D1]/10" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
              Our Foundation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D4F] sm:text-5xl">
              Guided by Purpose.
              <span className="text-[#1685D1]"> Driven by Hope.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Our mission and vision guide our priorities, decisions,
              and commitment to the communities we serve.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[28px] bg-[#0C3157] p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2 sm:p-11 lg:p-12">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[24px] border-white/5 transition group-hover:scale-110" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
                  <HeartHandshake size={28} />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#F5C542]">
                  Our Mission
                </p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Empowering People and Communities
                </h3>
                <p className="mt-5 text-base leading-8 text-white/80">
                  To empower individuals with knowledge, resources, and
                  support, fostering resilience, equity, and holistic
                  well-being for thriving and rejuvenating inclusive
                  communities.
                </p>
                <div className="mt-8 h-1 w-16 rounded-full bg-[#F5C542]" />
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[28px] border border-[#D6E7F4] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 sm:p-11 lg:p-12">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[24px] border-[#1685D1]/5 transition group-hover:scale-110" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0F1FB] text-[#1685D1]">
                  <Sparkles size={28} />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
                  Our Vision
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#102D4F] sm:text-3xl">
                  A Future of Dignity and Opportunity
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  A world where all individuals live with dignity,
                  health, and opportunity.
                </p>
                <div className="mt-8 h-1 w-16 rounded-full bg-[#1685D1]" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="our-values" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
              What Guides Us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D4F] sm:text-5xl">
              The Values Behind
              <span className="text-[#1685D1]"> Our Work</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              These six core values shape our approach to people,
              partnerships, and community well-being.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <article
                  key={value.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_8px_35px_rgba(16,45,79,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#1685D1]/30 hover:shadow-[0_20px_50px_rgba(16,45,79,0.12)] sm:p-8"
                >
                  <div className="absolute right-5 top-4 text-5xl font-black text-[#102D4F]/[0.045]">
                    {value.number}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF5FC] text-[#1685D1] transition duration-300 group-hover:bg-[#F5C542] group-hover:text-[#071F3B]">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#102D4F]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                  <div className="mt-6 h-[3px] w-10 rounded-full bg-[#F5C542] transition-all duration-300 group-hover:w-20" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR OBJECTIVES */}
      <section
        id="our-objectives"
        className="relative overflow-hidden bg-[#082542] py-20 text-white sm:py-28"
      >
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full border-[35px] border-white/5" />
        <div className="absolute right-0 top-0 h-2 w-44 bg-[#F5C542]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C542]">
                Our Objectives
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                Turning Our Purpose Into Meaningful Action
              </h2>
              <p className="mt-6 leading-8 text-white/75">
                Our constitutional objectives provide the framework
                for our work and our commitment to healthier, more
                inclusive, and resilient communities.
              </p>

              <a
                href="#governance"
                className="mt-8 inline-flex items-center gap-3 font-bold text-[#F5C542] transition hover:gap-5"
              >
                Explore Our Governance
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {objectives.map((objective) => {
                const Icon = objective.icon

                return (
                  <article
                    key={objective.number}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:border-[#F5C542]/50 hover:bg-white/[0.1] sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5C542] text-[#071F3B]">
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-white/30">
                        {objective.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold leading-snug">
                      {objective.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {objective.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section id="governance" className="bg-[#F3F8FC] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCEFFA] text-[#1685D1]">
              <BookOpen size={28} />
            </div>
            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.25em] text-[#1685D1]">
              Accountability & Leadership
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D4F] sm:text-5xl">
              Our Governance
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              UMRF's constitution establishes three governance bodies
              that provide the organizational framework for leadership,
              oversight, and collective participation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {governanceBodies.map((body, index) => (
              <article
                key={body}
                className="relative rounded-2xl border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <span className="text-sm font-bold tracking-widest text-[#1685D1]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#102D4F]">
                  {body}
                </h3>
                <div className="mt-5 h-1 w-12 rounded-full bg-[#F5C542]" />
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-500">
            Further details about leadership roles, responsibilities,
            and organizational procedures should follow the approved
            UMRF constitution and governance documents.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        id="get-involved"
        className="relative isolate overflow-hidden bg-[#0C3157] py-20 sm:py-24"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,rgba(22,133,209,0.28),transparent_35%)]" />
        <div className="absolute right-[-70px] top-[-100px] -z-10 h-64 w-64 rounded-full border-[30px] border-[#F5C542]/15" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C542]">
              Be Part of the Change
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Together, We Can Help Communities Thrive.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Join us in supporting dignity, well-being, inclusion,
              and opportunity for individuals and communities.
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
