import { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  Users,
  GraduationCap,
  Heart,
} from 'lucide-react'

const impactStats = [
  {
    target: 500,
    suffix: '+',
    label: 'Girls reached',
    description: 'with education and skills',
    Icon: BookOpen,
    color: 'text-[#0871c9]',
    bg: 'bg-blue-50',
  },
  {
    target: 12,
    suffix: '+',
    label: 'Communities',
    description: 'in refugee settlements',
    Icon: Users,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    target: 60,
    suffix: '%+',
    label: 'Program graduates',
    description: 'pursuing further education or employment',
    Icon: GraduationCap,
    color: 'text-[#eab308]',
    bg: 'bg-yellow-50',
  },
  {
    target: 10,
    suffix: '+',
    label: 'Partners',
    description: 'working for greater impact',
    Icon: Heart,
    color: 'text-[#0871c9]',
    bg: 'bg-blue-50',
  },
]

function CountingNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    let frameId = 0
    let startTime: number | null = null
    const duration = 1800

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease-out effect: fast at first, then slows down.
      const easedProgress = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easedProgress * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [isVisible, target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function ProofInNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.Icon

            return (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center justify-center px-4 py-6 text-center sm:px-6 lg:px-7 ${
                  index < 2
                    ? 'border-b border-slate-200 lg:border-b-0'
                    : ''
                } ${
                  index % 2 === 0
                    ? 'border-r border-slate-200 lg:border-r-0'
                    : ''
                } ${
                  index < impactStats.length - 1
                    ? 'lg:border-r lg:border-slate-200'
                    : ''
                }`}
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg}`}
                >
                  <Icon
                    size={34}
                    strokeWidth={2.4}
                    className={stat.color}
                    aria-hidden="true"
                  />
                </div>

                <p
                  className={`mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem] ${stat.color}`}
                >
                  <CountingNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </p>

                <h3 className="mb-1 text-sm font-extrabold text-slate-800 sm:text-base lg:text-lg">
                  {stat.label}
                </h3>

                <p className="max-w-[220px] text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
