import "./FavoriteImage.css";
import IconButton from "./IconButton";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="image-container">
      <IconButton>🤍</IconButton>
      <img
        className="favorite-image"
        src={`https://source.unsplash.com/${photoId}`}
        alt={"hallo"}
      />
    </div>
  );
}
