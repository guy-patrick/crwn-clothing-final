import "./category-preview.styles.scss";
import { useNavigate } from "react-router-dom";
import ProductCart from "../product-cart/product-cart.component";

function CategoryPreview({ title, products }) {
  const navigate = useNavigate();

  const goToCategory = (path) => {
    navigate(path);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={() => goToCategory(title)}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
