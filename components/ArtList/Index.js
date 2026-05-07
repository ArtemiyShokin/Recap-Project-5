import ArtPreview from "../ArtPreview/Index";
import Link from "next/link";

export default function ArtList({ artpieces }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={artpiece.slug}>
          <Link href={`/artpieces/${artpiece.slug}`}>
            <ArtPreview artpiece={artpiece} />
            <p>
              {artpiece.name} by {artpiece.artist}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
