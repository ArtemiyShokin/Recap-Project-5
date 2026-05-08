import ArtList from "@/components/ArtList/Index";

export default function Artpieces({ artpieces, onToggleFavorite }) {
  return (
    <ArtList
      artpieces={artpieces}
      onToggleFavorite={onToggleFavorite}
    ></ArtList>
  );
}
