import "./Search.css";

export default function Search() {
  const categories = [
    { title: "Pop", color: "#e84393" },
    { title: "Hip-Hop", color: "#0984e3" },
    { title: "Chill", color: "#6c5ce7" },
    { title: "Workout", color: "#00b894" },
    { title: "Latin", color: "#fdcb6e" },
    { title: "Podcasts", color: "#d63031" },
    { title: "Throwbacks", color: "#e17055" },
    { title: "Jazz", color: "#2d3436" },
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
        />
      </div>

      {/* Categories */}
      <h2 className="browse-title">Browse All</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            style={{ backgroundColor: cat.color }}
          >
            <p>{cat.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
