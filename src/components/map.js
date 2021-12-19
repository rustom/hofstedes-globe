import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import data from '@data/hofstede';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnVzdG9tLWljaGhhcG9yaWEiLCJhIjoiY2t4Y3YxNWN6M2RpeDJwbXVpdnlsYWducSJ9.14tOov0CCEUjhs99yMRdbA';

// const MapObject = styled.ReactMapGL`
//   .mapboxgl-ctrl-logo {
//     display: none !important;
//   }
// `;



export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: props.mapWidth,
    height: window.innerHeight,
    zoom: 0, 
    mapboxApiAccessToken: MAPBOX_TOKEN, 
    attributionControl: false, 
    logo: false
  });

  const column = 'Power Distance';

  const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
 
  for (const row of data) {
    // console.log(row[column]);
    const intensity = typeof row[column] === 'undefined' || row[column] == null ? 0 : row[column];
    intensity = intensity * 0.4  + 20//100 - intensity * 0.5;
    console.log(intensity);
    const color = `hsl(17.9, 100%, ${intensity}%)`;
    
    matchExpression.push(row['Country Code'], color);
  }
  
  // Last value is the default, used where there is no data
  matchExpression.push('rgba(255, 0, 0, 0)');

  const layerProps = {
    type: 'fill', 
    paint: {
      'fill-color': matchExpression,
    }
  }

  // const mapboxStyle = {

  // }

  return (
      <ReactMapGL {...viewport} onViewportChange={nextViewport => setViewport(nextViewport)} 
          mapStyle='mapbox://styles/rustom-ichhaporia/ckxcv6hbt4oxs14o5tg4za93s'>
        <Source id="countries" type='vector' url='mapbox://mapbox.country-boundaries-v1' >
          <Layer {...layerProps} source-layer='country_boundaries'/>
        </Source>
      </ReactMapGL>
  )
}
