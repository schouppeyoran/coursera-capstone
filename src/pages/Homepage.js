// Homepage.js
import Specials from "../components/Specials";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Backstory from "../components/Backstory";

  const Homepage = () => {
    return (
      <main>
        <Hero/>
        <Specials/>
        <Reviews/>
        <Backstory/>
      </main>
    );
  };

export default Homepage;