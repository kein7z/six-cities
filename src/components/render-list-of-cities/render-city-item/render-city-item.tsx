import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setCurrentCity } from '../../../store/current-city-process/current-city-process';
import { getCurrentCity } from '../../../store/current-city-process/selectors';

export type RenderCityItemProps = {
    city: string;
};

const RenderCityItem = ({ city }: RenderCityItemProps) => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurrentCity);

  const onClickSetCurrentCityHendler = () => {
    dispatch(setCurrentCity(city));
  };

  return (
    <li className='locations__item'>
      <a className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`} href="#" onClick={onClickSetCurrentCityHendler}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default RenderCityItem;
