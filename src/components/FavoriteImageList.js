import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  const imageElements = photoIds.map((photoId) => (
    <FavoriteImage photoId={photoId} key={photoId} />
  ));
  return imageElements;
}
