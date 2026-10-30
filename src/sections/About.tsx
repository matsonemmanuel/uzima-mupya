
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-16">

        {/* LEFT: About content */}
        <div className="max-w-[570px]">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#174d80]">
            Who We Are
          </p>

          <h2 className="max-w-[540px] text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0863ad] sm:text-4xl">
            A Rejuvenated Generation
            <span className="block text-[#f3c928]">
              of Confident Girls
            </span>
          </h2>

          <p className="mt-5 text-sm leading-[1.85] text-slate-600 sm:text-[15px]">
            Uzima Mupya Rejuvenated Foundation is a non-profit, women 
            refugee-led organization operating in Kyangwali Refugee
            Settlement and beyond. We are committed to empowering
            individuals and supporting inclusive communities where
            everyone can live with dignity, health, and opportunity.
          </p>

          <p className="mt-3 text-sm leading-[1.85] text-slate-600 sm:text-[15px]">
            Inspired by the challenges faced by our communities, we
            promote mental health and psychosocial well-being,
            menstrual health, economic empowerment, and support for
            people affected by displacement.
          </p>

          <a
            href="#what-we-do"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#0871c9] px-5 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#075ba0] hover:shadow-lg"
          >
            Learn More About Us
            <ArrowRight size={15} />
          </a>
        </div>

        {/* RIGHT: Image card and decorative shapes */}
        <div className="relative mx-auto w-full max-w-[590px] py-5 sm:py-6 lg:ml-auto">

          {/* Green circle behind the top-left corner */}
          <div
            aria-hidden="true"
            className="absolute left-[1%] top-[2%] z-0 h-[90px] w-[90px] rounded-full bg-[#25ad68] sm:h-[125px] sm:w-[125px]"
          />

          {/* Pale blue accent behind the bottom-left corner */}
          <div
            aria-hidden="true"
            className="absolute bottom-[1%] left-[1%] z-0 h-[75px] w-[95px] rounded-[45%] bg-[#dceeff] sm:h-[95px] sm:w-[115px]"
          />

          {/* Blue decorative shape on the right */}
          <div
            aria-hidden="true"
            className="absolute right-[1%] top-[30%] z-0 h-[115px] w-[55px] rounded-[50%] bg-[#1684d3] sm:h-[150px] sm:w-[80px]"
          />

          {/* Yellow accent behind the bottom-right corner */}
          <div
            aria-hidden="true"
            className="absolute bottom-[1%] right-[3%] z-0 h-[75px] w-[90px] rounded-[45%] bg-[#ffd52f] sm:h-[100px] sm:w-[115px]"
          />

          {/* Yellow dotted pattern above the image */}
          <div
            aria-hidden="true"
            className="absolute right-[2%] top-[3%] z-0 grid grid-cols-6 gap-[7px] sm:gap-[9px]"
          >
            {Array.from({ length: 30 }, (_, index) => (
              <span
                key={index}
                className="h-[3px] w-[3px] rounded-full bg-[#f3c928] sm:h-[4px] sm:w-[4px]"
              />
            ))}
          </div>

          
          {/* Slanted image card with organic corners */}
          <div
            className="relative z-10 mx-auto aspect-[1.38/1] w-[88%]
              overflow-hidden
              rounded-[18%_8%_16%_10%/12%_10%_14%_12%]
              shadow-md sm:w-[88%]"
          >
            <img
              src={import.meta.env.BASE_URL + 'images/youth.jpg'}
              alt="Children learning and participating in a community setting"
              className="block h-full w-full object-cover object-center
                transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
