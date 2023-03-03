import BurgerSmall from "../BurgerSmall/BurgerSmall";
import BurgerBig from "../BurgerBig/BurgerBig";
import "./content.css";

function content() {
  return {
    renderC: (
      <div className="content">
        <div className="burger-big">
          <BurgerBig />
        </div>
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <div className="burger-small">
          <div className="burger-small-vertical">
            <BurgerSmall
              src="Burger1"
              description="Lorem deleniti, eius nobis, ab autem pariatur repudiandae exercitationem quam vitae et architecto aliquam est."
              name="Burger 1"
              price="12.99"
            />
            <BurgerSmall
              src="Burger1"
              description="Lorem deleniti, eius nobis, ab autem pariatur repudiandae exercitationem quam vitae et architecto aliquam est."
              name="Burger 2"
              price="14.15"
            />
          </div>
          <div className="burger-small-vertical">
            <BurgerSmall
              src="Burger1"
              description="Lorem deleniti, eius nobis, ab autem pariatur repudiandae exercitationem quam vitae et architecto aliquam est."
              name="Burger 3"
              price="15.99"
            />
            <BurgerSmall
              src="Burger1"
              description="Lorem deleniti, eius nobis, ab autem pariatur repudiandae exercitationem quam vitae et architecto aliquam est."
              name="Burger 4"
              price="16.99"
            />
          </div>
        </div>

        <span className="material-symbols-outlined arrow-right">
          arrow_forward_ios
        </span>
      </div>
    ),
  };
}

export default content;
