import { useRef } from "react";
import OwlCarousel from "react-owl-carousel2";
import { Link } from "react-router-dom";
import "../css/discuss.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Discuss = () => {
  document.title = "Fandom - Discussions";

  const options = {
    items: 3,
    nav: false,
    responsive: {
      640: {
        items: 1,
      },
      1024: {
        items: 2,
      },
      1366: {
        items: 3,
      },
    },
  };

  const sortRef = useRef("sort");
  const secRef = useRef("Sec");

  return (
    <>
      <section className="container disc">
        <Link className="view-disc" to="/">
          Popular Episodes
        </Link>
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

        <div className="disc-controls">
          <button id="carPrev" onClick={() => sortRef.current.prev()}>
            <FaChevronLeft />
          </button>
          <button id="carNext" onClick={() => sortRef.current.next()}>
            <FaChevronRight />
          </button>
        </div>
      </section>
      <section className="container disc">
        <Link className="view-disc" to="/">
          New Episodes
        </Link>
        <OwlCarousel ref={secRef} options={options}>
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

        <div className="disc-controls">
          <button id="carPrev" onClick={() => secRef.current.prev()}>
            <FaChevronLeft />
          </button>
          <button id="carNext" onClick={() => secRef.current.next()}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Discuss;
