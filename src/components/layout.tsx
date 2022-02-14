import { Spotify, Github, Instagram, Bandcamp } from '@icons-pack/react-simple-icons';
import React from "react";
import { Link } from "gatsby";
import EmailIcon from "assets/email.svg";
import { GlobalStyle } from "globalStyle";
import * as S from "./styles";

interface Props {
  pageTitle: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <title>{pageTitle}</title>
        <S.Header>
          <S.Name>
            <Link to="/">Liam Ozog</Link>
          </S.Name>
          <S.IconContainer>
            <a href="mailto:me@liamozog.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon fill="currentColor" title="email" />
            </a>
            <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://open.spotify.com/artist/6CPrLNVq7V7bQSltQq7qVv?si=S2g7rPSxScuYDeqAyHKWJw" target="_blank" rel="noopener noreferrer">
              <Spotify size={24} />
            </a>
            <a href="https://www.instagram.com/liamozog/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href="https://liamozog.bandcamp.com/" target="_blank" rel="noopener noreferrer">
              <Bandcamp size={24} />
            </a>
          </S.IconContainer>
        </S.Header>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
