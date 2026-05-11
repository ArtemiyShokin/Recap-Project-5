import ArtPreview from "../ArtPreview/Index";
import styled from "styled-components";

export default function Spotlight({
  artpiece,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const { isFavorite } = artpiecesInfo?.find(
    (info) => info.slug === artpiece.slug
  ) ?? { isFavorite: false };
  console.log("Spotlight:", isFavorite);

  return (
    <PreviewContainer>
      <ArtPreview
        artpiece={artpiece}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        mode="spotlight"
      />
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  padding: 0;
  margin-top: 10rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
