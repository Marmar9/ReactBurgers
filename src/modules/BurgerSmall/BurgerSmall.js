import { useState } from "react";
import "./BurgerSmall.css";
function BurgerSmall(props) {
  const [count, setCount] = useState(0);
  function subtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="burger">
      <div className="top">
        <div className="circle">
          <span>472</span>
          <span>kcal</span>
        </div>
      </div>
      <img
        src={require("../../assets/" + props.src + ".png")}
        alt="burgerPict"
      />
      <div className="title">
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <div className="buy">
        <div className="quantity">
          <button className="subtract" onClick={() => subtract()}>
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span>{count}</span>
          <button className="add" onClick={() => setCount(count + 1)}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="price">$ {props.price} </div>
        <button className="add-to-cart">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export default BurgerSmall;
