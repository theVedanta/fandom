import { Link } from "react-router-dom";
import "../css/index.css";

const Index = () => {
  document.title = "Fandom";
  return (
    <>
      <section className="container hero">
        <img src="/assets/hex.svg" alt="hex" className="hex" />
        <div className="hero-left">
          <h1>TV Show</h1>
          <strong>Reviews</strong>
          <h2>The Best Platform</h2>
          <p>
            Dive deeper into the world of your favourite show, with Fandom. A
            place dedicated to true lovers.
          </p>
          <Link to="/discuss" className="btn">
            Learn more
          </Link>
        </div>
        <div className="hero-right">
          <img src="/assets/hero.svg" alt="hero-img" />
        </div>
      </section>
    </>
  );
};

export default Index;
