import ArtPreview from "../ArtPreview/Index";
import styled from "styled-components";

export default function ArtList({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <StyledUnorderedList>
      {artpieces.map((artpiece) => {
        const { isFavorite } = artpiecesInfo?.find(
          (info) => info.slug === artpiece.slug
        ) ?? { isFavorite: false };
        return (
          <l key={artpiece.slug} isFavorite={isFavorite}>
            <ArtPreview
              artpiece={artpiece}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite}
            />
          </l>
        );
      })}
    </StyledUnorderedList>
  );
}

// hier brauchen wir  styled component ListItem mit : if isFavorite background rot else nix
// const ListContainer = styled.div``;

// const StyledListElement = styled.li`
//   background-color: ${(props) => (props.isFavorite ? "green" : "transparent")};
// `;
const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
