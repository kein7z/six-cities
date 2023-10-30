import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { AvailableOffer } from './types/available-offers';

dayjs.extend(duration);

export const humanizeDueDate = (date: string) => dayjs(date).format('MMMM, YYYY');

export const sortHotelsBy = (allHotelsInCurrentCity: AvailableOffer[], sortType: string) => {
  if (sortType === 'lowToHigh') {
    allHotelsInCurrentCity.sort((a, b) => a.price - b.price);
  } else if (sortType === 'highToLow') {
    allHotelsInCurrentCity.sort((a, b) => b.price - a.price);
  } else if (sortType === 'ratedFirst') {
    allHotelsInCurrentCity.sort((a, b) => b.rating - a.rating);
  } else {
    return allHotelsInCurrentCity;
  }
  return allHotelsInCurrentCity;
};
