
import { ArrowRight, Handshake, MoveUpRight } from 'lucide-react'

const partners = [
  {
    name: 'Partner One',
    logo: '/partners/partner-1.png',
  },
  {
    name: 'Partner Two',
    logo: '/partners/partner-2.png',
  },
  {
    name: 'Partner Three',
    logo: '/partners/partner-3.png',
  },
  {
    name: 'Partner Four',
    logo: '/partners/partner-4.png',
  },
  {
    name: 'Partner Five',
    logo: '/partners/partner-5.png',
  },
  {
    name: 'Partner Six',
    logo: '/partners/partner-6.png',
  },
]

export default function Partnerships() {
  // Duplicate the logos to create a seamless continuous track.
  const circulatingPartners = [...partners, ...partners]

  return (
    <section
      id="partners"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#174d80] sm:text-xs">
            Partnerships & Collective Action
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0863ad] sm:text-4xl lg:text-[44px]">
            Together, We
            <span className="block text-[#f3c928]">
              Rejuvenate Futures.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Lasting change grows through collaboration. By connecting
            communities, partners, and shared purpose, we can work
            toward a future built on dignity, inclusion, and opportunity.
          </p>
        </div>

        {/* Image and circulating partner logos */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

          {/* LEFT: Photo with layered gradients */}
          <div className="relative isolate flex min-h-[390px] overflow-hidden rounded-[28px] bg-[#082d50] sm:min-h-[440px] lg:min-h-[490px]">

            <img
              src={import.meta.env.BASE_URL + 'images/pads.jpg'}
              alt="Children gathered together in a community setting"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
              loading="lazy"
            />

            {/* Deep navy gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041a30]/95 via-[#082d50]/55 to-[#082d50]/10" />

            {/* Blue side gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0871c9]/45 via-transparent to-transparent" />

            {/* Decorative gold glow */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-[#f3c928]/20 blur-3xl"
            />

            {/* Decorative label */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-8 sm:top-8">
              <span className="h-2 w-2 rounded-full bg-[#f3c928]" />
              Stronger Together
            </div>

            {/* Photo content */}
            <div className="mt-auto w-full p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#f3c928] backdrop-blur-md">
                <Handshake size={25} strokeWidth={1.7} />
              </div>

              <h3 className="max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                One Community.
                <span className="block text-[#f3c928]">
                  Shared Possibilities.
                </span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
                We welcome collaboration with organizations and
                individuals who share our commitment to dignity,
                well-being, and inclusive communities.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#f3c928] px-5 py-3 text-xs font-bold text-[#082d50] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdc4a]"
              >
                Explore Partnership
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT: Partner logo carousel */}
          <div className="flex min-w-0 flex-col justify-center overflow-hidden rounded-[28px] border border-[#e5edf5] bg-[#f5f9fe] py-7 sm:py-9">

            <div className="px-5 sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#174d80]">
                Our Partners
              </p>

              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#123b60] sm:text-3xl">
                Progress Through
                <span className="block text-[#0871c9]">
                  Collaboration
                </span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                We value the organizations and supporters who work
                alongside communities to advance shared goals.
              </p>
            </div>

            {/* Moving logo track */}
            <div className="relative mt-8 space-y-4">

              {/* Edge fades */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f5f9fe] to-transparent sm:w-12"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f5f9fe] to-transparent sm:w-12"
              />

              <div className="partner-marquee flex w-max gap-4">
                {circulatingPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex h-[108px] w-[155px] shrink-0 items-center justify-center rounded-2xl border border-[#e6edf5] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#b9d8f3] hover:shadow-md sm:h-[120px] sm:w-[175px]"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Second row moves in the opposite direction */}
              <div className="partner-marquee-reverse flex w-max gap-4">
                {[...circulatingPartners].reverse().map((partner, index) => (
                  <div
                    key={`reverse-${partner.name}-${index}`}
                    className="flex h-[90px] w-[135px] shrink-0 items-center justify-center rounded-2xl border border-[#e6edf5] bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#b9d8f3] hover:shadow-md sm:h-[100px] sm:w-[155px]"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership callout */}
            <div className="mx-5 mt-8 flex items-center justify-between gap-4 rounded-2xl border border-[#dceeff] bg-white p-4 sm:mx-8 sm:p-5">
              <div>
                <p className="text-sm font-bold text-[#123b60]">
                  Interested in partnering with us?
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Let's explore what we can achieve together.
                </p>
              </div>

              <a
                href="#contact"
                aria-label="Contact us about partnerships"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0871c9] text-white transition-all hover:bg-[#075ba0]"
              >
                <MoveUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
