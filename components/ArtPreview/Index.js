import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/Index";
export default function ArtPreview({ artpiece, onToggleFavorite, isFavorite }) {
  return (
    <>
      <Link href={`/artpieces/${artpiece.slug}`}>
        <Image
          src={artpiece.imageSource}
          alt={artpiece.slug}
          width="400"
          height="200"
        />{" "}
      </Link>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        artpiece={artpiece}
        isFavorite={isFavorite}
      />
    </>
  );
}
