import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {AvailableOffers} from '../../types/available-offers';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  offers: AvailableOffers ;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

function Map({ offers }: MapProps) {
  const mapRef = useRef(null);
  const city = offers[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const placeLayer = layerGroup().addTo(map);
      const currentCity = city;
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            defaultCustomIcon)
          .addTo(placeLayer);
      });

      return () => {
        map.removeLayer(placeLayer);
      };
    }
  }, [map, offers, city]);

  return (
    <section
      className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
