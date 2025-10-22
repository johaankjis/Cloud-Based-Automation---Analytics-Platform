# Cloud Automation Platform

Cloud Automation Platform is a Next.js application that showcases a cloud-native automation and analytics control center. It combines real-time metrics, workflow authoring tools, CI/CD deployment insights, and security monitoring into a cohesive dashboard experience.

## Features

- **Unified executive dashboard** – Landing page highlights key automation metrics, live pipeline activity, deployment health, and compliance status for rapid situational awareness.
- **Automation workspace** – Dedicated automation view provides a visual workflow builder, trigger management, and pipeline configuration tabs to design and operate serverless automation pipelines.
- **CI/CD observability** – Deployments area surfaces pipeline stage progress, historical runs, and environment health scoring to monitor release cadence.
- **Security posture monitoring** – Security dashboards provide compliance scores, threat insights, vulnerability triage, and audit logs across major frameworks.
- **Responsive UI foundation** – Built with Next.js 16, React 19, Tailwind CSS 4, and Radix UI primitives to deliver performant, accessible interfaces.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and [TypeScript 5](https://www.typescriptlang.org/)
- Tailwind CSS 4 with CSS custom properties for theming
- Radix UI, Lucide icons, and shadcn/ui-inspired components for consistent design system elements
- Vercel Analytics for runtime telemetry

## Project Structure

```
app/                # Next.js app router pages, layouts, and global styles
components/         # Dashboard, automation, security, and UI primitives
hooks/              # Shared React hooks
lib/                # Utility libraries and configuration helpers
public/             # Static assets served by Next.js
styles/             # Tailwind configuration and design tokens
```

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run the development server**

   ```bash
   pnpm dev
   ```

3. **Open the application**

   Visit <http://localhost:3000> to explore the dashboard.

## Available Scripts

- `pnpm dev` – Start the Next.js development server.
- `pnpm build` – Generate an optimized production build.
- `pnpm start` – Serve the production build locally.
- `pnpm lint` – Run ESLint across the codebase.

## Deployment

To deploy, build the application and serve the generated output through your preferred hosting provider (e.g., Vercel or a container platform):

```bash
pnpm build
pnpm start
```

## Contributing

1. Fork the repository and create a feature branch.
2. Commit descriptive changes and open a pull request.
3. Ensure CI/CD checks pass before requesting review.

---

Cloud Automation Platform demonstrates how cloud operations, automation, and security teams can collaborate around a single pane of glass.
