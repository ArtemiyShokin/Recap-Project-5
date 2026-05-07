import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ArtPreview from "../ArtPreview/Index";


export default function ArtPieceDetailsPage({ allImages }) {
  const router = useRouter();
  const { slug } = router.query;

  const artpiece = allImages?.find((artpiece) => artpiece.slug === slug);

  if (!router.isReady) return <div>Loading...</div>;

  if (!artpiece) return <div>Art piece not found.</div>;

  return (
    <>
      <Link href="/artpieces">← Back to Gallery</Link>
      <ArtPreview artpiece={artpiece} />
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
