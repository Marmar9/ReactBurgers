import "./nav.css";
function Nav() {
  return {
    renderN: (
      <nav className="top">
        <menu>
          <div className="list">
            <a href="./">
              <span>Home</span>
            </a>
          </div>
          <div className="list">
            <a href="./">
              <div className="dot"></div>
              <span>Products</span>
            </a>
          </div>
          <div className="list">
            <a href="./">
              <span>Recipes</span>
            </a>
          </div>
          <div className="list">
            <a href="./">
              <span>About</span>
            </a>
          </div>
        </menu>
        <div className="box">
          <div className="log-in-out">
            <button className="login">
              <span>Login</span>
            </button>
            <button className="logout">
              <span>Logout</span>
            </button>
          </div>
          <button className="cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
        <button className="account">
          <span className="material-symbols-outlined">account_box</span>
        </button>
      </nav>
    ),
  };
}
export default Nav;
