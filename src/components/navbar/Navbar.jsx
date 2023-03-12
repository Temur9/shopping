import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const product = useSelector((state) => state.product.product);

  return (
    <>
      <section className="navbar_section">
        <div className="container">
          <nav className="navbar">
            <div className="navbar_toggleMenu">
              <img
                className="toggle_img"
                onClick={() => setToggleMenu(!toggleMenu)}
                src={`/images/${toggleMenu ? "menuClose.png" : "menuIcon.png"}`}
                alt=""
              />
              {toggleMenu && (
                <div className="nav_links scale-up-top">
                  <Link to="/">
                    <img
                      onClick={() => setToggleMenu(false)}
                      className="logoImage"
                      src="../images/logo.png"
                      alt=""
                    />
                  </Link>
                  <ul
                    className="listItems">
                    <li onClick={() => setToggleMenu(false)}>
                      <NavLink className="navbar_links" to="/">
                        Главная
                      </NavLink>
                    </li>
                    <li onClick={() => setToggleMenu(false)}>
                      <NavLink className="navbar_links" to="/product">
                        Каталог
                      </NavLink>
                    </li>
                    <li onClick={() => setToggleMenu(false)}>
                      <NavLink className="navbar_links" to="/bag">
                        Корзина
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="nav_actions">
              <button className="login"></button>
              <Link to="/bag" className="shopping_card">
                <span>{product.length}</span>
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
