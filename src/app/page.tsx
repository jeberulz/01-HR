'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Briefcase, Users, Calendar, CheckSquare } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { StatCard } from '@/components/features/Dashboard/StatCard'
import { JobCard } from '@/components/features/Jobs/JobCard'
import { TrainingCard } from '@/components/features/Training/TrainingCard'

const stats = [
  { title: 'Active Jobs', value: 12, icon: Briefcase, trend: { value: 8, isPositive: true } },
  { title: 'Total Candidates', value: 145, icon: Users, trend: { value: 12, isPositive: true } },
  { title: 'Upcoming Events', value: 4, icon: Calendar },
  { title: 'Pending Tasks', value: 8, icon: CheckSquare, trend: { value: 2, isPositive: false } },
]

const jobs = [
  { id: 'ux-designer', title: 'UX Designer', location: 'San Francisco, CA', applicants: 24, imageId: 1 },
  { id: 'frontend-dev', title: 'Frontend Developer', location: 'Remote', applicants: 18, imageId: 2 },
  { id: 'project-manager', title: 'Project Manager', location: 'New York, NY', applicants: 15, imageId: 3 },
  { id: 'software-engineer', title: 'Software Engineer', location: 'Austin, TX', applicants: 32, imageId: 4 },
  { id: 'ux-researcher', title: 'UX Researcher', location: 'Seattle, WA', applicants: 9, imageId: 5 },
]

const trainings = [
  { id: 'hiring-best-practices', title: 'Hiring Best Practices', duration: '2h 30m', progress: 75, imageId: 6 },
  { id: 'interview-techniques', title: 'Modern Interview Techniques', duration: '1h 45m', progress: 40, imageId: 7 },
  { id: 'onboarding', title: 'Effective Onboarding Process', duration: '3h 15m', progress: 20, imageId: 8 },
]

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])

  return null
}
