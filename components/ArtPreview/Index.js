import Image from "next/image";

export default function ArtPreview({ artpiece }) {
  return (
    <>
      <Image
        src={artpiece.imageSource}
        alt={artpiece.slug}
        width="400"
        height="200"
      />
      <p>
        {artpiece.name} by {artpiece.artist}
      </p>
    </>
  );
}
