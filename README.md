# NextJS Typescript Starter

Welcome to this NextJS Typescript Starter repository! This project is a powerful starting point for building web applications using NextJS with Typescript. It includes essential tools like ESLint for code quality, Airbnb's code style guide for consistency, Conventional Commits for structured commit messages, Husky for Git hooks, and Semantic Release for automated version management.

## Getting Started

To begin using this starter project, ensure you have Node.js installed on your machine. Node.js can be downloaded and installed from the [Node.js official website](https://nodejs.org/).

### Prerequisites

Before you start, make sure you have installed:

- Node.js (v18 or later)
- npm (usually bundled with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Initial Repository Setup

For Semantic Release to function correctly, it requires a GitHub token (`GH_TOKEN`) with specific permissions. Follow these steps to set up your repository:

1. **Create a GitHub Personal Access Token (PAT)**

   - Go to your GitHub settings.
   - Navigate to `Developer settings` > `Personal access tokens`.
   - Click on `Generate new token`.
   - Give your token a name, e.g., `semantic-release-token`.
   - Under scopes, select the following permissions:
     - `repo` (which includes `Contents`, `Issues`, `Pull requests` permissions).
   - Generate the token and copy it.

2. **Add the Token to Your Repository Secrets**

   - Go to your repository on GitHub.
   - Click on `Settings` > `Secrets` > `Actions`.
   - Select `New repository secret`.
   - Name the secret `GH_TOKEN` and paste the token you copied earlier.

3. **Configure Semantic Release**
   - Ensure Semantic Release is configured in your project.
   - It will automatically use the `GH_TOKEN` from your repository secrets.

## GitHub Workflows

This repository contains two main GitHub workflows:

1. **Pull Request Workflow**

   - Triggered on every pull request to the main branch.
   - This workflow runs linting checks and builds the NextJS application.
   - It ensures that the code adheres to the set coding standards and that the application can be successfully built.

2. **Release Workflow**
   - Triggered on every push to the main branch.
   - This workflow runs Semantic Release.
   - It analyzes commit messages to determine the version bump (major, minor, or patch).
   - It then tags the release, updates the CHANGELOG, and publishes the release.

These workflows help in maintaining code quality and in automating the release process, making it easier to manage versioning and changelogs.

## Features

This starter project includes a robust setup with the following features:

- **[NextJS Framework](https://nextjs.org/docs)**: Leveraging the power and simplicity of NextJS for React applications.
- **[Typescript Support](https://www.typescriptlang.org/docs/)**: Strongly-typed language support for improved code quality and developer experience.
- **[ESLint with Airbnb Code Style](https://eslint.org/docs/user-guide/getting-started)**: Enforcing consistent code style and best practices.
- **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**: Structured commit messages for better version control history.
- **[Husky for Git Hooks](https://typicode.github.io/husky/#/)**: Automate tasks like linting and tests before commits and pushes.
- **[Semantic Release](https://semantic-release.gitbook.io/semantic-release/)**: Automated semantic versioning and CHANGELOG generation.

## Contributing

Contributions are highly appreciated! If you have suggestions for improvements, bug reports, or feature requests, please open an issue or submit a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Thanks to all contributors who have helped shape this starter repository.
- Appreciation for the wider NextJS and Typescript communities for their continuous support and inspiration.

---

Elevate Your NextJS Development Experience! 💻🚀

---
