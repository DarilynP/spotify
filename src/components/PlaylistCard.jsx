import "./PlaylistCard.css";

export default function PlaylistCard({ cover, title, artist }) {
  return (
    <div className="playlist-card">
      <img src={cover} alt={title} />
      <div className="playlist-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
}
