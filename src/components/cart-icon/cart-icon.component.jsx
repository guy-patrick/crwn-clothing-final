import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

function CartIcon() {
  const { toogleIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
