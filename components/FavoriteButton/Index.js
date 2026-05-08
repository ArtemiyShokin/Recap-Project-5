import Heart from "../../assets/heart.svg?react";
import ActiveHeart from "../../assets/heart-red.svg?react";
export default function FavoriteButton({
  artpiece,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <button type="button" onClick={() => onToggleFavorite(artpiece.slug)}>
      {isFavorite ? <ActiveHeart /> : <Heart />}
    </button>
  );
}
