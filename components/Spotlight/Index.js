import ArtPreview from "../ArtPreview/Index";

export default function Spotlight({ artpiece }) {
  return (
    <>
      <ArtPreview artpiece={artpiece} />
      <p>{artpiece.artist}</p>
    </>
  );
}
