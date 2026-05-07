import ArtList from "@/components/ArtList/Index";

export default function Favorites({ allImages }) {
  const favoriteArtpieces = allImages.filter((artpiece) => artpiece.isFavorite);

  return <ArtList artpieces={favoriteArtpieces} />;
}
