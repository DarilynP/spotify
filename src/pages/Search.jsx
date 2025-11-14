import { useState } from "react";
import "./Search.css";
import SearchIndie from "../assets/SearchIndie.png";
import SearchPop from "../assets/SearchPop.png";
import SearchNews from "../assets/SearchNews.png";
import SearchComedy from "../assets/SearchComedy.png";

export default function Search() {
  // Track the user's search input
  const [query, setQuery] = useState("");

  // Fake searchable data
  const data = [
    "Lana Del Rey",
    "Drake",
    "Chill Hits",
    "Workout",
    "Hip-Hop",
    "Pop",
    "Jazz",
    "Indie",
  ];

  // Filter results based on what user types
  const results = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // ⭐ Default categories for Browse All
  const categories = [
    { title: "Pop", image: SearchPop },
    { title: "Hip-Hop", color: "#0984e3" },
    { title: "Chill", color: "#6c5ce7" },
    { title: "Workout", color: "#00b894" },
    { title: "Latin", color: "#fdcb6e" },
    { title: "Podcasts", color: "#d63031" },
    { title: "Throwbacks", color: "#e17055" },
    { title: "Jazz", color: "#2d3436" },
    { title: "Indie", image: SearchIndie },
    { title: "News", image: SearchNews },
    { title: "Comedy", image: SearchComedy },
  ];

  return (
    <div className="search-page">
      {/* Search Bar */}
      <div className="search-header">
        <h1>Search</h1>

        <input
          type="text"
          placeholder="Artists, songs, or podcasts"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* ⭐ DEFAULT VIEW: SHOW CATEGORIES WHEN QUERY IS EMPTY */}
      {query.trim() === "" && (
        <>
          <h2 className="browse-title">Browse All</h2>

          <div className="category-grid">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="category-card"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p>{cat.title}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* SEARCH RESULTS WHEN TYPING */}
      {query.trim() !== "" && (
        <div className="results-section">
          <h2 className="results-title">Results</h2>

          {results.length === 0 ? (
            <p className="no-results">No results found.</p>
          ) : (
            <ul className="results-list">
              {results.map((item, index) => (
                <li key={index} className="result-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
