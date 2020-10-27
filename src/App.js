import ImagePreview from "./components/imagePreview";
import "./global.css";

function App() {
  return (
    <main>
      <button>Get Random Image</button>
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

export default App;
