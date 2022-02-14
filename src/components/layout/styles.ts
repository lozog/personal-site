import styled from "styled-components";
import { colours, dims } from "styles/globalStyle";

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

export const Header = styled.header`
  margin: ${dims.appMargin} 0;
`;

export const Name = styled.span`
  font-size: 48pt;
  font-weight: 600;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
    color: ${colours.linkHover};
  }
`;

export const IconContainer = styled.div`
  display: inline;
  float: right;
  position: relative;
  top: 39px;

  a {
    margin-right: 10px;
    color: black;

    &:hover {
      color: ${colours.linkHover};
    }
  }

  a:last-child {
    margin-right: 0;
  }

  @media (max-width: ${dims.xSmallScreenWidth}) {
    float: none;
    display: block;
    top: auto;
    margin-top: 5px;

    svg {
      width: 48;
      height: 48;
    }
  }
`;

export const Footer = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: 20px 0 10px;
`;