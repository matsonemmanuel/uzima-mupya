
import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  
  ChevronRight,
  Heart,
  Search,
  X,
  Sparkles,
  UsersRound,
  HandHeart,
  ShieldCheck,
} from 'lucide-react'

type Story = {
  id: number
  category: string
  type: string
  title: string
  excerpt: string
  image: string
  readTime: string
  content: string[]
}

const categories = [
  'All Stories',
  'Community',
  'Well-being',
  'WASH & Health',
  'Youth & Opportunity',
  'Updates',
]

const stories: Story[] = [
  {
    id: 1,
    category: 'Community',
    type: 'Featured perspective',
    title: 'Dignity begins when communities are heard',
    excerpt:
      'Meaningful change starts by listening to people, understanding their priorities, and making space for their voices.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85',
    readTime: 'Perspective',
    content: [
      'Every community has experiences, knowledge, and aspirations that deserve to be heard. Listening is an important first step towards understanding the challenges people face and the opportunities they want to pursue.',
      'For UMRF, community-centred thinking aligns with a commitment to dignity, empathy, inclusiveness, and equity. It means creating space for people to participate in decisions that affect their lives.',
      'This feature is an editorial perspective on community-centred work, not a report of a specific UMRF activity. Future field stories can document community experiences with appropriate consent and verified details.',
    ],
  },
  {
    id: 2,
    category: 'Well-being',
    type: 'Explainer',
    title: 'Why psychosocial well-being matters',
    excerpt:
      'A closer look at emotional well-being, supportive relationships, and the importance of treating people with empathy.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
    readTime: 'Well-being',
    content: [
      'Well-being is an important part of a person’s ability to participate in family, community, education, and daily life.',
      'Supportive relationships, safe spaces, respectful communication, and appropriate access to services can contribute to psychosocial well-being.',
      'UMRF identifies mental health and psychosocial well-being as one of its core areas of work. This explainer introduces the topic; it does not describe a completed programme or a measured outcome.',
    ],
  },
  {
    id: 3,
    category: 'WASH & Health',
    type: 'Learning & awareness',
    title: 'Menstrual health is a matter of dignity',
    excerpt:
      'Understanding why menstrual health, access to information, and inclusive sanitation matter in everyday life.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    readTime: 'Health & dignity',
    content: [
      'Menstrual health is connected to health, dignity, privacy, participation, and access to accurate information.',
      'Safe sanitation facilities, appropriate menstrual health materials, and an environment free from stigma can help people manage menstruation with dignity.',
      'UMRF includes WASH and menstrual health in its constitutional objectives. This article is an awareness feature, not a claim that a particular distribution or intervention has taken place.',
    ],
  },
  {
    id: 4,
    category: 'Youth & Opportunity',
    type: 'Ideas & opportunity',
    title: 'Building pathways towards a more resilient future',
    excerpt:
      'Why inclusive learning, practical skills, and meaningful participation matter for future-ready communities.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    readTime: 'Opportunity',
    content: [
      'Learning and skills development can help people explore opportunities, solve problems, and participate more confidently in their communities.',
      'Inclusive programmes should respond to local priorities and consider the different barriers people face when accessing learning and opportunities.',
      'UMRF’s objectives include supporting resilient, inclusive, and future-ready communities. Specific training activities and outcomes should be added here only when verified.',
    ],
  },
  {
    id: 5,
    category: 'Community',
    type: 'Community perspective',
    title: 'Welcoming new arrivals with dignity and care',
    excerpt:
      'The importance of respectful information, connection, and support for people beginning life in a new community.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    readTime: 'Community',
    content: [
      'Arriving in a new place can bring uncertainty and unfamiliar challenges. Clear information, respectful treatment, and access to appropriate services can help people navigate their new environment.',
      'Community members and service providers can contribute by sharing accurate information, respecting privacy, and helping people understand available support.',
      'Supporting new refugee arrivals in Kyangwali is one of UMRF’s constitutional objectives. This article presents the importance of that objective without claiming a particular response has already occurred.',
    ],
  },
  {
    id: 6,
    category: 'Updates',
    type: 'Foundation updates',
    title: 'Our commitment, our values, our direction',
    excerpt:
      'Get to know the principles that guide UMRF’s vision for dignity, health, opportunity, and inclusive communities.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
    readTime: 'About UMRF',
    content: [
      'Uzima Mupya Rejuvenated Foundation is a refugee-led, non-profit organization operating in Kyangwali Refugee Settlement and beyond.',
      'Its vision is a world where all individuals live with dignity, health, and opportunity. Its mission focuses on empowering individuals with knowledge, resources, and support.',
      'Equitability, empathy, sustainability, inclusiveness, integrity, and resilience are the values stated in the foundation’s constitution. This introduction reflects that stated direction.',
    ],
  },
]

const featuredStory = stories[0]

export default function NewsStories() {
  const [activeCategory, setActiveCategory] = useState('All Stories')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  const filteredStories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return stories.filter((story) => {
      const matchesCategory =
        activeCategory === 'All Stories' ||
        story.category === activeCategory

      const matchesSearch =
        !term ||
        `${story.title} ${story.excerpt} ${story.category} ${story.type}`
          .toLowerCase()
          .includes(term)

      return matchesCategory && matchesSearch && story.id !== featuredStory.id
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071F3B]">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#1685D1]/20 blur-2xl" />
        <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-[#F5C542]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5C542]">
              <BookOpen size={15} />
              The UMRF Journal
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stories that
              <span className="block text-[#F5C542]">
                inspire change.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Explore perspectives on dignity, well-being, community
              resilience, and opportunity. Discover the ideas and values
              behind a more inclusive future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#latest-stories"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-6 py-3.5 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore stories
                <ArrowRight size={18} />
              </a>

              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                Be part of change
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-blue-100/80">
              <span className="h-px w-10 bg-[#F5C542]" />
              Dignity. Empathy. Resilience.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 z-10 h-24 w-24 rounded-tr-[2rem] border-r-8 border-t-8 border-[#F5C542] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem] rounded-br-2xl rounded-tl-2xl border-4 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
                alt="Illustrative photograph of people connecting as a community"
                className="h-[330px] w-full object-cover sm:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3B]/90 via-[#071F3B]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#071F3B]">
                  <Sparkles size={14} />
                  Featured perspective
                </span>

                <h2 className="mt-4 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Dignity begins when communities are heard
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
                  Discover why listening and inclusion are essential to
                  meaningful community-centred work.
                </p>

                <button
                  onClick={() => setSelectedStory(featuredStory)}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#F5C542] transition hover:gap-3"
                >
                  Read the feature <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 -z-0 h-24 w-24 rounded-full bg-[#1685D1]/30 blur-xl" />
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="relative bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1685D1]">
              Ideas worth sharing
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#071F3B] sm:text-4xl">
              More than stories.
              <span className="block text-[#1685D1]">
                A window into our purpose.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 md:justify-self-end">
            This is a space for thoughtful perspectives, learning resources,
            foundation announcements, and community voices. As verified
            stories and updates become available, they can be shared here
            with accuracy, respect, and consent.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-3">
          <div className="flex gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <Heart size={23} />
            </div>
            <div>
              <h3 className="font-bold text-[#071F3B]">Human dignity</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Perspectives grounded in respect and empathy.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <UsersRound size={23} />
            </div>
            <div>
              <h3 className="font-bold text-[#071F3B]">Community voices</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Space for experiences shared with informed consent.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <ShieldCheck size={23} />
            </div>
            <div>
              <h3 className="font-bold text-[#071F3B]">Responsible stories</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Clear, respectful, and carefully verified information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY COLLECTION */}
      <section
        id="latest-stories"
        className="scroll-mt-28 bg-[#F3F8FC] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1685D1]">
                Read. Learn. Reflect.
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#071F3B] sm:text-4xl">
                Explore our stories
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Browse perspectives across our core areas of work.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search stories..."
                aria-label="Search stories"
                className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1685D1] focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  activeCategory === category
                    ? 'border-[#071F3B] bg-[#071F3B] text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#1685D1] hover:text-[#1685D1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FEATURED STORY CARD */}
          <div className="mt-8 grid overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/70 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85"
                alt="Illustrative image representing community support"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute left-5 top-5 rounded-full bg-[#F5C542] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#071F3B]">
                Editor's pick
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#1685D1]">
                <span>{featuredStory.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#F5C542]" />
                <span>{featuredStory.type}</span>
              </div>

              <h3 className="mt-5 text-2xl font-black leading-tight text-[#071F3B] sm:text-3xl">
                {featuredStory.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {featuredStory.excerpt}
              </p>

              <div className="mt-7">
                <button
                  onClick={() => setSelectedStory(featuredStory)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1685D1] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#071F3B]"
                >
                  Read this story <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* STORY CARDS */}
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={`Illustrative image for ${story.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-[#071F3B] shadow-sm">
                    {story.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071F3B]/35 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.13em] text-[#1685D1]">
                    {story.type}
                  </div>

                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#071F3B] transition group-hover:text-[#1685D1]">
                    {story.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {story.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-400">
                      {story.readTime}
                    </span>
                    <button
                      onClick={() => setSelectedStory(story)}
                      aria-label={`Read ${story.title}`}
                      className="inline-flex items-center gap-2 font-bold text-[#1685D1] transition hover:gap-3 hover:text-[#071F3B]"
                    >
                      Read more <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Search size={32} className="mx-auto text-slate-300" />
              <h3 className="mt-4 text-xl font-bold text-[#071F3B]">
                No matching stories found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another keyword or choose a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('All Stories')
                }}
                className="mt-5 font-bold text-[#1685D1] hover:text-[#071F3B]"
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            The articles currently shown are sample editorial content. Replace
            them with approved foundation stories and verified updates before
            publication.
          </p>
        </div>
      </section>

      {/* STORY SUBMISSION / COMMUNITY VOICES */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#1685D1]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#1685D1]">
              <HandHeart size={17} />
              Community voices matter
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-[#071F3B] sm:text-4xl lg:text-5xl">
              Every voice deserves to be heard.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Have a community perspective, learning resource, or foundation
              update to share? We welcome conversations about stories that
              reflect dignity, resilience, and opportunity.
            </p>

            <a
              href="/get-involved"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071F3B] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#1685D1]"
            >
              Connect with UMRF <ArrowRight size={18} />
            </a>

            <p className="mt-4 max-w-lg text-xs leading-6 text-slate-500">
              Stories involving identifiable people should only be published
              with appropriate informed consent and safeguards.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2rem] border-r-8 border-t-8 border-[#F5C542] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-bl-[4rem] rounded-tr-[4rem] rounded-br-2xl rounded-tl-2xl">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"
                alt="Illustrative photograph representing people and community connection"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[410px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3B]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F5C542]">
                  Our shared future
                </p>
                <p className="mt-3 max-w-sm text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                  A story can open a door to understanding.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 -z-0 h-24 w-24 rounded-full bg-[#F5C542]/40 blur-2xl" />
          </div>
        </div>
      </section>

      {/* NEWSLETTER-STYLE CTA — no fake subscription form */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071F3B] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#1685D1]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#F5C542]">
                Stay connected
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Follow the ideas shaping a better future.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-blue-100">
                Connect with UMRF to learn about future stories, opportunities,
                and foundation updates.
              </p>
            </div>

            <a
              href="/get-involved"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-extrabold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
            >
              Get connected <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* READ STORY MODAL */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071F3B]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedStory(null)}
          role="presentation"
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              aria-label="Close story"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071F3B] shadow-lg transition hover:bg-[#F5C542]"
            >
              <X size={21} />
            </button>

            <div className="relative h-56 sm:h-80">
              <img
                src={selectedStory.image}
                alt={`Illustrative image for ${selectedStory.title}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3B]/75 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8">
                <span className="rounded-full bg-[#F5C542] px-3 py-1.5 text-xs font-extrabold text-[#071F3B]">
                  {selectedStory.category}
                </span>
                <h2
                  id="story-modal-title"
                  className="mt-3 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl"
                >
                  {selectedStory.title}
                </h2>
              </div>
            </div>

            <div className="px-6 py-7 sm:px-9 sm:py-9">
              <p className="mb-6 text-sm font-bold uppercase tracking-wider text-[#1685D1]">
                {selectedStory.type}
              </p>

              <p className="mb-6 text-lg leading-8 text-slate-600">
                {selectedStory.excerpt}
              </p>

              <div className="space-y-5">
                {selectedStory.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-8 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#071F3B] px-6 py-3 font-bold text-white transition hover:bg-[#1685D1]"
                >
                  Back to stories <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
