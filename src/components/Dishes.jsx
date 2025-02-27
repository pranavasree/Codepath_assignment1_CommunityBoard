import DishesCard from "../templates/Dishescard";
import pizzaImage from "../assets/pizza.jpg";
import biryani from "../assets/biryani.jpg";
import sandWich from "../assets/sandwich.jpg";
import Burger from "../assets/burger.jpg";
import Chicken from "../assets/chicken.jpg";
import Fish from "../assets/fish.jpg";
import Pasta from "../assets/pasta.jpg";
import Salad from "../assets/salad.jpg";
import VegMeal from "../assets/veg-meal.jpg";
import MilkShake from "../assets/milk-shake.jpg";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Culinary Course
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <DishesCard img={pizzaImage} title="Pizza" price="$10.80" id="1" />
        <DishesCard img={biryani} title="Biryani" price="$20.80" id="2" />
        <DishesCard img={sandWich} title="Sandwich" price="$8.80" id="3" />
        <DishesCard img={Burger} title="Burger" price="$12.700" id="4" />
        <DishesCard img={Chicken} title="Chicken" price="$15.80" id="5" />
        <DishesCard img={Fish} title="Fish" price="$18.80" id="6" />
        <DishesCard img={Pasta} title="Pasta" price="$14.80" id="7" />
        <DishesCard img={Salad} title="Salad" price="$16.80" id="8" />
        <DishesCard img={VegMeal} title="VegMeal" price="$30.80" id="9" />
        <DishesCard img={MilkShake} title="MilkShake" price="$12.80" id="10" />
        <DishesCard img={sandWich} title="Sandwich" price="$8.80" id="11" />
      </div>
    </div>
  );
};

export default Dishes;
