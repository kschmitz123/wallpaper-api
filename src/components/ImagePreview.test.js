import ReactDOM from "react-dom";
import ImagePreview from "./imagePreview";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview />, div);
});
