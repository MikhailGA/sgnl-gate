# SGNL Gate

A full-featured web application built using modern technology stack based on Nx monorepo.

## 🚀 Technology Stack

### Frontend (Client)

- **React 19** - JavaScript library for building user interfaces
- **React Router v7** - Routing for React applications
- **TypeScript** - Strongly typed JavaScript
- **Vite** - Fast build tool and dev server
- **SCSS** - CSS preprocessor

### Backend (Server)

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Strongly typed JavaScript
- **Swagger/OpenAPI** - API documentation and generation

### Development Tools

- **Nx** - Monorepo development platform
- **Jest** - Testing framework
- **ESLint** - JavaScript/TypeScript linter
- **Prettier** - Code formatter

## 📋 Requirements

- **Node.js**: >= 24.4.1
- **pnpm**: >= 9.12.3 (recommended package manager)
- **Git**: for repository management

## 🛠 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/MikhailGA/sgnl-gate.git
cd sgnl-gate/src
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the project

#### Quick start (recommended)

**Run frontend and backend simultaneously:**

```bash
./run.sh
```

#### Manual development mode

**Frontend (Client):**

```bash
cd src
pnpm nx serve client
```

**Backend (Server):**

```bash
cd src
pnpm nx serve server
```

## 🧪 Testing

### Run all tests

```bash
cd src
pnpm nx test
```

### Run tests for specific project

```bash
cd src
pnpm nx test client
pnpm nx test server
```

### Run tests in watch mode

```bash
cd src
pnpm nx test client --watch
```

## 🔍 Linting and Formatting

### Code linting

```bash
cd src
pnpm nx lint client
pnpm nx lint server
```

## 📁 Project Structure

```
src/
├── apps/
│   ├── client/          # React frontend application
│   │   ├── src/
│   │   │   ├── app/     # Main application components
│   │   │   ├── assets/  # Static resources
│   │   │   └── shared/  # Shared modules and API
│   │   └── public/      # Public files
│   └── server/          # NestJS backend application
│       └── src/
│           ├── app/     # Main server modules
│           ├── assets/  # Server resources
│           └── utils/   # Utilities and decorators
├── tools/               # Development tools
│   └── swagger-codegen/ # API client generation
└── package.json         # Dependencies and scripts
```

## 🌐 Default Ports

- **Client (Frontend)**: http://localhost:3000
- **Server (Backend)**: http://localhost:3001
- **API Documentation**: http://localhost:3001/swagger-json (Swagger JSON)

## 🔧 API Client Generation

The project includes automatic TypeScript client generation from Swagger specification:

```bash
# Make sure the server is running on port 3001
./apiGen.sh
```

This script:

1. Fetches Swagger specification from `http://localhost:3001/swagger-json`
2. Generates TypeScript API clients in `src/apps/client/src/shared/api/generated`

## 🚀 Quick Start for Developers

1. **Clone and install:**

   ```bash
   git clone https://github.com/MikhailGA/sgnl-gate.git
   cd sgnl-gate
   cd src && pnpm install
   ```

2. **Run in development mode:**

   ```bash
   ./run.sh
   ```

3. **Generate API clients (after starting the server):**
   ```bash
   ./apiGen.sh
   ```
