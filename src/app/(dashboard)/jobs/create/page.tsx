'use client'

import { FormLayout } from '@/components/layout/FormLayout'
import { useState } from 'react'

const steps = [
  {
    id: 'basics',
    title: 'Basic Information',
    fields: [
      { name: 'title', label: 'Job Title', type: 'text', required: true },
      { name: 'department', label: 'Department', type: 'select', required: true, options: ['Engineering', 'Design', 'Marketing', 'Sales'] },
      { name: 'location', label: 'Location', type: 'text', required: true },
      { name: 'type', label: 'Employment Type', type: 'select', required: true, options: ['Full-time', 'Part-time', 'Contract'] },
    ],
  },
  {
    id: 'description',
    title: 'Job Description',
    fields: [
      { name: 'description', label: 'Job Description', type: 'textarea', required: true },
      { name: 'requirements', label: 'Requirements', type: 'textarea', required: true },
      { name: 'benefits', label: 'Benefits', type: 'textarea', required: true },
    ],
  },
  {
    id: 'details',
    title: 'Additional Details',
    fields: [
      { name: 'salary', label: 'Salary Range', type: 'text' },
      { name: 'experience', label: 'Experience Level', type: 'select', options: ['Entry Level', 'Mid Level', 'Senior', 'Lead'] },
      { name: 'deadline', label: 'Application Deadline', type: 'date' },
    ],
  },
]

export default function CreateJobPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const currentStepData = steps[currentStep - 1]

  return (
    <FormLayout currentStep={currentStep} totalSteps={steps.length}>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#333333]">{currentStepData.title}</h2>
          <p className="text-sm text-[#6C757D] mt-1">
            Step {currentStep} of {steps.length}
          </p>
        </div>

        <form className="space-y-6">
          {currentStepData.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-[#333333] mb-2">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  onChange={handleInputChange}
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  onChange={handleInputChange}
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
        </form>

        <div className="flex justify-between pt-6">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 text-sm font-medium text-[#6C757D] bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (currentStep < steps.length) {
                setCurrentStep((prev) => prev + 1)
              } else {
                // Submit form
                console.log('Form submitted:', formData)
              }
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-[#4169E1] rounded-lg hover:bg-blue-700"
          >
            {currentStep === steps.length ? 'Create Job' : 'Next'}
          </button>
        </div>
      </div>
    </FormLayout>
  )
}