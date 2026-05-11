import ArtList from "@/components/ArtList/Index";
import styled from "styled-components";

export default function Favorites({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const favoriteArtpieces = artpieces.filter((artpiece) =>
    artpiecesInfo.find(
      (info) => info.isFavorite === true && info.slug === artpiece.slug
    )
  );

  return (
    <>
      <StyledTitle>Art Gallery</StyledTitle>
      <ArtList
        artpieces={favoriteArtpieces}
        onToggleFavorite={onToggleFavorite}
        artpiecesInfo={artpiecesInfo}
      />
    </>
  );
}

const StyledTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: var(--secondary-500);
  font-weight: 800;
`;
