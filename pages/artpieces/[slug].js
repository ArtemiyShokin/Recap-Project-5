import { useRouter } from "next/router";
import Link from "next/link";
import ArtPreview from "../../components/ArtPreview/Index";

export default function ArtPieceDetailsPage({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artpiece = artpieces?.find((artpiece) => artpiece.slug === slug);
  const { isFavorite } = artpiecesInfo?.find(
    (info) => info.slug === artpiece.slug
  ) ?? { isFavorite: false };

  if (!router.isReady) return <div>Loading...</div>;

  if (!artpiece) return <div>Art piece not found.</div>;

  return (
    <>
      <Link href="/artpieces">← Back to Gallery</Link>
      <ArtPreview
        artpiece={artpiece}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      <h1>{artpiece.name}</h1>
      <p>
        <strong>Artist:</strong> {artpiece.artist}
      </p>
      <p>
        <strong>Year:</strong> {artpiece.year}
      </p>
      <p>
        <strong>Genre:</strong> {artpiece.genre}
      </p>
    </>
  );
}
