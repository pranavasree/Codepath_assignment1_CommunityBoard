import DishesCard from "../templates/Dishescard";
import Pasta from "../assets/pasta.jpg";
import Burger from "../assets/burger.jpg";
import VegMeal from "../assets/veg-meal.jpg";
import biryani from "../assets/biryani.jpg";
import Fish from "../assets/fish.jpg";
import Chicken from "../assets/chicken.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <DishesCard img={Pasta} title="Pasta" price="12.6" />
        <DishesCard img={Burger} title="Burger" price="12.6" />
        <DishesCard img={VegMeal} title="VegMeal" price="10.6" />
        <DishesCard img={biryani} title="biryani" price="14.6" />
        <DishesCard img={Fish} title="Fish" price="16.6" />
        <DishesCard img={Chicken} title="Chicken" price="18.6" />
      </div>
    </div>
  );
};

export default Menu;
