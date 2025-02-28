import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../templates/Button";
import { useNavigate } from "react-router-dom";

const DishesCard = (props) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/recipe/${props.id}`, { state: { dish: props } });
  };
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={props.img} alt="img"></img>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="font-semibold text-center text-xl pt-6">
            Item: {props.title}
          </h3>
          <h3 className="font-semibold text-center text-xl pt-6">
            Price: {props.price}
          </h3>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-row items-center">
            <h3 className="font-semibold text-center text-xl pr-2">Rating: </h3>
            <BsStarFill className="text-zinc-950" />
            <BsStarFill className="text-zinc-950" />
            <BsStarFill className="text-zinc-950" />
            <BsStarFill className="text-zinc-950" />
            <BsStarHalf className="text-zinc-950" />
          </div>

          <Button onClick={handleDetailsClick} title="Details" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
