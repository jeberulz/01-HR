'use client'

import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#6C757D]">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-[#333333]">{value}</h3>
          {trend && (
            <p className={`text-sm mt-1 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#4169E1]" />
        </div>
      </div>
    </div>
  )
} 