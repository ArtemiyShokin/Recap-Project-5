import ArtPreview from "../ArtPreview/Index";

export default function Spotlight({
  artpiece,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const { isFavorite } = artpiecesInfo?.find(
    (info) => info.slug === artpiece.slug
  ) ?? { isFavorite: false };

  return (
    <>
      <ArtPreview
        artpiece={artpiece}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      <p>{artpiece.artist}</p>
    </>
  );
}

//jest js.10
