import ArtPreview from "../ArtPreview/Index";

export default function Spotlight({
  artpiece,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const { isFavorite } = artpiecesInfo?.find(
    (info) => info.slug === artpiece.slug
  ) ?? { isFavorite: false };
  console.log("Spotlight:", isFavorite);

  return (
    <>
      <ArtPreview
        artpiece={artpiece}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        mode="spotlight"
      />
    </>
  );
}
