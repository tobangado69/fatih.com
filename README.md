# Fatiha Portfolio

A modern portfolio website showcasing design work, services, and case studies. Built with Next.js and Tailwind CSS.

## Tech Stack

- **Next.js 16** – React framework
- **React 19** – UI library
- **Tailwind CSS 4** – Styling
- **Web3Forms** – Contact form backend (email delivery)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Then add your Web3Forms access key:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Get your free access key at [app.web3forms.com](https://app.web3forms.com).

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
└── ...
```

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your environment variables in the deployment dashboard.

## License

Created By [rohimdev.com](https://rohimdev.com)
