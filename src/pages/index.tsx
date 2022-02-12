import React from "react"
import { Home } from "pages/Home";
import {GlobalStyle} from "globalStyle"
import * as S from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <Home />
      </S.Container>
    </>
  );
}
