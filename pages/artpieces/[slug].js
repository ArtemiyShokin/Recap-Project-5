import { useRouter } from "next/router";
import Link from "next/link";
import ArtPreview from "../../components/ArtPreview/Index";
import CommentForm from "@/components/CommentForm/Index";
import Comments from "@/components/Comments/Index";

export default function ArtPieceDetailsPage({ artpieces, onToggleFavorite,  comments, onSubmitComment  }) {
  const router = useRouter();
  const { slug } = router.query;

  const artpiece = artpieces?.find((artpiece) => artpiece.slug === slug);

  if (!router.isReady) return <div>Loading...</div>;

  if (!artpiece) return <div>Art piece not found.</div>;

  
  const artpieceComments = comments[slug] || [];

  return (
    <>
      <Link href="/artpieces">← Back to Gallery</Link>
      <ArtPreview artpiece={artpiece} onToggleFavorite={onToggleFavorite} />
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
     
      <Comments artpieceComments={artpieceComments} />

     
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </>
  );
}
