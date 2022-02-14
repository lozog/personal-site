import styled from "styled-components";
import { dims } from "globalStyle";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: flex-start;

  @media (max-width: ${dims.smallScreenWidth}) {
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  }
`;

export const ReleaseTitle = styled.div`
  font-weight: 600;
  text-align: center;
`;

export const CoverArt = styled.img`
  width: 100%;
  display: block;
`;
