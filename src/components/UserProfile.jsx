import { MapPin, ExternalLink } from 'lucide-react';

export default function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div className="profile-card glass-panel animate-fade-in">
      <div className="profile-avatar-container">
        <img 
          src={user.avatar_url} 
          alt={`${user.name || user.login}'s avatar`} 
          className="profile-avatar"
        />
      </div>
      
      <div className="profile-info">
        <div className="profile-header-main">
          <div className="profile-names">
            <h2>{user.name || user.login}</h2>
            <div className="profile-username">@{user.login}</div>
          </div>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            <span>GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {user.bio ? (
          <p className="profile-bio">{user.bio}</p>
        ) : (
          <p className="profile-bio" style={{ fontStyle: 'italic', opacity: 0.6 }}>
            This profile has no bio.
          </p>
        )}

        <div className="profile-meta">
          {user.location && (
            <div className="profile-meta-item">
              <MapPin size={16} />
              <span>{user.location}</span>
            </div>
          )}
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-val">{user.followers.toLocaleString()}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">{user.following.toLocaleString()}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">{user.public_repos.toLocaleString()}</span>
            <span className="stat-label">Repositories</span>
          </div>
        </div>
      </div>
    </div>
  );
}
