
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  MessageCircleHeart,
  ShieldCheck,
  Sprout,
  UsersRound,
  HandHeart,
  Eye,
  Target,
} from 'lucide-react'

const outcomes = [
  {
    number: '01',
    title: 'Dignity and Inclusion',
    description:
      'A community where individuals feel respected, included and able to participate meaningfully in decisions that affect their lives.',
    icon: UsersRound,
    color: 'bg-[#EAF4FF]',
    iconColor: 'text-[#1685D1]',
  },
  {
    number: '02',
    title: 'Improved Well-being',
    description:
      'People better equipped to understand their well-being, seek appropriate support and access relevant information and resources.',
    icon: HeartHandshake,
    color: 'bg-[#FFF4D6]',
    iconColor: 'text-[#B8860B]',
  },
  {
    number: '03',
    title: 'Greater Equity',
    description:
      'Fewer barriers to participation, knowledge and opportunities, particularly for people facing exclusion or vulnerability.',
    icon: ShieldCheck,
    color: 'bg-[#E8F5EF]',
    iconColor: 'text-[#23845B]',
  },
  {
    number: '04',
    title: 'Community Resilience',
    description:
      'Individuals and communities with stronger knowledge, connections and capacity to respond to challenges and build a more hopeful future.',
    icon: Sprout,
    color: 'bg-[#F0EDFF]',
    iconColor: 'text-[#7560C8]',
  },
]

const pathway = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Listen to community priorities, identify barriers and understand the needs people want addressed.',
    icon: MessageCircleHeart,
  },
  {
    step: '02',
    title: 'Support',
    description:
      'Deliver relevant activities, information and resources aligned with those identified needs.',
    icon: HandHeart,
  },
  {
    step: '03',
    title: 'Measure',
    description:
      'Collect appropriate evidence to understand participation, access, learning and emerging outcomes.',
    icon: BarChart3,
  },
  {
    step: '04',
    title: 'Improve',
    description:
      'Reflect on feedback and findings, share lessons and adapt future work where necessary.',
    icon: BookOpenCheck,
  },
]

const measurementAreas = [
  {
    title: 'Reach and participation',
    description:
      'Who participates, which communities are reached and whether intended groups can access activities.',
  },
  {
    title: 'Knowledge and learning',
    description:
      'Changes in knowledge, awareness, skills or understanding where these are relevant to an activity.',
  },
  {
    title: 'Access and inclusion',
    description:
      'Whether barriers to participation, information, resources or support are being reduced.',
  },
  {
    title: 'Community feedback',
    description:
      'How participants experience the work, what they value and what they recommend changing.',
  },
]

export default function OurImpactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate min-h-[540px] overflow-hidden bg-[#071F3B] lg:min-h-[620px]">
        <img
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=85"
          alt="Community members participating in a collaborative gathering"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071F3B]/95 via-[#071F3B]/80 to-[#071F3B]/35" />
        <div className="absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border-[40px] border-[#F5C542]/25" />
        <div className="absolute -bottom-28 left-[42%] -z-10 h-72 w-72 rounded-full bg-[#1685D1]/20 blur-2xl" />

        <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[620px] lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F5C542]" />
              OUR IMPACT & ACCOUNTABILITY
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Change that
              <span className="block text-[#F5C542]">matters.</span>
              Futures that thrive.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Our purpose is not only to deliver support, but to contribute
              to lasting change in dignity, well-being, equity and community
              resilience.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#intended-change"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-3.5 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Our Impact
                <ArrowRight size={18} />
              </a>
              <a
                href="#accountability"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#071F3B]"
              >
                Our Commitment
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative ml-auto max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
                <Target size={30} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C542]">
                Our guiding question
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-white">
                What changes for people and communities?
              </h2>
              <p className="mt-4 leading-7 text-blue-100">
                We believe meaningful impact begins with listening, continues
                through action and grows through learning and accountability.
              </p>
              <div className="mt-8 h-1.5 w-20 rounded-full bg-[#F5C542]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-3 w-1/3 bg-[#F5C542] sm:block" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Beyond activities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl lg:text-5xl">
              Impact is about the difference we help create.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              An activity describes what an organization does. Impact asks
              what changes as a result. For UMRF, that means looking beyond
              the delivery of support to consider whether people experience
              greater dignity, better access to opportunities, improved
              well-being and stronger community resilience.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              These are the changes we aspire to contribute to. We are
              committed to distinguishing our intentions from results that
              have been measured and verified.
            </p>

            <a
              href="#measurement"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#1685D1] transition hover:gap-4"
            >
              Discover how we measure progress
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-8 pl-4 pr-5 pt-4">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-[3rem] bg-[#F5C542]" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-bl-[3rem] bg-[#1685D1]" />
            <div className="absolute bottom-16 right-0 h-20 w-20 rounded-full bg-[#D9EAF8]" />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85"
              alt="People connecting and sharing experiences"
              className="relative z-10 h-[360px] w-full rounded-tl-[5rem] rounded-br-[5rem] object-cover shadow-xl sm:h-[440px]"
            />
            <div className="absolute bottom-10 left-8 z-20 max-w-[250px] rounded-2xl bg-white p-5 shadow-xl sm:left-10">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#1685D1]">
                Our vision
              </p>
              <p className="mt-2 font-bold leading-6 text-[#071F3B]">
                A world where all individuals live with dignity, health, and
                opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTENDED CHANGE */}
      <section id="intended-change" className="bg-[#F1F7FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              The change we seek
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#071F3B] sm:text-4xl lg:text-5xl">
              Four aspirations. One shared purpose.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Guided by UMRF's mission and values, we aspire to contribute to
              the following long-term changes in people's lives and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-[#F5C542]/15 transition group-hover:scale-125" />

                  <div className="relative flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} ${item.iconColor}`}>
                      <Icon size={27} />
                    </div>
                    <span className="text-sm font-extrabold tracking-widest text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-[#071F3B]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-7 h-1 w-12 rounded-full bg-[#F5C542] transition-all duration-300 group-hover:w-20" />
                </article>
              )
            })}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            These are intended changes, not a claim that outcomes have already
            been achieved or independently verified.
          </p>
        </div>
      </section>

      {/* IMPACT PATHWAY */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
                Our impact pathway
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl">
                From community needs to meaningful change.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Meaningful outcomes do not happen automatically. They require
                relevant support, community participation, time and ongoing
                reflection. This pathway describes the approach UMRF can use
                to connect its work with the change it hopes to see.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#071F3B] p-7 text-white sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5C542] text-[#071F3B]">
                  <Eye size={25} />
                </div>
                <h3 className="mt-5 text-xl font-bold">Keep people at the centre.</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Community feedback and lived experiences should help shape
                  priorities, inform decisions and guide improvement.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {pathway.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={item.step}>
                    <article className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1685D1]/40 hover:shadow-lg sm:gap-7 sm:p-7">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1685D1] transition group-hover:bg-[#071F3B] group-hover:text-white">
                        <Icon size={27} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-extrabold tracking-[0.2em] text-[#1685D1]">
                            STEP {item.step}
                          </span>
                          <h3 className="text-xl font-extrabold text-[#071F3B]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </article>

                    {index < pathway.length - 1 && (
                      <div className="flex h-7 items-center pl-10 text-[#1685D1]">
                        <ArrowDown size={19} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section id="measurement" className="relative overflow-hidden bg-[#071F3B] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#1685D1]/15 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#F5C542]">
                Evidence of progress
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Measure what matters. Learn what works.
              </h2>
            </div>
            <p className="leading-8 text-blue-100">
              Responsible impact reporting starts with clear questions and
              credible evidence. The following are proposed areas for tracking
              progress, with indicators tailored to each activity.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {measurementAreas.map((item, index) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:bg-white/10 sm:p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5C542] font-extrabold text-[#071F3B]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#F5C542]/30 bg-[#F5C542]/10 p-6 sm:flex-row sm:items-start sm:p-7">
            <CheckCircle2 className="mt-1 shrink-0 text-[#F5C542]" size={23} />
            <p className="text-sm leading-7 text-blue-50">
              <strong className="text-white">Our reporting principle:</strong>{' '}
              any published figures, outcomes or success stories should be
              supported by appropriate records, presented in context and
              updated responsibly. The indicators above are a proposed
              framework, not evidence of results already collected.
            </p>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section id="accountability" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[3rem] bg-[#F5C542]" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-br-[3rem] bg-[#1685D1]" />
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=85"
              alt="People sharing ideas and participating in a group discussion"
              className="relative z-10 h-[350px] w-full rounded-tr-[4rem] rounded-bl-[4rem] object-cover shadow-xl sm:h-[440px]"
            />
            <div className="absolute bottom-6 left-6 z-20 max-w-[250px] rounded-2xl bg-white p-5 shadow-xl sm:bottom-8 sm:left-8">
              <p className="font-extrabold text-[#071F3B]">
                Listen. Reflect. Improve.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Accountability begins with listening to the people we serve.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Accountability & learning
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl lg:text-5xl">
              Trust is built through transparency.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              We believe communities deserve to understand how work is
              progressing, how feedback is used and what lessons emerge.
              Responsible reporting should acknowledge both progress and
              challenges rather than presenting only positive results.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: 'Listen to communities',
                  description:
                    'Provide appropriate opportunities for people to share feedback and raise concerns.',
                },
                {
                  title: 'Respect privacy and dignity',
                  description:
                    'Protect personal information and obtain informed consent before publishing identifiable stories or images.',
                },
                {
                  title: 'Share credible information',
                  description:
                    'Communicate verified findings clearly and distinguish measured results from future goals.',
                },
                {
                  title: 'Learn and adapt',
                  description:
                    'Use evidence and feedback to identify improvements and strengthen future work.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1685D1]">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#071F3B]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102D4F] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[32px] border-white/5" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#1685D1]/20" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
              <Leaf size={28} />
            </div>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.22em] text-[#F5C542]">
              A shared responsibility
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Help build a future where everyone can thrive.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Lasting change takes collaboration, listening and sustained
              commitment. Join UMRF in working towards dignity, health and
              opportunity for all.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/#get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-3.5 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Get Involved
                <ArrowRight size={18} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#071F3B]"
              >
                Contact UMRF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
