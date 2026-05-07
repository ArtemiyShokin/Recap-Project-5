import Spotlight from "@/components/Spotlight/Index";

export default function HomePage({ allImages }) {
  // const favoriteImages = data.filter((artpiece) => artpiece.isfavorite);
  const spotlightArtpiece = getRandomArtpiece();

  function getRandomArtpiece() {
    const max = allImages.length - 1;
    const randomNumber = Math.floor(Math.random() * max);
    return allImages[randomNumber];
  }

  return (
    <div>
      <Spotlight artpiece={spotlightArtpiece} />
    </div>
  );
}
