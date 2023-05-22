import styled from "styled-components";

type ThumbnailProps = {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <StyledThumbnail loading="lazy" src={src} alt={alt} />
  )
};

export default Thumbnail;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: contain;
`;