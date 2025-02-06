'use client'

import { DashboardLayout } from './DashboardLayout'
import { Filter } from 'lucide-react'
import { useState } from 'react'

interface ListLayoutProps {
  children: React.ReactNode
  title: string
  filters?: React.ReactNode
  actions?: React.ReactNode
}

export function ListLayout({ children, title, filters, actions }: ListLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-[#333333]">{title}</h1>
          {actions}
        </div>
        
        <div className="flex gap-6">
          {filters && (
            <>
              <button
                className="lg:hidden flex items-center gap-2 text-sm text-[#6C757D]"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              <div className={`
                fixed lg:static inset-0 bg-white lg:bg-transparent z-20 
                ${isFilterOpen ? 'block' : 'hidden lg:block'}
                lg:w-60 p-6 lg:p-0
              `}>
                {filters}
              </div>
            </>
          )}
          
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 