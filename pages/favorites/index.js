import ArtList from "@/components/ArtList/Index";

export default function Favorites({ artpieces }) {
  const favoriteArtpieces = artpieces.filter((artpiece) => artpiece.isFavorite);

  return <ArtList artpieces={favoriteArtpieces} />;
}
