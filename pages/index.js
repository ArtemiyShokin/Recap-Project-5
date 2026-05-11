import Spotlight from "@/components/Spotlight/Index";
import styled from "styled-components";
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
      <StyledTitle>Art Gallery</StyledTitle>
      <Spotlight
        artpiece={spotlightArtpiece}
        onToggleFavorite={onToggleFavorite}
        artpiecesInfo={artpiecesInfo}
      />
    </div>
  );
}

const StyledTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: var(--secondary-500);
  font-weight: 800;
`;
