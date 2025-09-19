# 🛍️ Web-Next - E-commerce Application

A modern e-commerce application built with **Next.js 14** and **NextUI**, featuring a complete shopping experience with product catalog, cart functionality, and responsive design.

## 🚀 Quick Start

```bash
# From project root
pnpm turbo dev --filter=@repo/web-next

# Or from this directory
cd apps/web-next
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Features

### 🛒 E-commerce Core
- **Product Catalog**: Browse products with filtering and pagination
- **Product Details**: Detailed product pages with image gallery
- **Shopping Cart**: Add, remove, and manage cart items
- **User Authentication**: Login and registration flow
- **Responsive Design**: Mobile-first responsive interface

### 🔧 Technical Features
- **Server-Side Rendering**: Fast initial page loads
- **Static Generation**: Pre-rendered pages for better SEO
- **Image Optimization**: Next.js Image component for performance
- **API Routes**: Built-in API endpoints
- **TypeScript**: Full type safety
- **Testing**: Comprehensive test suite with Jest

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: NextUI + Tailwind CSS
- **State Management**: React Context + Custom Hooks
- **Testing**: Jest + Testing Library + Storybook
- **Type Safety**: TypeScript
- **Linting**: ESLint + Prettier
- **Package Manager**: PNPM

## 📁 Project Structure

```
web-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/       # Route groups
│   │   │   ├── brand/         # Brand page
│   │   │   ├── cart/          # Shopping cart
│   │   │   ├── category/      # Category page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── products/      # Product catalog
│   │   │   └── frequently-asked-question/
│   │   ├── actions/           # Server actions
│   │   ├── layout.tsx         # Root layout
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable components
│   │   ├── Breadcrumb/       # Navigation breadcrumbs
│   │   ├── Content/          # Page content wrapper
│   │   ├── CustomImage/      # Optimized image component
│   │   ├── FilterList/       # Product filtering
│   │   ├── Pagination/       # Page navigation
│   │   └── Toast/            # Notification system
│   ├── constants/            # Application constants
│   ├── context/              # React contexts
│   ├── hooks/                # Custom React hooks
│   ├── icons/                # SVG icon components
│   ├── layouts/              # Layout components
│   ├── lib/                  # Utility functions
│   ├── services/             # API service layer
│   ├── types/                # TypeScript type definitions
│   ├── ui/                   # UI components
│   └── utils/                # Helper functions
├── public/                   # Static assets
├── .storybook/              # Storybook configuration
└── package.json
```

## 🎨 UI Components

### Core Components
- **Breadcrumb**: Navigation breadcrumbs with dynamic paths
- **CustomImage**: Optimized image component with fallbacks
- **FilterList**: Advanced product filtering interface
- **Pagination**: Responsive pagination with page size options
- **Toast**: Toast notification system

### Product Components
- **ProductCard**: Product display card with actions
- **ProductGrid**: Responsive product grid layout
- **ProductDetail**: Detailed product view with gallery
- **ProductFilter**: Advanced filtering sidebar
- **ColorRadioGroup**: Color selection interface
- **SizeRadioGroup**: Size selection interface

### Cart Components
- **CartItem**: Individual cart item with quantity controls
- **CartSummary**: Order summary with totals
- **CartActions**: Checkout and cart management buttons

## 🛠️ Development

### Environment Variables

Create `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_API_IMAGE_URL=http://localhost:3001

# Optional: Add your API keys
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Testing
pnpm test             # Run tests
pnpm test:watch       # Run tests in watch mode
pnpm test:update      # Update test snapshots
pnpm coverage         # Generate coverage report

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript compiler
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting

# Storybook
pnpm storybook        # Start Storybook
pnpm build-storybook  # Build Storybook

# Utilities
pnpm clean            # Clean build artifacts
```

### Development Server

```bash
# Start with specific port
pnpm dev -- --port 3001

# Start with turbo mode
pnpm dev -- --turbo

# Start with experimental features
pnpm dev -- --experimental-app
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test -- CustomImage.test.tsx

# Run tests with coverage
pnpm coverage

# Update snapshots
pnpm test:update
```

### Test Structure

- **Unit Tests**: Component and utility function tests
- **Integration Tests**: Page and feature tests
- **Snapshot Tests**: UI component regression tests
- **Mocks**: API and external service mocks

### Storybook

```bash
# Start Storybook development server
pnpm storybook

# Build Storybook for production
pnpm build-storybook
```

Access Storybook at [http://localhost:6006](http://localhost:6006)

## 🎯 API Integration

### Service Layer

The application uses a service layer pattern for API integration:

```typescript
// Example: Product service
import { getProducts, getProductById } from '@/services/product'

// Fetch products with pagination
const products = await getProducts({ page: 1, limit: 12 })

// Fetch single product
const product = await getProductById('123')
```

### Available Services

- **Product Service**: Product catalog and details
- **Cart Service**: Shopping cart management
- **User Service**: User authentication and profile
- **Category Service**: Product categories

### Error Handling

The application implements graceful error handling:

- **Service Level**: API error handling with fallbacks
- **Component Level**: Error boundaries for UI errors
- **Toast System**: User-friendly error notifications

## 🎨 Theming & Styling

### Tailwind CSS

The application uses Tailwind CSS with custom configuration:

```typescript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      }
    }
  }
}
```

### NextUI Integration

NextUI provides pre-built components with consistent design:

```typescript
import { Button, Card, Input } from '@repo/next-ui'
```

## 📱 Responsive Design

The application is mobile-first and responsive:

- **Breakpoints**: `sm`, `md`, `lg`, `xl`, `2xl`
- **Grid System**: CSS Grid and Flexbox
- **Touch-Friendly**: Optimized for touch interfaces
- **Performance**: Optimized images and lazy loading

## 🚀 Performance Optimization

### Next.js Features

- **App Router**: Modern routing with layouts
- **Server Components**: Reduced client-side JavaScript
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Optimized web font loading
- **Bundle Analysis**: Bundle size monitoring

### Recommendations

```bash
# Analyze bundle size
pnpm build && pnpm analyze

# Performance audit
npm install -g lighthouse
lighthouse http://localhost:3000
```

## 🌐 Deployment

### Build for Production

```bash
# Build the application
pnpm build

# Test production build locally
pnpm start
```

### Deployment Platforms

**Vercel (Recommended):**
1. Connect your repository to Vercel
2. Set build command: `pnpm turbo build --filter=@repo/web-next`
3. Set output directory: `apps/web-next/.next`
4. Deploy!

**Netlify:**
1. Set build command: `pnpm turbo build --filter=@repo/web-next && cd apps/web-next && pnpm export`
2. Set publish directory: `apps/web-next/out`

**Docker:**
```dockerfile
FROM node:20-alpine AS base
# ... Docker configuration
```

## 🔧 Configuration

### Next.js Config

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
```

### TypeScript Config

```json
// tsconfig.json
{
  "extends": "@repo/tsconfig/next.json",
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

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextUI Documentation](https://nextui.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/)

---

**Built with ❤️ using Next.js and Turborepo**
