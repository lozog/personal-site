import React from "react";
import * as S from "./styles";

interface Props {
  text?: string;
  children: React.ReactNode;
}

export function Overlay({
  text,
  children
}: Props) {
  return (
    <S.Container key={text}>
      {children}
      <S.Overlay>
        <S.OverlayText>{text}</S.OverlayText>
      </S.Overlay>
    </S.Container>
  );
}
