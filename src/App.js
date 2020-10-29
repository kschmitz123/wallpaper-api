import ImagePreview from "./components/imagePreview";
import { useState } from "react";
import "./App.css";
import "./global.css";
import "./api/getRandomImage";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
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
      <div className="favorite-container">
        <FavoriteImageList />
        {/* <FavoriteImage photoId="AZTc9bXx7ko" />
        <FavoriteImage photoId="6-M4HAg6hlM" /> */}
      </div>
    </main>
  );
}

export default App;
