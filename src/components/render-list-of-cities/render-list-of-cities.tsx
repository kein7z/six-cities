import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getAvailableOffers } from '../../store/available-offers-process/selectors';
import RenderCityItem from './render-city-item/render-city-item';

const RenderListOfCities = () => {
  const hotels = useAppSelector(getAvailableOffers);
  const [uniqueCities, setUniqueCities] = useState<Array<string>>([]);

  useEffect(() => {
    const citiesSet = new Set<string>();

    hotels.forEach((element) => {
      const cityName = element.city.name;
      citiesSet.add(cityName);
    });

    setUniqueCities(Array.from(citiesSet));
  }, [hotels]);

  return (
    <div className="tabs">
      <section className="locations container ">
        <ul className="locations__list tabs__list">
          {uniqueCities.map((element) => (<RenderCityItem key={element} city={element} />))}
        </ul>
      </section>
    </div>
  );
};

export default RenderListOfCities;
