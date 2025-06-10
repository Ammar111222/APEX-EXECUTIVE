# Apex Growth Blueprint

## About

Apex Growth Blueprint is a modern web application built for Apex Executive Partners, providing business growth solutions and insights.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Firebase (for backend)

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd apex-growth-blueprint

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utilities and services
├── pages/         # Page components
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## Deployment

The project can be deployed to any static hosting service that supports Node.js applications. Some recommended options:

- Vercel
- Netlify
- Firebase Hosting
- AWS Amplify

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Apex Executive Partners.
