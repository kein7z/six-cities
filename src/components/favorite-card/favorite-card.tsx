import { Link } from 'react-router-dom';
import { AvailableOffer } from '../../types/available-offers';
import ToFavoriteButton from '../toFavoriteButton/toFavoriteButton';

export type FavoriteCardProps = {
  favoriteOffer: AvailableOffer
};

const FavoriteCard = ({ favoriteOffer: { type, title, rating, isPremium, id, previewImage, price, isFavorite } }: FavoriteCardProps) => (
  <article className="favorites__card place-card">
    {
      isPremium
        ? <div className="place-card__mark"><span>premium</span></div>
        : null
    }
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${id}`}>
        <img
          className="place-card__image"
          src={previewImage}
          width={150}
          height={110}
          alt="Place image"
        />
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{price}€</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <ToFavoriteButton hotelId={id} isFavorite={isFavorite} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${(rating / 5) * 100}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>
          {title}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);

export default FavoriteCard;
