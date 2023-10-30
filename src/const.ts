export enum AppRoute {
  Main = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorite = '/favorite'
}

export enum APIRoute {
  AvailableOffers = '/hotels',
  GetComments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}

export enum NameSpace {
  AvailableOffers = 'AVAILABLE_OFFERS',
  CurrentCity = 'CURRENT_CITY',
  Hotel = 'HOTEL',
  GetComments = 'GET_COMMENTS',
  User = 'USER',
  FavoriteOffers = 'FAVORITE_OFFERS',
  NearOffers = 'NEAR_OFFERS',
  AddComment = 'ADD_COMMENT'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
