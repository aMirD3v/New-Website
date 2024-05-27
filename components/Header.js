import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBoxOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const router = useRouter();

  const getColorByPathname = (pathname) => {
    switch (pathname) {
      case "/":
        return { color: "#fff", iconColor: "#fff" }; // Tomato color for Home
      case "/about":
        return { color: "#111518", iconColor: "#111518" }; // SteelBlue color for About us
      case "/products":
        return { color: "#111518", iconColor: "#111518" }; // LimeGreen color for Our Products
      case "/contact":
        return { color: "#111518", iconColor: "#111518" }; // Gold color for Contact us
      default:
        return { color: "#111518", iconColor: "#111518" }; // Default color
    }
  };

  const { color, iconColor } = getColorByPathname(router.pathname);

  return (
    <header>
      <title>KINGS BUSINESS GROUP</title>
      <meta name="description" content="Kings Business Group website" />
      <link rel="icon" href="/images/logo.png" />
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li className={router.pathname === "/" ? "active" : ""}>
            <a href="/">
              <FontAwesomeIcon
                icon={faHome}
                className="icon"
                style={{ color: iconColor }}
              />
              <span className="title">Home</span>
            </a>
          </li>
          <li className={router.pathname === "/about" ? "active" : ""}>
            <a href="/about">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="icon"
                style={{ color: iconColor }}
              />
              <span className="title">About us</span>
            </a>
          </li>
          <li className={router.pathname === "/products" ? "active" : ""}>
            <a href="/products">
              <FontAwesomeIcon
                icon={faBoxOpen}
                className="icon"
                style={{ color: iconColor }}
              />
              <span className="title">Our Products</span>
            </a>
          </li>
          <li className={router.pathname === "/contact" ? "active" : ""}>
            <a href="/contact">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                style={{ color: iconColor }}
              />
              <span className="title">Contact us</span>
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          color: ${color};
          font-family: "Arial", sans-serif;
        }
        .logo img {
          height: 50px;
        }
        nav ul {
          list-style: none;
          display: flex;
        }
        nav ul li {
          margin-left: 20px;
          position: relative;
        }
        nav ul li a {
          color: ${color};
          text-decoration: none;
          font-size: 16px;
          display: flex;
          align-items: center;
          transition: color 0.3s;
        }
        nav ul li a:hover {
          color: ${color};
        }
        .icon {
          margin-right: 5px;
          color: ${iconColor};
        }
        .title {
          display: none;
          margin-left: 5px;
        }
        nav ul li a:hover .title,
        nav ul li.active .title {
          display: inline;
        }
        nav ul li a:hover .icon {
          display: none;
        }
        nav ul li.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background-color: ${iconColor};
        }
      `}</style>
    </header>
  );
};

export default Header;
