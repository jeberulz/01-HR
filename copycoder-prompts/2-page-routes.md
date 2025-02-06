Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /home
- /search
- /notifications
- /create-job
- /jobs
- /candidates
- /events
- /to-dos
- /career-pages
- /ux-designer
- /frontend-developer
- /project-manager
- /software-engineers
- /ux-researchers

Page Implementations:
/home:
Core Purpose: Dashboard overview showing key metrics and recent activities
Key Components
- Stats cards (open positions, candidates, upcoming events)
- Activity feed
- Quick action buttons
- Recent applications widget
Layout Structure
- Grid-based dashboard layout
- Responsive cards that stack on mobile

/search:
Core Purpose: Universal search across jobs, candidates, and resources
Key Components
- Search bar with filters
- Results list with categories
- Advanced search options
- Save search functionality
Layout Structure
- Search bar at top
- Filters sidebar (collapsible on mobile)
- Results in main content area

/notifications:
Core Purpose: Display system notifications and alerts
Key Components
- Notification list
- Filter options (read

/unread)
- Bulk actions
- Mark as read functionality
Layout Structure:
- Single column list
- Sticky header with actions
- Infinite scroll

/create-job:
Core Purpose: Form interface for creating new job postings
Key Components
- Multi-step form
- Job details inputs
- Requirements section
- Preview functionality
Layout Structure
- Stepper navigation
- Form sections in cards
- Sticky submit button

/jobs:
Core Purpose: Manage and view all job postings
Key Components
- Job listings table

/grid
- Status filters
- Bulk actions
- Search and sort
Layout Structure:
- Table

Layouts:
DashboardLayout:
Applicable routes
- /home
- /jobs
- /candidates
- /events
Core components
- Sidebar navigation
- Header with search
- User menu
- Breadcrumbs
Responsive behavior
- Collapsible sidebar on mobile
- Stack navigation on small screens

FormLayout
Applicable routes
- /create-job
- /career-pages
Core components
- Progress indicator
- Form sections
- Action buttons
Responsive behavior
- Single column on mobile
- Floating action buttons

ListLayout
Applicable routes
- /notifications
- /to-dos
Core components
- List container
- Filter sidebar
- Action header
Responsive behavior
- Full width on mobile
- Collapsible filters

JobProfileLayout
Applicable routes
- /ux-designer
- /frontend-developer
- /project-manager
- /software-engineers
- /ux-researchers
Core components
- Role overview
- Requirements list
- Application form
- Similar positions
Responsive behavior
- Stack sections on mobile
- Sticky application button

Note: Each route implementation would be created in the app directory following Next.js 13+ conventions with appropriate loading, error, and not-found states. Components would be organized in a shared components directory for reuse across routes.
</page-structure-prompt>