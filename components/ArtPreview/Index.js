import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/Index";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ArtPreview({
  artpiece,
  onToggleFavorite,
  isFavorite,
  mode,
}) {
  return (
    <>
      <PreviewContainer isFavorite={isFavorite}>
        <Link href={`/artpieces/${artpiece.slug}`}>
          <MotionImage
            src={artpiece.imageSource}
            alt={artpiece.slug}
            fill
            layoutId={artpiece.slug} // 3. The "magic" property
            transition={{ duration: 0.5 }}
          />
        </Link>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          artpiece={artpiece}
          isFavorite={isFavorite}
        />
        <StyledArtworkTitle isFavorite={isFavorite}>
          {mode === "spotlight"
            ? artpiece.artist
            : artpiece.name + " by " + artpiece.artist}
        </StyledArtworkTitle>
      </PreviewContainer>
    </>
  );
}

const PreviewContainer = styled.div`
  width: 400px;
  height: 20vh;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  border-style: none;
  /* border-width: 5px;
  border-color: red; */
  box-shadow:
    rgba(39, 39, 39, 0.2) 0px 8px 24px,
    ${(props) =>
      props.isFavorite
        ? "var(--tertiary-200) 3px 4px 5px "
        : "0px 0px 0px transparent"};

  display: flex;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const MotionImage = motion(StyledImage);

const StyledArtworkTitle = styled.p`
  margin-top: 0.5rem;
  color: var(--secondary-800);
  background: linear-gradient(
    310deg,
    hsla(233, 46%, 65%, 0.8) 0%,
    hsla(233, 47%, 75%, 0.8) 100%
  );

  padding: 0.2rem;

  width: fit-content;
  height: fit-content;
  border-radius: 10px;

  position: absolute;
  bottom: 0rem;

  z-index: 1;
`;

//  width: "400px",
//             height: "200px",
//             overflow: "hidden",
//             position: "relative",

//  style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
