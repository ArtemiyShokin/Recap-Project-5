import Image from "next/image";

export default function ArtPreview({ artpiece, title, artist }) {
  return (
    <>
      <Image
        src={artpiece.imageSource}
        alt={artpiece.slug}
        width="400"
        height="200"
      />
      <p>
        {title} by {artist}
      </p>
    </>
  );
}
