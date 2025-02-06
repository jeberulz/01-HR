Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
HR Dashboard - Recruitment Management Interface
</summary_title>

<image_analysis>

1. Navigation Elements:
- Left sidebar with: Home, Search, Notifications, Create job
- Secondary menu "RECRUITMENT" with: Jobs, Candidates, Events, To-dos, Career pages
- Tertiary menu "YOUR JOBS" with: UX Designer, Frontend Developer, Project Manager, Software Engineers, UX Researchers


2. Layout Components:
- Header container: 100% width, ~64px height
- Left sidebar: ~240px width, full height
- Main content area: Flexible width, full height
- Stats cards: ~250px width, uniform height
- Job cards: ~220px width, uniform height with images


3. Content Sections:
- Welcome header with date
- Statistics dashboard (4 metric cards)
- Job creation section
- Training modules section
- Each section maintains clear hierarchy with titles and descriptions


4. Interactive Controls:
- Navigation menu items with hover states
- Create job button
- Job category cards with icons
- Training module cards with images
- Stats cards with icons and numbers


5. Colors:
- Primary blue: #4169E1 (navigation active state)
- Secondary gray: #F8F9FA (background)
- Text colors: #333333 (primary), #6C757D (secondary)
- White: #FFFFFF (cards background)


6. Grid/Layout Structure:
- 12-column grid system
- Card grid: 4 columns for stats
- Job cards: 5 columns
- Training modules: 3 columns
- Consistent 24px gutters
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── Header
│   │   └── MainContent
│   ├── features/
│   │   ├── Dashboard
│   │   ├── Jobs
│   │   └── Training
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Dashboard statistics display
- Job management system
- Training module system
- User notification system
- Search functionality


3. State Management:
```typescript
interface AppState {
├── user: {
│   ├── profile: UserProfile
│   ├── preferences: UserPreferences
├── }
├── dashboard: {
│   ├── activeJobs: number
│   ├── candidates: number
│   ├── events: number
│   └── todos: number
├── }
└── jobs: JobsState
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/jobs/*',
├── '/candidates/*',
├── '/events/*',
└── '/training/*'
]
```


5. Component Architecture:
- DashboardLayout (parent)
- StatisticsCard (reusable)
- JobCard (reusable)
- TrainingModule (reusable)
- NavigationMenu (shared)


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'sm': '576px',
├── 'md': '768px',
├── 'lg': '992px',
└── 'xl': '1200px'
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.