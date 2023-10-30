import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { fetchToChangeFavoriteStatusAction } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export type toFavoriteButtonProps = {
  hotelId: number | undefined,
  isFavorite: boolean | undefined
}

const ToFavoriteButton = ({ hotelId, isFavorite }: toFavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const toFavoriteButtonTogglerHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchToChangeFavoriteStatusAction({
        hotelId: hotelId,
        status: isFavorite ? 0 : 1
      }));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : null}`}
      type="button"
      onClick={toFavoriteButtonTogglerHandler}
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default ToFavoriteButton;
