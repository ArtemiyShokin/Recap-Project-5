import ArtList from "@/components/ArtList/Index";

export default function Favorites({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  const favoriteArtpieces = artpieces.filter((artpiece) =>
    artpiecesInfo.find(
      (info) => info.isFavorite === true && info.slug === artpiece.slug
    )
  );

  return (
    <ArtList
      artpieces={favoriteArtpieces}
      onToggleFavorite={onToggleFavorite}
      artpiecesInfo={artpiecesInfo}
    />
  );
}
