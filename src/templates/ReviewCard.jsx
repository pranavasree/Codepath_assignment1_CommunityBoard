const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Amazing experience! The pasta was creamy and flavorful, and the garlic
          bread was a perfect side. Will order again soon! The pasta was
          absolutely delicious! Perfectly cooked and flavorful. I will
          definitely order again.
        </p>
      </div>
      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img}></img>
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
