import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

const StyledMapContainer = styled(MapContainer)`
  width: 50vw;
  height: 70vh;
`;

const Map = () => {
  const center = [51.12, 20.12];

  const polygon = [
    [20.123572, 51.120027],
    [20.123511, 51.119588],
    [20.123316, 51.119165],
    [20.122993, 51.118773],
    [20.122556, 51.11843],
    [20.12202, 51.118146],
    [20.121406, 51.117934],
    [20.120739, 51.117801],
    [20.120043, 51.117752],
    [20.119345, 51.11779],
    [20.118673, 51.117913],
    [20.118051, 51.118116],
    [20.117505, 51.118392],
    [20.117054, 51.118729],
    [20.116717, 51.119115],
    [20.116505, 51.119535],
    [20.116428, 51.119973],
    [20.116489, 51.120412],
    [20.116684, 51.120835],
    [20.117007, 51.121226],
    [20.117444, 51.12157],
    [20.11798, 51.121854],
    [20.118594, 51.122066],
    [20.119261, 51.122199],
    [20.119957, 51.122248],
    [20.120655, 51.12221],
    [20.121327, 51.122087],
    [20.121949, 51.121884],
    [20.122495, 51.121608],
    [20.122946, 51.121271],
    [20.123283, 51.120885],
    [20.123495, 51.120465],
    [20.123572, 51.120027],
  ];

  polygon.map((pol) => pol.reverse());

  const purpleOptions = { color: "purple" };

  return (
    <StyledMapContainer center={center} zoom={14} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
    </StyledMapContainer>
  );
};

export default Map;
