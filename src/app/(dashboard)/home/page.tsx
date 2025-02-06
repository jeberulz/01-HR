'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, Users, Calendar, CheckSquare } from 'lucide-react'

const stats = [
  { title: 'Active job', value: 21, icon: Briefcase },
  { title: 'Candidates', value: 100, icon: Users },
  { title: 'Events', value: 4, icon: Calendar },
  { title: 'To do list', value: 10, icon: CheckSquare },
]

const jobs = [
  { title: 'HR Manager', image: 'https://picsum.photos/seed/hr/400/300' },
  { title: 'UX Designers', image: 'https://picsum.photos/seed/ux/400/300' },
  { title: 'Software Engineers', image: 'https://picsum.photos/seed/dev/400/300' },
  { title: 'Program Managers', image: 'https://picsum.photos/seed/pm/400/300' },
  { title: 'Marketing Execs', image: 'https://picsum.photos/seed/marketing/400/300' },
]

const trainings = [
  { 
    title: 'How to spot top talent',
    description: 'Training on how to spot top talent in a busy world',
    image: 'https://picsum.photos/seed/training1/400/300'
  },
  { 
    title: 'Onboarding Senior Executives',
    description: 'Training on how to onboard senior executives',
    image: 'https://picsum.photos/seed/training2/400/300'
  },
  { 
    title: 'Company policy documents',
    description: 'Training on company policies and handbook',
    image: 'https://picsum.photos/seed/training3/400/300'
  },
]

export default function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-white rounded-xl p-4 sm:p-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#2865EC]" />
                  <p className="text-[#475467] text-sm">{stat.title}</p>
                </div>
                <p className="text-[#101828] text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Create a new job */}
      <div className="bg-white rounded-2xl border border-[#F2F2F2] p-4 sm:p-8">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg font-semibold text-[#101828]">Create a new job</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {jobs.map((job) => (
            <Link
              key={job.title}
              href="/jobs/create"
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#F2F2F2]"
            >
              <Image
                src={job.image}
                alt={job.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-medium">{job.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Training modules */}
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#101828]">Training modules</h2>
            <p className="text-sm text-[#475467] mt-1">Training about how to spot top talent in a busy world</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trainings.map((training) => (
            <Link
              key={training.title}
              href="#"
              className="group block bg-white rounded-xl overflow-hidden border border-[#F2F2F2]"
            >
              <div className="relative aspect-[2/1]">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-medium text-[#101828] group-hover:text-[#2865EC] transition-colors duration-300">
                  {training.title}
                </h3>
                <p className="text-sm text-[#475467] mt-1">{training.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 