import { useState } from "react";
import "./Search.css";
import SearchIndie from "../assets/SearchIndie.png";
import SearchPop from "../assets/SearchPop.png";
import SearchNews from "../assets/SearchNews.png";
import SearchComedy from "../assets/SearchComedy.png";

export default function Search() {
  const [query, setQuery] = useState("");

  // ⭐ SEARCHABLE ARTIST LIST
  const artists = [
    { name: "Lana Del Rey", image: SearchIndie },
    { name: "Drake", image: SearchPop },
    { name: "Billie Eilish", image: SearchIndie },
    { name: "Travis Scott", image: SearchPop },
    { name: "Joji", image: SearchIndie },
  ];

  // ⭐ FILTER SEARCH
  const results = artists.filter((artist) =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  // ⭐ BROWSE CATEGORIES
  const categories = [
    { title: "Popular", color: "#ff7675" },
    { title: "Browse All", color: "#74b9ff" },
    { title: "Pop", image: SearchPop },
    { title: "Hip-Hop", color: "#0984e3" },
    { title: "Chill", color: "#6c5ce7" },
    { title: "Workout", color: "#00b894" },
    { title: "Latin", color: "#fdcb6e" },
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

      {/* ⭐ SHOW CATEGORIES WHEN SEARCH IS EMPTY */}
      {query.trim() === "" && (
        <>
          <h2 className="browse-title">Browse All</h2>

          <div className="category-grid">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="category-card"
                style={{
                  background: cat.image
                    ? `url(${cat.image}) center/cover`
                    : cat.color,
                }}
              >
                <p>{cat.title}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ⭐ SHOW ARTIST RESULTS */}
      {query.trim() !== "" && (
        <div className="results-section">
          <h2 className="results-title">Results</h2>

          {results.length === 0 ? (
            <p className="no-results">No results found.</p>
          ) : (
            <div className="artist-results">
              {results.map((artist, index) => (
                <div key={index} className="artist-card">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="artist-img"
                  />
                  <p className="artist-name">{artist.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
