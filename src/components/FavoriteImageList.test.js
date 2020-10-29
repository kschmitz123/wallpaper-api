import { render, screen } from "@testing-library/react";
import FavoriteImageList from "./FavoriteImageList";

it("renders multiple Favorite Images based on photoIds", () => {
  const photoIds = ["MApBaO4pHOI", "HvCnzrjPPHs", "N57xnSnCDfs"];
  render(<FavoriteImageList photoIds={photoIds} />);
  const imageElements = screen.getAllByRole("img");
  expect(imageElements.length).toBe(photoIds.length);
});
