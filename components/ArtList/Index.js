import { uid } from "react-uid";
import ArtPreview from "../ArtPreview/Index";

export default function ArtList({ artpieces }) {
  return (
    <ul>
      {artpieces.map((artpiece) => (
        <li key={artpiece.slug}>
          <ArtPreview
            artpiece={artpiece}
          ></ArtPreview>
        </li>
      ))}
    </ul>
  );
}
