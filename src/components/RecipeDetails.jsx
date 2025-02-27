import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RecipeDetails = ({ closeModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dish } = location.state || {}; // Get dish details from state

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  // If no dish is found, show an error message
  if (!dish) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-semibold">
            Recipe Not Found
          </h2>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-700 text-xl font-bold hover:text-gray-900"
        >
          &times;
        </button>

        {/* Recipe Details */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Image */}
          <img
            src={dish.img}
            alt={dish.title}
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />

          {/* Details */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{dish.title}</h1>
            <p className="text-lg text-gray-700">
              Price: <strong>{dish.price}</strong>
            </p>
            <p className="text-gray-600">
              This dish is one of our best sellers! Enjoy a delicious and
              flavorful experience.
            </p>

            <div className="flex items-center">
              <span className="text-xl font-semibold mr-2">Rating:</span>
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
