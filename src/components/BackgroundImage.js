import React from "react";
import styled from "styled-components";
const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        alt="No internet connection"
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
      />
    </BackgroundContainer>
  );
};
const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
`;
export default BackgroundImage;
