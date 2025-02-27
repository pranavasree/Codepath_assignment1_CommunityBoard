import ReviewCard from "../templates/ReviewCard";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Client Stories
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={p1} name="Pinky" />
        <ReviewCard img={p2} name="Jonny" />
        <ReviewCard img={p3} name="Lucky" />
      </div>
    </div>
  );
};

export default Review;
