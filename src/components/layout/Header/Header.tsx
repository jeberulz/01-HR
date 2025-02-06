'use client'

import Image from 'next/image'

export function Header() {
  const today = new Date()
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }
  const formattedDate = today.toLocaleDateString('en-GB', dateOptions)

  return (
    <header className="h-16 bg-white border-b border-[#F2F2F2] fixed top-0 right-0 left-0 lg:left-[240px] z-20">
      <div className="h-full px-16 lg:px-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold text-[#101828]">Hello Mr John</h1>
          <p className="text-sm text-[#475467]">Happy {formattedDate}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/seed/user/200"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
} 