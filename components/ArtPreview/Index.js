import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/Index";
import styled from "styled-components";
export default function ArtPreview({ artpiece, onToggleFavorite, isFavorite }) {
  return (
    <>
      <PreviewContainer>
        <StyledFavoriteButton
          onToggleFavorite={onToggleFavorite}
          artpiece={artpiece}
          isFavorite={isFavorite}
        />
        <Link href={`/artpieces/${artpiece.slug}`}>
          <Image
            src={artpiece.imageSource}
            alt={artpiece.slug}
            width={artpiece.dimensions.width}
            height={artpiece.dimensions.height}
          />
        </Link>
      </PreviewContainer>
    </>
  );
}

const StyledFavoriteButton = styled(FavoriteButton)`
  background-color: red;
`;

const PreviewContainer = styled.div`
  width: 400px;
  height: 20vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  border-color: red;
  border-style: solid;
  display: flex;
`;

//  width: "400px",
//             height: "200px",
//             overflow: "hidden",
//             position: "relative",

//  style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
