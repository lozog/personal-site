import styled from "styled-components";
import { colours, dims } from "styles/globalStyle";

export const Container = styled.div`
  margin: 75px auto 0;
  width: 100%;

  @media (max-width: ${dims.smallScreenWidth}) {
    margin-top: 0;
  }
`;

export const Centerpiece = styled.div`
  width: ${dims.centerpieceWidth};
  margin: 0 auto;

  @media (max-width: ${dims.smallScreenWidth}) {
    width: 100%;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: .3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ImageOverlayText = styled.div`
  color: ${colours.white};
  font-weight: 600;
  font-size: 24pt;
  text-transform: uppercase;
  margin: auto;
  letter-spacing: 2px;
`;

const Image = styled.div`
  position: relative;
  cursor: pointer;
  background-color: black;
  background-position: center;
  background-size: cover;
  float: left;

  /*
                +-----------+
                |           |
                |           |
  +----------+  |           |
  |          |  |           |
  |          |  |           |
  |     1    |  |           |
  |          |  |     2     |
  |          |  |           |
  +----------+  |           |
     +-------+  |           |
     |       |  |           |
     |   3   |  +-----------+
     |       |
     |       |
     +-------+
  */

  img {
    display: block;
  }
`;

export const Image1 = styled(Image)`
  margin-top: 40px;

  img {
    width: 431px;
    height: 308px;
    object-fit: cover;
    object-position: center;
  }

  // all 3 images have these same styles - not sure why it doesn't work when
  // i put them on Image
  @media (max-width: ${dims.smallScreenWidth}) {
    float: none;
    transform: none;
    margin: 0 0 30px;

    img {
      width:100%;
      height: auto;
    }
  }
`;

export const Image2 = styled(Image)`
  margin-left: 20px;

  img {
    width: 357px;
    height: 500px;
  }

  @media (max-width: ${dims.smallScreenWidth}) {
    float: none;
    transform: none;
    margin: 0 0 30px;

    img {
      width:100%;
      height: auto;
    }
  }
`;

export const Image3 = styled(Image)`
  transform: translateY(-131px);
  margin-left: 61px;

  img {
    width: 370px;
    height: 240px;
  }

  @media (max-width: ${dims.smallScreenWidth}) {
    float: none;
    transform: none;
    margin: 0 0 30px;

    img {
      width:100%;
      height: auto;
    }
  }
`;
