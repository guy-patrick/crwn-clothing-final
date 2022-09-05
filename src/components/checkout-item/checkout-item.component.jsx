import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addCartItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeCartItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearCartItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
