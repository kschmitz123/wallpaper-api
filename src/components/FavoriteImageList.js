import FavoriteImage from "./FavoriteImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  const imageElements = photoIds.map((photoId) => (
    <FavoriteImage photoId={photoId} key={photoId} />
  ));
  return <div className="favorite-container">{imageElements}</div>;
}
