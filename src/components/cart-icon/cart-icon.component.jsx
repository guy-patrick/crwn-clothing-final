import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { toogleIsCartOpen } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
