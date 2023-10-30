import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoritsAction, fetchGetCommentsAction, fetchHotelIdAction, fetchNearOffers } from '../../store/api-action';
import { getHotel } from '../../store/hotel-process/selectors';
import RenderPhotosInOffer from '../../components/render-photos-in-offer/render-photos-in-offer';
import ToFavoriteButton from '../../components/toFavoriteButton/toFavoriteButton';
import RenderHeader from '../../components/render-header/render-header';
import { getAddToFavoriteHotelStatus } from '../../store/available-offers-process/selectors';
import { getIsNearOffersLoading, getNearOffers } from '../../store/near-offers-process/selectors';
import Map from '../../components/render-map/render-map';
import RenderNearOffers from '../../components/render-near-offers/render-near-offers';
import RenderComment from '../../components/render-comment/render-comment';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const OfferScreen = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const hotel = useAppSelector(getHotel);
  const { id } = useParams();
  const isFavoriteListUpdate = useAppSelector(getAddToFavoriteHotelStatus);
  const hotelId = Number(id);
  const isNearOffersLoading = useAppSelector(getIsNearOffersLoading);

  if (isNearOffersLoading === false) {
    dispatch(fetchNearOffers({ hotelId: hotelId }));
  }

  const near = useAppSelector(getNearOffers);

  useEffect(() => {
    dispatch(fetchHotelIdAction(Number(hotelId)));
    dispatch(fetchGetCommentsAction(Number(hotelId)));

    if (isFavoriteListUpdate === false && authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritsAction());
    }
  }, [dispatch, id, isFavoriteListUpdate]);

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <RenderHeader />
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {hotel?.images.slice(0, 6).map((element) => (<RenderPhotosInOffer key={element} photo={element} />))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              hotel?.isPremium
                ? <div className="property__mark"><span>Premium</span></div>
                : null
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {hotel?.title}
              </h1>
              <ToFavoriteButton hotelId={hotel?.id} isFavorite={hotel?.isFavorite} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${hotel ? (hotel.rating / 5) * 100 : 0}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{hotel?.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {hotel?.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {hotel?.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {hotel?.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{hotel?.price}€</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">Whats inside</h2>
              <ul className="property__inside-list">
                {hotel?.goods.map((good) => (<li className="property__inside-item" key={good}>{good}</li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={`/${hotel?.host.avatarUrl}`}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{hotel?.host.name}</span>
                <span className="property__user-status">{hotel?.host.isPro}</span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {hotel?.description}
                </p>
              </div>
            </div>
            <RenderComment hotelId={hotelId} />
          </div>
        </div>
        <section className="property__map map" >
          {near !== null && near.length > 0 && <Map offers={near} />}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {near?.map((element) => <RenderNearOffers nearOffer={element} key={element.id} />)}
          </div>
        </section>
      </div>
    </>
  );
};

export default OfferScreen;
