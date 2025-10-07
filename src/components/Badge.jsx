import './Badge.css';

const Badge = ({ type, children, className = '' }) => {
  // Type can be: 'new', 'popular', 'premium', 'category', or custom
  const badgeClass = type ? `badge-${type}` : '';
  
  // Default labels for predefined types
  const labels = {
    new: 'Nuevo',
    popular: 'Popular',
    premium: 'Premium'
  };
  
  const label = children || labels[type] || type;
  
  return (
    <span className={`badge ${badgeClass} ${className}`}>
      {label}
    </span>
  );
};

export default Badge;
