import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

 export const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [2, -3],
        scale: 1800
      }}
      // style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="./features.json"
        fill="#ccbe81"
        stroke="#cc81dc"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[27.555058169624683, 53.90997492055696]}
        dx={-45}
        dy={75}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Minsk"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};