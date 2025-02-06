'use client'

import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { MainContent } from './MainContent/MainContent'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  )
} 