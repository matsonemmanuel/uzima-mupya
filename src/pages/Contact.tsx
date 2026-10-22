
import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

type ContactForm = {
  name: string
  email: string
  organization: string
  subject: string
  message: string
  consent: boolean
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  organization: '',
  subject: 'General inquiry',
  message: '',
  consent: false,
}

const inquiryTypes = [
  'General inquiry',
  'Partnership opportunity',
  'Volunteering',
  'Programmes and activities',
  'Media and communications',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof ContactForm>(
    field: K,
    value: ContactForm[K],
  ) {
    setForm((previous) => ({ ...previous, [field]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Frontend demonstration only. Connect a backend or form service
    // before using this form to deliver real messages.
    setSubmitted(true)
  }

  return (
    <div className="overflow-hidden bg-white text-[#102D4F]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071F3B]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1685D1]/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#F5C542]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5C542]">
              <MessageCircle size={15} />
              We'd love to hear from you
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every great connection
              <span className="block text-[#F5C542]">
                starts with a conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Have a question, an idea, or an opportunity to collaborate?
              Connect with Uzima Mupya Rejuvenated Foundation as we work
              towards dignity, health, opportunity, and inclusive communities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-6 py-3.5 font-bold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
              >
                Send us a message
                <ArrowRight size={18} />
              </a>

              <a
                href="#our-location"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                Explore our location
                <MapPin size={17} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-blue-100/80">
              <span className="h-px w-10 bg-[#F5C542]" />
              Listen with empathy. Connect with purpose.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 z-10 h-24 w-24 rounded-tr-[2rem] border-r-8 border-t-8 border-[#F5C542] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem] rounded-br-2xl rounded-tl-2xl border-4 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                alt="Illustrative photograph of people collaborating"
                className="h-[330px] w-full object-cover sm:h-[430px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3B]/90 via-[#071F3B]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F5C542] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#071F3B]">
                  <Sparkles size={14} />
                  Let's work together
                </span>

                <h2 className="mt-4 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Your ideas can help open doors to opportunity.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
                  Start a conversation about your questions, experience,
                  expertise, or partnership ideas.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 -z-0 h-24 w-24 rounded-full bg-[#1685D1]/30 blur-xl" />
          </div>
        </div>
      </section>

      {/* CONTACT PRINCIPLES */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-[#071F3B]">
                People first
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Every conversation deserves respect, dignity, and empathy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <Handshake size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-[#071F3B]">
                Shared purpose
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore ideas, partnerships, and opportunities to contribute.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#F3F8FC] p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-[#071F3B]">
                Responsible communication
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share only the information needed to help us understand
                your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + DETAILS */}
      <section
        id="contact-form"
        className="scroll-mt-28 bg-[#F3F8FC] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          {/* LEFT COLUMN */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1685D1]">
              Contact UMRF
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#071F3B] sm:text-4xl">
              Tell us what brings you here.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you represent an organization, want to learn more
              about our mission, or have a question, use the form to tell
              us a little about your inquiry.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1685D1]">
                  <Mail size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#071F3B]">
                    Email inquiries
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Use the message form to share your inquiry.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Official email address to be added.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1685D1]">
                  <MapPin size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#071F3B]">
                    Our area of operation
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Kyangwali Refugee Settlement and beyond, Uganda.
                  </p>
                  <a
                    href="#our-location"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#1685D1] hover:text-[#071F3B]"
                  >
                    View location map <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1685D1]">
                  <Clock3 size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#071F3B]">
                    Response expectations
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    We aim to communicate respectfully and clearly. Response
                    times will depend on the availability of the team.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border-l-4 border-[#F5C542] bg-[#071F3B] p-5 text-white sm:p-6">
              <p className="text-sm font-bold text-[#F5C542]">
                A shared mission
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-100">
                “To empower individuals with knowledge, resources, and
                support, fostering resilience, equity, and holistic
                well-being for thriving and rejuvenating inclusive
                communities.”
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-[#071F3B]/5 ring-1 ring-slate-200/70 sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071F3B] text-[#F5C542]">
                <Send size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-black text-[#071F3B] sm:text-3xl">
                Send us a message
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the fields below. Required fields are marked with
                an asterisk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold text-[#102D4F]"
                  >
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1685D1] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-bold text-[#102D4F]"
                  >
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(event) =>
                      updateField('email', event.target.value)
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1685D1] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-organization"
                  className="mb-2 block text-sm font-bold text-[#102D4F]"
                >
                  Organization <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  autoComplete="organization"
                  maxLength={150}
                  value={form.organization}
                  onChange={(event) =>
                    updateField('organization', event.target.value)
                  }
                  placeholder="Your organization or institution"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1685D1] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-bold text-[#102D4F]"
                >
                  What is your inquiry about?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(event) =>
                    updateField('subject', event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1685D1] focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-[#102D4F]"
                >
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={6}
                  value={form.message}
                  onChange={(event) =>
                    updateField('message', event.target.value)
                  }
                  placeholder="Tell us about your question, idea, or opportunity..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#1685D1] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.message.length}/3000 characters
                </p>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#F3F8FC] p-4">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(event) =>
                    updateField('consent', event.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-[#1685D1]"
                />
                <span className="text-sm leading-6 text-slate-600">
                  I understand that my information will be used to respond
                  to this inquiry. I will avoid including sensitive personal
                  information that is not necessary for my message.
                  <span className="text-red-500"> *</span>
                </span>
              </label>

              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-bold">Form validation successful</p>
                    <p className="mt-1">
                      This is the frontend demonstration. Your message has
                      not been sent or stored. Connect the form to a secure
                      backend or form service to enable delivery.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#071F3B] px-7 py-4 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#1685D1] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Validate message
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Message delivery will be enabled after backend integration.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="our-location"
        className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1685D1]">
                Where we operate
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#071F3B] sm:text-4xl">
                Rooted in community.
                <span className="block text-[#1685D1]">
                  Open to connection.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl leading-8 text-slate-600 lg:justify-self-end">
              UMRF operates in Kyangwali Refugee Settlement and beyond.
              Explore the surrounding area using the map below. It indicates
              the general area of operation, not a verified office address.
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F3F8FC] shadow-lg">
            <iframe
              title="Map showing Kyangwali Refugee Settlement, Uganda"
              src="https://maps.google.com/maps?q=Kyangwali%20Refugee%20Settlement%2C%20Uganda&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#1685D1] shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#071F3B]">
                    Kyangwali Refugee Settlement
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Uganda · General area of operation
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kyangwali+Refugee+Settlement+Uganda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1685D1] px-5 py-3 text-sm font-bold text-[#1685D1] transition hover:bg-[#1685D1] hover:text-white"
              >
                Open in Google Maps <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071F3B] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#1685D1]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#F5C542]">
                The power of partnership
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Together, we can create more possibilities.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-blue-100">
                Bring your experience, ideas, and commitment to a conversation
                about dignity, resilience, and inclusive communities.
              </p>
            </div>

            <a
              href="/get-involved"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F5C542] px-7 py-4 font-extrabold text-[#071F3B] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore involvement <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
