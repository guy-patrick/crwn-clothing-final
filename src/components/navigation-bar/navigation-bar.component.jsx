import "./navigation-bar.styles.scss";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/images/crown.svg";

function NavigationBar() {
  const { currentUser } = useContext(UserContext);

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
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
