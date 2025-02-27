import Button from "../templates/Button";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 lg:px-32">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        About Us
      </h1>

      {/* Container with Image on Left & Text on Right */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
          <img
            className="w-full max-w-sm rounded-lg shadow-md"
            src={about}
            alt="about-image"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-7/12 space-y-4">
          <p className="text-lg text-gray-700 text-left">
            Welcome to <strong>Culinary Conversations</strong>, your ultimate
            destination for discovering and enjoying the best food experiences!
            Whether you’re a food lover searching for delicious meals or a home
            chef eager to share your recipes, we bring flavors from around the
            world right to your fingertips.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            🍽️ Our Mission
          </h2>
          <p className="text-gray-700 mt-2">
            At <strong>Culinary Conversations</strong>, we believe that food is
            more than just sustenance—it’s a way to connect, celebrate, and
            create unforgettable moments. Our mission is to make food ordering
            and discovery effortless, ensuring that every meal is not just
            satisfying but truly delightful.
          </p>

          <p className="text-gray-700 mt-2">
            Become a part of a vibrant food-loving community! Whether you want
            to order, cook, or explore new flavors,{" "}
            <strong>Culinary Conversations</strong> is here to make your journey
            exciting and delicious.
          </p>

          {/* Buttons - Left Aligned */}
          <div className="flex space-x-4 mt-6">
            <Button
              className="bg-lime-950 text-white px-6 py-2 rounded-lg"
              title="Download the App"
            />
            <Button
              className="bg-gray-800 text-white px-6 py-2 rounded-lg"
              title="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
