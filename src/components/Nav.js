import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [navColor, setNavColor] = useState(
    location.pathname === "/" ? "white" : "black"
  );
  const [hamActive, setHam] = useState(false);

  return (
    <nav className="container">
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
        <h1>Fandom</h1>
      </div>
      <div className={hamActive ? "links links-active" : "links"}>
        <Link
          style={{ color: navColor }}
          onClick={() => setNavColor("white")}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ color: navColor }}
          onClick={() => setNavColor("black")}
          to="/discuss"
        >
          Discuss
        </Link>
        <Link
          style={{ color: navColor }}
          onClick={() => setNavColor("black")}
          to="/characters"
        >
          Characters
        </Link>
        <button style={{ color: navColor }} href="/">
          <FaSearch />
        </button>
      </div>

      <div
        className={hamActive ? "ham ham-active" : "ham"}
        onClick={() => setHam(!hamActive)}
      >
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Nav;
