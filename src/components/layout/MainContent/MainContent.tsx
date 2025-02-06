'use client'

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="ml-0 lg:ml-[240px] pt-16 min-h-screen bg-[#F9FAFB]">
      <div className="p-4 sm:p-8">
        {children}
      </div>
    </main>
  )
} 