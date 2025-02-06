'use client'

import { ListLayout } from '@/components/layout/ListLayout'
import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

const categories = ['All', 'Jobs', 'Candidates', 'Events', 'Training']
const filters = {
  location: ['Remote', 'On-site', 'Hybrid'],
  department: ['Engineering', 'Design', 'Marketing', 'Sales'],
  type: ['Full-time', 'Part-time', 'Contract'],
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const FilterSection = () => (
    <div className="space-y-6">
      {Object.entries(filters).map(([category, options]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-[#333333] mb-3 capitalize">{category}</h3>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-[#6C757D]">
                <input type="checkbox" className="rounded text-[#4169E1]" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C757D]" />
        <input
          type="text"
          placeholder="Search for jobs, candidates, or resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              activeCategory === category
                ? 'bg-[#4169E1] text-white'
                : 'bg-gray-100 text-[#6C757D] hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-center text-[#6C757D]">
          Enter a search query to see results
        </p>
      </div>
    </div>
  )
}