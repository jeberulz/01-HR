'use client'

import { Check } from 'lucide-react'

const jobDetails = {
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  department: 'Engineering',
  type: 'Full-time',
  applicants: 45,
  description: `We are looking for a Senior Frontend Developer to join our team and help build the next generation of our product. You will work closely with our design and backend teams to create beautiful and performant user interfaces.`,
  requirements: [
    'Minimum 5 years of experience with modern JavaScript frameworks (React, Vue, Angular)',
    'Strong understanding of web fundamentals (HTML, CSS, JavaScript)',
    'Experience with responsive design and cross-browser compatibility',
    'Familiarity with modern frontend build tools and workflows',
    'Strong problem-solving abilities and attention to detail',
    'Excellent communication and collaboration skills',
  ],
  benefits: [
    'Competitive salary and equity package',
    'Health, dental, and vision insurance',
    'Flexible work hours and location',
    'Professional development budget',
    'Company-sponsored events and team building',
    'Modern equipment and tools',
  ],
}

export default function JobProfilePage() {
  return (
    <div className="space-y-8">
      {/* Job Description */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-[#333333] mb-4">Job Description</h2>
        <p className="text-[#6C757D] whitespace-pre-line">{jobDetails.description}</p>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-[#333333] mb-4">Requirements</h2>
        <ul className="space-y-3">
          {jobDetails.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3 text-[#6C757D]">
              <Check className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-[#333333] mb-4">Benefits</h2>
        <ul className="space-y-3">
          {jobDetails.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 text-[#6C757D]">
              <Check className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 