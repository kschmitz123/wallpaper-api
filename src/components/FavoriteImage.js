import "./FavoriteImage.css";
export default function FavoriteImage({ src, id, alt }) {
  return (
    <div className="image-container">
      <img className="favorite-image" src={src} alt={alt} id={id} />
    </div>
  );
}
