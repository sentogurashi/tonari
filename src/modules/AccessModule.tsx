import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Loader } from 'google-maps';
import { Module } from '@/layouts';

// import { useGoogleMap } from '@/hooks';

export const AccessModule: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async (): Promise<void> => {
      const loader = new Loader(process.env.GOOGLE_MAPS_API_KEY);
      const google = await loader.load();
      const position = new google.maps.LatLng(35.708082, 139.648879);
      const map = new google.maps.Map(mapContainerRef.current as HTMLDivElement, {
        zoom: 16,
        center: position,
        scrollwheel: false,
        // disable UI controls
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      });
      map.setOptions({
        styles: [
          {
            stylers: [
              {
                saturation: -100,
              },
            ],
          },
        ],
      });
      const marker = new google.maps.Marker({
        position,
        map,
      });
    })();
  }, []);
  // useGoogleMap({
  //   mapContainerRef,
  //   initialConfig: {
  //     zoom: 12,
  //     center: { lat: 35.6432027, lng: 139.6729435 },
  //   },
  // });

  return (
    <Module title="アクセス・営業案内">
      <MapContainer ref={mapContainerRef} />
    </Module>
  );
};

const MapContainer = styled.div`
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-bottom: 60%;
  }
`;

export default AccessModule;
