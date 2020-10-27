import ImagePreview from "./components/imagePreview";
import "./App.css";
import "./global.css";
import { getRandomImage } from "./utils/api";

function App() {
  return (
    <main>
      <button className="randomBtn">Get Random Image</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603648913629-3b83ed3e6be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        alt={"Decoration"}
        author={"me"}
      />
    </main>
  );
}
async function loadImages() {
  const images = await getRandomImage();
}

export default App;
