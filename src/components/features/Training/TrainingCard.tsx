'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

interface TrainingCardProps {
  id: string
  title: string
  duration: string
  progress: number
  imageId: number
}

export function TrainingCard({ id, title, duration, progress, imageId }: TrainingCardProps) {
  return (
    <Link 
      href={`/training/${id}`}
      className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-40">
        <Image
          src={`https://picsum.photos/seed/${imageId}/400/300`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#333333] line-clamp-2">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#6C757D]">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="mt-3">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#4169E1] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-[#6C757D]">{progress}% complete</p>
        </div>
      </div>
    </Link>
  )
} 