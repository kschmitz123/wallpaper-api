import React from "react";
import "./imagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  function addFavorites(id) {
    const oldFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = [...oldFavorites, id];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    return newFavorites;
  }
  return (
    <div className="imageContainer">
      <button onClick={() => addFavorites(id)}>🤍</button>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
