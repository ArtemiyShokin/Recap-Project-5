import { useRouter } from "next/router";
import Link from "next/link";
import ArtPreview from "../../components/ArtPreview/Index";
import CommentForm from "@/components/CommentForm/Index";
import Comments from "@/components/Comments/Index";
import ColorPalette from "@/components/ColorPalette/Index";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ArtPieceDetailsPage({
  artpieces,
  onToggleFavorite,
  artpiecesInfo,
  comments,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artpiece = artpieces?.find((artpiece) => artpiece.slug === slug);
  const { isFavorite } = artpiecesInfo?.find(
    (info) => info.slug === artpiece.slug
  ) ?? { isFavorite: false };

  if (!router.isReady) return <div>Loading...</div>;

  if (!artpiece) return <div>Art piece not found.</div>;

  const artpieceComments = comments[slug] || [];
  return (
    <PageBackground>
      <DetailWrapper>
        <StyledBackLink href="/artpieces">← Back to Gallery</StyledBackLink>

        <ArtPreview
          artpiece={artpiece}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />

        <ColorPalette colors={artpiece.colors} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <InfoCard>
            <StyledTitle>{artpiece.name}</StyledTitle>
            <MetaInfo>
              <span>Artist</span> {artpiece.artist}
            </MetaInfo>
            <MetaInfo>
              <span>Year</span> {artpiece.year}
            </MetaInfo>
            <MetaInfo>
              <span>Genre</span> {artpiece.genre}
            </MetaInfo>
          </InfoCard>
        </motion.div>

        <Comments artpieceComments={artpieceComments} />
        <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
      </DetailWrapper>
    </PageBackground>
  );
}
const DetailWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled.div`
  background: #fdfdfd;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #222;
`;
const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: #262626;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;
const MetaInfo = styled.p`
  margin: 8px 0;
  color: #444;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: #0061d1;
    margin-right: 10px;
    display: inline-block;
    width: 60px;
  }
`;
const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // z-index: -1;
  // background-color: #6ab5ff;
  // background-image:
  //   radial-gradient(at 0% 0%, rgba(255, 255, 6, 0.67) 0px, transparent 50%),
  //   radial-gradient(at 100% 100%, rgba(255, 21, 196, 0.61) 0px, transparent 50%);
`;
