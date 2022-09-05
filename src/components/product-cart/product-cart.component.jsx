import "./product-cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

function ProductCart({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const hancleClick = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={hancleClick}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCart;
