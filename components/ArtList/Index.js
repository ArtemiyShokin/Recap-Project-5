import ArtPreview from "../ArtPreview/Index";
import Link from "next/link";

export default function ArtList({ artpieces, onToggleFavorite }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={artpiece.slug}>
          <ArtPreview artpiece={artpiece} onToggleFavorite={onToggleFavorite} />
          <p>
            {artpiece.name} by {artpiece.artist}
          </p>
        </li>
      ))}
    </ul>
  );
}
