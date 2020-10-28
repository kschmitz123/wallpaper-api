import ImagePreview from "./components/imagePreview";
import { useState } from "react";
import "./App.css";
import "./global.css";
import "./api/getRandomImage";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [wallpaper, setWallpaper] = useState();
  const [author, setAuthor] = useState();
  const [altText, setAltText] = useState();

  async function loadImages() {
    const images = await getRandomImage();
    setWallpaper(images.urls.regular);
    setAuthor(images.user.username);
    setAltText(images.alt_description);
  }
  return (
    <main>
      <button onClick={() => loadImages()} className="randomBtn">
        Get Random Image
      </button>
      <ImagePreview src={wallpaper} alt={altText} author={author} />
    </main>
  );
}

export default App;
