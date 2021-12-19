import React, {useState} from 'react';
import styled from 'styled-components';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import data from '@data/hofstede';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnVzdG9tLWljaGhhcG9yaWEiLCJhIjoiY2t4Y3YxNWN6M2RpeDJwbXVpdnlsYWducSJ9.14tOov0CCEUjhs99yMRdbA';

// const Container = styled.div`
//     width: 80vw;
//     height: 100vh;
// `;

export default function Map() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight,
    zoom: 0, 
    mapboxApiAccessToken: MAPBOX_TOKEN
  });

  const column = 'Power Distance';

  const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
 
  // Calculate color values for each country based on 'hdi' value
  for (const row of data) {
  // Convert the range of data values to a suitable color
    console.log(row[column]);
    const intensity = typeof row[column] === 'undefined' || row[column] == null ? 0 : row[column] / 100 * 255;
    const color = `rgb(${intensity}, 0, 0)`;
    
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

  return (
    <>
      <ReactMapGL {...viewport} onViewportChange={nextViewport => setViewport(nextViewport)} >
          <Source id="countries" type='vector' url='mapbox://mapbox.country-boundaries-v1'>
            <Layer {...layerProps} source-layer='country_boundaries'/>
          </Source>
      </ReactMapGL>
    </>
  )
}
