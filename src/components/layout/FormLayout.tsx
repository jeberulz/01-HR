'use client'

import { DashboardLayout } from './DashboardLayout'

interface FormLayoutProps {
  children: React.ReactNode
  currentStep?: number
  totalSteps?: number
}

export function FormLayout({ children, currentStep, totalSteps }: FormLayoutProps) {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        {currentStep && totalSteps && (
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-[#4169E1] rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-[#6C757D]">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        )}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {children}
        </div>
      </div>
    </DashboardLayout>
  )
} 