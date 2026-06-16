import { Star } from 'lucide-react';
import RepoCard from './RepoCard';

export default function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return (
      <div className="repos-section animate-fade-in">
        <div className="repos-title-container">
          <h3 className="repos-title">
            <Star size={20} />
            <span>Top Repositories</span>
          </h3>
        </div>
        <div className="glass-panel" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No public repositories found.
        </div>
      </div>
    );
  }

  // Sort by stargazers_count desc and take top 5
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  return (
    <div className="repos-section animate-fade-in">
      <div className="repos-title-container">
        <h3 className="repos-title">
          <Star size={20} />
          <span>Top Repositories</span>
        </h3>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Sorted by stars
        </span>
      </div>
      <div className="repos-grid">
        {topRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
