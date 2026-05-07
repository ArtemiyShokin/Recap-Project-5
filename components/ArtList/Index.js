import { uid } from "react-uid";
import ArtPreview from "../ArtPreview/Index";

export default function ArtList({ artpieces }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={uid(artpiece)}>
          <ArtPreview artpiece={artpiece}></ArtPreview>

          <div>
            {artpiece.name} by {artpiece.artist}
          </div>
        </li>
      ))}
    </ul>
  );
}
