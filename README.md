# GitSpy - GitHub Developer Search Dashboard

GitSpy is a modern, responsive, and aesthetically stunning React web application that lets users search for any GitHub developer and retrieve key profile insights alongside their top-starred repositories.

Built with a premium **glassmorphic dark theme**, custom micro-animations, and smooth CSS transitions, it provides a high-quality visual experience across all screen sizes (mobile, tablet, and desktop).

---

## Key Features

1. **GitHub Profile Finder**: Fetch and render developer metrics including:
   - Avatar image
   - Full name & Username
   - Profile bio (with empty states handled)
   - Location (if available)
   - Real-time counts for followers, following, and public repositories
   - Clean button redirecting directly to the GitHub profile page.
2. **Top Starred Repositories**: Automatically query user repositories and displays the **top 5 repositories** sorted by star count in descending order.
3. **Interactive Repository Cards**: Shows name, description, star count, and a color-coded programming language tag matching standard GitHub style sheets.
4. **Robust Error Handling**:
   - **404 error**: User-friendly message when a developer's profile does not exist.
   - **403 error**: Warns the user when they have reached GitHub's unauthenticated API rate limit (60 requests/hour).
   - **Network error**: Shows clear notifications when the user is offline or fails to connect.
5. **Modern Glassmorphic Styling**: Developed using Vanilla CSS variables for clean maintenance, offering glowing borders, backdrop blurs, and hover scale transitions.

---

## Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Grid/Flexbox layouts, Backdrop blur filter)
- **API**: GitHub REST API (`/users` & `/users/repos`)

---

## Folder Structure

```
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images and design assets
│   ├── components/         # Reusable dashboard components
│   │   ├── ErrorMessage.jsx # Handles 404, 403, and network errors
│   │   ├── GithubIcon.jsx   # Custom feather-style SVG component
│   │   ├── Loader.jsx       # Pulse/Spinner loading component
│   │   ├── RepoCard.jsx     # Renders individual repo info
│   │   ├── RepoList.jsx     # Sorts and limits top 5 repo cards
│   │   ├── SearchBar.jsx    # Input and Enter/Click trigger handlers
│   │   └── UserProfile.jsx  # Renders profile details & statistics
│   ├── App.jsx             # Orchestrates API calls & state logic
│   ├── index.css           # Global design system & theme stylesheet
│   └── main.jsx            # Application entrypoint
├── index.html              # Core HTML file with Outfit & Inter fonts
├── package.json            # Scripts and dependency configs
└── vite.config.js          # Vite configuration
```

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### Setup Instructions

1. **Extract/Clone the repository** to your local workspace.
2. Open your terminal in the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the local development server:
```bash
npm run dev
```
Once the server starts, open `http://localhost:5173` (or the URL shown in your terminal) in your browser.

### Building for Production

To create a production build (optimized assets inside the `dist/` directory):
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## API & Rate Limits

This dashboard calls the public GitHub REST API:
- User profile: `https://api.github.com/users/{username}`
- Repositories: `https://api.github.com/users/{username}/repos`

**Important Note**: GitHub limits unauthenticated requests to **60 requests per hour** per IP address. If this limit is exceeded, the application will display a rate limit warning card.
