import ArtPreview from "../ArtPreview/Index";
import Link from "next/link";

export default function ArtList({ artpieces, handleToggleFavoritePages }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={artpiece.slug}>
          <ArtPreview
            artpiece={artpiece}
            handleToggleFavoritePages={handleToggleFavoritePages}
          />
          <p>
            {artpiece.name} by {artpiece.artist}
          </p>
        </li>
      ))}
    </ul>
  );
}
