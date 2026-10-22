
import {
  ArrowRight,
  Heart,
  HandHeart,
  UsersRound,
  Handshake,
  Megaphone,
  
  Gift,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Mail,
  Sparkles,
} from 'lucide-react'

const waysToHelp = [
  {
    number: '01',
    title: 'Volunteer Your Time',
    description:
      'Share your time, knowledge or professional skills to support community-led initiatives and contribute to meaningful work.',
    icon: HandHeart,
    color: 'bg-[#EAF4FF]',
    iconColor: 'text-[#1685D1]',
    action: 'Explore volunteering',
  },
  {
    number: '02',
    title: 'Build a Partnership',
    description:
      'Collaborate with UMRF through shared expertise, institutional collaboration, technical support or aligned community initiatives.',
    icon: Handshake,
    color: 'bg-[#FFF4D6]',
    iconColor: 'text-[#A77900]',
    action: 'Discuss collaboration',
  },
  {
    number: '03',
    title: 'Support Our Mission',
    description:
      'Help strengthen community-led work through appropriate financial or in-kind contributions, subject to agreed needs and arrangements.',
    icon: Gift,
    color: 'bg-[#E8F5EF]',
    iconColor: 'text-[#23845B]',
    action: 'Discuss how to contribute',
  },
  {
    number: '04',
    title: 'Raise Awareness',
    description:
      'Help more people understand the importance of dignity, well-being, inclusion and opportunity by sharing our mission responsibly.',
    icon: Megaphone,
    color: 'bg-[#F0EDFF]',
    iconColor: 'text-[#7560C8]',
    action: 'Help spread the word',
  },
  {
    number: '05',
    title: 'Share Your Expertise',
    description:
      'Offer relevant knowledge in areas such as education, mental well-being, communications, technology, fundraising or organizational development.',
    icon: Lightbulb,
    color: 'bg-[#FCECE8]',
    iconColor: 'text-[#C65A43]',
    action: 'Share your skills',
  },
  {
    number: '06',
    title: 'Connect Us to Opportunities',
    description:
      'Introduce UMRF to networks, institutions or opportunities that align with its mission and can strengthen community-led initiatives.',
    icon: Globe2,
    color: 'bg-[#E8F1FF]',
    iconColor: 'text-[#245EB5]',
    action: 'Make a connection',
  },
]

const principles = [
  {
    title: 'Community first',
    description:
      'We value approaches that respect community priorities, lived experiences and local knowledge.',
  },
  {
    title: 'Dignity and respect',
    description:
      'We welcome engagement that treats every person with empathy, fairness and respect.',
  },
  {
    title: 'Shared responsibility',
    description:
      'We believe lasting change grows through cooperation, mutual learning and responsible action.',
  },
]

export default function GetInvolvedPage() {
  return (
    <main className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate min-h-[590px] overflow-hidden bg-[#071F3B] lg:min-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2000&q=85"
          alt="People joining hands in a collaborative community initiative"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071F3B]/95 via-[#071F3B]/80 to-[#071F3B]/35" />

        <div className="absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full border-[45px] border-[#F5C542]/20" />
        <div className="absolute -bottom-28 left-[38%] -z-10 h-72 w-72 rounded-full bg-[#1685D1]/25 blur-3xl" />

        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:min-h-[700px] lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <Heart size={16} className="fill-[#F5C542] text-[#F5C542]" />
              BE PART OF THE CHANGE
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your actions.
              <span className="block text-[#F5C542]">
                Their possibilities.
              </span>
              Our shared future.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Every meaningful contribution begins with a willingness to
              make a difference. Bring your time, skills, ideas or
              partnership to a shared mission of dignity, health and
              opportunity for all.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#ways-to-help"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#071F3B] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Find Your Way to Help
                <ArrowRight size={19} />
              </a>

              <a
                href="#connect"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-[#071F3B]"
              >
                Connect With Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#F5C542]" />
                Give your time
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#F5C542]" />
                Share your skills
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#F5C542]" />
                Build connections
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-2 -top-5 h-28 w-28 rounded-tr-[3rem] bg-[#F5C542]" />

            <div className="relative z-10 ml-auto max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
                <UsersRound size={33} />
              </div>

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F5C542]">
                A shared mission
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-snug text-white">
                There is a place for your contribution.
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Whether you contribute an idea, expertise, resources or time,
                start with a conversation about how we can work together.
              </p>

              <a
                href="#ways-to-help"
                className="mt-7 inline-flex items-center gap-2 font-bold text-white transition hover:gap-4"
              >
                Discover the possibilities
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="absolute -bottom-6 -left-5 h-28 w-28 rounded-bl-[3rem] bg-[#1685D1]" />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-2.5 w-1/3 bg-[#F5C542]" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Why get involved?
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl lg:text-5xl">
              Change becomes possible when we act together.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Stronger, more inclusive communities are built through
              cooperation. They need people who are willing to listen,
              organizations ready to collaborate, and individuals who can
              contribute ideas, skills and resources.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              UMRF welcomes conversations with people and institutions
              interested in advancing its mission. We want engagement to
              begin with shared purpose, respect for community priorities
              and a clear understanding of how each contribution can help.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border-l-4 border-[#F5C542] bg-[#F1F7FC] p-5 sm:p-6">
              <Sparkles className="mt-1 shrink-0 text-[#1685D1]" size={24} />
              <p className="text-sm leading-7 text-[#102D4F]">
                <strong>Start where you are.</strong> You do not need to do
                everything. Find a meaningful way to contribute and begin
                with a conversation.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl pb-8 pl-4 pr-5 pt-4">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-[3rem] bg-[#F5C542]" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-bl-[3rem] bg-[#1685D1]" />

            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1100&q=85"
              alt="A diverse group of people working together"
              className="relative z-10 h-[350px] w-full rounded-tl-[5rem] rounded-br-[5rem] object-cover shadow-xl sm:h-[440px]"
            />

            <div className="absolute bottom-10 left-8 z-20 max-w-[245px] rounded-2xl bg-white p-5 shadow-xl sm:left-10">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#1685D1]">
                Our belief
              </p>
              <p className="mt-2 font-bold leading-6 text-[#071F3B]">
                Every contribution should strengthen dignity and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO GET INVOLVED */}
      <section
        id="ways-to-help"
        className="bg-[#F1F7FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Find your place
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071F3B] sm:text-4xl lg:text-5xl">
              Six ways to make a meaningful contribution.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose a starting point that reflects your interests,
              experience and capacity. We can discuss suitable opportunities
              together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {waysToHelp.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-[#F5C542]/15 transition duration-300 group-hover:scale-125" />

                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} ${item.iconColor}`}
                    >
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-extrabold tracking-widest text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-[#071F3B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href="#connect"
                    className="mt-7 inline-flex items-center gap-2 self-start text-sm font-extrabold text-[#1685D1] transition duration-300 hover:gap-4"
                  >
                    {item.action}
                    <ArrowRight size={17} />
                  </a>

                  <div className="mt-7 h-1 w-12 rounded-full bg-[#F5C542] transition-all duration-300 group-hover:w-20" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#071F3B] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border-[28px] border-[#F5C542]/20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
                <Handshake size={29} />
              </div>

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-[#F5C542]">
                For organizations and institutions
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Let's turn shared priorities into collective action.
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                If your organization shares an interest in dignity,
                well-being, inclusion and community resilience, we welcome
                a conversation about possible areas of collaboration.
              </p>

              <a
                href="#connect"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-6 py-3.5 font-bold text-[#071F3B] transition hover:bg-white"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              How we approach engagement
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3B] sm:text-4xl">
              Partnerships rooted in shared values.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We believe meaningful collaboration starts with listening
              and a shared understanding of the purpose, responsibilities
              and expectations involved.
            </p>

            <div className="mt-8 space-y-6">
              {principles.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] font-extrabold text-[#1685D1]">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#071F3B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-[#F1F7FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#1685D1]">
              Getting started
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071F3B] sm:text-4xl">
              A simple first step.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              You do not need to have everything figured out before reaching
              out. Start a conversation and explore whether there is a
              suitable way to work together.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Introduce yourself',
                text: 'Tell us about your interests, organization or area of expertise.',
              },
              {
                number: '02',
                title: 'Share your idea',
                text: 'Explain what you would like to contribute or explore together.',
              },
              {
                number: '03',
                title: 'Explore the next step',
                text: 'Discuss alignment, practical needs, responsibilities and possible next steps.',
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-extrabold tracking-widest text-[#1685D1]">
                  STEP {item.number}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-[#071F3B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="connect"
        className="px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102D4F] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[32px] border-white/5" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#1685D1]/20" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-[#071F3B]">
              <Heart size={28} className="fill-current" />
            </div>

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.22em] text-[#F5C542]">
              Your next step starts here
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Bring your passion. Share your possibilities.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Interested in volunteering, sharing your expertise, supporting
              our mission or exploring a partnership? Reach out to begin a
              conversation with UMRF.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                <Mail size={18} />
                Contact UMRF
                <ArrowRight size={18} />
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071F3B]"
              >
                Return Home
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-blue-200">
              All engagement opportunities are subject to discussion,
              organizational needs and mutual agreement.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
