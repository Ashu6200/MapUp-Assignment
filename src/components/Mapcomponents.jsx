import React, { useEffect, useState } from 'react';
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector } from 'react-redux';
import Pin from './Pin';

const Mapcomponents = () => {
  // Get the region data from the Redux store using the `useSelector` hook.
  const regionData = useSelector((state) => state.regionData);

  // Set up the initial viewport state using the regionData or default to 0,0 with zoom level 2.
  const [viewport, setViewport] = useState({
    longitude: regionData.lng || 0,
    latitude: regionData.lat || 0,
    zoom: 2,
  });
  // Whenever the regionData changes, update the viewport to center the map on the new location.
  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      longitude: regionData.lng || 0,
      latitude: regionData.lat || 0,
    }));
  }, [regionData]);

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <h2>Where is selected Region?</h2>
      {/* Render the Map component with the specified properties */}
      <Map
        mapboxAccessToken='pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
        {...viewport}
        onViewportChange={setViewport}
        style={{ height: '100%', width: '100%' }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        {/* Show geolocate control button on the top-left corner of the map */}
        <GeolocateControl position='top-left' />

        {/* Show fullscreen control button on the top-left corner of the map */}
        <FullscreenControl position='top-left' />

        {/* Show navigation control (zoom in/out) button on the top-left corner of the map */}
        <NavigationControl position='top-left' />

        {/* Place a marker on the selected region's coordinates */}
        <Marker
          longitude={viewport.longitude}
          latitude={viewport.latitude}
          anchor='bottom'
        >
          {/* Render the Pin component as the marker's icon */}
          <Pin />
        </Marker>
      </Map>
    </div>
  );
};

export default Mapcomponents;
