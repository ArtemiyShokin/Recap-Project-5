import Spotlight from "@/components/Spotlight/Index";
import { useEffect } from "react";
export default function HomePage({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  // const favoriteImages = data.filter((artpiece) => artpiece.isfavorite);
  const spotlightArtpiece = getRandomArtpiece();
  useEffect(() => {
    function getRandomArtpiece() {
      const max = artpieces.length - 1;
      const randomNumber = Math.floor(Math.random() * max);
      return artpieces[randomNumber];
    }
  }, [artpieces]);

  return (
    <div>
      <Spotlight
        artpiece={spotlightArtpiece}
        onToggleFavorite={onToggleFavorite}
        artpiecesInfo={artpiecesInfo}
      />
    </div>
  );
}
