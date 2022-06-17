import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <section className="navbar_section">
        <div className="container">
          <nav className="navbar">
            <div className="navbar_toggleMenu">
              {toggleMenu ? (
                <>
                  <img
                    className="toggle_img"
                    onClick={() => setToggleMenu(false)}
                    src="/images/menuClose.png"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    className="toggle_img"
                    onClick={() => setToggleMenu(true)}
                    src="/images/menuIcon.png"
                    alt=""
                  />
                </>
              )}

              {toggleMenu && (
                <div className="nav_links scale-up-top">
                  <Link to="/">
                    <img
                      className="logoImage"
                      src="../images/logo.png"
                      alt=""
                    />
                  </Link>
                  <ul className="listItems">
                    <li>
                      <NavLink className="navbar_links" to="/">
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar_links" to="/product">
                        Каталог
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar_links" to="/product">
                        Каталог
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar_links" to="/product">
                        Каталог
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navbar_links" to="/product">
                        Каталог
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="nav_actions">
              <button className="login"></button>
              <Link to="/bag" className="shopping_card">
                <span>{state.length}</span>
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
