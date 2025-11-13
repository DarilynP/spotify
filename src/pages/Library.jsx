import "./Library.css";

export default function Library() {
  const items = [
    {
      id: 1,
      title: "Daily Mix 1",
      description: "Lana Del Rey, The Weeknd, Joji",
      image: "/img/dailymix1.jpg",
    },
    {
      id: 2,
      title: "Chill Vibes",
      description: "Relaxing playlist",
      image: "/img/chill.jpg",
    },
    {
      id: 3,
      title: "Hip-Hop Essentials",
      description: "Drake, Travis Scott, Future",
      image: "/img/hiphop.jpg",
    },
  ];

  return (
    <div className="library-page">
      <h1 className="library-title">Your Library</h1>

      <div className="library-tabs">
        <button className="active">Playlists</button>
        <button>Artists</button>
        <button>Albums</button>
      </div>

      <div className="library-list">
        {items.map((item) => (
          <div className="library-item" key={item.id}>
            <img src={item.image} alt={item.title} className="library-img" />

            <div className="library-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
