import { Star, Folder, ExternalLink } from 'lucide-react';

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Rust: '#dea584',
  Swift: '#f05138',
  Shell: '#89e051',
};

export default function RepoCard({ repo }) {
  const langColor = languageColors[repo.language] || '#8b5cf6';

  return (
    <div className="repo-card glass-panel animate-fade-in">
      <div className="repo-header">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="repo-name-link"
        >
          <Folder size={18} />
          <span>{repo.name}</span>
        </a>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink size={14} style={{ opacity: 0.6 }} />
        </a>
      </div>

      <p className="repo-desc">
        {repo.description || 'No description provided for this repository.'}
      </p>

      <div className="repo-footer">
        <div className="repo-left-footer">
          {repo.language && (
            <div className="repo-lang">
              <span className="lang-dot" style={{ backgroundColor: langColor }}></span>
              <span>{repo.language}</span>
            </div>
          )}
        </div>
        <div className="repo-stars">
          <Star size={16} />
          <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
