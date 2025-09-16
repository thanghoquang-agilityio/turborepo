# 🚀 Turborepo Monorepo

A high-performance monorepo built with **Turborepo**, featuring two modern web applications and shared packages for maximum code reusability and development efficiency.

## 📁 Project Structure

```
turborepo/
├── apps/                          # Applications
│   ├── web-next/                  # Next.js 14 E-commerce App
│   └── web-vite/                  # Vite + React Admin Dashboard
├── packages/                      # Shared Packages
│   ├── ui/                        # Reusable UI Components
│   ├── utils/                     # Utility Functions
│   ├── prettier-config/           # Shared Prettier Configuration
│   ├── eslint-config/            # Shared ESLint Configuration
│   ├── tsconfig/                 # Shared TypeScript Configurations
│   └── jest-config/              # Shared Jest Configuration
├── package.json                  # Root workspace configuration
├── turbo.json                    # Turborepo configuration
└── pnpm-workspace.yaml          # PNPM workspace configuration
```

## 🎯 Applications

### 🛍️ Web-Next (`@repo/web-next`)

**Next.js 14 E-commerce Application**

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + NextUI
- **Features**: Product catalog, shopping cart, user authentication
- **Testing**: Jest + Testing Library
- **Storybook**: Component documentation and testing
- **Port**: `3000` (development)

**Key Features:**
- Server-side rendering and static generation
- Responsive e-commerce interface
- Product filtering and pagination
- Shopping cart functionality
- User authentication flow

### ⚡ Web-Vite (`@repo/web-vite`)

**Vite + React Admin Dashboard**

- **Framework**: Vite + React 18
- **Routing**: TanStack Router
- **State Management**: Zustand + TanStack Query
- **Styling**: Tailwind CSS + Radix UI
- **Testing**: Vitest
- **Authentication**: Clerk
- **Port**: `5173` (development)

**Key Features:**
- Lightning-fast development with Vite
- Modern admin dashboard interface
- Advanced data tables and forms
- Real-time notifications
- User management system

## 📦 Shared Packages

### `@repo/ui`
Reusable UI components built with:
- **Base**: React + TypeScript
- **Styling**: Tailwind CSS + Class Variance Authority (CVA)
- **Components**: Button, Card, Input, Modal, and more
- **Exports**: Individual component exports for tree-shaking

### `@repo/utils`
Common utility functions:
- **Class Names**: `cn()` utility for Tailwind merging
- **API**: HTTP client utilities and response types
- **Validation**: Form validation helpers
- **Formatting**: Date, number, and text formatting
- **Constants**: Shared application constants

### `@repo/prettier-config`
Centralized Prettier configuration:
- **Base Config**: Common formatting rules
- **Next.js Config**: Optimized for Next.js projects
- **Vite Config**: Optimized for Vite projects
- **Plugins**: Import sorting and Tailwind class sorting

### `@repo/eslint-config`
Shared ESLint configuration for consistent code quality across all packages.

### `@repo/tsconfig`
TypeScript configurations:
- **Base**: Common TypeScript settings
- **Next.js**: Optimized for Next.js applications
- **Vite**: Optimized for Vite applications

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.19+ or 22.12+
- **PNPM**: 10.5.2+ (Package manager)
- **Git**: For version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd turborepo
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy example environment files
   cp apps/web-next/.env.example apps/web-next/.env.local
   cp apps/web-vite/.env.example apps/web-vite/.env.local
   ```

4. **Build shared packages:**
   ```bash
   pnpm build
   ```

## 🏃‍♂️ Development Commands

### Run All Applications

```bash
# Start all applications in development mode
pnpm dev

# Start specific application
pnpm turbo dev --filter=@repo/web-next
pnpm turbo dev --filter=@repo/web-vite
```

### Build Commands

```bash
# Build all packages and applications
pnpm build

# Build specific application
pnpm turbo build --filter=@repo/web-next
pnpm turbo build --filter=@repo/web-vite

# Build shared packages only
pnpm turbo build --filter=@repo/ui --filter=@repo/utils
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for specific package
pnpm turbo test --filter=@repo/web-next
pnpm turbo test --filter=@repo/web-vite
```

### Linting & Formatting

```bash
# Lint all packages
pnpm lint

# Format all files
pnpm format

# Check formatting
pnpm format:check

# Type checking
pnpm type-check
```

### Cleaning

```bash
# Clean all build artifacts
pnpm clean

# Clean specific application
pnpm turbo clean --filter=@repo/web-next
pnpm turbo clean --filter=@repo/web-vite
```

## 🎛️ Turborepo Features

### 🚀 Caching

Turborepo automatically caches build outputs and test results:

```bash
# View cache information
pnpm turbo build --dry-run

# Force bypass cache
pnpm turbo build --force

# Clear cache
pnpm turbo prune
```

**Cache Configuration:**
- Build outputs are cached in `.turbo/`
- Shared packages cache their `dist/` folders
- Applications cache build artifacts (`.next/`, `dist/`)

### 🎯 Filtering

Run commands for specific packages or applications:

```bash
# Filter by package name
pnpm turbo build --filter=@repo/web-next
pnpm turbo build --filter=@repo/web-vite

# Filter by dependency graph
pnpm turbo build --filter=@repo/web-next...
pnpm turbo build --filter=...@repo/ui

# Filter by directory
pnpm turbo build --filter=./apps/web-next
pnpm turbo build --filter=./packages/*

# Combine filters
pnpm turbo build --filter=@repo/web-next --filter=@repo/web-vite
```

### 📊 Dependency Graph

```bash
# Visualize dependency graph
pnpm turbo build --graph

# Generate dependency graph as DOT file
pnpm turbo build --graph=graph.dot
```

### ⚡ Parallel Execution

```bash
# Run tasks in parallel
pnpm turbo build --parallel

# Limit concurrency
pnpm turbo build --concurrency=2

# Run with specific scope
pnpm turbo dev --filter=@repo/web-* --parallel
```

## 🔧 Configuration Files

### `turbo.json`
Main Turborepo configuration defining tasks, caching, and dependencies:

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build", "type-check"],
      "outputs": [".next/**", "dist/**"],
      "env": ["NODE_ENV", "NEXT_PUBLIC_*"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### `pnpm-workspace.yaml`
Defines workspace packages:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## 🌐 Deployment

### Next.js App (`web-next`)

```bash
# Build for production
pnpm turbo build --filter=@repo/web-next

# Start production server
cd apps/web-next && pnpm start
```

**Deploy to Vercel:**
1. Connect repository to Vercel
2. Set build command: `pnpm turbo build --filter=@repo/web-next`
3. Set output directory: `apps/web-next/.next`

### Vite App (`web-vite`)

```bash
# Build for production
pnpm turbo build --filter=@repo/web-vite

# Preview production build
cd apps/web-vite && pnpm preview
```

**Deploy to Netlify:**
1. Set build command: `pnpm turbo build --filter=@repo/web-vite`
2. Set publish directory: `apps/web-vite/dist`

## 🛠️ Development Workflow

### Adding a New Package

1. **Create package directory:**
   ```bash
   mkdir packages/my-package
   cd packages/my-package
   ```

2. **Initialize package.json:**
   ```json
   {
     "name": "@repo/my-package",
     "version": "0.1.0",
     "private": true,
     "main": "./index.ts",
     "types": "./index.ts"
   }
   ```

3. **Update workspace dependencies:**
   ```bash
   pnpm add @repo/my-package --workspace
   ```

### Adding Dependencies

```bash
# Add to specific package
pnpm add lodash --filter=@repo/web-next

# Add to workspace root
pnpm add -w typescript

# Add dev dependency
pnpm add -D @types/node --filter=@repo/utils
```

### Environment Variables

**Web-Next (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_API_IMAGE_URL=http://localhost:3001
```

**Web-Vite (.env.local):**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_BASE_URL=http://localhost:3001
```

## 📈 Performance Tips

1. **Use Turbo Cache**: Let Turborepo cache build outputs
2. **Filter Wisely**: Use `--filter` to run only necessary tasks
3. **Parallel Execution**: Use `--parallel` for independent tasks
4. **Incremental Builds**: Only changed packages will rebuild

## 🔍 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
pnpm clean && pnpm build
```

**Dependency Issues:**
```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**TypeScript Errors:**
```bash
# Check types across all packages
pnpm type-check
```

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [PNPM Workspaces](https://pnpm.io/workspaces)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make changes and test: `pnpm test`
4. Commit changes: `git commit -m "feat: add my feature"`
5. Push to branch: `git push origin feature/my-feature`
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🎉**
