import { uid } from "react-uid";
import useSWR from "swr";
import ArtPreview from "../ArtPreview/Index";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ArtList() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // render data
  return (
    <ul>
      {data.map((artpiece) => (
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
