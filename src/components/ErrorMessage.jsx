import { UserX, Clock, WifiOff, AlertCircle } from 'lucide-react';

export default function ErrorMessage({ type }) {
  let icon = <AlertCircle size={32} />;
  let title = 'Something went wrong';
  let message = 'An unexpected error occurred. Please try again later.';

  if (type === '404') {
    icon = <UserX size={32} />;
    title = 'User Not Found';
    message = 'The GitHub profile you are searching for does not exist. Please check the username and try again.';
  } else if (type === '403') {
    icon = <Clock size={32} />;
    title = 'Rate Limit Exceeded';
    message = "GitHub's API rate limit has been reached for your IP. Please wait a while before searching again.";
  } else if (type === 'network') {
    icon = <WifiOff size={32} />;
    title = 'Network Connection Lost';
    message = 'Could not connect to GitHub. Please check your internet connection and try again.';
  }

  return (
    <div className="error-card glass-panel animate-fade-in">
      <div className="error-icon-container">
        {icon}
      </div>
      <h3 className="error-title">{title}</h3>
      <p className="error-desc">{message}</p>
    </div>
  );
}
