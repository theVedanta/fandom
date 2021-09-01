import { useRef } from "react";
import OwlCarousel from "react-owl-carousel2";
import "../css/chars.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chars = () => {
  document.title = "Fandom - Characters";
  const options = {
    items: 3,
    nav: false,
  };

  const sortRef = useRef("sort");

  return (
    <>
      <header className="container">
        <img src="/assets/poster.png" alt="poster" />
        <div className="head-content">
          <h1>Crash Landing on You</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
            quia iste. Harum consequatur ab tempore corrupti quisquam maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
            veniam eveniet? Perferendis error explicabo corporis voluptas
            eveniet aspernatur consequatur quaerat laborum, quibusdam fugit nemo
            quas sapiente sequi itaque dignissimos!
          </p>
        </div>
      </header>

      <section className="container chars">
        <h1 className="char-heading">Characters</h1>

        <div className="char-controls">
          <button id="carPrev" onClick={() => sortRef.current.prev()}>
            <FaChevronLeft />
          </button>
          <button id="carNext" onClick={() => sortRef.current.next()}>
            <FaChevronRight />
          </button>
        </div>

        <OwlCarousel ref={sortRef} options={options}>
          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>

          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>

          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>
          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>

          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>

          <div className="disc-card">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h1>Crash landing on You.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link className="btn" to="/chat">
                Chat
              </Link>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  );
};

export default Chars;
