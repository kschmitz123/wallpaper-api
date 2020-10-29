import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList() {
  const photoIds = ["MApBaO4pHOI", "HvCnzrjPPHs", "N57xnSnCDfs"];
  const imageElements = photoIds.map((favorites) => (
    <FavoriteImage photoId={favorites} key={favorites} />
  ));
  return imageElements;
}
