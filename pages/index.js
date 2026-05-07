import ArtList from "@/components/ArtList/Index";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // render data

  const allImages = data.map((artpiece) => {
    return { isFavorite: false, ...artpiece };
  });

  // const favoriteImages = data.filter((artpiece) => artpiece.isfavorite);
  return (
    <div>
      <ArtList artpieces={allImages} />
    </div>
  );
}
