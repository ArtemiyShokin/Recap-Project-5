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
        <StyledArtworkTitle>
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
      props.isFavorite ? "5px 5px red" : "0px 0px 0px transparent"};

  display: flex;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const MotionImage = motion(StyledImage);

const StyledArtworkTitle = styled.p`
  margin-top: 0.5rem;
  color: white;
  background-color: gray;

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
