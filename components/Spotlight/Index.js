import ArtPreview from "../ArtPreview/Index";

export default function Spotlight({ artpiece, onToggleFavorite }) {
  return (
    <>
      <ArtPreview artpiece={artpiece} onToggleFavorite={onToggleFavorite} />
      <p>{artpiece.artist}</p>
    </>
  );
}
