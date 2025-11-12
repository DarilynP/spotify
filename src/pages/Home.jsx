import "./Home.css";
import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";

export default function Home() {
  const playlists = [
    { id: 1, title: "Mood Booster", artist: "Spotify", cover: "/covers/mood.jpg" },
    { id: 2, title: "Chill Hits", artist: "Spotify", cover: "/covers/chill.jpg" },
  ];

  return (
    <div className="home">
      <Header title="Good evening" />
      <div className="playlist-grid">
        {playlists.map((p) => (
          <PlaylistCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
