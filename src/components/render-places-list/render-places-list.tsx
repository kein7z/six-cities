import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getAvailableOffers } from '../../store/available-offers-process/selectors';
import { getCurrentCity } from '../../store/current-city-process/selectors';
import { sortHotelsBy } from '../../utils';
import RenderPlacesItem from './render-places-item/render-places-item';
import { AvailableOffer } from '../../types/available-offers';

const RenderPlaces: React.FC = () => {
  const currentCity = useAppSelector(getCurrentCity);
  const allHotels = useAppSelector(getAvailableOffers);

  const [sortedHotels, setSortedHotels] = useState<AvailableOffer[]>([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentTypeSort, setCurrentTypeSort] = useState('Popular');

  const allHotelsInCurrentCity = allHotels.filter((element) => (element.city.name === currentCity));

  useEffect(() => {
    const sortedHotelss = sortHotelsBy(allHotelsInCurrentCity, 'popular');
    setSortedHotels(sortedHotelss);
  }, [allHotels, currentCity]);

  const sortBy = (sortType: string) => {
    const sortHotels = sortHotelsBy(allHotelsInCurrentCity, sortType);
    setSortedHotels(sortHotels);
    setCurrentTypeSort(sortType);
    openSortByHandler();
  };

  const openSortByHandler = () => isSortOpen ? setIsSortOpen(false) : setIsSortOpen(true);

  return (
    <section className="cities__places places" >
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedHotels.length} places to stay in {currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0} onClick={openSortByHandler}>
          {currentTypeSort}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
          <li
            className="places__option places__option--active"
            tabIndex={0}
            onClick={() => sortBy('popular')}
          >
            Popular
          </li>
          <li className="places__option"
            tabIndex={0}
            onClick={() => sortBy('lowToHigh')}
          >
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0} onClick={() => sortBy('highToLow')}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0} onClick={() => sortBy('ratedFirst')}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {sortedHotels.map((hotel) => (<RenderPlacesItem key={hotel.id} hotel={hotel} />))}
      </div>
    </section>
  );
};

export default RenderPlaces;
