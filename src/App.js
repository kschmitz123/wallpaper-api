import ImagePreview from "./components/imagePreview";
import { useState } from "react";
import "./App.css";
import "./global.css";
import "./api/getRandomImage";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [wallpaper, setWallpaper] = useState();
  const [author, setAuthor] = useState();

  async function loadImages() {
    const images = await getRandomImage();
    setWallpaper(images.urls.regular);
    setAuthor(images.user.username);
  }
  return (
    <main>
      <button onClick={() => loadImages()} className="randomBtn">
        Get Random Image
      </button>
      <ImagePreview src={wallpaper} author={author} />
    </main>
  );
}

export default App;
