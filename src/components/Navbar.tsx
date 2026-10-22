
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Home', href: '/', end: true },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'News & Stories', href: '/news-stories' },
  { label: 'Contact', href: '/contact' },
]

const messages = [
  'EMPOWER',
  'REJUVENATE',
  'INCLUDE',
  'BUILDING DIGNITY, RESILIENCE & OPPORTUNITY',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap py-3 text-[11px] font-semibold
    transition-colors duration-200 xl:text-xs
    ${
      isActive
        ? 'text-[#0871c9]'
        : 'text-slate-800 hover:text-[#0871c9]'
    }
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[#0871c9] after:transition-all after:duration-300
    ${
      isActive
        ? 'after:w-full'
        : 'after:w-0 hover:after:w-full'
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `cursor-pointer border-b border-slate-100 py-3 text-sm
    font-semibold transition-colors hover:text-[#0871c9]
    ${
      isActive
        ? 'border-l-4 border-l-[#0871c9] bg-blue-50 pl-3 text-[#0871c9]'
        : 'text-slate-700'
    }`

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top announcement strip */}
      <div
        className="relative flex h-7 items-center overflow-hidden
        border-b border-[#d8b83f]/40 bg-[#082d50] text-white
        sm:h-8"
      >
        {/* Gold accent */}
        <span
          className="absolute left-0 top-0 h-full w-[3px]
          bg-[#e8c547]"
        />

        <div
          className="announcement-track flex w-max shrink-0
          items-center whitespace-nowrap"
        >
          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy !== 0}
              className="flex shrink-0 items-center gap-5 pr-8
              text-[9px] font-semibold tracking-[0.17em]
              sm:text-[10px]"
            >
              {messages.map((message, index) => (
                <span
                  key={message}
                  className="flex items-center gap-5"
                >
                  <span
                    className={
                      index === messages.length - 1
                        ? 'text-white/90'
                        : 'text-[#f2d35c]'
                    }
                  >
                    {message}
                  </span>

                  <span className="text-[#3cb879]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav className="bg-white">
        <div
          className="mx-auto flex min-h-[68px] max-w-[1440px]
          items-center justify-between gap-3 px-4
          sm:px-7 lg:min-h-[76px] lg:px-10"
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 cursor-pointer items-center"
            aria-label="Uzima Mupya Foundation home"
          >
            <img
              src="/uzima-logo.jpg"
              alt="Uzima Mupya Rejuvenated Foundation"
              className="h-[54px] w-[90px] object-contain
              sm:h-[60px] sm:w-[100px]"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.end}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop donate button */}
          <Link
            to="/get-involved"
            className="hidden shrink-0 cursor-pointer items-center
            gap-2 rounded-lg bg-[#0871c9] px-4 py-3
            text-xs font-bold text-white shadow-md
            transition-all hover:-translate-y-0.5
            hover:bg-[#075ba0] hover:shadow-lg
            sm:inline-flex lg:px-5"
          >
            <Heart size={14} fill="currentColor" />
            Donate
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="cursor-pointer rounded-lg p-2
            text-[#075ba0] transition-colors
            hover:bg-blue-50 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white
            px-5 py-4 shadow-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-2xl flex-col">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/get-involved"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex cursor-pointer
                items-center justify-center gap-2 rounded-lg
                bg-[#0871c9] px-5 py-3 text-sm font-bold
                text-white transition-colors hover:bg-[#075ba0]"
              >
                <Heart size={16} fill="currentColor" />
                Donate Now
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
