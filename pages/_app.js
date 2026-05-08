import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Index";
import { useState } from "react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [favorite, setFavorite] = useState([]); // only displays objects with id/slug and isFavorite: true/false

  function handleToggleFavoritePages(artpiece) {
    console.log("test", artpiece);
    //adds the artpiece with the correct id to the array and adds/removes isFavorite
  }
  const {
    data: artpieces,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // render data

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artpieces={artpieces}
        handleToggleFavoritePages={handleToggleFavoritePages}
      />
      <Navigation />
    </>
  );
}
