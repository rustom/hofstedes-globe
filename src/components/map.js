import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { motion, useAnimation } from 'framer-motion';
import chroma from 'chroma-js';
import { theme } from '@styles';
import { dimensionData } from '@data';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicnVzdG9tLWljaGhhcG9yaWEiLCJhIjoiY2t4Y3YxNWN6M2RpeDJwbXVpdnlsYWducSJ9.14tOov0CCEUjhs99yMRdbA';

const HoverInfoContainer = styled.div`
  position: absolute;
  background: ${theme.colors.background} 80%;
  font-size: 15px;
  padding: 1em;
  border-radius: 20px;
  // border: solid;
  box-shadow: 0 0 12px #999999; //${theme.colors.text};
`;

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

  // function computeMatchExpression() {
  // }

  const matchExpression = useMemo(() => {
    const expression = ['match', ['get', 'iso_3166_1_alpha_3']];
    // computeMatchExpression();
    const column = props.dimension;
    // const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];

    var scale = chroma.scale(['#00b3ff', '#eeeeee', '#ff4c00']).mode('lab');
    for (const row in dimensionData) {
      // if (row[column] === 'undefined' || row[column] == null) {
      //   continue;
      // }
      const color = scale(dimensionData[row][column] / 100).hex();
      // intensity = pickHex();//95 - intensity * 0.4;
      // const color = `hsl(17.9, 100%, ${intensity}%)`;

      expression.push(row, color);
    }

    // Last value is the default, used where there is no data
    expression.push('rgba(255, 0, 0, 0)');
    return expression;
  }, [props.dimension]);

  const layerProps = {
    id: 'data',
    source: 'countries',
    'source-layer': 'country_boundaries',
    beforeId: 'admin-0-boundary-bg',
    type: 'fill',
    paint: {
      'fill-color': matchExpression,
      // 'fill-opacity': 0.8
    },
  };

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;

    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY,
          }
        : null
    );
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/rustom-ichhaporia/ckxcv6hbt4oxs14o5tg4za93s"
      interactiveLayerIds={['data']}
      onHover={onHover}
    >
      <Source
        id="countries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer {...layerProps} />
        {/* <Layer source="countries" source-layer */}
      </Source>
      {hoverInfo && (
        <HoverInfoContainer style={{ left: hoverInfo.x, top: hoverInfo.y }}>
          {hoverInfo.feature.properties.name_en}:{' '}
          {dimensionData[hoverInfo.feature.properties.iso_3166_1_alpha_3]
            ? dimensionData[hoverInfo.feature.properties.iso_3166_1_alpha_3][
                props.dimension
              ] > 100
              ? 100
              : dimensionData[hoverInfo.feature.properties.iso_3166_1_alpha_3][
                  props.dimension
                ]
            : 'Unstudied'}
        </HoverInfoContainer>
      )}
    </ReactMapGL>
  );
}
