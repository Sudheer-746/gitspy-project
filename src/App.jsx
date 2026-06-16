import { useState } from 'react';
import { Code } from 'lucide-react';
import Github from './components/GithubIcon';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepoList from './components/RepoList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

export default function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);
    setRepos(null);

    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      
      if (!userRes.ok) {
        if (userRes.status === 404) {
          setError('404');
          setIsLoading(false);
          setHasSearched(true);
          return;
        } else if (userRes.status === 403) {
          setError('403');
          setIsLoading(false);
          setHasSearched(true);
          return;
        } else {
          throw new Error('API request failed');
        }
      }

      const userData = await userRes.json();
      
      // Fetch repositories
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      
      if (!reposRes.ok) {
        if (reposRes.status === 403) {
          setError('403');
          setIsLoading(false);
          setHasSearched(true);
          return;
        }
        // If repositories fail but user succeeded, we can still show the profile with empty repos
        setRepos([]);
      } else {
        const reposData = await reposRes.json();
        setRepos(reposData);
      }

      setUser(userData);
      setHasSearched(true);
    } catch (err) {
      console.error('Fetch error:', err);
      // Check if user is offline or DNS failed
      if (!window.navigator.onLine || err.message.includes('Failed to fetch')) {
        setError('network');
      } else {
        setError('generic');
      }
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header animate-fade-in">
        <div className="app-logo">
          <Github size={36} />
          <h1>GitSpy</h1>
        </div>
        <p className="app-subtitle">GitHub Developer Profile & Repository Intelligence</p>
      </header>

      {/* Search Section */}
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {/* Main content display based on app state */}
      {isLoading && <Loader />}

      {!isLoading && error && <ErrorMessage type={error} />}

      {!isLoading && !error && user && (
        <main style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <UserProfile user={user} />
          <RepoList repos={repos} />
        </main>
      )}

      {!isLoading && !error && !hasSearched && (
        <div className="welcome-panel glass-panel animate-fade-in">
          <Code size={40} className="welcome-icon" />
          <h3>Discover Developers</h3>
          <p>
            Enter any GitHub username above to instantly inspect their public profile statistics, 
            location, biography, and top starred repositories in a clean glassmorphic view.
          </p>
        </div>
      )}
    </div>
  );
}
