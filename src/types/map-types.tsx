export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
