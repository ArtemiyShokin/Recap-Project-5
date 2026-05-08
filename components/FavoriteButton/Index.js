import Heart from "../../assets/heart.svg?react";
import ActiveHeart from "../../assets/heart-red.svg?react";
export default function FavoriteButton({ artpiece, onToggleFavoritePage }) {
  return (
    <button onClick={() => onToggleFavoritePage(artpiece)}>
      <Heart />
    </button>
  );
}
