import ArtList from "@/components/ArtList/Index";

export default function Artpieces({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  return (
    <ArtList
      artpieces={artpieces}
      onToggleFavorite={onToggleFavorite}
      artpiecesInfo={artpiecesInfo}
    ></ArtList>
  );
}
