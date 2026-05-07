import ArtPreview from "../ArtPreview/Index";

export default function ArtList({ artpieces }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={artpiece.slug}>
          <ArtPreview artpiece={artpiece}></ArtPreview>
          <p>
            {artpiece.name} by {artpiece.artist}
          </p>{" "}
        </li>
      ))}
    </ul>
  );
}
