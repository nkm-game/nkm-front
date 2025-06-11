# NKM Frontend 🎮⚛️

<img src="./src/img/nkm_logo.png" alt="NKM" width="200"/>

![Development Status](https://img.shields.io/badge/Status-Active%20Development-green)
![Docker](https://img.shields.io/badge/Docker-Supported-blue?logo=docker)
![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)
![React](https://img.shields.io/badge/React-17.0.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-blue?logo=typescript)

## 📋 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Contributing](#-contributing)
- [Community & Support](#-community--support)

## 🎯 Overview

NKM Frontend is a web interface for querying and debugging the NKM game backend. Built with React and TypeScript, it provides tools for backend interaction, game state inspection, and includes an experimental Unity WebGL embed for testing the actual game. This is primarily a development and debugging tool rather than the main game client.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **Yarn** 1.22+ ([Install Guide](https://yarnpkg.com/getting-started/install))
- **Git** 2.40+ ([Download](https://git-scm.com/downloads))

### Quick Start

```bash
# Clone the repository
git clone https://github.com/nkm-game/nkm-front.git
cd nkm-front

# Install dependencies
yarn install

# Start the development server
yarn start
```

The application will be available at `http://localhost:3000`

### Docker Setup

```bash
# Build and run with Docker
docker-compose up -d

# Check if services are running
docker-compose ps
```

### First Steps

1. 🎮 Ensure the [NKM Server](https://github.com/nkm-game/nkm-server) is running
2. 🌐 Open your browser to `http://localhost:3000`
3. 🔧 Use the admin panel and debugging tools to interact with the backend
4. 🎯 Try the experimental Unity WebGL game embed for actual gameplay
5. 📖 Check the [Game Rules](https://nkm-game.github.io/nkm-server/game-rules/) to understand gameplay mechanics

## 💻 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&logo=mui&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

- **Frontend Framework**: React 17 + TypeScript
- **UI Library**: Material-UI (MUI) v5
- **State Management**: Redux Toolkit
- **WebSocket**: react-use-websocket for backend communication
- **Game Engine**: Experimental Unity WebGL embed
- **Build Tool**: Create React App
- **Infrastructure**: Docker + Nginx

## 🔧 Development

### Available Scripts

```bash
# Start development server
yarn start

# Start with local backend
yarn run "start local"

# Build for production
yarn build

# Run tests
yarn test

# Format code
yarn prettier
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
REACT_APP_BACKEND_URL=http://localhost:8080
REACT_APP_LOCAL_BACKEND=false
```

### Project Structure

```
src/
├── app/           # Redux store configuration
├── components/    # Reusable UI components & debugging tools
│   ├── admin_panel_view/    # Backend administration interface
│   ├── game_view/           # Unity WebGL game embed
│   ├── lobbies_view/        # Lobby management & inspection
│   └── status_view/         # Backend status monitoring
├── features/      # Feature-specific components
├── types/         # TypeScript type definitions
└── img/          # Static images and assets
```

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, adding debugging features, improving the admin interface, or enhancing the Unity integration, we appreciate your help.

### Contribution Workflow

1. **Familiarize yourself with the project**: Review the codebase and understand the component architecture.
2. **Fork the repository** and create a feature branch (`git checkout -b my-new-feature`).
3. **Implement your changes**, following React and TypeScript best practices.
4. **Test your changes** thoroughly in the browser.
5. **Submit a pull request** with a clear description of your work.

### Code Standards

- Follow TypeScript strict mode guidelines
- Use functional components with hooks
- Maintain consistent code formatting with Prettier
- Follow Material-UI design principles
- Write descriptive component and prop names

### Code of Conduct

By participating in this project, you agree to abide by our community standards. Please be respectful and constructive in all interactions.

## 💬 Community & Support

- **Issues**: [GitHub Issues](https://github.com/nkm-game/nkm-front/issues)
- **Bug Reports**: Use our issue templates for bug reports
- **Feature Requests**: Submit feature requests through GitHub Issues
- **Backend Repository**: [NKM Server](https://github.com/nkm-game/nkm-server)
