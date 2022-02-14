import styled from "styled-components";
import { colours } from "styles/globalStyle";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const Overlay = styled.div`
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

export const OverlayText = styled.div`
  color: ${colours.white};
  font-weight: 600;
  font-size: 18px;
  margin: auto;
`;
