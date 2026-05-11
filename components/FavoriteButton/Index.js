import styled from "styled-components";
import Heart from "../../assets/heart.svg?react";
import ActiveHeart from "../../assets/heart-red.svg?react";
export default function FavoriteButton({
  artpiece,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledButton type="button" onClick={() => onToggleFavorite(artpiece.slug)}>
      {isFavorite ? <ActiveHeart /> : <Heart />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;

  border-style: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
`;
