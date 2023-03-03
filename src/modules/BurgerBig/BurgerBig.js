import "./BurgerBig.css";
function BurgerBig() {
  return (
    <div className="burger-bigg">
      <div className="burger-big-top">
        <div className="burger-big-circle">
          <span>Daily</span>
          <span>Burger</span>
        </div>
      </div>
      <img src={require("../../assets/Burger1.png")} alt="burgerPict" />
      <h1>Burger</h1>
      <div className="properties">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        lorem a nisl aliquet, nec lacinia nisl aliquet. Sed euismod lorem a nisl
      </p>
      <div className="buy">
        <div className="quantity">
          <button className="subtract">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span>1</span>
          <button className="add">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="price">$ 125 </div>
        <button className="add-to-cart">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export default BurgerBig;
