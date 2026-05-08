import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Index";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artpiecesInfo, setArtpiecesInfo] = useLocalStorageState(
    "artpiecesInfo",
    { defaultValue: [] }
  ); //useState([]); // only displays objects with id/slug and isFavorite: true/false
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: {},
  }); //useState({});
  const {
    data: artpieces,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    setArtpiecesInfo((prevArtpiecesInfo) => {
      const info = prevArtpiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return prevArtpiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...prevArtpiecesInfo, { slug, isFavorite: true }];
    });
    console.log(artpiecesInfo);
  }

  function handleAddComment(slug, newComment) {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    setComments((prevComments) => ({
      ...prevComments,
      [slug]: [...(prevComments[slug] || []), { text: newComment, date, time }],
    }));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artpieces={artpieces}
        onToggleFavorite={handleToggleFavorite}
        artpiecesInfo={artpiecesInfo}
        comments={comments}
        onSubmitComment={handleAddComment}
      />
      <Navigation />
    </>
  );
}
