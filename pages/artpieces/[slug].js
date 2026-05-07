import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";


export default function ArtPieceDetailsPage({ allImages }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = allImages?.find((p) => p.slug === slug);

  if (!router.isReady) return <div>Loading...</div>;

  if (!piece) return <div>Art piece not found.</div>;

  return (
    <>
      <Link href="/artpieces">← Back to Gallery</Link>
      <h1>{piece.name}</h1>
      <p>
        <strong>Artist:</strong> {piece.artist}
      </p>
      <p>
        <strong>Year:</strong> {piece.year}
      </p>
      <p>
        <strong>Genre:</strong> {piece.genre}
      </p>

      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={500}
        height={500}
      />
    </>
  );
}
