import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Layout } from "components/layout";
import { Overlay } from "components/overlay";
import * as S from "styles/photography";

const gallery = {
  title: "Buenos Aires",
  coverFilename: "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000008-3_mjhkw0.jpg",
  description: "Buenos Aires 2020",
  images: [
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000007-2_uxtqtu.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000008-3_mjhkw0.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000009-38_y8eezm.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000010-5_syl4vu.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000011-6_esmede.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029967/personal-site/photography/000012-7_r5yo6f.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000013-8_aztcrx.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000016-11_xkzd43.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000019-14_b449mk.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000033-62_ps2rzm.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000034-63_scunfo.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000035-64_vqvofe.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000036-65_jvzbev.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000038-67_cqr204.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000039-68_p3eqfq.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000040-69_tfib9v.jpg" },
    { "filename": "https://res.cloudinary.com/dtxbzcy7f/image/upload/v1642029968/personal-site/photography/000042-71_r38v1d.jpg" },
  ]
};

export default function Photography() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = gallery.images.map(image => (
    image.filename
  ))

  return (
    <Layout>
      <S.Grid>
        {
          gallery.images.map((image, i) => (
            <S.ImageContainer
              key={image.filename}
              onClick={() => {
                setImageIndex(i)
                setIsOpen(true)
              }}
            >
              <Overlay>
                <S.Image src={`${image.filename}`} alt={image.filename} />
              </Overlay>
            </S.ImageContainer>
          ))
        }
      </S.Grid>
      {isOpen && (
        <Lightbox
          mainSrc={`${images[imageIndex]}`}
          nextSrc={`${images[(imageIndex + 1) % images.length]}`}
          prevSrc={`${images[(imageIndex + images.length - 1) % images.length]}`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex((imageIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % images.length)
          }
          enableZoom={false}
          animationDisabled
        />
      )}
    </Layout>
  );
}
