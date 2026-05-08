import Heart from "../../assets/heart.svg?react";
import ActiveHeart from "../../assets/heart-red.svg?react";
export default function FavoriteButton({ artpiece, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite(artpiece)}>
      <Heart />
    </button>
  );
}
