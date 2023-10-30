import { Link } from 'react-router-dom';
import { AvailableOffer } from '../../../types/available-offers';
import ToFavoriteButton from '../../toFavoriteButton/toFavoriteButton';

type RenderPlacesItemProps = {
  hotel: AvailableOffer,
};

export const RenderPlacesItem = ({ hotel }: RenderPlacesItemProps) => (
  <article className="cities__card place-card">
    {
      hotel.isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : null
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${hotel.id}`}>
        <img
          className="place-card__image"
          src={hotel.previewImage}
          width={260}
          height={200}
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{hotel.price}€</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <ToFavoriteButton hotelId={hotel.id} isFavorite={hotel.isFavorite} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${(hotel.rating / 5) * 100}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${hotel.id}`}>
          {hotel.title}
        </Link>
      </h2>
      <p className="place-card__type">{hotel.type}</p>
    </div>
  </article>
);

export default RenderPlacesItem;
