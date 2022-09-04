import "./navigation-bar.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/images/crown.svg";

function NavigationBar() {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <div>
          <CrwnLogo />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
