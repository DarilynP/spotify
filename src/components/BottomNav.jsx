import { Link } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        <i className="ri-home-5-fill"></i>
        <span>Home</span>
      </Link>

      <Link to="/search" className="nav-item">
        <i className="ri-search-line"></i>
        <span>Search</span>
      </Link>

      <Link to="/library" className="nav-item">
        <i className="ri-book-2-line"></i>
        <span>Your Library</span>
      </Link>
    </nav>
  );
}
