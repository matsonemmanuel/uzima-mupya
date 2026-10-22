
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Through Uzima Mupya, I hope to gain skills and confidence to build a brighter future and contribute to my community.',
    name: 'Participant Name',
    role: 'Program Participant',
    image: import.meta.env.BASE_URL + 'images/test.jpg',
  },
  {
    quote:
      'I want every girl in our community to have the opportunity to learn, grow, and pursue her dreams with dignity.',
    name: 'Participant Name',
    role: 'Community Member',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85',
  },
  {
    quote:
      'Strong and inclusive communities begin when people support one another and everyone has the opportunity to thrive.',
    name: 'Participant Name',
    role: 'Community Member',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85',
  },
]

export default function VoicesOfChange() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonial = testimonials[activeIndex]

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section
      id="voices-of-change"
      className="overflow-hidden bg-[#eef7ff] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">

        {/* Centered heading, matching the reference */}
        <div className="mb-7 text-center sm:mb-9">
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.28em] text-[#174d80] sm:text-[10px]">
            Voices of Change
          </p>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0863ad] sm:text-3xl">
            What Girls Say
          </h2>
        </div>

        {/* Carousel layout */}
        <div className="mx-auto flex max-w-[820px] items-center justify-center gap-3 sm:gap-6">

          {/* Previous button */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-white text-[#0871c9] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0871c9] hover:text-white sm:h-11 sm:w-11"
          >
            <ArrowLeft size={17} />
          </button>

          {/* Testimonial card */}
          <article
            key={activeIndex}
            className="flex min-w-0 flex-1 flex-col items-center gap-4 rounded-2xl border border-white/80 bg-white p-5 shadow-sm sm:flex-row sm:gap-5 sm:p-6 lg:gap-6"
          >
            {/* Circular portrait */}
            <div className="relative shrink-0">
              <div className="h-[92px] w-[92px] overflow-hidden rounded-full border-[4px] border-[#e7f2ff] sm:h-[108px] sm:w-[108px]">
                <img
                  src={testimonial.image}
                  alt="Illustrative portrait for testimonial placeholder"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#f3c928] text-[#082d50] shadow-sm">
                <Quote size={14} fill="currentColor" />
              </div>
            </div>

            {/* Quote and attribution */}
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <Quote
                size={21}
                fill="currentColor"
                className="mx-auto mb-1 text-[#0871c9] sm:mx-0"
              />

              <p className="text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-[1.8]">
                {testimonial.quote}
              </p>

              <div className="mt-3">
                <p className="text-xs font-bold text-[#123b60] sm:text-[13px]">
                  {testimonial.name}
                </p>

                <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-white text-[#0871c9] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0871c9] hover:text-white sm:h-11 sm:w-11"
          >
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Pagination dots */}
        <div
          className="mt-4 flex items-center justify-center gap-1.5"
          aria-label="Choose testimonial"
        >
          {testimonials.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-5 bg-[#0871c9]'
                  : 'w-2 bg-[#b9d8f3] hover:bg-[#70afe8]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
