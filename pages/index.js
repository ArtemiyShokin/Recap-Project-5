import Spotlight from "@/components/Spotlight/Index";

export default function HomePage({ artpieces, handleToggleFavoritePages }) {
  // const favoriteImages = data.filter((artpiece) => artpiece.isfavorite);
  const spotlightArtpiece = getRandomArtpiece();

  function getRandomArtpiece() {
    const max = artpieces.length - 1;
    const randomNumber = Math.floor(Math.random() * max);
    return artpieces[randomNumber];
  }

  return (
    <div>
      <Spotlight
        artpiece={spotlightArtpiece}
        handleToggleFavoritePages={handleToggleFavoritePages}
      />
    </div>
  );
}
