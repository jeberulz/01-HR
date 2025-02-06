'use client'

import { Home, Search, Bell, PlusCircle, Briefcase, Users, Calendar, CheckSquare, Layout, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/shared/Logo'
import { useState, useEffect } from 'react'

const mainNavItems = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: PlusCircle, label: 'Create job', href: '/jobs/create' },
]

const recruitmentItems = [
  { icon: Briefcase, label: 'Jobs', href: '/jobs' },
  { icon: Users, label: 'Candidates', href: '/candidates' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: CheckSquare, label: 'To-dos', href: '/todos' },
  { icon: Layout, label: 'Career pages', href: '/career-pages' },
]

const yourJobs = [
  'UX Designer',
  'Frontend Developer',
  'Project Manager',
  'Software Engineers',
  'UX Researchers',
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar')
      const hamburger = document.getElementById('hamburger-button')
      if (
        sidebar &&
        hamburger &&
        !sidebar.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Hamburger button */}
      <button
        id="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-3 left-4 z-50 p-2 rounded-lg hover:bg-gray-100"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`
          fixed top-0 left-0 h-screen bg-white border-r border-[#F2F2F2] z-40
          transition-transform duration-300 ease-in-out
          w-[240px] lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-16 px-4 flex items-center border-b border-[#F2F2F2]">
          <Logo />
        </div>

        <div className="flex-1 px-3 py-5 overflow-y-auto">
          <div className="mb-8">
            <div className="px-3 mb-2 text-xs font-medium text-[#98A2B3] uppercase">
              MAIN MENU
            </div>
            <ul className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm \
                        ${isActive ? 'bg-[#EAF0FD] text-[#2865EC]' : 'text-[#475467] hover:bg-gray-50'}`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mb-8">
            <div className="px-3 mb-2 text-xs font-medium text-[#98A2B3] uppercase">
              RECRUITMENT
            </div>
            <ul className="space-y-1">
              {recruitmentItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm \
                        ${isActive ? 'bg-[#EAF0FD] text-[#2865EC]' : 'text-[#475467] hover:bg-gray-50'}`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <div className="px-3 mb-2 text-xs font-medium text-[#98A2B3] uppercase">
              YOUR JOBS
            </div>
            <ul className="space-y-1">
              {yourJobs.map((job) => (
                <li key={job}>
                  <Link
                    href={`/jobs/${job.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center px-3 py-2 text-sm text-[#475467] rounded-lg hover:bg-gray-50"
                  >
                    {job}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
} 