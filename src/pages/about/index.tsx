import React from "react";
import { Link } from "gatsby";
import * as S from "./styles";

export default function About() {
  return (
    <div>
      <div>
        Hi, I’m Liam. I like to <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">build stuff</a> and <Link to="/music">write songs</Link>. I also like <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">taking photos (on film)</a> and I listen to <a href="https://www.last.fm/user/Tom_Swift" target="_blank" rel="noopener noreferrer">a lot</a> of music.
      </div>
      <S.Photo>
        <picture>
          <img src={"https://res.cloudinary.com/dtxbzcy7f/image/upload/v1627956234/personal-site/000017960026-26_bbaaro.jpg"} alt="me" />
        </picture>
      </S.Photo>
    </div>
  );
}
