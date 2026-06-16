import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container glass-panel animate-fade-in">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
        className="search-input"
        aria-label="GitHub username"
      />
      <button
        type="submit"
        disabled={isLoading || !username.trim()}
        className="btn-primary"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}
