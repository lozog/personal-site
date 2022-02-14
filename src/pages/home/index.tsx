import React from "react"
import { Link } from "gatsby";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Centerpiece>
        <Link to={"/music"}>
          <S.Image1>
            <img src="https://f4.bcbits.com/img/a0642444381_16.jpg" alt="music" />
            <S.ImageOverlay>
              <S.ImageOverlayText>Music</S.ImageOverlayText>
            </S.ImageOverlay>
        </S.Image1>
        </Link>
        <Link to={"/about"}>
          <S.Image2>
            <picture>
              <img src={"https://res.cloudinary.com/dtxbzcy7f/image/upload/v1627956234/personal-site/000017960026-26_bbaaro.jpg"} alt="me" />
            </picture>
            <S.ImageOverlay>
              <S.ImageOverlayText>About</S.ImageOverlayText>
            </S.ImageOverlay>
          </S.Image2>
        </Link>
        <Link to={"/photography"}>
          <S.Image3>
            <img src="https://res.cloudinary.com/dtxbzcy7f/image/upload/v1627956431/personal-site/000039-68_pn2jdm.jpg" alt="photography" />
            <S.ImageOverlay>
              <S.ImageOverlayText>Photography</S.ImageOverlayText>
            </S.ImageOverlay>
          </S.Image3>
        </Link>
        <S.ClearFloat />
      </S.Centerpiece>
    </S.Container>
  );
}
