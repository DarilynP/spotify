import "./Home.css";

import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";

import RecentlyPlayed from "../components/RecentlyPlayed";
import WrappedSection from "../components/WrappedSection";
import EditorsPicks from "../components/EditorsPicks";
import MiniPlayer from "../components/MiniPlayer";

export default function Home() {
  const playlists = [
    { id: 1, title: "Mood Booster", artist: "Spotify", cover: "/covers/mood.jpg" },
    { id: 2, title: "Chill Hits", artist: "Spotify", cover: "/covers/chill.jpg" },
  ];

  return (
    <div className="home">

      {/* Header */}
      <Header title="Good evening" />

      {/* Recently Played */}
      <RecentlyPlayed />

      {/* Spotify Wrapped Section */}
      <WrappedSection />

      {/* Editor’s Picks */}
      <EditorsPicks />

      {/* Your Playlist Grid */}
      <div className="playlist-grid">
        {playlists.map((p) => (
          <PlaylistCard key={p.id} {...p} />
        ))}
      </div>

      {/* Mini Player */}
      <MiniPlayer />
    </div>
  );
}
