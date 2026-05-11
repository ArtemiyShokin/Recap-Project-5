import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/Index";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
export default function ArtPreview({ artpiece, onToggleFavorite, isFavorite }) {
  return (
    <>
      <Link href={`/artpieces/${artpiece.slug}`}>
       <MotionImage
          src={artpiece.imageSource}
          alt={artpiece.slug}
          width="400"
          height="200"
          layoutId={artpiece.slug} // 3. The "magic" property
          transition={{ duration: 0.5 }}
        />
      </Link>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        artpiece={artpiece}
        isFavorite={isFavorite}
      />
    </>
  );
}
