'use client'

import { Bell, Briefcase, Calendar, Users, Trash2 } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  {
    id: 1,
    type: 'application',
    title: 'New application received',
    message: 'John Doe applied for Frontend Developer position',
    time: '2 hours ago',
    read: false,
    icon: Briefcase,
  },
  {
    id: 2,
    type: 'event',
    title: 'Interview reminder',
    message: 'Upcoming interview with Sarah Smith for UX Designer role',
    time: '4 hours ago',
    read: true,
    icon: Calendar,
  },
  {
    id: 3,
    type: 'candidate',
    title: 'Candidate status update',
    message: 'Mike Johnson accepted the offer for Software Engineer position',
    time: '1 day ago',
    read: false,
    icon: Users,
  },
]

export default function NotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([])

  const FilterSection = () => (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-[#333333]">Filter by Status</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm text-[#6C757D]">
          <input
            type="radio"
            name="filter"
            checked={selectedFilter === 'all'}
            onChange={() => setSelectedFilter('all')}
            className="text-[#4169E1]"
          />
          All
        </label>
        <label className="flex items-center gap-2 text-sm text-[#6C757D]">
          <input
            type="radio"
            name="filter"
            checked={selectedFilter === 'unread'}
            onChange={() => setSelectedFilter('unread')}
            className="text-[#4169E1]"
          />
          Unread
        </label>
        <label className="flex items-center gap-2 text-sm text-[#6C757D]">
          <input
            type="radio"
            name="filter"
            checked={selectedFilter === 'read'}
            onChange={() => setSelectedFilter('read')}
            className="text-[#4169E1]"
          />
          Read
        </label>
      </div>
    </div>
  )

  const Actions = () => (
    <div className="flex items-center gap-4">
      <button
        className="text-sm text-[#6C757D] hover:text-[#333333]"
        onClick={() => {/* Mark as read logic */}}
      >
        Mark as read
      </button>
      <button
        className="text-sm text-red-500 hover:text-red-600"
        onClick={() => {/* Delete logic */}}
      >
        Delete
      </button>
    </div>
  )

  return (
    <div className="space-y-4">
      {notifications.map((notification) => {
        const Icon = notification.icon
        return (
          <div
            key={notification.id}
            className={`bg-white rounded-xl shadow-sm p-4 flex items-start gap-4 ${
              !notification.read ? 'border-l-4 border-[#4169E1]' : ''
            }`}
          >
            <div className="w-10 h-10 bg-[#4169E1] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-[#4169E1]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-[#333333]">{notification.title}</h3>
                  <p className="text-sm text-[#6C757D] mt-1">{notification.message}</p>
                  <p className="text-xs text-[#6C757D] mt-2">{notification.time}</p>
                </div>
                <button className="text-[#6C757D] hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}