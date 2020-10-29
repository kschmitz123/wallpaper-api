import ImagePreview from "./components/imagePreview";
import { useState } from "react";
import "./App.css";
import "./global.css";
import "./api/getRandomImage";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";
import without from "./api/arrays";

function App() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [randomImage, setRandomImage] = useState(null);

  async function loadImages() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }
  return (
    <main>
      <button onClick={() => loadImages()} className="randomBtn">
        Get Random Image
      </button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
      <FavoriteImageList photoIds={favorites} />
    </main>
  );
}

export default App;
