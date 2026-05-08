import ArtPreview from "../ArtPreview/Index";

export default function Spotlight({ artpiece, handleToggleFavoritePages }) {
  return (
    <>
      <ArtPreview
        artpiece={artpiece}
        handleToggleFavoritePages={handleToggleFavoritePages}
      />
      <p>{artpiece.artist}</p>
    </>
  );
}
