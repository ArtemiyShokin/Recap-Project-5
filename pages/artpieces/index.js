import ArtList from "@/components/ArtList/Index";

export default function Artpieces({ artpieces, handleToggleFavoritePages }) {
  return (
    <ArtList
      artpieces={artpieces}
      handleToggleFavoritePages={handleToggleFavoritePages}
    ></ArtList>
  );
}
