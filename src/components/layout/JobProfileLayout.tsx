'use client'

import { DashboardLayout } from './DashboardLayout'
import { MapPin, Users, Calendar, Briefcase } from 'lucide-react'

interface JobProfileLayoutProps {
  children: React.ReactNode
  title: string
  location: string
  department: string
  type: string
  applicants: number
}

export function JobProfileLayout({ 
  children, 
  title,
  location,
  department,
  type,
  applicants 
}: JobProfileLayoutProps) {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-semibold text-[#333333]">{title}</h1>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-sm text-[#6C757D]">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6C757D]">
              <Briefcase className="w-4 h-4" />
              <span>{department}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6C757D]">
              <Calendar className="w-4 h-4" />
              <span>{type}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6C757D]">
              <Users className="w-4 h-4" />
              <span>{applicants} applicants</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {children}
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <button className="w-full bg-[#4169E1] text-white rounded-lg py-2 px-4 hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 