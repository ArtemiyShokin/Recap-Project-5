import Spotlight from "@/components/Spotlight/Index";
import { useEffect } from "react";
import { useState } from "react";
export default function HomePage({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
}) {
  // const favoriteImages = data.filter((artpiece) => artpiece.isfavorite);
  const [spotlightArtpiece] = useState(() => getRandomArtpiece());

  // useEffect(() => {
  function getRandomArtpiece() {
    const randomNumber = Math.floor(Math.random() * artpieces.length);
    return artpieces[randomNumber];
  }
  // }, []);

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
