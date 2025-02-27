import Button from "../templates/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className="text-zinc-400 font-semibold text-4xl italic before:content-['“'] after:content-['”']">
          Every bite is a journey, every flavor a memory, and every meal a
          celebration of life.
        </h1>
        <p className="text-zinc-600">
          Welcome to Culinary Creations! A World of Flavors at Your Fingertips!
          Food is more than just a meal—it’s an experience, a celebration, and a
          way to bring people together. Whether you’re craving something spicy,
          sweet, or savory, we’ve got you covered with a wide selection of
          dishes from top-rated restaurants and home chefs. Explore
          mouthwatering cuisines, from sizzling street food to gourmet
          delicacies, all in one place. Looking for something healthy? Dive into
          our selection of fresh, wholesome meals crafted to nourish your body
          and soul. If you love cooking, discover easy-to-follow recipes that
          will transform your kitchen into a chef’s paradise. Stay updated with
          trending dishes, exclusive discounts, and personalized recommendations
          tailored just for you. Whether you're dining out, ordering in, or
          cooking up a storm, we make every bite special. Let’s eat, explore,
          and enjoy—one delicious moment at a time! 🍽️
        </p>
        <div className=" lg:pl-30">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
