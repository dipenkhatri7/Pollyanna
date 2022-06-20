import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import Nav from "./components/nav/nav";
import { Map, TileLayer, FeatureGroup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

const parkLayer = {
  id: "landuse_park",
  type: "fill",
  source: "mapbox",
  "source-layer": "landuse",
  filter: ["==", "class", "park"],
  paint: {
    "fill-color": "#4E3FC8",
  },
};
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(85.324);
  const [lat, setLat] = useState(27.7172);
  const [zoom, setZoom] = useState(12);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.baato.io/api/v1/styles/retro?key=bpk.RbCFuyprceXfPDgW7kxOENj-7iX968-ZRiYMv4nw9cwM",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  const mapRef = useRef();
  const _onCreate = (e) => {
    console.log(e);
  };
  const _onEdited = (e) => {
    console.log(e);
  };
  const _onDeleted = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Nav />
      <div ref={mapContainer} className="map-container" />
      <div className="row">
        <FeatureGroup>
          <EditControl
            position="topright"
            // onEdited={this._onEditPath}
            // onCreated={this._onCreate}
            // onDeleted={this._onDeleted}
            onCreated={_onCreate}
            onEdited={_onEdited}
            onDeleted={_onDeleted}
            draw={{
              rectangle: true,
              polyline: false,
              circle: false,
              polygon: false,
            }}
          />
          <Circle center={[27.7172, 85.324]} radius={200} />
        </FeatureGroup>
      </div>
    </div>

    // <>
    //   <Nav />
    //   <CenterMap />
    //   <RightLayer />
    //   <LeftInformation />
    // </>
  );
}

export default App;
