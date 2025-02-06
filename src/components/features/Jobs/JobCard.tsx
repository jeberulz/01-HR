'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users } from 'lucide-react'

interface JobCardProps {
  id: string
  title: string
  location: string
  applicants: number
  imageId: number
}

export function JobCard({ id, title, location, applicants, imageId }: JobCardProps) {
  return (
    <Link 
      href={`/jobs/${id}`}
      className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-32">
        <Image
          src={`https://picsum.photos/seed/${imageId}/400/200`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#333333]">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#6C757D]">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#6C757D]">
          <Users className="w-4 h-4" />
          <span>{applicants} applicants</span>
        </div>
      </div>
    </Link>
  )
} 