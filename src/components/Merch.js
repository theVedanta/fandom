import "../css/merch.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRef } from "react";
import OwlCarousel from "react-owl-carousel2";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Merch = () => {
  document.title = "Fandom - Merchandise";

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

  return (
    <>
      <section className="showcase container">
        <Carousel
          className="eventCarousel"
          interval="3000"
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <div className="imgHold">
              <img src="/assets/sample-banner.webp" alt="alt" />
              <div className="imgShadow"></div>
            </div>
            <div className="event-banner-text">
              <h1>50-60% Off</h1>
              <h2>Only on Select Spider-man merch</h2>
            </div>
          </div>
          <div>
            <div className="imgHold">
              <img src="/assets/sample-banner.webp" alt="alt" />
              <div className="imgShadow"></div>
            </div>
            <div className="event-banner-text">
              <h1>50-60% Off</h1>
              <h2>Only on Select Spider-man merch</h2>
            </div>
          </div>
          <div>
            <div className="imgHold">
              <img src="/assets/sample-banner.webp" alt="alt" />
              <div className="imgShadow"></div>
            </div>
            <div className="event-banner-text">
              <h1>50-60% Off</h1>
              <h2>Only on Select Spider-man merch</h2>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="container merch-hold">
        <h1>Hoodies</h1>
        <OwlCarousel ref={sortRef} options={options}>
          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>
        </OwlCarousel>

        <div className="disc-controls the">
          <button id="carPrev" onClick={() => sortRef.current.prev()}>
            <FaChevronLeft />
          </button>
          <button id="carNext" onClick={() => sortRef.current.next()}>
            <FaChevronRight />
          </button>
        </div>
      </section>
      <section className="container merch-hold">
        <h1>Hoodies</h1>
        <OwlCarousel ref={sortRef} options={options}>
          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="disc-card merch">
            <img src="/assets/poster.png" alt="heyy" />
            <div className="disc-card-content">
              <h2>Spider Man Hoodie</h2>
              <h3>$30 - $40</h3>
              <Link className="btn" to="/">
                Buy Now
              </Link>
            </div>
          </div>
        </OwlCarousel>

        <div className="disc-controls the">
          <button id="carPrev" onClick={() => sortRef.current.prev()}>
            <FaChevronLeft />
          </button>
          <button id="carNext" onClick={() => sortRef.current.next()}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Merch;
