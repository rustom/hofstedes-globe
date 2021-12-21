import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { dimensionData } from '@data';
import { motion, useAnimation } from 'framer-motion';
import chroma from 'chroma-js';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicnVzdG9tLWljaGhhcG9yaWEiLCJhIjoiY2t4Y3YxNWN6M2RpeDJwbXVpdnlsYWducSJ9.14tOov0CCEUjhs99yMRdbA';

export default function Map(props) {
  const [viewport, setViewport] = useState({
    width: props.mapWidth,
    height: window.innerHeight,
    mapboxApiAccessToken: MAPBOX_TOKEN,
    attributionControl: false,
    logo: false,
    latitude: 20, 
    longitude: -50, 
    zoom: 1.5,
  });

  const column = props.dimension;

  const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];

  var scale = chroma.scale(['#00b3ff', '#eeeeee', '#ff4c00']).mode('lab');
  for (const row of dimensionData) {
    if (row[column] === 'undefined' || row[column] == null) {
      continue;
    } 
    const color = scale(row[column] / 100).hex();
    console.log(color);
    // intensity = pickHex();//95 - intensity * 0.4;
    // console.log(intensity);
    // const color = `hsl(17.9, 100%, ${intensity}%)`;

    matchExpression.push(row['Country Code'], color);
  }

  // Last value is the default, used where there is no data
  matchExpression.push('rgba(255, 0, 0, 0)');

  const layerProps = {
    source: 'countries',
    'source-layer': 'country_boundaries',
    beforeId: 'admin-0-boundary-bg',
    type: 'fill',
    paint: {
      'fill-color': matchExpression,
      // 'fill-opacity': 0.8
    },
  };
  
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/rustom-ichhaporia/ckxcv6hbt4oxs14o5tg4za93s"
    >
      <Source
        id="countries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...layerProps} />
        {/* <Layer source="countries" source-layer */}
      </Source>
    </ReactMapGL>
  );
}
