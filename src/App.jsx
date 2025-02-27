import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="review">
          <Review />
        </div>
        {location.pathname.startsWith("/recipe/") && (
          <RecipeDetails closeModal={closeModal} />
        )}
        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
