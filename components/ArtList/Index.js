import ArtPreview from "../ArtPreview/Index";
import Link from "next/link";

export default function ArtList({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <ul>
      {artpieces.map((artpiece) => {
        console.log("Artlist status:", artpiecesInfo);
        const { isFavorite } = artpiecesInfo?.find(
          (info) => info.slug === artpiece.slug
        ) ?? { isFavorite: false };
        return (
          <li key={artpiece.slug}>
            <ArtPreview
              artpiece={artpiece}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite}
            />
            <p>
              {artpiece.name} by {artpiece.artist}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
