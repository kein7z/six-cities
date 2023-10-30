import { useEffect, useState } from 'react';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-offers-process/selectors';
import { getAddToFavoriteHotelStatus } from '../../store/available-offers-process/selectors';
import { fetchFavoritsAction } from '../../store/api-action';
import RenderHeader from '../../components/render-header/render-header';

const FavoriteScreen = () => {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteLoading = useAppSelector(getAddToFavoriteHotelStatus);
  const [uniqueCities, setUniqueCities] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFavoriteLoading === true) {
      dispatch(fetchFavoritsAction());
    }
    const cityInFavoriteOffers = new Set<string>();

    favoriteOffers.forEach((element) => {
      const cityName = element.city.name;
      cityInFavoriteOffers.add(cityName);
    });

    setUniqueCities(Array.from(cityInFavoriteOffers));

  }, [favoriteOffers, isFavoriteLoading]);

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
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {uniqueCities.length === 0
              ?
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
              :
              uniqueCities.map((element) => (
                <li key={element} className="favorites__locations-items" >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{element}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.filter((offer) => (offer.city.name === element)).map((offer) => (<FavoriteCard favoriteOffer={offer} key={offer.id} />))}
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </div >
    </>
  );
};

export default FavoriteScreen;
