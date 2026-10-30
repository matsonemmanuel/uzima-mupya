
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Heart,
  ExternalLink,
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'News & Stories', href: '/news-stories' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact Us', href: '/contact' },
]

const thematicAreas = [
  'Mental Health & Psychosocial Well-being',
  'Water, Sanitation & Hygiene (WASH)',
  'Menstrual Health & Hygiene',
  'Education, Skills & Empowerment',
  'Refugee Support & Inclusion',
  'Resilient Communities',
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: FaYoutube,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#061f38] text-white">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0871c9] via-[#f3c928] to-[#0871c9]" />

      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border-[45px] border-white/[0.025]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#0871c9]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Main footer content */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.8fr_1.15fr_1fr] lg:gap-10 lg:py-20">
          {/* COLUMN 1: Brand */}
          <div>
            <Link
              to="/"
              aria-label="Uzima Mupya Rejuvenated Foundation home"
              className="inline-flex cursor-pointer items-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#f3c928]"
            >
              <img
                src={`${import.meta.env.BASE_URL}uzima-logo.jpg`}
                alt="Uzima Mupya Rejuvenated Foundation"
                className="h-14 w-auto rounded-md object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">
              A women refugee-led, non-profit organization working toward
              communities where all individuals live with dignity,
              health, and opportunity.
            </p>

            <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-blue-100/80">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-[#f3c928]"
              />
              <span>
                Kyangwali Refugee Settlement,
                <br />
                Kikuube District, Uganda
              </span>
            </div>

            {/* Social media */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3c928]">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-blue-100 transition-all duration-200 hover:-translate-y-1 hover:border-[#f3c928] hover:bg-[#f3c928] hover:text-[#061f38] focus:outline-none focus:ring-2 focus:ring-[#f3c928]"
                    >
                      <Icon size={17} />
                    </a>
                  )
                })}
              </div>

              <p className="mt-3 max-w-xs text-[11px] leading-5 text-blue-100/40">
                Update these links with UMRF's official social media
                profiles before publishing.
              </p>
            </div>
          </div>

          {/* COLUMN 2: Quick links */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="mb-5 mt-3 h-[3px] w-10 rounded-full bg-[#f3c928]" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex cursor-pointer items-center gap-2 text-sm text-blue-100/75 transition-colors hover:text-[#f3c928] focus:outline-none focus:text-[#f3c928]"
                  >
                    <ArrowRight
                      size={13}
                      className="shrink-0 text-[#f3c928] transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Thematic areas */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              Our Thematic Areas
            </h3>

            <div className="mb-5 mt-3 h-[3px] w-10 rounded-full bg-[#f3c928]" />

            <ul className="space-y-3">
              {thematicAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 text-sm leading-6 text-blue-100/75"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f3c928]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-white">
              Contact Us
            </h3>

            <div className="mb-5 mt-3 h-[3px] w-10 rounded-full bg-[#f3c928]" />

            <p className="mb-5 text-sm leading-6 text-blue-100/75">
              Have a question, partnership proposal, or want to support
              our work? We'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f3c928]"
                />
                <span className="leading-6">
                  Official email address to be added
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-blue-100/80">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f3c928]"
                />
                <span className="leading-6">
                  Official phone number to be added
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#f3c928] px-5 py-3 text-xs font-extrabold text-[#061f38] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdc4a] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Get in Touch
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Vision strip */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <Heart
              size={15}
              className="shrink-0 text-[#f3c928]"
            />
            <p className="text-xs leading-6 text-blue-100/75 sm:text-sm">
              Building inclusive communities where everyone can live
              with dignity, health, and opportunity.
            </p>
          </div>
        </div>

        {/* Copyright and Mat Labs credit */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs leading-6 text-blue-100/60">
              © {year} Uzima Mupya Rejuvenated Foundation. All rights reserved.
            </p>

            {/* Powered by Mat Labs */}
            <a
              href="https://matlbs.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Powered by Mat Labs"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 transition-all duration-200 hover:border-[#f3c928]/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#f3c928]"
            >
              <span className="text-[10px] font-medium tracking-wide text-blue-100/60">
                Powered by
              </span>

              <img
                src={`${import.meta.env.BASE_URL}mat2.png`}
                alt="Mat Labs"
                className="max-h-8 w-auto max-w-[100px] object-contain"
              />

              <ExternalLink
                size={13}
                className="text-blue-100/50 transition-colors group-hover:text-[#f3c928]"
              />
            </a>
          </div>

          <p className="mt-4 text-center text-[10px] leading-5 text-blue-100/40">
            Dignity. Empathy. Inclusion. Resilience.
          </p>
        </div>
      </div>
    </footer>
  )
}
