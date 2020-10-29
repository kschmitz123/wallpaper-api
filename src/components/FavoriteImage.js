import "./FavoriteImage.css";
import IconButton from "./IconButton";
import { without } from "../api/arrays";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="image-container">
      <IconButton
        onClick={() => {
          let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          favorites = without(favorites, photoId);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }}
      >
        🤍
      </IconButton>
      <img
        className="favorite-image"
        src={`https://source.unsplash.com/${photoId}`}
        alt={"hallo"}
      />
    </div>
  );
}
