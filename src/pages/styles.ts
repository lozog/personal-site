import styled from "styled-components";
import { dims } from "globalStyle";

export const Container = styled.div`
  max-width: 1250px;
  min-width: ${dims.centerpieceWidth};
  margin: 0 auto;
  padding: 0 ${dims.appMargin};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${dims.smallScreenWidth}) {
    width: 100%;
    min-width: auto;
  }
`;
