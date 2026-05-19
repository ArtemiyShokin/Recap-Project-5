import ArtList from "@/components/ArtList/Index";
import styled from "styled-components";

export default function Artpieces({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <>
      <StyledTitle>Art Gallery</StyledTitle>
      <ArtList
        artpieces={artpieces}
        onToggleFavorite={onToggleFavorite}
        artpiecesInfo={artpiecesInfo}
      ></ArtList>
    </>
  );
}

const StyledTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: var(--secondary-500);
  font-weight: 500;
`;
