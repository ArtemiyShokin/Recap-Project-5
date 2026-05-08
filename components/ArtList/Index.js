import ArtPreview from "../ArtPreview/Index";
import styled from "styled-components";

export default function ArtList({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <ul>
      {artpieces.map((artpiece) => {
        const { isFavorite } = artpiecesInfo?.find(
          (info) => info.slug === artpiece.slug
        ) ?? { isFavorite: false };
        return (
          <StyledListElement key={artpiece.slug} isFavorite={isFavorite}>
            <ArtPreview
              artpiece={artpiece}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite}
            />
            <p>
              {artpiece.name} by {artpiece.artist}
            </p>
          </StyledListElement>
        );
      })}
    </ul>
  );
}

// hier brauchen wir  styled component ListItem mit : if isFavorite background rot else nix
const StyledListElement = styled.li`
 background-color: ${(props) => (props.isFavorite ? "green" : "transparent")}
  max-width: 450px;
`;
