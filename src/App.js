import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import Map from "./components/Map";
import Form from "./components/Form";

const AppWrapper = styled.div`
  width: 85vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const App = () => {
  const [myCenter, setMyCenter] = useState([]);

  const getCenter = (center) => {
    setMyCenter(center);
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Map putCenter={myCenter} />
        <Form getCenter={getCenter} />
      </AppWrapper>
    </>
  );
};

export default App;
