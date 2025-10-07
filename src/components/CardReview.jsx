import { formatDate } from '../utils/formatters';
import './CardReview.css';

const CardReview = ({ testimonial }) => {
  // Generate star elements for accessibility
  const renderStars = (rating) => {
    return (
      <div className="stars" role="img" aria-label={`${rating} de 5 estrellas`}>
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
            ★
          </span>
        ))}
      </div>
    );
  };
  
  return (
    <article className="card-review">
      <div className="card-review-header">
        <div>
          <h4 className="card-review-name">{testimonial.name}</h4>
          <p className="card-review-service">{testimonial.service}</p>
        </div>
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="card-review-comment">
        "{testimonial.comment}"
      </blockquote>
      
      <time className="card-review-date" dateTime={testimonial.date}>
        {formatDate(testimonial.date)}
      </time>
    </article>
  );
};

export default CardReview;
