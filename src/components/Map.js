import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Polygon, useMap } from "react-leaflet";

const axios = require("axios");

const StyledMapContainer = styled(MapContainer)`
  width: 50vw;
  height: 70vh;
  border-radius: 20px;
  -webkit-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
`;

const ChangeView = ({ center, zoom }) => {
  const myMap = useMap();
  myMap.setView(center, zoom);
  return null;
};

const Map = ({ putCenter }) => {
  const [polygon, setPolygon] = useState([]);
  const [center, setCenter] = useState([51.12, 20.12]);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (putCenter.length) {
      setFirst(false);
      setCenter(putCenter);
    }
    if (!first) {
      axios
        .get(`https://devcube.placeme.pl/api/getGeoJSON?lat=${center[0]}&lng=${center[1]}`)
        .then(({ data }) => {
          //Reverse order of lat and lng - geoJSON returns [lng, lat], Leaflet needs [lat, lng]
          const myPolygon = data.coordinates[0].map((pol) => pol.reverse());
          setPolygon(myPolygon);
        })
        .catch((error) => alert(error));
    }
  }, [center, first, putCenter]);

  const purpleOptions = { color: "purple" };

  return (
    <>
      <StyledMapContainer center={center} zoom={15} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={15} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polygon pathOptions={purpleOptions} positions={polygon} />
      </StyledMapContainer>
    </>
  );
};

export default Map;
