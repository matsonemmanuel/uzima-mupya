
import {
  ArrowRight,
  UsersRound,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Quote,
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Team Member Name',
    role: 'Board Chairperson',
    category: 'BOARD LEADERSHIP',
    image: '',
    bio: 'Add an approved biography highlighting this leader’s experience, responsibilities and commitment to UMRF’s mission.',
  },
  {
    name: 'Team Member Name',
    role: 'Executive Director',
    category: 'EXECUTIVE LEADERSHIP',
    image: '',
    bio: 'Introduce the person responsible for organizational leadership, strategic direction and implementation.',
  },
  {
    name: 'Team Member Name',
    role: 'Programmes Lead',
    category: 'PROGRAMMES',
    image: '',
    bio: 'Describe this team member’s role in coordinating programmes and supporting community priorities.',
  },
  {
    name: 'Team Member Name',
    role: 'Community Engagement Lead',
    category: 'COMMUNITY ENGAGEMENT',
    image: '',
    bio: 'Highlight this person’s responsibilities in community participation, communication and engagement.',
  },
]

const governance = [
  {
    number: '01',
    title: 'Board of Directors',
    description:
      'Provides governance, strategic oversight and accountability in line with the foundation’s constitution.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Executive Committee',
    description:
      'Supports organizational coordination and the implementation of agreed priorities and decisions.',
    icon: UsersRound,
  },
  {
    number: '03',
    title: 'General Assembly',
    description:
      'Provides a constitutional forum for members and supports the organization’s governance processes.',
    icon: HeartHandshake,
  },
]

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071F3B]">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
          alt="Colleagues collaborating around a table"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071F3B]/95 via-[#071F3B]/80 to-[#071F3B]/35" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border-[45px] border-[#F5C542]/20" />

        <div className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[660px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <Sparkles size={16} className="text-[#F5C542]" />
              THE PEOPLE BEHIND THE PURPOSE
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Driven by purpose.
              <span className="block text-[#F5C542]">
                United by humanity.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-blue-50 sm:text-lg">
              Meet the people entrusted with guiding UMRF’s mission,
              strengthening community participation and working towards
              a future where everyone can live with dignity, health and
              opportunity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#meet-the-team"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Meet Our Team
                <ArrowRight size={18} />
              </a>
              <a
                href="#governance"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071F3B]"
              >
                Our Governance
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[3rem] bg-[#F5C542]" />
            <div className="absolute -bottom-3 -left-3 h-32 w-32 rounded-bl-[3rem] bg-[#1685D1]" />

            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=85"
              alt="People connecting during a group gathering"
              className="relative z-10 h-[360px] w-full rounded-tl-[5rem] rounded-br-[5rem] object-cover shadow-2xl sm:h-[460px]"
            />

            <div className="absolute bottom-7 right-5 z-20 max-w-[245px] rounded-2xl bg-white p-5 shadow-xl sm:right-7">
              <Quote size={25} className="text-[#1685D1]" />
              <p className="mt-2 font-bold leading-6 text-[#071F3B]">
                Leadership is about service, responsibility and shared purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-2.5 w-1/3 bg-[#F5C542]" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Leadership with purpose
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl lg:text-5xl">
              People are at the heart of everything we seek to achieve.
            </h2>
          </div>

          <div className="border-l-4 border-[#F5C542] pl-6 sm:pl-8">
            <p className="leading-8 text-slate-600">
              UMRF is a refugee-led, non-profit organization whose work is
              guided by its mission, constitutional values and commitment
              to inclusive communities. Its people and governance structures
              have an important role in translating that purpose into
              responsible action.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              This page introduces the individuals who serve the foundation
              and explains how its leadership and governance responsibilities
              fit together.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section
        id="meet-the-team"
        className="bg-[#F1F7FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
                Meet the people
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-[#071F3B] sm:text-4xl lg:text-5xl">
                The people moving our mission forward.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Get to know the people who help provide leadership,
                coordination and support for the foundation’s work.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-bold text-[#1685D1]">
              <UsersRound size={22} />
              Leadership & Team
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article
                key={`${member.role}-${index}`}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-[290px] overflow-hidden bg-[#DCEAF6]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#DCEAF6] via-[#EEF5FB] to-[#C7DDF0]">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#102D4F] text-white shadow-lg">
                        <UsersRound size={38} />
                      </div>
                      <span className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1685D1]">
                        Add approved portrait
                      </span>
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-extrabold tracking-[0.12em] text-[#102D4F] shadow-sm">
                    {member.category}
                  </div>
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#F5C542] transition-all duration-300 group-hover:h-2.5" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#071F3B]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-[#1685D1]">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-slate-500">
            Replace the sample profile text and image placeholders with
            approved team information before publishing.
          </p>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section
        id="governance"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Governance & accountability
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#071F3B] sm:text-4xl lg:text-5xl">
              Strong leadership. Clear responsibilities.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              UMRF’s constitution identifies three governance bodies that
              support the organization’s governance and institutional
              responsibilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {governance.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="group rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1685D1] transition group-hover:bg-[#071F3B] group-hover:text-white">
                      <Icon size={28} />
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
                  <div className="mt-7 h-1 w-12 rounded-full bg-[#F5C542] transition-all group-hover:w-20" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#071F3B] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#F5C542]">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Values that shape our leadership.
            </h2>
            <p className="mt-5 leading-8 text-blue-100">
              Our constitution places equitability, empathy, sustainability,
              inclusiveness, integrity and resilience at the centre of
              the foundation’s identity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              'Equitability',
              'Empathy',
              'Sustainability',
              'Inclusiveness',
              'Integrity',
              'Resilience',
            ].map((value, index) => (
              <div
                key={value}
                className={`flex min-h-28 items-center justify-center rounded-2xl border border-white/10 p-4 text-center font-bold transition hover:-translate-y-1 ${
                  index === 1 || index === 4
                    ? 'bg-[#F5C542] text-[#071F3B]'
                    : 'bg-white/[0.07] text-white hover:bg-white/15'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE MISSION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102D4F] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[32px] border-white/5" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#1685D1]/20" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
              <HeartHandshake size={29} />
            </div>

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.22em] text-[#F5C542]">
              Be part of the mission
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Shared purpose begins with people.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Interested in contributing your skills, exploring collaboration
              or learning more about UMRF? We welcome conversations with
              people who share our commitment to dignity and opportunity.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Get Involved
                <ArrowRight size={18} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071F3B]"
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
