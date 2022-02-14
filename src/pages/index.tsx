import React from "react"
import { Layout } from "components/layout";
import { Home } from "pages/home";
import * as S from "./styles";

export default function App() {
  return (
    <Layout pageTitle="Liam Ozog">
      <S.Container>
        <Home />
      </S.Container>
    </Layout>
  );
}
