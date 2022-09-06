import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const goToCategory = (path) => {
    navigate(path);
  };

  return (
    <div
      className="directory-item-container"
      onClick={() => goToCategory(`/shop/${title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title.toUpperCase()}</h2>
        <p className="new">SHOP NOW</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
