import ArtPreview from "../ArtPreview/Index";
import styled from "styled-components";

export default function ArtList({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <ListContainer>
      <StyledUnorderedList>
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
      </StyledUnorderedList>
    </ListContainer>
  );
}

// hier brauchen wir  styled component ListItem mit : if isFavorite background rot else nix
const ListContainer = styled.div``;

const StyledListElement = styled.li`
  background-color: ${(props) => (props.isFavorite ? "green" : "transparent")};
`;
const StyledUnorderedList = styled.ul`
  display: grid;
  grid-template:
    1,
    20vh / repeat (auto, 1fr);
  margin-left: 0;
  list-style: none;
  padding: 0;
  justify-items: center;
  gap: 80px;
`;
