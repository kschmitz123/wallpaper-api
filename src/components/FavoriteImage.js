import "./FavoriteImage.css";
import IconButton from "./IconButton";
import { without } from "../api/arrays";
import { getFavorites } from "../api/storage";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="image-container">
      <IconButton
        onClick={() => {
          let favorites = getFavorites();
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
