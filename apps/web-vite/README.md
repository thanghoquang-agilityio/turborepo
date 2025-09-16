# ⚡ Web-Vite - Admin Dashboard

A modern admin dashboard built with **Vite**, **React 18**, and **TanStack Router**, featuring a comprehensive admin interface with user management, data tables, and real-time functionality.

## 🚀 Quick Start

```bash
# From project root
pnpm turbo dev --filter=@repo/web-vite

# Or from this directory
cd apps/web-vite
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the application.

## 🎯 Features

### 📊 Dashboard Core
- **Admin Dashboard**: Comprehensive overview with analytics
- **User Management**: Complete user CRUD operations
- **Data Tables**: Advanced tables with sorting, filtering, and pagination
- **Real-time Updates**: Live data synchronization
- **Form Management**: Complex forms with validation
- **Notification System**: Toast notifications and alerts

### 🔐 Authentication & Security
- **Clerk Integration**: Secure authentication with Clerk
- **Role-based Access**: Different access levels
- **Session Management**: Secure session handling
- **Protected Routes**: Authentication guards

### 🎨 UI/UX Features
- **Dark/Light Mode**: Theme switching with persistence
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA compliance and keyboard navigation
- **Command Palette**: Quick navigation and actions
- **Sidebar Navigation**: Collapsible sidebar with icons

## 🏗️ Tech Stack

- **Build Tool**: Vite for lightning-fast development
- **Framework**: React 18 with hooks and suspense
- **Router**: TanStack Router for type-safe routing
- **State Management**: Zustand + TanStack Query
- **UI Library**: Radix UI + Tailwind CSS
- **Authentication**: Clerk
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + Testing Library
- **Type Safety**: TypeScript

## 📁 Project Structure

```
web-vite/
├── src/
│   ├── assets/                 # Static assets and icons
│   │   └── brand-icons/       # Brand and social icons
│   ├── components/            # Reusable components
│   │   ├── data-table/       # Advanced data table components
│   │   ├── errors/           # Error boundary components
│   │   ├── layouts/          # Layout components
│   │   └── ui/               # Base UI components (buttons, inputs, etc.)
│   ├── config/               # Application configuration
│   ├── context/              # React context providers
│   │   ├── direction-provider.tsx   # RTL/LTR support
│   │   ├── font-provider.tsx        # Font management
│   │   ├── layout-provider.tsx      # Layout state
│   │   ├── search-provider.tsx      # Global search
│   │   └── theme-provider.tsx       # Theme management
│   ├── features/             # Feature-specific components
│   │   ├── tasks/           # Task management
│   │   └── users/           # User management
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── routes/              # Route components
│   │   ├── _auth/          # Authentication routes
│   │   ├── _authenticated/ # Protected routes
│   │   └── __root.tsx      # Root route
│   ├── stores/             # Zustand stores
│   ├── styles/             # Global styles and themes
│   └── main.tsx            # Application entry point
├── public/                 # Static public assets
├── dist/                   # Build output
└── package.json
```

## 🎨 UI Components

### Base Components (Radix UI)
- **Alert**: Contextual feedback messages
- **Avatar**: User profile pictures with fallbacks
- **Badge**: Status and category indicators
- **Button**: Interactive buttons with variants
- **Card**: Content containers with headers and footers
- **Checkbox**: Form checkboxes with indeterminate state
- **Command**: Command palette for quick actions
- **Dialog**: Modal dialogs and confirmations
- **Input**: Form inputs with validation states
- **Select**: Dropdown selections with search
- **Sidebar**: Navigation sidebar with collapsible sections
- **Table**: Data tables with sorting and filtering
- **Tabs**: Tabbed interfaces
- **Tooltip**: Helpful hover information

### Advanced Components
- **DataTable**: Feature-rich tables with:
  - Column sorting and filtering
  - Row selection and bulk actions
  - Pagination and virtualization
  - Export functionality
- **CommandMenu**: Global command palette
- **ThemeSwitch**: Dark/light mode toggle
- **UserManagement**: Complete user CRUD interface
- **ConfirmDialog**: Confirmation dialogs with actions

### Layout Components
- **AuthenticatedLayout**: Main app layout with sidebar
- **AuthLayout**: Authentication pages layout
- **ErrorBoundary**: Error handling boundaries

## 🛠️ Development

### Environment Variables

Create `.env.local` file:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx

# API Configuration
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_NAME=Admin Dashboard

# Optional: Feature flags
VITE_ENABLE_DEVTOOLS=true
VITE_ENABLE_ANALYTICS=false
```

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Testing
pnpm test             # Run tests with Vitest
pnpm test:watch       # Run tests in watch mode

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript compiler
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting

# Utilities
pnpm clean            # Clean build artifacts
pnpm knip             # Find unused dependencies
```

### Development Server

```bash
# Start with specific port
pnpm dev -- --port 3000

# Start with host binding
pnpm dev -- --host

# Start with open browser
pnpm dev -- --open
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test -- user-management.test.tsx

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test -- --coverage
```

### Test Configuration

Vitest is configured with:
- **React Testing Library**: Component testing utilities
- **MSW**: API mocking for integration tests
- **jsdom**: Browser environment simulation

## 🔄 State Management

### TanStack Query (Server State)

```typescript
// Example: User queries
import { useQuery, useMutation } from '@tanstack/react-query'

const { data: users } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})

const createUserMutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => queryClient.invalidateQueries(['users']),
})
```

### Zustand (Client State)

```typescript
// Example: Layout store
import { create } from 'zustand'

interface LayoutStore {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))
```

### Context Providers

- **ThemeProvider**: Dark/light mode management
- **DirectionProvider**: RTL/LTR text direction
- **FontProvider**: Font family management
- **LayoutProvider**: Layout state and preferences
- **SearchProvider**: Global search functionality

## 🎯 Routing with TanStack Router

### Type-Safe Routing

```typescript
// Route definition
export const Route = createFileRoute('/users/$userId')({
  component: UserDetail,
  loader: ({ params }) => fetchUser(params.userId),
})

// Navigation
import { useNavigate } from '@tanstack/react-router'

const navigate = useNavigate()
navigate({ to: '/users/$userId', params: { userId: '123' } })
```

### Route Structure

```
/                          # Dashboard home
├── /auth                  # Authentication routes
│   ├── /sign-in          # Login page
│   ├── /sign-up          # Registration page
│   └── /forgot-password  # Password reset
├── /users                # User management
│   ├── /                 # User list
│   ├── /$userId          # User detail
│   └── /create           # Create user
├── /tasks                # Task management
├── /settings             # Application settings
│   ├── /account          # Account settings
│   ├── /appearance       # Theme and display
│   └── /notifications    # Notification preferences
└── /errors               # Error pages
    ├── /404              # Not found
    ├── /401              # Unauthorized
    └── /500              # Server error
```

## 🎨 Theming & Styling

### CSS Variables

The application uses CSS custom properties for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... more variables */
}

[data-theme="dark"] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark theme overrides */
}
```

### Tailwind Configuration

```typescript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        // ... CSS variable mappings
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

### Component Variants

Using `class-variance-authority` for component variants:

```typescript
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-input',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
  }
)
```

## 🔐 Authentication with Clerk

### Setup

```typescript
// main.tsx
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
)
```

### Protected Routes

```typescript
// Route protection
export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isSignedIn) {
      throw redirect({ to: '/auth/sign-in' })
    }
  },
})
```

### User Management

```typescript
import { useUser, useClerk } from '@clerk/clerk-react'

function UserProfile() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
```

## 🚀 Performance Optimization

### Vite Features

- **Fast HMR**: Hot module replacement for instant updates
- **Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Dynamic imports for lazy loading
- **Asset Optimization**: Image and font optimization

### React Optimizations

```typescript
// Lazy loading
const UserManagement = lazy(() => import('./features/users'))

// Memoization
const MemoizedTable = memo(DataTable)

// Virtual scrolling for large lists
import { FixedSizeList as List } from 'react-window'
```

### Bundle Analysis

```bash
# Analyze bundle size
pnpm build
pnpm preview -- --analyze

# Check unused dependencies
pnpm knip
```

## 🌐 Deployment

### Build for Production

```bash
# Build the application
pnpm build

# Preview production build
pnpm preview
```

### Deployment Platforms

**Netlify (Recommended):**
1. Set build command: `pnpm turbo build --filter=@repo/web-vite`
2. Set publish directory: `apps/web-vite/dist`
3. Add environment variables in Netlify dashboard

**Vercel:**
1. Set build command: `pnpm turbo build --filter=@repo/web-vite`
2. Set output directory: `apps/web-vite/dist`

**Docker:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm turbo build --filter=@repo/web-vite

FROM nginx:alpine
COPY --from=builder /app/apps/web-vite/dist /usr/share/nginx/html
```

## 🔧 Configuration

### Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### TypeScript Config

```json
// tsconfig.app.json
{
  "extends": "@repo/tsconfig/vite-app.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🤝 Contributing

1. Follow the project's code style
2. Write tests for new features
3. Update documentation as needed
4. Use conventional commits
5. Test in both light and dark modes

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Radix UI](https://www.radix-ui.com/)
- [Clerk Authentication](https://clerk.com/docs)
- [Zustand](https://docs.pmnd.rs/zustand)

---

**Built with ⚡ using Vite and modern React**